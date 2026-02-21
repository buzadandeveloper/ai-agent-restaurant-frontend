import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@app": path.resolve(__dirname, "src/app"),
      "@components": path.resolve(__dirname, "src/components"),
      "@features": path.resolve(__dirname, "src/features"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@lib": path.resolve(__dirname, "src/lib"),
      "@services": path.resolve(__dirname, "src/services"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    },
  },
});
