// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from  'vitepress/theme-without-fonts'
import './font.css'
import './style.css'
import MKSponsors from './components/MKSponsors.vue'
import MKEventInfo from './components/MKEventInfo.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('MKSponsors', MKSponsors)
    app.component('MKEventInfo', MKEventInfo)
  }
} satisfies Theme
