#!/usr/bin/env bash
# Bangun sprite sheet dari sprite dasar (guru-pdh.png).
# Hasil: frame per arah, lalu digabung jadi sheet 3 arah x 2 frame idle.
#
# Catatan: arah BELAKANG belum bisa diturunkan dari sprite depan, jadi
# sementara sheet hanya berisi depan/kiri/kanan. Tambahkan bila sprite
# belakang sudah tersedia (lihat README sprite).
set -euo pipefail

cd "$(dirname "$0")/.."
SRC="public/sprites/guru-pdh.png"
OUT="public/sprites/frames"
CELL_W=240
CELL_H=780
BOB=6   # piksel turun untuk frame idle B

mkdir -p "$OUT"

# kanvas sel kosong + sprite menempel di bawah
make_frame() {
  local input="$1" out="$2" offset="$3" flop="$4"
  local tmp
  tmp=$(mktemp /tmp/frame.XXXXXX.png)
  if [ "$flop" = "1" ]; then
    convert "$input" -flop "$tmp"
  else
    cp "$input" "$tmp"
  fi
  convert -size ${CELL_W}x${CELL_H} xc:none \
    "$tmp" -geometry +0+${offset} -composite \
    "$out"
  rm -f "$tmp"
}

for spec in "down:0" "left:1" "right:0"; do
  dir="${spec%%:*}"
  flop="${spec##*:}"
  make_frame "$SRC" "$OUT/$dir-0.png" 0 "$flop"
  make_frame "$SRC" "$OUT/$dir-1.png" "$BOB" "$flop"
done

# sheet: 2 kolom (frame) x 3 baris (arah)
montage "$OUT/down-0.png"  "$OUT/down-1.png" \
        "$OUT/left-0.png"  "$OUT/left-1.png" \
        "$OUT/right-0.png" "$OUT/right-1.png" \
        -tile 2x3 -geometry +0+0 -background none \
        public/sprites/guru-sheet.png

echo "selesai:"
identify public/sprites/guru-sheet.png
ls -1 "$OUT"
