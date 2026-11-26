# Dokumentasi Singkat: Vue Router dan ES Modules

Proyek: Aplikasi Perpustakaan Digital (Vue.js 3 via CDN, tanpa Node.js dan npm)

## 1. ES Modules

ES Modules adalah sistem modular bawaan JavaScript. Dengan `export` dan `import`, kode
dapat dipisah ke banyak file tanpa Node.js dan npm. Browser memperlakukan sebuah file
sebagai module jika dimuat dengan `<script type="module">`.

Penerapan pada proyek:

- `index.html` memuat `src/main.js` dengan `type="module"`.
- Setiap komponen/halaman memakai `export default { ... }`.
- `main.js` dan view memakai `import ... from './path.js'` (ekstensi `.js` wajib ditulis).
- Library (Vue dan Vue Router) dimuat lewat CDN global, sehingga diambil dari `window.Vue`
  dan `window.VueRouter`. Script CDN harus dimuat sebelum `main.js`.

Struktur proyek:

```
perpustakaan-frontend/
├── index.html
├── assets/css/style.css
└── src/
    ├── main.js
    ├── components/AppHeader.js
    └── views/
        ├── LoginView.js
        ├── DashboardView.js
        ├── BukuView.js
        ├── AnggotaView.js
        └── AuthorView.js
```

Manfaat: kode terpisah per fungsi, mudah dicari dan diperbaiki, komponen dapat dipakai
ulang (contoh: `AppHeader` dipakai di 4 halaman).

## 2. Vue Router

Vue Router mengatur navigasi pada Single Page Application: URL menentukan komponen mana
yang tampil, tanpa memuat ulang dokumen HTML.

Elemen yang dipakai:

| Elemen | Fungsi |
|---|---|
| `createRouter()` | Membuat router |
| `createWebHashHistory()` | Mode URL berbasis hash (`#/dashboard`), tidak butuh konfigurasi rewrite server |
| `routes` | Array berisi `path` dan `component` |
| `redirect` | Mengalihkan `/` ke `/login` |
| `<router-view>` | Tempat komponen halaman ditampilkan |
| `<router-link>` | Link navigasi tanpa reload |
| `this.$router.push()` | Pindah halaman lewat kode (dipakai di login) |
| `app.use(router)` | Mengaktifkan router pada aplikasi |

Daftar route:

| URL | Komponen |
|---|---|
| `#/` | redirect ke `#/login` |
| `#/login` | LoginView |
| `#/dashboard` | DashboardView |
| `#/buku` | BukuView |
| `#/anggota` | AnggotaView |
| `#/author` | AuthorView |

Class `router-link-active` otomatis ditambahkan ke link yang sedang aktif, dan dipakai di
CSS untuk menandai menu.

## 3. Cara menjalankan

1. Buka folder di VS Code, klik kanan `index.html`, pilih **Open with Live Server**
   (atau salin folder ke `htdocs` XAMPP, atau jalankan `php -S localhost:8000`).
2. Jangan membuka lewat `file://` karena ES Modules akan diblokir browser (CORS).
3. Pastikan ada koneksi internet untuk memuat Vue dan Vue Router dari CDN.
