<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { Content } from 'vitepress'
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-before>
      <div class="tags-full-wrapper">
        <Content />
      </div>
    </template>
  </DefaultTheme.Layout>
</template>

<style>
.tags-full-wrapper {
  width: 100vw;
  max-width: none !important;
  margin-left: calc(-50vw + 50%);
  padding: 32px 48px;
  box-sizing: border-box;
}

.tags-full-wrapper ~ * {
  display: none;
}

@media (max-width: 768px) {
  .tags-full-wrapper {
    padding: 24px 16px;
  }
}

@media (min-width: 1440px) {
  .tags-full-wrapper {
    padding: 32px 64px;
  }
}

@media (min-width: 1920px) {
  .tags-full-wrapper {
    padding: 32px 96px;
  }
}
</style>
