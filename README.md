# Haris Bagja Wiranatakusuma

Website personal untuk karakter *Original Character Roleplay* (OCRP): **Haris Bagja Wiranatakusuma**, seorang auditor dari Jakarta Selatan.

Konsep: *"Hidup yang tersusun rapi, dengan beberapa bagian yang belum selesai."*
Halaman ini dibuat sebagai *static website* (HTML, CSS, dan JavaScript murni), tanpa framework, sehingga ringan, mudah dibaca, dan siap di-*deploy* ke GitHub Pages.

---

## Struktur Project

```text
haris-bagja/
│
├── index.html          # Seluruh isi halaman
├── README.md
├── LICENSE
├── .nojekyll           # Menonaktifkan pemrosesan Jekyll di GitHub Pages
│
├── assets/
│   └── images/
│       ├── faceclaim.jpg   # Foto faceclaim (visual utama)
│       ├── jakarta.jpg
│       ├── office.jpg
│       ├── coffee.jpg
│       ├── workspace.jpg
│       └── night.jpg
│
├── css/
│   └── style.css       # Seluruh gaya tampilan
│
└── js/
    └── main.js         # Navigasi, menu seluler, animasi reveal
```

---

## Cara Menjalankan

Karena ini adalah *static website*, kamu bisa langsung membuka `index.html` di peramban.

Untuk pengalaman terbaik (agar semua path bekerja seperti di produksi), jalankan lewat *local server*:

```bash
# Menggunakan Python 3
python3 -m http.server 3000

# Atau menggunakan npm (script sudah disediakan)
npm run dev
```

Lalu buka `http://localhost:3000`.

---

## Mengganti Konten

### 1. Foto faceclaim
Ganti berkas berikut dengan foto faceclaim yang ingin digunakan:

```text
assets/images/faceclaim.jpg
```

Pertahankan nama berkas agar tidak perlu mengubah kode. Foto sebaiknya berorientasi potret (rasio sekitar 4:5) agar tampil optimal.

### 2. Gambar galeri
Ganti berkas-berkas di dalam `assets/images/`:

```text
assets/images/jakarta.jpg
assets/images/office.jpg
assets/images/coffee.jpg
assets/images/workspace.jpg
assets/images/night.jpg
```

Seluruh gambar dapat diganti sesuai keinginan. Pertahankan nama berkas agar tidak perlu menyunting HTML.

### 3. Teks karakter
Seluruh teks berada di dalam `index.html`. Setiap bagian sudah diberi penanda komentar (misalnya `<!-- ============ TENTANG ============ -->`) agar mudah ditemukan dan disunting.

### 4. Akun OCRP (X / Twitter)
Cari bagian **KONTAK** di dalam `index.html`, lalu ubah tautan dan teks berikut:

```html
<a class="contact__handle" href="https://x.com/HeavenlyBoon" target="_blank" rel="noopener noreferrer">
  <span class="contact__platform">X / Twitter</span>
  <span class="contact__at">@HeavenlyBoon</span>
</a>
```

---

## Deploy ke GitHub Pages

1. Buat repository baru di GitHub, lalu unggah seluruh isi project ini (pastikan `index.html` berada di root repository).
2. Buka **Settings → Pages** pada repository tersebut.
3. Pada bagian **Build and deployment**, pilih **Source: Deploy from a branch**.
4. Pilih branch `main` dan folder `/ (root)`, lalu simpan.
5. Tunggu beberapa saat, situs akan tersedia di:

   ```text
   https://<username>.github.io/<nama-repo>/
   ```

Berkas `.nojekyll` sudah disertakan agar GitHub Pages tidak memproses situs dengan Jekyll, sehingga semua berkas (termasuk aset) disajikan apa adanya.

---

## Catatan

- Karakter ini sepenuhnya **fiksi** dan merupakan bagian dari *Original Character Roleplay*.
- Situs mendukung `prefers-reduced-motion` untuk pengguna yang memilih mengurangi animasi.
- Tidak ada dependensi eksternal selain Google Fonts (Fraunces & Instrument Sans).
