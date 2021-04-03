const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  theme: "meteorlxy",
  title: 'Phuc\'s Blog',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

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
      nickname: 'Mr. Happy',
      description: 'Happy Coding<br/>Happy Life',
      email: 'ngtrongphuc1905@gmail.com',
      location: 'Ho Chi Minh City, VietNam',
      organization: 'HCMUT',

      avatar: 'https://lh3.googleusercontent.com/05kNjtY1CN0N5CGf4SYVK_Ms1dPJ2U7wIamj6YOpuX9_lDb5Bo1IyV4qpbP3P_lQVzl9OTDuXlVqbX1J6GoEqpUhJxrYHQutSIT2pCsoWpsJlX8dMFZtH-D5bMRZfUbz-Ufxb59qS5KTwxEilB7FPy_x-B6ejah60bldMCPa0CTjZKRGA1dt7LVyD17CkxvWLSTkUxWEAAuGzktOV99hi6zfKklLsr2tGh3p_iVf9XhPlWjYgVKIcPPof6JSEtR3y4mvDrzQnHYes6-FWnegYzE-SrW_1_TQ4v8thoyOZ50buymNot5Ww6lU5rBCj3OfLDunn2HPMrjWPbMj-VYpw2AlDDR1BO80etFbI5PtyA94JRWynOFNOxk-qoiwNKG704vI2LeYftLV3O1rthduhd1T9Le-M8Fk85lGOXk529GGgdbM6kUOOf1wAWMeZQFoFj3brcW42-g0-5tTccPMGo5U_V-5RMKKbRptqDGUFAQEkSOBTWcFcg22gy2rG8jqGfsRBTgMXVX4vogN_4wqBCvQk6yHuWVL4T4uP02-WyeQl5WBThJv60xA1HWSj8lqG9leV6z46oQ_5cfxaikUV7xW5yo2vkTQUpIs_QkZ_6z6OtRQo1vkFUlU-i44JNqT7QMqMBohtfd4-wm3yzLO2sZLp80yuxIwjGUfj5c-IiLPYr0j1YDIFrrAVxl-NoEZ4HnnpQfWWEJmjAFLl83S5hHN=s720-no?authuser=1',

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
