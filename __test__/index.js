import Docola from '../src'

new Docola({
  fetchPrefix: '/docs',
  el: '#docola',
  nav: [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Config',
      link: '/config/'
    },
    {
      title: 'GitHub',
      link: 'https://github.com/docola/docola'
    }
  ],
  sidebar: [
    {
      title: 'Guide',
      links: [
        {
          title: 'Introduction',
          link: '/intro'
        }
      ]
    },
    {
      title: 'Advanced',
      links: [
        {
          title: 'JSX',
          link: '/advanced/jsx'
        },
        {
          title: 'Babel',
          link: '/advanced/babel'
        }
      ]
    }
  ]
})
