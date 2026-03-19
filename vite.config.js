import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        ecg: resolve(__dirname, "src/ecg.html"),
        holter: resolve(__dirname, "src/holter.html"),
        ett: resolve(__dirname, "src/ett.html"),
        pmc: resolve(__dirname, "src/pmc.html"),
        cpc: resolve(__dirname, "src/cpc.html"),
        hh: resolve(__dirname, "src/hh.html"),
        drs: resolve(__dirname, "src/drs.html")
      }
    }
  }
});
