module.exports = {
  title: '辰森文档中心',
  base: '/vuepress-demo/',
  dest: './dist',
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }],
  ],
  repo: 'https://github.com/1091214370/vuepress-demo',
  themeConfig: {
    logo: '/img/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '文档中心', link: '/start/' },
    ],
    sidebar: [
      {
        title: 'start',
        collapsable: false,
        children: [
          '/start/',
          '/start/hello',
          '/start/test',
        ]
      },
      {
        title: 'build',
        collapsable: false,
        children: [
          '/start/git',
          '/start/server'
        ]
      }
    ],
  },
}