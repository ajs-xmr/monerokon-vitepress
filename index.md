---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: A technical conference in privacy and financial technology
description: Monero Konferenco (“MoneroKon”) is an annual meeting of privacy advocates, cypherpunks, researchers, and developers and is designed to disseminate scientific and technical results in privacy-enhancing technologies and distributed systems.
head:
  - - meta
    - name: 'og:image'
      content: https://www.monerokon.org/og.png

markdownStyles: false
---
<script setup>
import BFFLight from './community_partners/bff-light.png'
import BFFDark from './community_partners/bff-dark.png'

import OrangeFrenLight from './organizers/orangefren-light.png'
import OrangeFrenDark from './organizers/orangefren-dark.png'

import TrocadorLight from './sponsors/trocador-light.svg'
import TrocadorDark from './sponsors/trocador-dark.svg'
import VostoEmisioLight from './sponsors/vostoemisio-light.png'
import VostoEmisioDark from './sponsors/vostoemisio-dark.png'

const sponsors = [
    { url: 'https://trocador.app', img: {light: TrocadorLight, dark: TrocadorDark, alt: 'Trocador' }, tier: 'hero' },
    { url: 'https://www.vostoemisio.com', img: {light: VostoEmisioLight, dark: VostoEmisioDark, alt: 'VOSTO EMISIO'}, tier: 'supporter' },
]

const communityPartners = [
    { url: 'https://bitcoinfilmfest.com', img: {light: BFFLight, dark: BFFDark}, alt: 'Bitcoin FilmFest' },
]

const organizer = {
  url: 'https://orangefren.com',
  img: { light: OrangeFrenLight, dark: OrangeFrenDark, alt: 'Orange Fren' },
}
</script>

<MKHero />
<MKSponsors :sponsors="sponsors" :invite="true" title="Sponsors:" />
<MKEventInfo />
<MKCommunityPartners :partners="communityPartners" :organizer="organizer" />