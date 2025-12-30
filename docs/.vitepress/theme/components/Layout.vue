<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { provideToggleDark } from './Dark' // 假设你的动画逻辑在这里
const { Layout } = DefaultTheme

const { isDark } = useData()
provideToggleDark(isDark)
</script>

<template>
  <Layout>
    <template #doc-after>
      <slot name="doc-after" />
    </template>
  </Layout>
</template>