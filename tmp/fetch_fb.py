import urllib.request, http.cookiejar, re

cj = http.cookiejar.CookieJar()
opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))
opener.addheaders = [
    ("User-Agent", "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1"),
    ("Accept-Language", "en-US,en;q=0.9")
]

resp1 = opener.open("https://m.facebook.com/100045171286106/posts/1517139283135100/")
html1 = resp1.read().decode("utf-8", errors="ignore")
m = re.search(r'window\.location\.replace\("([^"]+)"\)', html1)
if m:
    next_url = m.group(1).replace(r"\/", "/")
    print("Redirecting to:", next_url)
    resp2 = opener.open(next_url)
    html2 = resp2.read().decode("utf-8", errors="ignore")
    with open("/tmp/fb_post.html", "w", encoding="utf-8") as f:
        f.write(html2)
    print("Saved /tmp/fb_post.html, size:", len(html2))
