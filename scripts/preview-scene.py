#!/usr/bin/env python3
"""
Pratinjau kasar panggung SVG tanpa browser.

Sandbox ini tidak punya renderer SVG (rsvg/cairo), jadi skrip ini membaca
komponen scene (rect/polygon/ellipse + fill warisan dari <g>) lalu
menggambarnya dengan ImageMagick. Berguna untuk memeriksa komposisi dan
posisi elemen — teks, sprite <image>, dan stroke tidak ikut digambar.

Pakai:
    python3 scripts/preview-scene.py src/components/SchoolGateScene.tsx out.png
"""

import re
import subprocess
import sys

WIDTH, HEIGHT = 320, 420
PANEL_LINE = 247  # perkiraan batas atas panel login (garis merah di hasil)


def expand_arrays(src: str) -> str:
    """Ubah {Array.from({length: n}, ...)} jadi rect konkret."""

    def repl(match: re.Match[str]) -> str:
        block = match.group(0)
        count = int(re.search(r"length:\s*(\d+)", block).group(1))
        start = re.search(r"x=\{(\d+)\s*\+\s*i\s*\*\s*(\d+)\}", block)
        y = re.search(r'y="(\d+)"', block).group(1)
        w = re.search(r'width="(\d+)"', block).group(1)
        h = re.search(r'height="(\d+)"', block).group(1)
        base, step = int(start.group(1)), int(start.group(2))
        return "\n".join(
            f'<rect x="{base + i * step}" y="{y}" width="{w}" height="{h}" />'
            for i in range(count)
        )

    return re.sub(r"\{\s*Array\.from\(.*?\)\s*\}", repl, src, flags=re.S)


def collect(src: str) -> list[tuple]:
    shapes: list[tuple] = []
    fill = None
    stack: list[tuple[str | None, int]] = []
    offset_y = 0

    for tag in re.finditer(r"<(/?)(g|rect|polygon|ellipse)\b([^>]*)>", src):
        closing, name, attrs = tag.group(1), tag.group(2), tag.group(3)

        if name == "g":
            if closing:
                fill, _ = stack.pop() if stack else (None, 0)
                offset_y = stack[-1][1] if stack else 0
            else:
                stack.append((fill, offset_y))
                found = re.search(r'fill="([^"]+)"', attrs)
                if found:
                    fill = found.group(1)
                shift = re.search(r"translate\((\d+),(-?\d+)\)", attrs)
                if shift:
                    offset_y += int(shift.group(2))
            continue

        if closing:
            continue

        found = re.search(r'fill="([^"]+)"', attrs)
        color = found.group(1) if found else fill
        if not color or color == "none":
            continue

        def num(key: str) -> int | None:
            hit = re.search(key + r'="(-?\d+)"', attrs)
            return int(hit.group(1)) if hit else None

        if name == "rect":
            x, y, w, h = num("x"), num("y"), num("width"), num("height")
            if None not in (x, y, w, h):
                shapes.append(("rect", x, y + offset_y, w, h, color))
        elif name == "polygon":
            points = re.search(r'points="([^"]+)"', attrs)
            if points:
                coords = [
                    (int(px), int(py) + offset_y)
                    for px, py in (pair.split(",") for pair in points.group(1).split())
                ]
                shapes.append(("poly", coords, color))
        elif name == "ellipse":
            cx, cy, rx, ry = num("cx"), num("cy"), num("rx"), num("ry")
            if None not in (cx, cy, rx, ry):
                shapes.append(("ellipse", cx, cy + offset_y, rx, ry, color))

    return shapes


def draw(shapes: list[tuple], out: str) -> None:
    cmd = ["convert", "-size", f"{WIDTH}x{HEIGHT}", "xc:#12100d"]
    for shape in shapes:
        if shape[0] == "rect":
            _, x, y, w, h, color = shape
            cmd += ["-fill", color, "-draw", f"rectangle {x},{y} {x + w},{y + h}"]
        elif shape[0] == "poly":
            _, coords, color = shape
            pts = " ".join(f"{x},{y}" for x, y in coords)
            cmd += ["-fill", color, "-draw", f"polygon {pts}"]
        else:
            _, cx, cy, rx, ry, color = shape
            cmd += ["-fill", color, "-draw", f"ellipse {cx},{cy} {rx},{ry} 0,360"]

    cmd.append(out)
    subprocess.run(cmd, check=True)

    # garis bantu batas panel + perbesaran 2x
    preview = out.replace(".png", "-preview.png")
    subprocess.run(
        [
            "convert", out,
            "-fill", "none", "-stroke", "#ff0000", "-strokewidth", "1",
            "-draw", f"line 0,{PANEL_LINE} {WIDTH},{PANEL_LINE}",
            "-filter", "point", "-resize", "200%", preview,
        ],
        check=True,
    )
    print(f"{out}\n{preview}  ({len(shapes)} bentuk, garis merah = perkiraan atas panel)")


if __name__ == "__main__":
    source = sys.argv[1] if len(sys.argv) > 1 else "src/components/SchoolGateScene.tsx"
    target = sys.argv[2] if len(sys.argv) > 2 else "/tmp/scene.png"
    with open(source, encoding="utf-8") as handle:
        draw(collect(expand_arrays(handle.read())), target)
