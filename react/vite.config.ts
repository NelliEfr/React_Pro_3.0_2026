import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  if (mode === "development") {
    process.env.VITE_APP_BUILD_VERSION = Date.now().toString();
  }

  return {
    plugins: [
      react(),
      {
        name: "virtual-env.js",
        configureServer(server) {
          const envVars = Object.keys(process.env)
            .filter((key) => key.startsWith("VITE_APP_"))
            .reduce<Record<string, string>>((acc, el) => {
              if (process.env[el]) {
                acc[el] = process.env[el];
              }

              return acc;
            }, {});

          server.middlewares.use((req, res, next) => {
            if (req.url?.startsWith("/env.js")) {
              const content = `window.project = { env: ${JSON.stringify(envVars, undefined, 2)} }`;

              res.setHeader("Content-Type", "application/javascript");
              res.setHeader("Cache-Control", "no-cache");
              res.statusCode = 200;
              res.end(content);
              return;
            }

            next();
          });
        },
      },
    ],
  };
});
