---
layout: doc
layoutClass: m-tags-layout
sidebar: false
prev: false
next: false
outline: false
lastUpdated: false
---

<style src="/.vitepress/theme/style/tags.scss"></style>

<script setup>
import { ALL_ARTICLES } from '/.vitepress/theme/utils/tags'
import Tags from '/.vitepress/theme/components/Tags.vue'
</script>

<Tags :articles="ALL_ARTICLES" />
