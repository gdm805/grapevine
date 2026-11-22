#!/usr/bin/env python3
"""Build one real web page per Learn article, so search engines can find each article.

Run from the site folder after adding or changing an article in learn/articles.js:

    python3 tools/build_learn.py

It writes learn/<article-address>.html for every article, puts a plain list of links
into learn.html (between the "articles:start" / "articles:end" markers, for search engines;
visitors still see the normal Learn page), and refreshes the article lines in sitemap.xml.

The article text is turned into HTML the same way js/learn.js does it, so the pages match.
An article dated in the future gets its page now but stays out of the sitemap and the list;
its page sends visitors back to the Learn page until that date. Run this again on or after
that date so the article joins the sitemap.
"""
import datetime
import html
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = 'https://www.tovakin.com/'
PHOTO_H = {'learn-pets': 1142, 'learn-keys': 1067, 'learn-doctor': 900, 'learn-will': 898, 'learn-will-or-trust': 900,
           'learn-intestate': 1066, 'learn-trust-home': 1096, 'learn-pour-over': 2333, 'learn-executor': 1068,
           'learn-guardian': 1008, 'learn-poa': 1060}
MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
          'November', 'December']


def read(p):
    with open(os.path.join(ROOT, p), encoding='utf-8') as f:
        return f.read()


def write(p, text):
    with open(os.path.join(ROOT, p), 'w', encoding='utf-8') as f:
        f.write(text)


def esc(s):
    return (str(s).replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
            .replace('"', '&quot;').replace("'", '&#39;'))


# ---------- read the articles file (same rules as parse() in js/learn.js) ----------
def parse(raw):
    m = re.search(r'String\.raw`(.*)`', raw, re.S)
    text = (m.group(1) if m else raw).replace('\r', '')
    text = re.sub(r'^[ \t]*//.*$\n?', '', text, flags=re.M)
    out = []
    for chunk in re.split(r'^=== +', text, flags=re.M)[1:]:
        nl = chunk.find('\n')
        slug = chunk[:nl].strip()
        rest = chunk[nl + 1:]
        cut = re.search(r'^---\s*$', rest, re.M)
        if not cut:
            continue
        a = {'slug': slug, 'title': slug, 'category': 'General', 'date': '', 'summary': '', 'image': '', 'alt': '',
             'body': re.sub(r'^---\s*\n', '', rest[cut.start():]).strip()}
        for line in rest[:cut.start()].split('\n'):
            mm = re.match(r'^(\w+):\s*(.*)$', line.strip())
            if mm and mm.group(1) in a and mm.group(1) not in ('slug', 'body'):
                a[mm.group(1)] = mm.group(2).strip()
        a['minutes'] = max(1, round(len(a['body'].split()) / 200))
        out.append(a)
    out.sort(key=lambda x: x['date'], reverse=True)
    return out


def fmt_date(d):
    p = re.match(r'^(\d{4})-(\d{2})-(\d{2})$', d)
    return '%s %d, %s' % (MONTHS[int(p.group(2)) - 1], int(p.group(3)), p.group(1)) if p else d


# ---------- article text -> html (same rules as inline()/body() in js/learn.js) ----------
def make_inline(published_slugs):
    def link(m):
        label, url = m.group(1), m.group(2)
        u = url.replace('&amp;', '&')
        to = re.match(r'^(?:learn\.html)?#([\w-]+)$', u)
        if to:   # a link to another Learn article: its own page now, or plain words if not published yet
            return '<a href="%s.html">%s</a>' % (esc(to.group(1)), label) if to.group(1) in published_slugs else label
        if not re.match(r'^(https?://|mailto:|[\w#\-/.?=&]+$)', u):
            return label
        if not re.match(r'^(https?://|mailto:|#|/)', u):
            u = '../' + u   # a page on this site, seen from inside the learn folder
        return '<a href="%s">%s</a>' % (esc(u), label)

    def inline(s):
        h = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', esc(s))
        return re.sub(r'\[([^\]]+)\]\(([^)\s]+)\)', link, h)
    return inline


