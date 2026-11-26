# Dokumentasi API (Minggu 10)

Base URL: `http://127.0.0.1:8000/api`

> Endpoint di bawah disesuaikan dengan route aktif pada backend Laravel (`php artisan route:list --path=api`).

| Resource | Method | Endpoint | Fungsi | Dipakai di frontend |
|---|---|---|---|---|
| Auth | POST | `/api/login` | Login pengguna dan mendapatkan token autentikasi | LoginView / pengujian API |
| Buku | GET | `/api/books` | Mengambil daftar buku | BukuView, DashboardView |
| Buku | GET | `/api/books/{id}` | Mengambil detail buku | (disiapkan di bukuService) |
| Buku | POST | `/api/books` | Menambah buku | Minggu 12 |
| Buku | PUT | `/api/books/{id}` | Mengubah buku | Minggu 12 |
| Buku | DELETE | `/api/books/{id}` | Menghapus buku | Minggu 12 |
| Anggota | GET | `/api/members` | Mengambil daftar anggota | AnggotaView, DashboardView |
| Anggota | GET | `/api/members/{id}` | Mengambil detail anggota | (disiapkan di anggotaService) |
| Anggota | POST | `/api/members` | Menambah anggota | Minggu 12 |
| Anggota | PUT | `/api/members/{id}` | Mengubah anggota | Minggu 12 |
| Anggota | DELETE | `/api/members/{id}` | Menghapus anggota | Minggu 12 |

## Struktur frontend (services)