// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import { EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { createMediumZoomProvider } from './composables/useMediumZoom'
import Layout from './layout/index.vue'
import '@/lib/mindmap/style.css'
import './style/style.css'
import './style/typography.css'
import './style/common.css'

// 只需添加以下一行代码，引入时间线样式
import "vitepress-markdown-timeline/dist/theme/index.css"

export default {
    extends: DefaultTheme,
    Layout/*: () => {
     return h(DefaultTheme.Layout, null, {
     // https://vitepress.dev/guide/extending-default-theme#layout-slots
     })
     }*/,
    enhanceApp({app, router}: EnhanceAppContext) {
        createMediumZoomProvider(app, router)
        app.provide('DEV', import.meta.env.DEV)
    }
} satisfies Theme
