<script setup lang="ts">
import { ref, computed } from "vue";
import type { Article } from "../utils/tags";

const props = defineProps<{
  articles: Article[];
}>();

const selectedTag = ref<string>("all");

const allTags = computed(() => {
  return [...new Set(props.articles.map((a) => a.tag))].sort();
});

const totalArticles = computed(() => props.articles.length);

const filteredArticles = computed(() => {
  if (selectedTag.value === "all") {
    return props.articles;
  }
  return props.articles.filter((a) => a.tag === selectedTag.value);
});

const selectTag = (tag: string) => {
  selectedTag.value = tag;
};

const getTagCount = (tag: string) => {
  return props.articles.filter((a) => a.tag === tag).length;
};
</script>

<template>
  <div class="m-tags-page">
    <div class="tags-filter">
      <button
        class="tag-btn"
        :class="{ active: selectedTag === 'all' }"
        @click="selectTag('all')"
      >
        全部 ({{ totalArticles }})
      </button>
      <button
        v-for="tag in allTags"
        :key="tag"
        class="tag-btn"
        :class="{ active: selectedTag === tag }"
        @click="selectTag(tag)"
      >
        {{ tag }} ({{ getTagCount(tag) }})
      </button>
    </div>

    <div class="articles-list">
      <div v-if="filteredArticles.length === 0" class="empty">暂无文章</div>
      <div
        v-for="article in filteredArticles"
        :key="article.path"
        class="article-card"
      >
        <div class="article-meta">
          <span class="article-tag">{{ article.tag }}</span>
        </div>
        <h3 class="article-title">
          <a :href="article.path">{{ article.title }}</a>
        </h3>
        <p class="article-desc">{{ article.desc }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.m-tags-page {
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.tags-header {
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--vp-c-text-1);
  }
}

.subtitle {
  font-size: 1.1rem;
  color: var(--vp-c-text-2);
  margin: 0;
}

.tags-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 3rem;
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  box-sizing: border-box;
}

.tag-btn {
  padding: 0.6rem 1.2rem;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s;
  box-sizing: border-box;

  &:hover {
    color: var(--vp-c-brand);
    border-color: var(--vp-c-brand);
    transform: translateY(-1px);
  }

  &.active {
    background: var(--vp-c-brand);
    color: #fff;
    border-color: var(--vp-c-brand);
  }
}

.articles-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.article-card {
  padding: 1.5rem;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  transition: all 0.3s;
  box-sizing: border-box;

  &:hover {
    border-color: var(--vp-c-brand);
    box-shadow: var(--vp-shadow-2);
    transform: translateY(-2px);
  }
}

.article-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.85rem;
}

.article-date {
  color: var(--vp-c-text-3);
}

.article-tag {
  color: var(--vp-c-brand);
  background: var(--vp-c-brand-soft);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-weight: 500;
}

.article-title {
  margin: 0 0 0.75rem 0;
  font-size: 1.3rem;
  font-weight: 600;

  a {
    color: var(--vp-c-text-1);
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: var(--vp-c-brand);
    }
  }
}

.article-desc {
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.empty {
  text-align: center;
  padding: 3rem;
  color: var(--vp-c-text-3);
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .tags-header h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .tags-filter {
    padding: 1rem;
  }

  .tag-btn {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }

  .articles-list {
    grid-template-columns: 1fr;
  }

  .article-card {
    padding: 1.25rem;
  }

  .article-title {
    font-size: 1.15rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .articles-list {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
}
</style>
