# Sains dan Sejarah - Website Dokumentasi

Website dokumentasi profesional untuk konten edukatif tentang sains, teknologi, dan sejarah dunia. Dibangun dengan Hugo dan di-deploy ke GitHub Pages.

## 🚀 Quick Start

### 1. Setup Lokal

#### Prasyarat
- **Hugo Extended** v0.100+ ([Download](https://gohugoio.io/installation/))
- **Git**

#### Instalasi

**macOS (dengan Homebrew)**:
```bash
brew install hugo
```

**Windows**:
Download dari [releases Hugo](https://github.com/gohugoio/hugo/releases)

**Linux**:
```bash
sudo apt-get install hugo
```

#### Clone & Setup

```bash
# Clone repository (ganti USERNAME dengan username GitHub Anda)
git clone https://github.com/USERNAME/zonasenyap-docs.git
cd zonasenyap-docs

# Mulai development server
hugo server -D

# Buka http://localhost:1313 di browser
```

Server akan auto-reload saat Anda membuat perubahan.

## 📝 Membuat Artikel Baru

### Cara 1: Menggunakan Hugo Command

```bash
hugo new posts/nama-artikel.md
```

Ini akan membuat file baru dengan template default dari `archetypes/post.md`.

### Cara 2: Manual

Buat file baru di `content/posts/` dengan struktur ini:

```markdown
---
title: "Judul Artikel"
description: "Deskripsi singkat artikel (1-2 kalimat)"
date: 2026-08-01
categories: ["Sains", "Teknologi", "Sejarah"] # Pilih kategori yang sesuai
tags: ["tag1", "tag2", "tag3"]
draft: false  # Set ke false ketika siap publish
---

## Pengenalan

Mulai konten artikel di sini...

## Bagian Utama

Jelaskan topik dengan detail.

## Kesimpulan

Rangkum poin-poin utama.
```

### Struktur Artikel yang Baik

```markdown
---
title: "Judul yang Menarik dan Deskriptif"
description: "Ringkasan 1-2 kalimat untuk preview"
date: 2026-08-01
categories: ["Kategori Utama"]
tags: ["tag1", "tag2"]
draft: false
---

## Pengenalan
- Latar belakang topik
- Mengapa topik ini penting
- Preview apa yang akan dibahas

## Bagian Utama (Bisa Lebih dari 1)
### Sub-bagian
- Poin-poin kunci
- Contoh konkret
- Ilustrasi konsep

## Kesimpulan
- Ringkas poin utama
- Tunjukkan relevansi
- Saran untuk pembelajaran lanjutan
```

## 🎨 Struktur Website

```
zonasenyap-docs/
├── content/
│   └── posts/              # Artikel blog
│       ├── _index.md
│       ├── artikel1.md
│       └── artikel2.md
├── themes/
│   └── zonasenyap/         # Custom theme
│       ├── layouts/
│       │   ├── baseof.html
│       │   ├── index.html
│       │   ├── _default/
│       │   │   ├── list.html
│       │   │   └── single.html
│       │   └── partials/
│       │       ├── header.html
│       │       └── footer.html
│       └── static/
│           ├── css/style.css
│           └── js/script.js
├── hugo.toml              # Konfigurasi Hugo
├── .github/
│   └── workflows/deploy.yml  # GitHub Actions
└── README.md
```

## 🔧 Konfigurasi

Edit `hugo.toml` untuk mengubah:

```toml
baseURL = "https://username.github.io/"  # Ganti dengan URL GitHub Pages Anda
languageCode = "id"
title = "Sains dan Sejarah"

[params]
  description = "Dokumentasi edukatif..."
  author = "Nama Anda"
```

## 🚀 Deployment ke GitHub Pages

### Setup Repository

1. **Buat repository baru** di GitHub dengan nama `zonasenyap-docs`

2. **Setup local repository**:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/zonasenyap-docs.git
git branch -M main
git push -u origin main
```

3. **Setup GitHub Pages**:
   - Pergi ke **Settings** → **Pages**
   - Pilih **Source**: "GitHub Actions"
   - Simpan

4. **GitHub Actions akan otomatis**:
   - Build website saat push ke `main` branch
   - Deploy ke `gh-pages` branch
   - Website live di `https://USERNAME.github.io/zonasenyap-docs/`

### Workflow Deployment

```bash
# 1. Buat artikel baru
hugo new posts/artikel-baru.md

# 2. Edit artikel (ubah draft: false ketika siap)

# 3. Test lokal
hugo server -D

# 4. Push ke GitHub
git add .
git commit -m "Tambah artikel baru"
git push origin main

# 5. GitHub Actions otomatis deploy!
```

## 📋 Template Artikel Sains

```markdown
---
title: "Judul Eksperimental"
description: "Penjelasan singkat fenomena ilmiah"
date: 2026-08-01
categories: ["Sains"]
tags: ["fisika", "kimia", "biologi"]
draft: false
---

## Apa itu [Konsep]?

Definisi dan latar belakang.

## Cara Kerjanya

Mekanisme dengan formula/diagram jika perlu.

```
Formula atau diagram di sini
```

## Contoh Praktis

Aplikasi dunia nyata.

## Kesimpulan

Ringkas dan relevansi.
```

## 📋 Template Artikel Sejarah

```markdown
---
title: "Judul Peristiwa Bersejarah"
description: "Konteks dan dampak peristiwa"
date: 2026-08-01
categories: ["Sejarah"]
tags: ["era", "tokoh", "peristiwa"]
draft: false
---

## Latar Belakang

Situasi sebelum peristiwa.

## Kronologi

Timeline dan peristiwa kunci.

## Tokoh-Tokoh Penting

Figur berpengaruh.

## Dampak dan Warisan

Konsekuensi jangka panjang.

## Kesimpulan

Makna historis.
```

## 🎯 Best Practices

### Penulisan
- ✅ Gunakan heading yang jelas (`##`, `###`)
- ✅ Paragraf pendek (3-4 kalimat)
- ✅ List untuk poin-poin multiple
- ✅ Blockquote untuk kutipan penting

### Format
```markdown
# H1 - Jangan pakai di artikel
## H2 - Heading utama bagian
### H3 - Sub-heading
**Bold** untuk emphasis
*Italic* untuk istilah asing
```

### Tagging
```markdown
# Sains
- sains-umum, fisika, kimia, biologi, astronomi

# Teknologi  
- teknologi-umum, ai, internet, energi, programming

# Sejarah
- sejarah-umum, era-kuno, abad-pertengahan, modern
```

## 📊 Statistik Website

Current stats:
- ✍️ 2 artikel sample
- 🎨 Custom theme profesional
- 📱 Fully responsive design
- 🌙 Dark mode support
- ⚡ Fast loading (static site)

## 🛠️ Troubleshooting

### Hugo tidak ditemukan
```bash
# Pastikan Hugo sudah di PATH
hugo version

# Atau install dengan Homebrew
brew install hugo
```

### Website tidak muncul di GitHub Pages
- Cek **Settings → Pages** source ke "GitHub Actions"
- Tunggu workflow selesai (lihat Actions tab)
- Clear cache browser (Ctrl+Shift+Delete)

### Artikel tidak muncul
- Cek `draft: false` di front matter
- Pastikan folder `content/posts/` ada
- Hugo server berjalan dengan flag `-D` untuk draft

## 📚 Resources

- [Hugo Documentation](https://gohugoio.io/documentation/)
- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

## 📄 License

MIT License - Bebas untuk personal & educational use

## 🤝 Support

Untuk bantuan:
1. Cek FAQ di atas
2. Lihat [Hugo Docs](https://gohugoio.io/)
3. Buat issue di repository ini

---

**Selamat menulis! 🚀 Bagikan pengetahuan Anda tentang sains dan sejarah dengan dunia.**
