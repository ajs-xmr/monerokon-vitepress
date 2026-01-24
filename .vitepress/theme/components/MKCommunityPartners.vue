<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme';
import { VPImage } from 'vitepress/theme';

interface Partner {
  url: string;
  img: DefaultTheme.ThemeableImage;
}

interface Props {
  partners: Partner[];
  organizer: Partner;
}

defineProps<Props>();
</script>

<template>
  <div class="community-partners">
    <h2 class="title">Community Partners:</h2>
    <div class="partners-grid">
      <span v-for="partner in partners" :key="partner.url" class="partner-item">
        <a :href="partner.url" target="_blank" rel="noopener noreferrer" class="partner-link">
          <VPImage :image="partner.img" />
        </a>
      </span>
    </div>
  </div>
  <div class="organized-by">
    <h2 class="title">Organized by:</h2>
    <a
      :href="organizer.url"
      class="organizer-link"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit the organizer website"
    >
      <VPImage :image="organizer.img" />
    </a>
  </div>
</template>

<style scoped>
h2 {
  font-weight: 400;
  font-size: 24px;
  letter-spacing: -1px;
}

.title {
  text-align: center;
}

.community-partners,
.organized-by {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.5em;
  margin-bottom: 1em;
}

.partners-grid {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 2.5em;
  width: min(100%, 760px);
}

.partner-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.partner-link,
.organizer-link {
  height: auto;
  max-width: 90px;
  padding: 0;
  margin: 0 auto;
}

@media (max-width: 960px) {
  .community-partners,
  .organized-by {
    margin-top: 2em;
    gap: 1em;
  }

  .partners-grid {
    width: min(100%, 520px);
  }
}
</style>
