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
import DigilolLight from './sponsors/digilol-light.svg'
import DigilolDark from './sponsors/digilol-dark.svg'

import VostoEmisioLight from './sponsors/vostoemisio-light.png'
import VostoEmisioDark from './sponsors/vostoemisio-dark.png'

import CakeWalletLight from './sponsors/cake-light.webp'
import CakeWalletDark from './sponsors/cake-dark.webp'

import TrocadorLight from './sponsors/trocador-light.svg'
import TrocadorDark from './sponsors/trocador-dark.svg'

import MonericaLight from './sponsors/monerica-light.svg'
import MonericaDark from './sponsors/monerica-dark.svg'

import FiroLight from './sponsors/firo-light.svg'
import FiroDark from './sponsors/firo-dark.svg'

import SweetwaterLight from './sponsors/sweetwater-light.svg'
import SweetwaterDark from './sponsors/sweetwater-dark.svg'

import XMRGlobalLight from './sponsors/xmrglobal-light.webp'
import XMRGlobalDark from './sponsors/xmrglobal-dark.webp'

import ShopinBitLight from './sponsors/shopinbit-light.svg'
import ShopinBitDark from './sponsors/shopinbit-dark.svg'

import XeovoLight from './sponsors/xeovo-light.svg'
import XeovoDark from './sponsors/xeovo-dark.svg'

import EdgeDark from './sponsors/edge-dark.svg'
import EdgeLight from './sponsors/edge-light.svg'

import MajesticBankLight from './sponsors/majesticbank-light.svg'
import MajesticBankDark from './sponsors/majesticbank-dark.svg'

import Beldex from './sponsors/beldex.svg'

import PrivacyGuardians from './community_partners/pg.jpg'
import W3PN from './community_partners/w3pn.png'
import LunarDAO from './community_partners/logo_lunardao.png'
import Monerotopia from './community_partners/monerotopia.png'

import AmbCryptoLight from './community_partners/ambcrypto-light.webp'
import AmbCryptoDark from './community_partners/ambcrypto-dark.webp'

const sponsors = [
    { url: 'https://trocador.app', img: {light: TrocadorLight, dark: TrocadorDark, alt: 'Trocador' }, tier: 'hero' },
    { url: 'https://cakewallet.com', img: {light: CakeWalletLight, dark: CakeWalletDark, alt: 'Cake Wallet'}, tier: 'hero' },
    { url: 'https://firo.org', img: {light: FiroLight, dark: FiroDark, alt: 'Firo'}, tier: 'contributor' },
    { url: 'https://xmrglobal.io', img: {light: XMRGlobalLight, dark: XMRGlobalDark, alt: 'XMRGlobal'}, tier: 'contributor' },
    { url: 'https://www.vostoemisio.com', img: {light: VostoEmisioLight, dark: VostoEmisioDark, alt: 'VOSTO EMISIO'}, tier: 'supporter' },
    { url: 'https://www.digilol.net', img: {light: DigilolLight, dark: DigilolDark, alt: 'Digilol'}, tier: 'supporter' },
    { url: 'https://monerica.com', img: {light: MonericaLight, dark: MonericaDark, alt: 'Monerica'}, tier: 'supporter' },
    { url: 'https://sweetwater.consulting', img: {light: SweetwaterLight, dark: SweetwaterDark, alt: 'Sweetwater Digital Asset Consulting'}, tier: 'supporter' },
    { url: 'https://shopinbit.com', img: {light: ShopinBitLight, dark: ShopinBitDark, alt: 'ShopinBit'}, tier: 'supporter' },
    { url: 'https://xeovo.com', img: {light: XeovoLight, dark: XeovoDark, alt: 'Xeovo'}, tier: 'supporter' },
    { url: 'https://edge.app', img: {light: EdgeLight, dark: EdgeDark, alt: 'Edge Wallet'}, tier: 'contributor' },
    { url: 'https://beldex.io', img: {src: Beldex, alt: 'Beldex'}, tier: 'contributor' },
    { url: 'https://majesticbank.sc', img: {light: MajesticBankLight, dark: MajesticBankDark, alt: 'Majestic Bank'}, tier: 'contributor' },
]

const communityPartners = [
    { url: 'https://x.com/privacyguardia', img: {src: PrivacyGuardians, alt: 'Privacy Guardians'} },
    { url: 'https://web3privacy.info', img: {src: W3PN, alt: 'Web3Privacy Now'} },
    { url: 'https://linktr.ee/lunardao', img: {src: LunarDAO, alt: 'LunarDAO'} },
    { url: 'https://monerotopia.com', img: {src: Monerotopia, alt: 'MoneroTopia'} },
    { url: 'https://ambcrypto.com', img: {light: AmbCryptoLight, dark: AmbCryptoDark, alt: 'AMBCrypto'} },
]
</script>

<MKHero />
<MKSponsors :sponsors="sponsors" :invite="true" title="Sponsors:" />
<MKEventInfo />
<MKCommunityPartners :partners="communityPartners" />

