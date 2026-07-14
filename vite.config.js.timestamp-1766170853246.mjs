// vite.config.js
import { resolve } from "path";
import { defineConfig } from "file:///Users/marcomoraleshidalgo/source/react-scheduler-spanish/node_modules/vite/dist/node/index.js";
import react from "file:///Users/marcomoraleshidalgo/source/react-scheduler-spanish/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///Users/marcomoraleshidalgo/source/react-scheduler-spanish/node_modules/vite-plugin-dts/dist/index.mjs";
import { visualizer } from "file:///Users/marcomoraleshidalgo/source/react-scheduler-spanish/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import svgr from "file:///Users/marcomoraleshidalgo/source/react-scheduler-spanish/node_modules/vite-plugin-svgr/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/marcomoraleshidalgo/source/react-scheduler-spanish";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": resolve(__vite_injected_original_dirname, "./src")
    }
  },
  plugins: [
    react({
      babel: {
        env: {
          production: {
            plugins: [["babel-plugin-styled-components", { displayName: false, pure: true }]]
          },
          development: {
            plugins: [["babel-plugin-styled-components", { displayName: true, pure: true }]]
          }
        }
      }
    }),
    dts({
      rollupTypes: true
    }),
    svgr(),
    visualizer({
      template: "treemap"
    })
  ],
  build: {
    lib: {
      // eslint-disable-next-line no-undef
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "react-scheduler",
      fileName: "index"
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime"
        }
      }
    }
    //sourcemap: true, //remove these lines to debug
    //minify: false
  },
  server: {
    host: "0.0.0.0"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbWFyY29tb3JhbGVzaGlkYWxnby9zb3VyY2UvcmVhY3Qtc2NoZWR1bGVyLXNwYW5pc2hcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9tYXJjb21vcmFsZXNoaWRhbGdvL3NvdXJjZS9yZWFjdC1zY2hlZHVsZXItc3BhbmlzaC92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbWFyY29tb3JhbGVzaGlkYWxnby9zb3VyY2UvcmVhY3Qtc2NoZWR1bGVyLXNwYW5pc2gvdml0ZS5jb25maWcuanNcIjsvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb24gKi9cbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuaW1wb3J0IHsgdmlzdWFsaXplciB9IGZyb20gXCJyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXJcIjtcbmltcG9ydCBzdmdyIGZyb20gXCJ2aXRlLXBsdWdpbi1zdmdyXCI7XG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgXCJAXCI6IHJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpXG4gICAgfVxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgcmVhY3Qoe1xuICAgICAgYmFiZWw6IHtcbiAgICAgICAgZW52OiB7XG4gICAgICAgICAgcHJvZHVjdGlvbjoge1xuICAgICAgICAgICAgcGx1Z2luczogW1tcImJhYmVsLXBsdWdpbi1zdHlsZWQtY29tcG9uZW50c1wiLCB7IGRpc3BsYXlOYW1lOiBmYWxzZSwgcHVyZTogdHJ1ZSB9XV1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGRldmVsb3BtZW50OiB7XG4gICAgICAgICAgICBwbHVnaW5zOiBbW1wiYmFiZWwtcGx1Z2luLXN0eWxlZC1jb21wb25lbnRzXCIsIHsgZGlzcGxheU5hbWU6IHRydWUsIHB1cmU6IHRydWUgfV1dXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSksXG4gICAgZHRzKHtcbiAgICAgIHJvbGx1cFR5cGVzOiB0cnVlXG4gICAgfSksXG4gICAgc3ZncigpLFxuICAgIHZpc3VhbGl6ZXIoe1xuICAgICAgdGVtcGxhdGU6IFwidHJlZW1hcFwiXG4gICAgfSlcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9pbmRleC50c1wiKSxcbiAgICAgIG5hbWU6IFwicmVhY3Qtc2NoZWR1bGVyXCIsXG4gICAgICBmaWxlTmFtZTogXCJpbmRleFwiXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIiwgXCJyZWFjdC9qc3gtcnVudGltZVwiXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgcmVhY3Q6IFwiUmVhY3RcIixcbiAgICAgICAgICBcInJlYWN0LWRvbVwiOiBcIlJlYWN0RE9NXCIsXG4gICAgICAgICAgXCJyZWFjdC9qc3gtcnVudGltZVwiOiBcInJlYWN0L2pzeC1ydW50aW1lXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgLy9zb3VyY2VtYXA6IHRydWUsIC8vcmVtb3ZlIHRoZXNlIGxpbmVzIHRvIGRlYnVnXG4gICAgLy9taW5pZnk6IGZhbHNlXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIGhvc3Q6IFwiMC4wLjAuMFwiXG4gIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsZUFBZTtBQUN4QixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsa0JBQWtCO0FBQzNCLE9BQU8sVUFBVTtBQU5qQixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUE7QUFBQSxNQUVMLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDakM7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsTUFDSixPQUFPO0FBQUEsUUFDTCxLQUFLO0FBQUEsVUFDSCxZQUFZO0FBQUEsWUFDVixTQUFTLENBQUMsQ0FBQyxrQ0FBa0MsRUFBRSxhQUFhLE9BQU8sTUFBTSxLQUFLLENBQUMsQ0FBQztBQUFBLFVBQ2xGO0FBQUEsVUFDQSxhQUFhO0FBQUEsWUFDWCxTQUFTLENBQUMsQ0FBQyxrQ0FBa0MsRUFBRSxhQUFhLE1BQU0sTUFBTSxLQUFLLENBQUMsQ0FBQztBQUFBLFVBQ2pGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxNQUNGLGFBQWE7QUFBQSxJQUNmLENBQUM7QUFBQSxJQUNELEtBQUs7QUFBQSxJQUNMLFdBQVc7QUFBQSxNQUNULFVBQVU7QUFBQSxJQUNaLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUE7QUFBQSxNQUVILE9BQU8sUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDeEMsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxTQUFTLGFBQWEsbUJBQW1CO0FBQUEsTUFDcEQsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFVBQ2IscUJBQXFCO0FBQUEsUUFDdkI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBO0FBQUE7QUFBQSxFQUdGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
