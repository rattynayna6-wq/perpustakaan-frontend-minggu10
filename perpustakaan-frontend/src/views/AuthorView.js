import AppHeader from '../components/AppHeader.js';

// Halaman Data Author (tugas tambahan) - data dummy ditampilkan dengan v-for
export default {
    name: 'AuthorView',
    components: { AppHeader },

    data() {
        return {
            author: [
                { id: 1, nama: 'Andrea Hirata',   asal: 'Indonesia', jumlahBuku: 12 },
                { id: 2, nama: 'Tere Liye',        asal: 'Indonesia', jumlahBuku: 30 },
                { id: 3, nama: 'James Clear',      asal: 'Amerika Serikat', jumlahBuku: 1 },
                { id: 4, nama: 'Pramoedya Ananta Toer', asal: 'Indonesia', jumlahBuku: 8 }
            ]
        };
    },

    template: `
        <div class="dashboard-page">
            <AppHeader />
            <main class="content">
                <h1>Data Author</h1>
                <p class="welcome">Daftar penulis buku (data dummy).</p>

                <section class="panel">
                    <h2>Daftar Author</h2>
                    <div class="table-wrap">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama Author</th>
                                    <th>Asal</th>
                                    <th>Jumlah Buku</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(a, index) in author" :key="a.id">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ a.nama }}</td>
                                    <td>{{ a.asal }}</td>
                                    <td>{{ a.jumlahBuku }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="note">Data diambil dari Laravel API pada minggu ke-10.</p>
                </section>
            </main>
        </div>
    `
};
