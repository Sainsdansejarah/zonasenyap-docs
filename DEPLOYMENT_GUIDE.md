# Panduan Lengkap: Deploy Website ke GitHub Pages

## 📋 Checklist Persiapan

- [ ] Install Hugo Extended
- [ ] Install Git
- [ ] Punya akun GitHub
- [ ] Punya artikel minimal 1 (tidak wajib, tapi direkomendasikan)

## 🔑 Step-by-Step Deployment

### Step 1: Persiapan GitHub

1. **Login ke GitHub** (https://github.com)

2. **Buat Repository Baru**:
   - Klik `+` icon → `New repository`
   - Nama: `zonasenyap-docs`
   - Description: "Dokumentasi Sains dan Sejarah"
   - Visibility: **Public** (agar bisa diakses orang)
   - ✅ Initialize with README (skip, kami punya sendiri)
   - Klik `Create repository`

3. **Copy URL** repository (hijau "Code" button) → HTTPS atau SSH

### Step 2: Setup Local Repository

```bash
# Pergi ke folder project
cd zonasenyap-docs

# Inisialisasi Git
git init

# Tambah semua file
git add .

# Commit pertama
git commit -m "Initial commit: Setup Hugo site"

# Tambah remote (ganti USERNAME)
git remote add origin https://github.com/USERNAME/zonasenyap-docs.git

# Pastikan branch utama bernama 'main'
git branch -M main

# Push ke GitHub
git push -u origin main
```

### Step 3: Setup GitHub Pages & Actions

1. **Pergi ke Settings Repository**:
   - Tab `Settings`
   - Scroll ke `Code and automation` → `Pages`

2. **Configure Pages**:
   - **Source**: Pilih `GitHub Actions`
   - **Branch**: Jangan perlu diset (GitHub Actions akan handle)
   - Klik `Save`

3. **Workflow sudah aktif!**
   - Pergi ke tab `Actions`
   - Lihat workflow `Deploy to GitHub Pages`
   - Harus ada checkmark hijau ✅

### Step 4: Aktifkan Website

1. **Tunggu ~5 menit** setelah push

2. **Cek deployment**:
   - Tab `Deployments` 
   - Atau cek di `Settings → Pages`
   - URL akan muncul seperti: `https://USERNAME.github.io/zonasenyap-docs/`

3. **Buka di browser** dan... Voilà! Website live! 🎉

## 🖼️ Screenshot Setup Pages

```
Settings → Pages
├── Source: GitHub Actions ← PILIH INI
├── Custom domain: (kosong, optional)
└── Enforce HTTPS: ✓ (centered)
```

## ✏️ Workflow Menulis & Publish

### Setiap kali ingin publish artikel:

```bash
# 1. Buat artikel baru
hugo new posts/topik-baru.md

# 2. Edit artikel dengan editor favorit
# (Ubah draft: false ketika siap publish)

# 3. Preview lokal (optional)
hugo server -D
# Buka http://localhost:1313

# 4. Stop server (Ctrl+C)

# 5. Commit & push
git add .
git commit -m "Publish: Topik artikel baru"
git push origin main

# 6. GitHub Actions otomatis build & deploy
# Cek di Actions tab untuk progress
```

**Total waktu**: ~2-5 menit dari push sampai live di internet

## 🔍 Troubleshooting

### Problem: Website tidak live setelah push

**Solusi**:
1. Cek tab `Actions` - lihat error log
2. Pastikan `hugo.toml` memiliki baseURL yang benar:
   ```toml
   baseURL = "https://USERNAME.github.io/zonasenyap-docs/"
   ```
3. Push lagi dengan:
   ```bash
   git add hugo.toml
   git commit -m "Fix baseURL"
   git push origin main
   ```

### Problem: Artikel tidak muncul di website

**Solusi**:
1. Pastikan `draft: false` di front matter
2. Pastikan kategori/tag tidak kosong
3. Jalankan lokal dulu: `hugo server -D`
4. Lihat di error messages

### Problem: Styling rusak/tidak muncul

**Solusi**:
1. Clear browser cache (Ctrl+Shift+Delete)
2. Buka di incognito/private tab
3. Cek CSS file di `themes/zonasenyap/static/css/style.css`

### Problem: GitHub deployment failed

**Solusi**:
1. Buka Actions → Failed workflow
2. Baca error log dengan teliti
3. Common issues:
   - Hugo version tidak kompatibel
   - Syntax error di markdown
   - Konfigurasi hugo.toml salah

## 🚀 Advanced: Custom Domain (Optional)

Jika punya domain sendiri (misal: `blog.munandar.id`):

1. Edit `hugo.toml`:
   ```toml
   baseURL = "https://blog.munandar.id/"
   ```

2. Settings → Pages → Custom domain:
   - Input: `blog.munandar.id`
   - Klik `Save`

3. Atur DNS domain ke GitHub (lihat instruksi di Pages)

4. ✅ Enforce HTTPS (otomatis)

## 📊 Monitoring Deployment

### Real-time status:
- **Actions tab**: Workflow running/completed
- **Deployments tab**: History semua deployment
- **Environments**: Production status

### Check health:
```bash
# Test akses website
curl -I https://USERNAME.github.io/zonasenyap-docs/

# Atau cek di browser
# Inspect → Network tab → lihat response time
```

## 💡 Tips & Tricks

### Workflow Cepat
```bash
# Alias untuk command yang sering
alias hs='hugo server -D'
alias hb='hugo'

# Maka cukup ketik
hs  # start server
hb  # build
```

### Script Auto-Publish
File `publish.sh`:
```bash
#!/bin/bash
hugo new posts/$1.md
git add .
git commit -m "Draft: $1"
git push origin main
echo "✅ Pushing to GitHub..."
```

### GitHub Commit Stats
```bash
git log --oneline | head -5  # 5 commit terakhir
git log --stat              # detail per file
```

## 🎓 Apa Selanjutnya?

1. **Mulai menulis**: Buat 5-10 artikel pertama
2. **Optimalkan**: Perbaiki kategori, tags, description
3. **Share**: Bagikan link website ke social media
4. **Maintain**: Update artikel secara berkala (minimal 2 minggu sekali)
5. **Grow**: Tambah fitur seperti search, newsletter, etc.

## 📞 Need Help?

Jika stuck:
1. **Cek error log** di GitHub Actions
2. **Baca README.md** lagi dengan teliti
3. **Cek Hugo docs**: https://gohugoio.io/
4. **Cek GitHub Pages docs**: https://docs.github.com/en/pages

---

**🎉 Selamat! Website Anda siap diakses oleh jutaan orang di internet!**

Setiap artikel yang Anda publish akan otomatis ter-deploy dalam hitungan menit. Gunakan kekuatan ini untuk berbagi pengetahuan tentang sains dan sejarah! 📚✨
