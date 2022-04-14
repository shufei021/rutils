module.exports = {
    title: 'Rutils', //网站名称
    base: '/rutils/', //部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它。如 GitHub pages，如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"，它的值应当总是以斜杠开始，并以斜杠结束。
    head: [
        ['link', { rel: 'icon', href: '/tool.png' }] //ico图标
    ],
    themeConfig: {
        logo: '/tool.png',
        lastUpdated: '上次更新', //最后更新时间
        smoothScroll: true, //页面滚动效果。
        displayAllHeaders: false, //侧边栏只有活动的才展开
        nav: [
            //导航栏目
            { text: '首页', link: '/' },
            { text: '文档', link: '/library/' },
            { text: 'github', link: 'https://github.com/shufei021/rutils' },
            { text: '日期时间工具', link: 'https://shufei021.github.io/rdate/' }
        ],
        sidebarDepth: 2,
        // sidebar: 'auto'
        sidebar: {
            '/library/': [
                {
                    title: '', // 必要的
                    path: '', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 2, // 可选的, 默认值是 1
                    children: [
                        '/library/',
                        '/library/base.md',
                        '/library/array.md',
                        '/library/object.md',
                        '/library/number.md',
                        '/library/local.md',
                        '/library/session.md',
                        '/library/string.md',
                        '/library/url.md',
                        '/library/reg.md',
                        '/library/dom.md',
                        '/library/file.md',
                        '/library/env.md',
                        '/library/other.md'
                    ]
                }
            ]
        }
    },
    plugins: ['@vuepress/back-to-top', '@vuepress/medium-zoom']
}
