import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'

// https://vitepress.dev/reference/site-config
export default withPwa(defineConfig({
  title: "CityU Orientation Handbook",
  description: "Orientation handbook for CityUHK new students.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  pwa: {
    mode: 'development',
    registerType: 'autoUpdate',
    injectRegister: 'script-defer',
    includeAssets: ['favicon.svg'],
    manifest: {
      name: 'VitePress PWA',
      short_name: 'VitePressPWA',
      theme_color: '#ffffff',
    },
    pwaAssets: {
      config: true,
    },
    workbox: {
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
    },
    experimental: {
      includeAllowlist: true,
    },
    devOptions: {
      enabled: false,
      suppressWarnings: true,
      navigateFallback: '/',
    },
  },
  vite: {
    plugins: [pagefindPlugin()],
  }
}))
