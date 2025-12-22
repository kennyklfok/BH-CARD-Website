import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),               // root index
        ecg: resolve(__dirname, "front-end/ecg.html"),
        holter: resolve(__dirname, "front-end/holter.html"),
        ett: resolve(__dirname, "front-end/ett.html"),
        pmc: resolve(__dirname, "front-end/pmc.html"),
        cpc: resolve(__dirname, "front-end/cpc.html"),
        hh: resolve(__dirname, "front-end/hh.html"),
        drs: resolve(__dirname, "front-end/drs.html")
      }
    }
  }
});
