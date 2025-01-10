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
            <h2 class="title">{{ title }}</h2>
            <div class="wrapper">
                <div class="cell sponsor" v-for="item in sponsors">
                    <a class="link" :href="item.url">
                        <VPImage class="project-logo" :image="item.img" />
                    </a>
                </div>
            </div>
            <div class="MKSponsorBtn">
                <VPButton text="Become a Sponsor" href="/sponsor" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.title {
    text-align: center;
    margin-top: 1em;

}

.MKSponsorBtn {
    text-align: center;
    margin-bottom: 2em;
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

.sponsor a {
    aspect-ratio: 1 / 1;
}

@media (min-width: 960px) {
    .wrapper {
        grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
        grid-gap: 3em;
    }

    .zebutton {
        margin-left: 3em;
    }
}

@media (max-width: 960px) {
    .wrapper {
        grid-gap: 1em;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 2.5em;
    }

    .sponsor a {
        max-width: 120px;
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
