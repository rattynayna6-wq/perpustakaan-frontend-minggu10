// Anggota Service: fungsi komunikasi API untuk data anggota
import api from './api.js';

// GET semua anggota
export async function getAnggota() {
    const response = await api.get('/members');
    return response.data;
}

// GET detail anggota
export async function getAnggotaById(id) {
    const response = await api.get(`/members/${id}`);
    return response.data;
}

// POST anggota baru
export async function createAnggota(data) {
    const response = await api.post('/members', data);
    return response.data;
}

// PUT ubah anggota
export async function updateAnggota(id, data) {
    const response = await api.put(`/members/${id}`, data);
    return response.data;
}

// DELETE hapus anggota
export async function deleteAnggota(id) {
    const response = await api.delete(`/members/${id}`);
    return response.data;
}