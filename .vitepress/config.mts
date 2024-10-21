import path from 'path'
import { defineConfig } from 'vitepress'
import timeline from "vitepress-markdown-timeline"

// https://vitepress.dev/reference/site-config
export default defineConfig({
    vite: {
        envDir: '../',
        resolve: {
            alias: {
                '@': path.join(__dirname, '../src/')
            }
        }
    },
    title: "Docs",
    description: "workerpath.org 是一个致力于帮助劳动者学习和维护自身权益的公益性网站。我们提供全面的劳动维权知识、法律解读和实用工具，旨在赋予劳动者更多的权利和保护。无论您是面对工作中的不公正待遇，还是希望了解相关的劳动法律，workerpath.org 都为您提供免费的专业指导，帮助您提升维权意识，争取应有的权益。我们专注于为劳动者提供支持，致力于构建更加公正和谐的劳动关系。",
    srcDir: './src',
    head: [
        [ 'meta', {httpEquiv: 'content-type', content: 'text/html;charset=utf-8'} ],// <meta name="referrer" content="strict-origin-when-cross-origin">
        [ 'meta', {httpEquiv: 'X-UA-Compatible', content: 'IE=edge,chrome=1'} ],
        [ 'meta', {author: 'workerpath'} ],
        [ 'meta', {
            name: 'keywords',
            content: 'workerpath.org, 劳动维权, 劳动仲裁, 劳动争议, 劳动官司, 违法辞退, 外包维权, 裁员赔偿金, 外包公司, 坐班, 辞退, 开除, N, N+1, 2N '
        } ],
        [ 'link', {rel: 'icon', href: 'favicon.ico'} ],
        [ 'link', {rel: 'stylesheet', href: 'https://unpkg.com/element-plus/dist/index.css'} ],
        // 水印
        [ 'script', {
            defer: true,
            src: 'https://downloads.workerpath.org/script/watermark.js',
            'data-content': '["禁止以任何形式商用", "Docs"]'
        } ]
    ],
    lang: 'zh-CN',
    lastUpdated: true,
    markdown: {
        image: {
            // 开启图片懒加载 默认禁用图片懒加载
            lazyLoading: true
        },
        //行号显示
        // lineNumbers: true,

        //时间线
        config: (md) => {
            md.use(timeline)
        }
    },
    themeConfig: {
        logo: '/assets/logo.png',
        siteTitle: 'Docs',
        mdEnhance: {
            tasklist: true
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/PrettyPuppyCavalier/docs'}
            /*{icon: 'youtube', link: 'https://github.com/PrettyPuppyCavalier/workerpath'},
             {
             icon: {
             svg: '<svg width="46"height="29"viewBox="0 0 46 29"fill="none"xmlns="http://www.w3.org/2000/svg"><path d="M33.884 7.69117C29.6697 8.47292 26.1914 11.2756 24.6831 15.0517L24.6745 15.0736C24.4656 15.6215 24.4951 16.2274 24.7521 16.7509L24.7521 16.7509C25.007 17.2702 25.4536 17.6472 25.9685 17.8316C26.4819 18.0155 27.048 18.004 27.5541 17.798C28.0621 17.5912 28.4929 17.1936 28.7241 16.6612C28.7305 16.6464 28.7367 16.6316 28.7426 16.6166C29.9105 13.6709 33.0761 11.5341 36.8185 11.7561L36.8204 11.7562C40.9709 11.9973 44.1754 15.1882 44.3318 18.8832C44.5028 22.9363 41.1227 26.4508 36.6391 26.6249C36.5949 26.6266 36.5513 26.6302 36.5082 26.6357L23.8651 26.6794L23.8602 26.6794L10.8062 26.6358C10.7575 26.6283 10.708 26.6231 10.6579 26.6204C5.99922 26.3663 2.45703 22.7685 2.45703 18.55C2.45703 14.1752 6.27117 10.465 11.1823 10.465C11.3757 10.465 11.5719 10.4741 11.7825 10.4892C12.5034 10.5412 13.1588 10.0717 13.3416 9.37245C14.4842 5.00084 18.739 1.65625 23.9218 1.65625C28.4147 1.65625 32.207 4.17205 33.884 7.69117Z"fill="url(#paint0_linear_5575_4627)"stroke="url(#paint1_linear_5575_4627)"stroke-width="3"stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_5575_4627"x1="23.3976"y1="0.156249"x2="51.6939"y2="32.8291"gradientUnits="userSpaceOnUse"><stop stop-color="#2F6CFF"/><stop offset="1"stop-color="#366EF4"stop-opacity="0.3"/></linearGradient><linearGradient id="paint1_linear_5575_4627"x1="23.5654"y1="0.156251"x2="23.2565"y2="28.1353"gradientUnits="userSpaceOnUse"><stop offset="0.161623"stop-color="#0059F5"/><stop offset="1"stop-color="#10D7FF"/></linearGradient></defs></svg>'
             }, link: 'https://github.com/PrettyPuppyCavalier/workerpath'
             }*/
        ],
        /* carbonAds: {
         code: 'your-carbon-code',
         placement: 'your-carbon-placement'
         },*/
        outline: {
            level: 'deep',
            label: '页面导航'
        },
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
        darkModeSwitchTitle: '深色模式',
        darkModeSwitchLabel: '深色模式',
        lightModeSwitchTitle: '浅色模式',
        sidebarMenuLabel: '文档',
        backToTopMobile: true,
        returnToTopLabel: '返回顶部',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Docker', link: '/document/docker/install'},
            {text: 'Nuxt', link: '/document/nuxt/install'},
        ],

        sidebar: {
            '/document/docker/': [
                {
                    text: 'Docker',
                    items: [
                        {text: '安装', link: '/document/docker/install'},
                        {text: '命令', link: '/document/docker/command'},
                    ]
                }
            ],
            '/document/nuxt/': [
                {
                    text: 'Nuxt',
                    items: [
                        {text: '安装', link: '/document/nuxt/install'},
                    ]
                }
            ],
        },

        /*socialLinks: [
         {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
         ],*/

        search: {
            // 本地离线搜索
            provider: 'local',
            // 多语言搜索配置
            options: {
                locales: {
                    root: {
                        placeholder: '搜索文档',
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                searchBox: {
                                    resetButtonTitle: '清除查询条件',
                                    resetButtonAriaLabel: '清除查询条件',
                                    cancelButtonText: '取消',
                                    cancelButtonAriaLabel: '取消'
                                },
                                startScreen: {
                                    recentSearchesTitle: '搜索历史',
                                    noRecentSearchesText: '没有搜索历史',
                                    saveRecentSearchButtonTitle: '保存至搜索历史',
                                    removeRecentSearchButtonTitle: '从搜索历史中移除',
                                    favoriteSearchesTitle: '收藏',
                                    removeFavoriteSearchButtonTitle: '从收藏中移除'
                                },
                                errorScreen: {
                                    titleText: '无法获取结果',
                                    helpText: '你可能需要检查你的网络连接'
                                },
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换',
                                    closeText: '关闭',
                                    searchByText: '搜索提供者'
                                },
                                noResultsScreen: {
                                    noResultsText: '无法找到相关结果',
                                    suggestedQueryText: '你可以尝试查询',
                                    reportMissingResultsText: '你认为该查询应该有结果？',
                                    reportMissingResultsLinkText: '点击反馈'
                                }
                            }
                        }
                    }
                }
            }
        },
        footer: {
            message: '本网站内容仅供参考。WorkerPath.org 不对信息的准确性或完整性负责，亦不承担因使用这些信息而引发的任何损失或损害责任。',
            copyright: `© 2024-${ new Date().getFullYear() } WorkerPath.org. All rights reserved.`
        },
        editLink: {
            text: '反馈此页面问题',
            // pattern: 'https://github.com/PrettyPuppyCavalier/workerpath/discussions/:path'
            pattern: 'mailto:issues@workerpath.org?subject=请描述问题&body=我在以下页面发现了一个问题：%0A%0A[Page URL](:path)%0A%0A问题描述：%0A'
        },
        lastUpdated: {
            text: '最后更新于'
        },

        /*** 自定义配置 ***/
        visitor: {
            badgeId: 'docs.sand'
        },

        comment: {
            repo: 'PrettyPuppyCavalier/docs',
            repoId: 'R_kgDONC9eRA',
            category: 'Announcements',
            categoryId: 'DIC_kwDONC9eRM4CjhjV'
        }
    }
})
