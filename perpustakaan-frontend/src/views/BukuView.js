import AppHeader from '../components/AppHeader.js';
import { getBuku } from '../services/bukuService.js';

// Halaman Data Buku: data diambil dari Laravel REST API
export default {
    name: 'BukuView',
    components: { AppHeader },

    data() {
        return {
            buku: [],
            loading: false,
            error: ''
        };
    },

    methods: {
        async fetchBuku() {
            this.loading = true;
            this.error = '';

            try {
                const response = await getBuku();

                // API bisa mengembalikan array langsung atau dibungkus { data: [...] }
                if (Array.isArray(response)) {
                    this.buku = response;
                } else if (Array.isArray(response.data)) {
                    this.buku = response.data;
                } else {
                    this.buku = [];
                }
            } catch (error) {
                console.error('Error mengambil buku:', error);
                this.error = 'Gagal mengambil data buku. Periksa koneksi API.';
            } finally {
                this.loading = false;
            }
        }
    },

    mounted() {
        this.fetchBuku();
    },

    template: `
        <div class="dashboard-page">
            <AppHeader />
            <main class="content">
                <h1>Data Buku</h1>
                <p class="welcome">Data buku diperoleh dari Laravel REST API.</p>

                <section class="panel">
                    <div class="table-header">
                        <h2>Daftar Buku</h2>
                        <button class="btn-refresh" @click="fetchBuku" :disabled="loading">
                            {{ loading ? 'Memuat...' : 'Refresh Data' }}
                        </button>
                    </div>

                    <!-- Loading -->
                    <div v-if="loading" class="loading">
                        Sedang mengambil data buku...
                    </div>

                    <!-- Error -->
                    <div v-else-if="error" class="error-message">
                        {{ error }}
                    </div>

                    <!-- Data kosong -->
                    <div v-else-if="buku.length === 0" class="empty-message">
                        Belum ada data buku.
                    </div>

                    <!-- Data tersedia -->
                    <div v-else class="table-responsive">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Judul Buku</th>
                                    <th>ISBN</th>
                                    <th>Stok</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in buku" :key="item.id ?? index">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ item.judul ?? item.title ?? '-' }}</td>
                                    <td>{{ item.isbn ?? '-' }}</td>
                                    <td>{{ item.stok ?? item.stock ?? '-' }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    `
};
