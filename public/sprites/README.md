# Sprite karakter

## `guru-pdh.png`

Karakter guru matematika — pakaian **PDH** (khaki lengan pendek, dua saku dada,
epaulet, papan nama) dengan buku di tangan kanan.

| Berkas | Ukuran | Keterangan |
| --- | --- | --- |
| `guru-pdh.png` | 240 × 750 px | sprite utama, latar transparan |
| `guru-pdh@2x.png` | 480 × 1500 px | versi 2× (retina), piksel digandakan utuh |

Gaya: pixel art isometrik 3/4, outline gelap 1 px, bayangan datar 2–3 tingkat,
palet desaturasi. Wajah disesuaikan dengan foto referensi pemilik aplikasi.

### Cara pakai

```html
<img src="/sprites/guru-pdh.png" alt="Guru BitMaTH" class="sprite" />
```

```css
.sprite {
  width: auto;
  height: 208px;               /* kelipatan 8 agar grid piksel tetap utuh */
  image-rendering: pixelated;  /* wajib: jangan biarkan browser mem-blur */
  -webkit-user-select: none;
  user-select: none;
}
```

Tips:

- Perbesar dalam **kelipatan bulat** (2×, 3×, 4×) supaya piksel tetap tajam.
- Bayangan sudah menyatu di dalam sprite; jangan tambah `drop-shadow`.
- Kalau ditaruh di atas kertas `#ece3cf`, tepi sprite menyatu tanpa halo.
