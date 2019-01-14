module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
            {
                title: 'Buffer',
                children: [
                    '/buffer/'
                ]
            },
            {
                title: 'Stream',
                children: ['/stream/']
            },
            {
                title: 'File System',
                children: ['/file-system/']
            }
        ],
  }
}