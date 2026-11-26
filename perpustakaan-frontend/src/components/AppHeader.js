// Komponen Header yang dipakai ulang di semua halaman
export default {
    name: 'AppHeader',
    template: `
        <header class="app-header">
            <div class="brand">
                <h2>Perpustakaan Digital</h2>
                <span>Admin Panel</span>
            </div>
            <nav class="navigation">
                <router-link to="/dashboard">Dashboard</router-link>
                <router-link to="/buku">Data Buku</router-link>
                <router-link to="/anggota">Data Anggota</router-link>
                <router-link to="/author">Data Author</router-link>
                <router-link to="/login">Login</router-link>
            </nav>
        </header>
    `
};
