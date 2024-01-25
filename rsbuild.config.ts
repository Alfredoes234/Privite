import { defineConfig } from '@rsbuild/core';
import { pluginPreact } from '@rsbuild/plugin-preact';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';

export default defineConfig({
    plugins: [pluginPreact()],
    html: {
        title: 'Privite',
    },
    source: {
        entry: {
            index: "./src/index.tsx"
        }
    },
    server: {
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