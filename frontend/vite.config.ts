import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgLoader(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      includeAssets: "./public",
      manifest: {
        theme_color: "#CC7E85",
        icons: [
          {
            sizes: "512x512",
            src: "favicon.svg",
          },
          {
            sizes: "512x512",
            src: "./src/assets/icon-512.png",
          },
          {
            src: "./src/assets/maskable_icon_x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
