---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: A technical conference in privacy and financial technology
description: Monero Konferenco (“MoneroKon”) is an annual meeting of privacy advocates, cypherpunks, researchers, and developers and is designed to disseminate scientific and technical results in privacy-enhancing technologies and distributed systems.
head:
  - - meta
    - name: 'og:image'
      content: https://www.monerokon.org/og.png

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
import VostoEmisio from './sponsors/vostoemisio.png'
import CakeWallet from './sponsors/cake.webp'

const sponsors = [
    { url: 'https://cakewallet.com', img: {src: CakeWallet, alt: 'Cake Wallet'}},
    { url: 'https://www.vostoemisio.com', img: {src: VostoEmisio, alt: 'VOSTO EMISIO'} },
    { url: 'https://www.digilol.net', img: {src: Digilol, alt: 'Digilol'} },
]
</script>

<MKSponsors :sponsors="sponsors" :invite="true" title="Sponsors:" />
<MKEventInfo />


