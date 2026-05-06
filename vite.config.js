import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Split heavy 3D deps into their own lazy chunk
        manualChunks: {
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei', 'three-stdlib'],
          'gsap-vendor': ['gsap', '@gsap/react'],
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
    // Increase chunk size warning threshold (three.js is just big)
    chunkSizeWarningLimit: 1500,
  },
})
