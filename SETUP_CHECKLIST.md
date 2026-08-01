# Setup Checklist: Zonasenyap Documentation Website

Gunakan checklist ini untuk memastikan setup website Anda sempurna! ✅

## 📋 Pre-Launch Checklist

### ✅ Local Setup
- [ ] Hugo Extended v0.100+ terinstall (`hugo version`)
- [ ] Git terinstall (`git --version`)
- [ ] Project folder dibuat di `zonasenyap-docs`
- [ ] Bisa run `hugo server -D` tanpa error
- [ ] Website muncul di `http://localhost:1313`

### ✅ File Structure
Pastikan struktur folder ini ada:
```
zonasenyap-docs/
├── content/posts/          ← Artikel ada di sini
│   ├── _index.md
│   ├── artikel1.md
│   └── artikel2.md
├── themes/zonasenyap/      ← Custom theme
│   ├── layouts/
│   ├── static/
│   └── theme.toml
├── archetypes/
│   └── post.md
├── .github/workflows/
│   └── deploy.yml
├── hugo.toml               ← Config utama
├── README.md
└── .gitignore
```

### ✅ Content Check
- [ ] Minimal 1 artikel sudah dibuat
- [ ] Front matter artikel benar (`title`, `date`, `categories`)
- [ ] Artikel set `draft: false`
- [ ] Artikel muncul di homepage saat run local
- [ ] Link di navbar berfungsi
- [ ] Homepage beautiful dan profesional

### ✅ Configuration
- [ ] Edit `hugo.toml`:
  ```toml
  baseURL = "https://zonasenyap.github.io/zonasenyap-docs/"  # ← Ganti dengan URL Anda
  title = "Sains dan Sejarah"
  [params]
    author = "Nama Anda"  # ← Ganti dengan nama
  ```
- [ ] Update footer di `themes/zonasenyap/layouts/partials/footer.html` (optional)

### ✅ Git Setup
- [ ] Repository dibuat di GitHub
- [ ] `.gitignore` file ada dan benar
- [ ] Jalankan:
  ```bash
  git init
  git add .
  git commit -m "Initial commit"
  git remote add origin <URL-REPO>
  git branch -M main
  git push -u origin main
  ```
- [ ] Verify push berhasil di GitHub

### ✅ GitHub Pages & Actions
- [ ] Settings → Pages:
  - [ ] Source: `GitHub Actions` (bukan Branch)
- [ ] Tab Actions:
  - [ ] Workflow "Deploy to GitHub Pages" ada
  - [ ] Status ✅ (success/checkmark hijau)
  - [ ] Tidak ada error/failed status
- [ ] Tunggu 5-10 menit setelah push pertama
- [ ] Cek `Settings → Pages` atau `Deployments`:
  - [ ] URL website muncul: `https://USERNAME.github.io/zonasenyap-docs/`

### ✅ Website Live Test
- [ ] Buka website URL di browser
- [ ] Homepage load dengan sempurna
- [ ] Navbar berfungsi (Home, Artikel, YouTube)
- [ ] Artikel list terlihat
- [ ] Klik artikel individual
- [ ] Styling/CSS muncul (bukan putih polos)
- [ ] Mobile responsif (test dengan ukuran kecil browser)

## 🚀 Launch Day

Saat website sudah live:

- [ ] Share link ke social media
- [ ] Update YouTube channel description dengan link website
- [ ] Tambah link di YouTube community tab
- [ ] Buat 5-10 artikel pertama dalam 2 minggu

## 📝 Ongoing Maintenance

### Weekly
- [ ] Artikel baru setiap minggu (optional)
- [ ] Cek analytics (jika ada Google Analytics)

### Monthly
- [ ] Review artikel lama, update jika perlu
- [ ] Tambah kategori/tags baru jika diperlukan
- [ ] Optimasi SEO artikel populer

### Quarterly
- [ ] Backup articles (git clone)
- [ ] Update Hugo version (`brew upgrade hugo`)
- [ ] Review & improve theme styling

## 🔧 Troubleshooting Pre-Launch

### Website tidak muncul
```bash
# Cek error log
cd zonasenyap-docs

# Build manual
hugo

# Lihat folder public/ - harus ada file HTML
ls -la public/

# Atau pergi ke Actions tab & baca error
```

### Artikel tidak terlihat di homepage
```bash
# Pastikan front matter benar
cat content/posts/artikel.md | head -20

# Run server dengan flag draft
hugo server -D

# Artikel harus muncul di http://localhost:1313
```

### CSS/styling tidak load
```bash
# Delete cache
rm -rf resources/

# Rebuild
hugo

# Clear browser cache & refresh
# (Ctrl+Shift+Delete atau Cmd+Shift+Delete)
```

### GitHub Actions failing
```bash
# 1. Cek file
cat hugo.toml
cat .github/workflows/deploy.yml

# 2. Lihat error di GitHub Actions tab
# 3. Common issues:
#    - hugo.toml memiliki error syntax
#    - baseURL tidak sesuai
#    - theme folder structure salah
```

## ✨ Success Indicators

Anda berhasil jika:

✅ **Setup Local**
- `hugo server -D` jalan tanpa error
- Website visible di `localhost:1313`
- Artikel muncul di homepage

✅ **GitHub Integration**
- Push ke GitHub tanpa error
- Actions workflow succeed (✓ hijau)
- Tidak ada "failed" status

✅ **Website Live**
- Bisa akses via URL GitHub Pages
- Semua halaman load sempurna
- Styling/CSS muncul dengan benar
- Mobile view responsive

✅ **Ready for Content**
- Bisa buat artikel baru dengan `hugo new posts/...`
- Artikel baru otomatis muncul di website
- Update instant setelah push ke GitHub

## 🎯 Next Steps Setelah Launch

1. **Buat 10 artikel pertama** dalam 1 bulan
2. **Optimalkan SEO**: 
   - Judul menarik
   - Description meta
   - Tags/categories konsisten
3. **Mulai promosi**:
   - Share di YouTube
   - Share di social media
   - Add link ke semua video description
4. **Collect feedback**:
   - Community tab di YouTube
   - Lihat analytics
   - Adjust berdasarkan user interest
5. **Scale up**:
   - Tambah fitur (newsletter, search)
   - Improve design
   - Grow audience

---

## 📊 Tracking Progress

### Content Goals
- [ ] 10 artikel published (1 month)
- [ ] 25 artikel published (3 months)
- [ ] 50 artikel published (6 months)

### Engagement Goals
- [ ] 100 monthly visitors (1 month)
- [ ] 1K monthly visitors (3 months)
- [ ] 5K monthly visitors (6 months)

### Quality Goals
- [ ] Average reading time > 3 minutes
- [ ] Bounce rate < 40%
- [ ] Return visitor rate > 30%

---

## 🎉 Checklist Completion

Jika semua ✅ benar, Anda siap!

**Status**: ◯ Belum siap  ◯ Sudah siap  ◯ **LAUNCH!**

Tanggal launch: _______________

---

Good luck! 🚀 Setiap artikel adalah kontribusi untuk pendidikan di dunia! 📚✨
