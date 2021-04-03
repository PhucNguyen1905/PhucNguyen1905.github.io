
module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  theme: "meteorlxy",
  title: 'Phuc\'s Blog',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "My simple blog",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,

    personalInfo: {
      nickname: 'Phúc Caca',
      description: 'Happy Coding<br/>Happy Life',
      email: 'ngtrongphuc1905@gmail.com',
      location: 'Ho Chi Minh City, VietNam',
      organization: 'HCMUT',

      avatar: 'https://images2.imgbox.com/c5/28/dCL6CLCx_o.jpg',

      sns: {
        facebook: {
          account: 'Trọng Phúc Nguyễn',
          link: 'https://www.facebook.com/trongphuc1st',
        },
        github: {
          account: 'PhucNguyen1905',
          link: 'https://github.com/PhucNguyen1905',
        },
        linkedin: {
          account: 'Nguyễn Trọng Phúc',
          link: 'https://www.linkedin.com/in/tr%E1%BB%8Dng-ph%C3%BAc-nguy%E1%BB%85n-a748a2207/',
        },
      },
    },
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
      { text: 'Facebook', link: 'https://www.facebook.com/trongphuc1st/' },

    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
