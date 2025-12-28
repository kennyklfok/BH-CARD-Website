import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),               // root index
        ecg: resolve(__dirname, "public/ecg.html"),
        holter: resolve(__dirname, "public/holter.html"),
        ett: resolve(__dirname, "public/ett.html"),
        pmc: resolve(__dirname, "public/pmc.html"),
        cpc: resolve(__dirname, "public/cpc.html"),
        hh: resolve(__dirname, "public/hh.html"),
        drs: resolve(__dirname, "public/drs.html")
      }
    }
  }
});
