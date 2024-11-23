<script setup lang="ts">
import { VPDocAsideSponsors } from 'vitepress/theme-without-fonts'

const sponsors = [{
    tier: 'Cypherpunk Heroes',
    items: [{ name: 'Cake Labs', img: '/aside_sponsors/cake_short.webp', url: 'https://cakewallet.com'
        
    }, {name: 'Trocador', img: '/aside_sponsors/trocador_short.png', url: 'https://trocador.app'}]
}]

</script>

<template>
      <VPDocAsideSponsors :data="sponsors" />
</template>