def body(text, inline):
    out, para, ul, tbl = [], [], [], []

    def cells(l):
        return [c.strip() for c in re.sub(r'\|$', '', re.sub(r'^\|', '', l)).split('|')]

    def flush():
        if para:
            out.append('<p>' + inline(' '.join(para)) + '</p>'); para.clear()
        if ul:
            out.append('<ul>' + ''.join('<li>' + inline(x) + '</li>' for x in ul) + '</ul>'); ul.clear()
        if tbl:
            rows = [cells(l) for l in tbl if not re.match(r'^\|[\s:|-]+\|?$', l)]
            out.append('<div class="table-wrap"><table class="art-table"><thead><tr>' +
                       ''.join('<th scope="col">' + inline(c) + '</th>' for c in rows[0]) + '</tr></thead><tbody>' +
                       ''.join('<tr>' + ''.join(('<th scope="row">' + inline(c) + '</th>') if i == 0 else ('<td>' + inline(c) + '</td>')
                                                for i, c in enumerate(r)) + '</tr>' for r in rows[1:]) +
                       '</tbody></table></div>')
            tbl.clear()

    for raw in text.split('\n'):
        line = raw.strip()
        if not line:
            flush(); continue
        if line[0] == '|':
            if para or ul:
                keep = tbl[:]; tbl.clear(); flush(); tbl.extend(keep)
            tbl.append(line); continue
        if tbl:
            flush()
        m = re.match(r'^##\s+(.*)$', line)
        if m:
            flush(); out.append('<h2>' + inline(m.group(1)) + '</h2>')
        else:
            m = re.match(r'^-\s+(.*)$', line)
            if m:
                if para:
                    flush()
                ul.append(m.group(1))
            else:
                if ul:
                    flush()
                para.append(line)
    flush()
    return ''.join(out)


def photo(a, sizes, version, prefix):
    if not a['image']:
        return ''
    base = esc(prefix + 'images/photos/' + a['image'])
    q = '?v=' + version
    return ('<figure class="photo photo-article"><picture><source type="image/webp" srcset="%s-800.webp%s 800w, %s-1600.webp%s 1600w" sizes="%s">'
            '<img src="%s-1600.jpg%s" alt="%s" width="1600" height="%d" decoding="async"></picture></figure>'
            % (base, q, base, q, sizes, base, q, esc(a['alt']), PHOTO_H.get(a['image'], 1000)))


def row(a):
    return ('<li><a href="%s.html"><span class="post-main"><span class="post-cat">%s</span><strong>%s</strong><span>%s</span>'
            '<span class="post-meta">%s &middot; %d min read</span></span><svg class="doc-go" aria-hidden="true"><use href="#i-arrow"/></svg></a></li>'
            % (esc(a['slug']), esc(a['category']), esc(a['title']), esc(a['summary']), esc(fmt_date(a['date'])), a['minutes']))


def article_html(a, published, inline, version):
    related = [x for x in published if x['slug'] != a['slug'] and x['category'] == a['category']][:2]
    if len(related) < 2:
        related = (related + [x for x in published if x['slug'] != a['slug'] and x not in related])[:2]
    return ('<article class="article"><div class="container narrow">'
            '<a class="back" href="../learn.html"><svg class="ico flip" aria-hidden="true"><use href="#i-arrow"/></svg> All articles</a>'
            '<p class="post-cat">%s</p><h1>%s</h1><p class="post-meta">%s &middot; %d min read</p>%s'
            '<div class="prose">%s</div>'
            '<p class="note"><strong>General information, not legal advice.</strong> Laws differ by state and change over time. Tovakin is not a law firm. For advice about your situation, talk to a licensed attorney in your state.</p>'
            '<aside class="cta-card"><div><h2>Ready to put this into action?</h2><p>See what each document does, then answer a few plain questions to make yours.</p></div><a class="btn btn-primary" href="../index.html#finder">Compare the documents <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a></aside>'
            '%s</div></article>'
            % (esc(a['category']), esc(a['title']), esc(fmt_date(a['date'])), a['minutes'],
               photo(a, '(min-width: 760px) 720px, 94vw', version, '../'), body(a['body'], inline),
               ('<section class="related"><h3>Keep reading</h3><ul class="post-list">' + ''.join(row(x) for x in related) + '</ul></section>') if related else ''))


def prefix_paths(page):
    """Point the Learn page's own links (css/, js/, images/, other pages) one folder up."""
    def fix(m):
        attr, q, url = m.group(1), m.group(2), m.group(3)
        if re.match(r'^(https?:|mailto:|#|/|data:|\.\./)', url):
            return m.group(0)
        return '%s=%s../%s%s' % (attr, q, url, q)
    return re.sub(r'\b(href|src)=(["\'])([^"\']*)\2', fix, page)


