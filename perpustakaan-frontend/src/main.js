// 1. Import halaman (ES Modules)
import LoginView from './views/LoginView.js';
import DashboardView from './views/DashboardView.js';
import BukuView from './views/BukuView.js';
import AnggotaView from './views/AnggotaView.js';
import AuthorView from './views/AuthorView.js';

// 2. Ambil fungsi dari library CDN global
const { createApp } = window.Vue;
const { createRouter, createWebHashHistory } = window.VueRouter;

// 3. Daftar route
const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: LoginView },
    { path: '/dashboard', component: DashboardView },
    { path: '/buku', component: BukuView },
    { path: '/anggota', component: AnggotaView },
    { path: '/author', component: AuthorView }
];

// 4. Buat router (mode hash: URL berbentuk #/dashboard)
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

// 5. Buat aplikasi, aktifkan router, lalu pasang ke #app
const app = createApp({
    name: 'PerpustakaanApp',
    template: `<router-view></router-view>`
});

app.use(router);
app.mount('#app');
