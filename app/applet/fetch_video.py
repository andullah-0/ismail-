import urllib.request
import re
import json

url = "https://www.facebook.com/share/p/19TcxmwsjY/"
req = urllib.request.Request(url, headers={
    "User-Agent": "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
})

try:
    with urllib.request.urlopen(req) as resp:
        content = resp.read().decode("utf-8", errors="ignore")
    
    print("Downloaded bytes:", len(content))
    with open("fb_page.html", "w") as f:
        f.write(content)

    # Search for all strings ending in .mp4 or containing fbcdn.net
    mp4_candidates = re.findall(r'https?:[\\/A-Za-z0-9_.~:?#\[\]@!$&\'()*+,;=%-]+\.mp4[\\/A-Za-z0-9_.~:?#\[\]@!$&\'()*+,;=%-]*', content)
    print("MP4 candidates found:", len(mp4_candidates))
    for c in mp4_candidates[:5]:
        print("Candidate:", c.replace("\\/", "/"))

    # Also search for og:video, og:description, title
    for m in re.finditer(r'<meta\s+property=["\']([^"\']+)["\']\s+content=["\']([^"\']*)["\']', content):
        print("Meta:", m.group(1), "->", m.group(2)[:100])

except Exception as e:
    print("Error:", e)
