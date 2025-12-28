import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: ".",
  publicDir: "public",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ecg: resolve(__dirname, "ecg.html"),
        holter: resolve(__dirname, "holter.html"),
        ett: resolve(__dirname, "ett.html"),
        pmc: resolve(__dirname, "pmc.html"),
        cpc: resolve(__dirname, "cpc.html"),
        hh: resolve(__dirname, "hh.html"),
        drs: resolve(__dirname, "drs.html")
      }
    }
  }
});
