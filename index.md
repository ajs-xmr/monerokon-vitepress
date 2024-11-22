---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  text: "A technical conference in <b>privacy and financial technology"
  image: { dark: mklight-title-logo.svg, light: mkdark-title-logo.svg, alt: 'Monero Konferenco'}
  actions:
    - theme: brand
      text: Buy Tickets
      link: 'https://shop.twed.org/twed/MK5'
    - theme: alt
      text: Submit Talks
      link: '#'

markdownStyles: false
---
<script setup>
import Digilol from './sponsors/digilol.svg'
//import VostoEmisio from './sponsors/VostoEmisio.svg'
import CakeWallet from './sponsors/cake.webp'

const sponsors = [
      { url: 'https://cakewallet.com', img: {src: CakeWallet, alt: 'Cake Wallet'}},
    { url: 'https://www.digilol.net', img: {src: Digilol, alt: 'Digilol'} },
//    { url: 'https://www.vostoemisio.com', img: {src: VostoEmisio, alt: 'VOSTO EMISIO'} },

]
</script>

<MKSponsors :sponsors="sponsors" :invite="true" title="Sponsors:" />
<MKEventInfo />


