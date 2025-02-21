import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [ tailwindcss(),react()],server:{
    allowedHosts:[
    'a0fd-152-58-62-61.ngrok-free.app'
  ]}
})
