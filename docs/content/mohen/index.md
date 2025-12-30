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
import { TAGS_DATA } from '/.vitepress/theme/utils/tags'
import Tags from '/.vitepress/theme/components/Tags.vue'

// 获取所有文章
const allArticles = TAGS_DATA.flatMap(tagData => tagData.articles)
</script>

<Tags :articles="allArticles" />
