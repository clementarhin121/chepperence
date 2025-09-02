import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/chepperence/",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        order: "order.html",
      },
    },
  },
});
