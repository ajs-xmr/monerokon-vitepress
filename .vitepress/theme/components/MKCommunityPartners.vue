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
  <!-- TODO: improve this layout -->
  <div class="organized-by">
    <h2 class="title">Organized by:</h2>
    <div class="partners-grid">
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
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 2em;
  margin-bottom: 2em;
}

.partners-grid {
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 2em;
}

.partner-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.partner-link {
  max-width: 70px;
  height: auto;
}

.organizer-link {
  height: auto;
  max-width: 75px;
  margin-right: 0.55em;
}

@media (max-width: 960px) {
  .community-partners {
    flex-direction: column;
    grid-gap: 2em;
    margin-top: 3em;
  }

  .partner-link {
    width: 60px;
  }
}
</style>
