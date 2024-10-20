/**
 * @name: vite.config.ts
 * @author: yuxi
 * @date: 2024-05-18 22:56
 * @description：vite.config.ts
 * @update: 2024-05-18 22:56
 */

import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from "path"

export default defineConfig({
    envDir: '../',
    resolve: {
        alias: {
            '@': path.join(__dirname, './src/'),
        }
    },
    plugins: [
        // ...
        AutoImport({
            resolvers: [ ElementPlusResolver() ]
        }),
        Components({
            resolvers: [ ElementPlusResolver() ]
        })
    ]
})