def main():
    today = datetime.date.today().isoformat()
    learn = read('learn.html')
    version = re.search(r'\?v=(\w+)', learn).group(1)
    articles = parse(read('learn/articles.js'))
    published = [a for a in articles if not a['date'] or a['date'] <= today]
    pub_slugs = {a['slug'] for a in published}
    inline = make_inline(pub_slugs)

    # the page shell: learn.html with its paths moved up one folder, without the list app and its scripts
    shell = learn
    shell = re.sub(r'<script src="learn/articles\.js[^"]*"></script>\n', '', shell)
    shell = re.sub(r'<script src="js/learn\.js[^"]*"></script>\n', '', shell)
    shell = re.sub(r'<div id="learn-app">.*?</div>\s*(?=</main>)', '{{ARTICLE}}\n', shell, flags=re.S)
    shell = prefix_paths(shell)
    shell = shell.replace('<script src="../js/nav.js', '<script>window.GVUrl=function(p){return "../"+p;};</script>\n<script src="../js/nav.js')

    written = []
    for a in articles:
        url = SITE + 'learn/' + a['slug'] + '.html'
        title = a['title'] + ' | Tovakin'
        image = (SITE + 'images/photos/' + a['image'] + '-1600.jpg') if a['image'] else SITE + 'images/og-image.png'
        ld = {'@context': 'https://schema.org', '@type': 'Article', 'headline': a['title'], 'description': a['summary'],
              'datePublished': a['date'], 'mainEntityOfPage': url, 'image': image,
              'author': {'@type': 'Organization', 'name': 'Tovakin', 'url': SITE},
              'publisher': {'@type': 'Organization', 'name': 'Tovakin', 'url': SITE,
                            'logo': {'@type': 'ImageObject', 'url': SITE + 'images/apple-touch-icon.png'}}}
        page = shell
        page = re.sub(r'<link rel="canonical" href="[^"]*">', '<link rel="canonical" href="%s">' % url, page)
        page = re.sub(r'<title>.*?</title>', '<title>%s</title>' % esc(title), page)
        page = re.sub(r'<meta name="description" content="[^"]*">', '<meta name="description" content="%s">' % esc(a['summary']), page)
        page = re.sub(r'<meta property="og:type" content="[^"]*">', '<meta property="og:type" content="article">', page)
        page = re.sub(r'<meta property="og:title" content="[^"]*">', '<meta property="og:title" content="%s">' % esc(title), page)
        page = re.sub(r'<meta property="og:description" content="[^"]*">', '<meta property="og:description" content="%s">' % esc(a['summary']), page)
        page = re.sub(r'<meta property="og:image" content="[^"]*">', '<meta property="og:image" content="%s">' % esc(image), page)
        extra = '<meta property="og:url" content="%s">\n<script type="application/ld+json">%s</script>\n' % (url, json.dumps(ld, ensure_ascii=False).replace('</', '<\\/'))
        if a['date'] > today:   # scheduled: stay hidden until its date, like the Learn page does
            extra += ('<script>(function(){var d=new Date(),t=d.getFullYear()+"-"+("0"+(d.getMonth()+1)).slice(-2)+"-"+("0"+d.getDate()).slice(-2);'
                      'if(t<"%s"&&!/[?&]preview=1\\b/.test(location.search))location.replace("../learn.html");})();</script>\n' % a['date'])
        page = page.replace('</head>', extra + '</head>', 1)
        # a scheduled article may link to any article that is live by its own date (it is never seen before then)
        own = inline if a['date'] <= today else make_inline({x['slug'] for x in articles if not x['date'] or x['date'] <= a['date']})
        page = page.replace('{{ARTICLE}}', article_html(a, published, own, version))
        page = page.replace('<!doctype html>\n', '<!doctype html>\n<!-- Made by tools/build_learn.py from learn/articles.js. Edit the article there, then run the tool again. -->\n', 1)
        write('learn/%s.html' % a['slug'], page)
        written.append(a['slug'])

    # remove pages for articles that no longer exist
    for f in os.listdir(os.path.join(ROOT, 'learn')):
        if f.endswith('.html') and f[:-5] not in written and 'build_learn.py' in read('learn/' + f)[:300]:
            os.remove(os.path.join(ROOT, 'learn', f))

    # a plain list of the published articles inside learn.html, for search engines (the Learn app replaces it)
    plain = ('<div id="learn-app"><!-- articles:start (made by tools/build_learn.py) -->\n'
             '<section class="learn-body"><div class="container"><h1>Learn</h1><ul class="post-list">\n' +
             ''.join('<li><a href="learn/%s.html">%s</a> &ndash; %s</li>\n' % (esc(a['slug']), esc(a['title']), esc(a['summary'])) for a in published) +
             '</ul></div></section>\n<!-- articles:end --></div>')
    write('learn.html', re.sub(r'<div id="learn-app">.*?</div>(?=\s*</main>)', lambda m: plain, learn, count=1, flags=re.S))

    # sitemap: keep the other pages, replace the article lines
    sm = read('sitemap.xml')
    sm = re.sub(r'\s*<url><loc>https://www\.tovakin\.com/learn/[^<]*</loc>.*?</url>', '', sm, flags=re.S)
    lines = ''.join('\n  <url><loc>%slearn/%s.html</loc><lastmod>%s</lastmod><priority>0.7</priority></url>' % (SITE, a['slug'], a['date'] or today) for a in sorted(published, key=lambda x: x['slug']))
    sm = sm.replace('\n</urlset>', lines + '\n</urlset>')
    write('sitemap.xml', sm)

    print('%d article pages written (%d published, %d scheduled). learn.html list and sitemap.xml updated.'
          % (len(written), len(published), len(written) - len(published)))


if __name__ == '__main__':
    sys.exit(main())
