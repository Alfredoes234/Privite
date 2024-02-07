import { defineConfig } from '@rsbuild/core';
import { pluginPreact } from '@rsbuild/plugin-preact';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';

export default defineConfig({
    plugins: [pluginPreact()],
    html: {
        favicon: './public/vite.svg',
    },
    source: {
        entry: {
            index: "./src/index.tsx"
        }
    },
    server: {
        publicDir: {
            name: './public',
        },
    },
    tools: {
        rspack(config, { appendPlugins }) {
            // Only register the plugin when RSDOCTOR is true, as the plugin will increase the build time.
            if (process.env.RSDOCTOR) {
                appendPlugins(
                    new RsdoctorRspackPlugin({
                        // plugin options
                    }),
                );
            }
        },
    }
});