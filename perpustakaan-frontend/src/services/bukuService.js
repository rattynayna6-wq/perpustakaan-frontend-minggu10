// Buku Service: fungsi komunikasi API untuk data buku
import api from './api.js';

// GET semua buku
export async function getBuku() {
    const response = await api.get('/books');
    return response.data;
}

// GET detail buku
export async function getBukuById(id) {
    const response = await api.get(`/books/${id}`);
    return response.data;
}

// POST buku baru (dipakai di CRUD minggu ke-12)
export async function createBuku(data) {
    const response = await api.post('/books', data);
    return response.data;
}

// PUT ubah buku (dipakai di CRUD minggu ke-12)
export async function updateBuku(id, data) {
    const response = await api.put(`/books/${id}`, data);
    return response.data;
}

// DELETE hapus buku (dipakai di CRUD minggu ke-12)
export async function deleteBuku(id) {
    const response = await api.delete(`/books/${id}`);
    return response.data;
}