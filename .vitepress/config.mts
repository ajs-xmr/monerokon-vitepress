import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Monero Konferenco",
  description: "A conference in privacy-enhancing technologies and distributed systems.",
  themeConfig: {
    logo: {dark: "MKLogoDark.svg", light: "MKLogoLight.svg", alt: "Monero Konferenco" },
    siteTitle: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Sponsor', link: '/sponsor' },
      { text: 'Policies', link: '/policy'}
    ],

    sidebar: [
          { text: 'Sponsor', link: '/sponsor' },
          { text: 'Policies', link: '/policy' },
          { text: 'Privacy Policy', link: '/privacy' }

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/monerokon' },
      { icon: 'x', link: 'https://x.com/monerokon' },
    ],

    footer: {
      message: 'Twisted Edwards z. s., Rybná 716/24, Staré Město, 110 00 Praha 1, Czechia',
      copyright: 'Copyright © 2024 Twisted Edwards z. s.'
    },
  }
})
