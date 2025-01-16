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
      link: 'https://cfp.twed.org/mk5/cfp'

markdownStyles: false
---
<script setup>
import Digilol from './sponsors/digilol.svg'
import VostoEmisio from './sponsors/vostoemisio.png'
import CakeWallet from './sponsors/cake.png'
import Trocador from './sponsors/trocador.svg'
import Monerica from './sponsors/monerica.svg'
import Firo from './sponsors/firo.svg'

import PrivacyGuardians from './community_partners/pg.jpg'
import W3PN from './community_partners/w3pn.png'
import LunarDAO from './community_partners/logo_lunardao.png'

import Tarnkappe from './media_partners/tarnkappe_info.png'

const sponsors = [
    { url: 'https://trocador.app', img: {src: Trocador, alt: 'Trocador' } },
    { url: 'https://cakewallet.com', img: {src: CakeWallet, alt: 'Cake Wallet'} },
    { url: 'https://firo.org', img: {src: Firo, alt: 'Firo'} },
    { url: 'https://www.vostoemisio.com', img: {src: VostoEmisio, alt: 'VOSTO EMISIO'} },
    { url: 'https://www.digilol.net', img: {src: Digilol, alt: 'Digilol'} },
    { url: 'https://monerica.com', img: {src: Monerica, alt: 'Monerica'} },
]

const communityPartners = [
    { url: 'https://x.com/privacyguardia', img: {src: PrivacyGuardians, alt: 'Privacy Guardians'} },
    { url: 'https://web3privacy.info', img: {src: W3PN, alt: 'Web3Privacy Now'} },
    { url: 'https://linktr.ee/lunardao', img: {src: LunarDAO, alt: 'LunarDAO'} },
]

const mediaPartners = [
    { url: 'https://tarnkappe.info', img: {src: Tarnkappe, alt: 'Tarnkappe'} },
]

</script>

<MKSponsors :sponsors="sponsors" :invite="true" title="Sponsors:" />
<MKCommunityPartners :partners="communityPartners" />
<MKMediaPartners :partners="mediaPartners" />
<MKEventInfo />
