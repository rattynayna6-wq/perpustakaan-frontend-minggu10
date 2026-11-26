import AppHeader from '../components/AppHeader.js';
import { getAnggota } from '../services/anggotaService.js';

// Halaman Data Anggota: data diambil dari Laravel REST API
export default {
    name: 'AnggotaView',
    components: { AppHeader },

    data() {
        return {
            anggota: [],
            loading: false,
            error: ''
        };
    },

    methods: {
        async fetchAnggota() {
            this.loading = true;
            this.error = '';

            try {
                const response = await getAnggota();

                if (Array.isArray(response)) {
                    this.anggota = response;
                } else if (Array.isArray(response.data)) {
                    this.anggota = response.data;
                } else {
                    this.anggota = [];
                }
            } catch (error) {
                console.error('Error mengambil anggota:', error);
                this.error = 'Gagal mengambil data anggota. Periksa koneksi API.';
            } finally {
                this.loading = false;
            }
        }
    },

    mounted() {
        this.fetchAnggota();
    },

    template: `
        <div class="dashboard-page">
            <AppHeader />
            <main class="content">
                <h1>Data Anggota</h1>
                <p class="welcome">Data anggota diperoleh dari Laravel REST API.</p>

                <section class="panel">
                    <div class="table-header">
                        <h2>Daftar Anggota</h2>
                        <button class="btn-refresh" @click="fetchAnggota" :disabled="loading">
                            {{ loading ? 'Memuat...' : 'Refresh Data' }}
                        </button>
                    </div>

                    <div v-if="loading" class="loading">
                        Sedang mengambil data anggota...
                    </div>

                    <div v-else-if="error" class="error-message">
                        {{ error }}
                    </div>

                    <div v-else-if="anggota.length === 0" class="empty-message">
                        Belum ada data anggota.
                    </div>

                    <div v-else class="table-responsive">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama</th>
                                    <th>NIM</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in anggota" :key="item.id ?? index">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ item.nama ?? item.name ?? '-' }}</td>
                                    <td>{{ item.nim ?? item.nomor_anggota ?? '-' }}</td>
                                    <td>{{ item.email ?? '-' }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    `
};
