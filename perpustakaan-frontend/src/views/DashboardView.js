import AppHeader from '../components/AppHeader.js';
import { getBuku } from '../services/bukuService.js';
import { getAnggota } from '../services/anggotaService.js';

// Dashboard: total buku dan anggota dari API, peminjaman/pengembalian masih dummy
export default {
    name: 'DashboardView',
    components: { AppHeader },

    data() {
        return {
            totalBuku: 0,
            totalAnggota: 0,
            totalPeminjaman: 24,
            totalPengembalian: 15,
            loading: false,
            error: ''
        };
    },

    methods: {
        async fetchDashboard() {
            this.loading = true;
            this.error = '';

            try {
                // Dua request dijalankan bersamaan
                const [responseBuku, responseAnggota] = await Promise.all([
                    getBuku(),
                    getAnggota()
                ]);

                const dataBuku = Array.isArray(responseBuku)
                    ? responseBuku
                    : (Array.isArray(responseBuku.data) ? responseBuku.data : []);

                const dataAnggota = Array.isArray(responseAnggota)
                    ? responseAnggota
                    : (Array.isArray(responseAnggota.data) ? responseAnggota.data : []);

                this.totalBuku = dataBuku.length;
                this.totalAnggota = dataAnggota.length;
            } catch (error) {
                console.error('Error Dashboard:', error);
                this.error = 'Dashboard gagal mengambil data API.';
            } finally {
                this.loading = false;
            }
        }
    },

    mounted() {
        this.fetchDashboard();
    },

    template: `
        <div class="dashboard-page">
            <AppHeader />
            <main class="content">
                <h1>Dashboard Admin</h1>
                <p class="welcome">Selamat datang di Aplikasi Perpustakaan Digital.</p>

                <div v-if="loading" class="loading">
                    Memuat statistik Dashboard...
                </div>

                <div v-if="error" class="error-message">
                    {{ error }}
                </div>

                <div class="stat-grid">
                    <div class="stat-card">
                        <h3>Total Buku</h3>
                        <h2>{{ totalBuku }}</h2>
                    </div>
                    <div class="stat-card">
                        <h3>Total Anggota</h3>
                        <h2>{{ totalAnggota }}</h2>
                    </div>
                    <div class="stat-card">
                        <h3>Peminjaman</h3>
                        <h2>{{ totalPeminjaman }}</h2>
                    </div>
                    <div class="stat-card">
                        <h3>Pengembalian</h3>
                        <h2>{{ totalPengembalian }}</h2>
                    </div>
                </div>

                <section class="panel">
                    <h2>Informasi Aplikasi</h2>
                    <p>Sistem Informasi Perpustakaan Digital berbasis Web.</p>
                    <p>Frontend menggunakan Vue.js 3 dan Backend menggunakan Laravel.</p>
                </section>
            </main>
        </div>
    `
};
