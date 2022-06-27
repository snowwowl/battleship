import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Pages from 'vite-plugin-pages';
import path from 'path';

const basePath = path.resolve('src');

export default defineConfig({
    plugins: [
        react(),
        Pages()
    ],
    server: {
        watch: {
            usePolling: true
        }
    },
    resolve: {
        alias: {
            '@': basePath,
            '@components': path.resolve(basePath, 'components'),
            '@styles': path.resolve(basePath, 'styles'),
            '@assets': path.resolve(basePath, 'assets'),
            '@pages': path.resolve(basePath, 'pages'),
            '@utils': path.resolve(basePath, 'utils')
        }
    }
});