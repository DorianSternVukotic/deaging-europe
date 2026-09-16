#!/usr/bin/env python3
"""
Regenerates the brand assets in public/ from the theme tokens and the site's
own typefaces (downloaded from Google Fonts on the fly):

  og-default.png      1200×630   default share image (SEO.astro fallback)
  logo.png            1024×1024  Organization / publisher logo (JSON-LD)
  icon.svg            the 2×2 evidence-tier mark, favicon
  icon-96.png         PNG favicon fallback
  apple-touch-icon.png 180×180

The icons are deliberately not called favicon.*: Wix's static host labels any
file by that name image/x-icon, which breaks the SVG. Run from the repo root:

  python3 scripts/brand-assets.py        # needs Pillow (pip install pillow)
"""
from __future__ import annotations

import io
import re
import urllib.request
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

PUB = Path(__file__).resolve().parent.parent / 'public'
BONE = (251, 250, 247)
INK = (18, 18, 18)
STEEL = (107, 111, 115)
ACCENT = (46, 94, 140)
TIERS = [(27, 127, 59), (106, 163, 42), (212, 168, 33), (205, 180, 79)]  # strong → limited
TIER_HEX = ['#1b7f3b', '#6aa32a', '#d4a821', '#cdb44f']


def google_font(family: str, weight: int) -> io.BytesIO | None:
    """Fetch a TTF from Google Fonts (a non-woff2 UA makes the CSS list .ttf URLs)."""
    css_url = f'https://fonts.googleapis.com/css2?family={family.replace(" ", "+")}:wght@{weight}'
    req = urllib.request.Request(css_url, headers={'User-Agent': 'Mozilla/4.0'})
    css = urllib.request.urlopen(req, timeout=30).read().decode()
    m = re.search(r'https://fonts\.gstatic\.com/[^)]+\.ttf', css)
    if not m:
        return None
    data = urllib.request.urlopen(m.group(0), timeout=30).read()
    return io.BytesIO(data)


_cache: dict[tuple[str, int], io.BytesIO | None] = {}


def font(family: str, weight: int, size: int) -> ImageFont.ImageFont:
    key = (family, weight)
    if key not in _cache:
        _cache[key] = google_font(family, weight)
    buf = _cache[key]
    if buf is None:
        return ImageFont.load_default(size)
    buf.seek(0)
    return ImageFont.truetype(buf, size)


def spaced(draw, xy, text, f, fill, track):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=f, fill=fill)
        x += draw.textlength(ch, font=f) + track
    return x


def spaced_width(draw, text, f, track):
    return sum(draw.textlength(c, font=f) for c in text) + track * (len(text) - 1)


def grid(draw, x, y, size):
    c = size / 2
    for i, col in enumerate(TIERS):
        gx, gy = x + (i % 2) * c, y + (i // 2) * c
        draw.rectangle([gx, gy, gx + c - 1, gy + c - 1], fill=col)


def og_default():
    im = Image.new('RGB', (1200, 630), BONE)
    d = ImageDraw.Draw(im)
    m = 88
    cx, cy = m, m
    for col in TIERS:  # the four-cell evidence scale
        d.rectangle([cx, cy, cx + 62, cy + 13], fill=col)
        cx += 66
    spaced(d, (m, cy + 34), 'ANTI-AGING, GRADED BY EVIDENCE', font('Archivo', 500, 18), ACCENT, 3.2)
    y = 214
    spaced(d, (m, y), 'DEAGING EUROPE', font('Archivo', 600, 108), INK, 4)
    d.rectangle([m, y + 150, 1200 - m, y + 151], fill=INK)
    ft = font('IBM Plex Sans', 400, 31)
    d.text((m, y + 178), 'Which treatments, supplements and habits actually work —', font=ft, fill=INK)
    d.text((m, y + 220), 'every claim graded strong, moderate, emerging or limited.', font=ft, fill=INK)
    spaced(d, (m, 630 - m - 18), 'DEAGE.EU', font('Archivo', 500, 18), STEEL, 3.2)
    im.save(PUB / 'og-default.png', optimize=True)


def logo():
    im = Image.new('RGB', (1024, 1024), BONE)
    d = ImageDraw.Draw(im)
    grid(d, (1024 - 300) // 2, 150, 300)
    fw = font('Archivo', 600, 124)
    for i, word in enumerate(['DEAGING', 'EUROPE']):
        w = spaced_width(d, word, fw, 6)
        spaced(d, ((1024 - w) / 2, 530 + i * 150), word, fw, INK, 6)
    im.save(PUB / 'logo.png', optimize=True)


def icons():
    for name, size in [('icon-96.png', 96), ('apple-touch-icon.png', 180)]:
        im = Image.new('RGB', (size, size), BONE)
        grid(ImageDraw.Draw(im), 0, 0, size)
        im.save(PUB / name, optimize=True)
    rects = ''.join(
        f'<rect x="{(i % 2) * 16}" y="{(i // 2) * 16}" width="16" height="16" fill="{c}"/>' for i, c in enumerate(TIER_HEX)
    )
    (PUB / 'icon.svg').write_text(
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>DeAging Europe</title>{rects}</svg>\n'
    )


if __name__ == '__main__':
    og_default()
    logo()
    icons()
    for n in ['og-default.png', 'logo.png', 'icon.svg', 'icon-96.png', 'apple-touch-icon.png']:
        print(f'{n:22} {(PUB / n).stat().st_size:>7} bytes')
