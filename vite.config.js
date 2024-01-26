import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dotenv from 'dotenv';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define : {
    'process.env.VITE_PUBLIC_FOLDER' : JSON.stringify(process.env.VITE_PUBLIC_FOLDER)
  },
  resolve : {
    alias : {
      '@components' : path.resolve(__dirname,'src/components'),
      '@pages' : path.resolve(__dirname,'src/pages'),
      '@images' : path.resolve(__dirname,'src/images'),
      '@data' : path.resolve(__dirname,'src/data'),
      '@actions' : path.resolve(__dirname,'src/actions'),
      '@api' : path.resolve(__dirname,'src/api'),
      '@reducers' : path.resolve(__dirname,'src/reducers'),
      '@store' : path.resolve(__dirname,'src/store')
    }
  }
})
