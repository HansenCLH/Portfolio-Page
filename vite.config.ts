import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; // Import Vue plugin
import tailwindcss from '@tailwindcss/vite'; // Import the plugin

export default defineConfig({
  plugins: [tailwindcss(), vue()], // Use the Vue plugin
  // ... other configurations
});
