// API Configuration: koneksi HTTP ke backend Laravel

// 1. Alamat dasar API (ganti jika Laravel berjalan di alamat lain)
const API_BASE_URL = 'http://127.0.0.1:8000/api';

// 2. Axios instance (Axios dimuat lewat CDN, jadi dipakai dari window)
const api = window.axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

// 3. Ekspor agar bisa dipakai file lain
export default api;
