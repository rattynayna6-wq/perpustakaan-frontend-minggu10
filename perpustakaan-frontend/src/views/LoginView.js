// Halaman Login Admin (simulasi, belum terhubung ke Laravel)
export default {
    name: 'LoginView',

    data() {
        return {
            email: '',
            password: ''
        };
    },

    methods: {
        loginDemo() {
            // Simulasi: langsung pindah ke Dashboard
            this.$router.push('/dashboard');
        }
    },

    template: `
        <div class="login-container">
            <div class="login-card">
                <h1>Perpustakaan Digital</h1>
                <p class="subtitle">Silakan login sebagai Admin</p>

                <form @submit.prevent="loginDemo">
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" v-model="email"
                               placeholder="Masukkan email" required>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" v-model="password"
                               placeholder="Masukkan password" required>
                    </div>
                    <button type="submit">Login</button>
                </form>

                <p class="login-info">Demo Frontend Vue.js</p>
            </div>
        </div>
    `
};
