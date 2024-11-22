<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'
import { VPImage } from 'vitepress/theme'
import { VPButton } from 'vitepress/theme-without-fonts'


export interface Sponsor {
    img: DefaultTheme.ThemeableImage
    url: string
}

const props = defineProps<{
    title: string
    sponsors: Sponsor[]
    invite?: boolean
}>()
</script>

<template>
    <div class="MKSponsors">
        <div class="content">
            <div class="wrapper">
                <div class="cell">
                    <h2 class="title">{{ title }}</h2>
                </div>
                <div class="cell" v-for="item in sponsors">
                    <a class="link" :href="item.url">
                        <VPImage class="project-logo" :image="item.img" />
                    </a>
                </div>
                <div class="cell">
                    <VPButton size="big" text="<- Become a sponsor" href="/sponsor" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.title {
    text-align: center;

}

.MKSponsors {
    background-color: var(--mk-sponsors-bg);
    color: var(--mk-sponsors-text);
}

.wrapper {
    padding: 12px 64px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-rows: auto;
    grid-gap: 1em;
    align-items: center;
    justify-content: center;
    text-align: center;

}

.content {
    max-width: 1152px;
    margin: 0 auto;
}

@media (min-width: 960px) {
    .wrapper {
        grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    }

    /*.wrapper div {
        aspect-ratio: 1 / 1;
    }*/
}

@media (max-width: 960px) {
    .content {
        align-items: center;
        justify-content: center;
        display: flex;

    }

    .wrapper {
        padding: 48px;
    }
}

.MKSponsors {
    width: 100%;
    overflow: hidden;
}

.cell {
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
    padding: 5px;
    max-width: 200px;
}

.cell a {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

h2 {
    font-weight: 700;
    font-size: 36px;
    letter-spacing: -3px;
}
</style>
