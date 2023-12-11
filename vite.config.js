import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Other Vite configurations...
  plugins: [react()],
  optimizeDeps: {
    include: ["swiper"],
  },
});
