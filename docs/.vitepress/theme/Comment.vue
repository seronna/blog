<template>
  <div class="comment">
    <component
      v-if="isDark"
      :is="'script'"
      src="https://giscus.app/client.js"
      data-repo="Tunan81/blog"
      data-repo-id="R_kgDOK2xPmw"
      data-category="General"
      data-category-id="DIC_kwDOK2xPm84Cb1TH"
      data-mapping="pathname"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="bottom"
      data-theme="dark"
      data-lang="zh-CN"
      crossorigin="anonymous"
      data-loading="eager"
      async
    >
    </component>
    <component
      v-else
      :is="'script'"
      src="https://giscus.app/client.js"
      data-repo="Tunan81/blog"
      data-repo-id="R_kgDOK2xPmw"
      data-category="General"
      data-category-id="DIC_kwDOK2xPm84Cb1TH"
      data-mapping="pathname"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="bottom"
      data-theme="light"
      data-lang="zh-CN"
      crossorigin="anonymous"
      data-loading="eager"
      async
    >
    </component>
  </div>
</template>
<script setup lang="ts">
import { useData } from "vitepress";
// 获取当前配色方案
const { isDark } = useData();
</script>
<style lang="scss" scoped>
.comment {
  margin-top: 16px;
}
</style>
