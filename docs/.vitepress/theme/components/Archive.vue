<script setup lang="ts">
import { ARCHIVE_DATA, getTotalArticles } from "../utils/archive";

const totalArticles = getTotalArticles();
const currentYearArticles = ARCHIVE_DATA[0]?.count || 0;
const currentYear =
  ARCHIVE_DATA[0]?.year || new Date().getFullYear().toString();
</script>

<template>
  <div class="m-archive-page">
    <!-- 顶部标题栏 -->
    <header class="archive-header">
      <div class="header-content">
        <h1 class="header-title">所有归档 - {{ totalArticles }}篇</h1>
        <h2 class="header-subtitle">
          {{ currentYear }} - {{ currentYearArticles }}篇
        </h2>
      </div>
    </header>

    <!-- 年份分组 -->
    <section
      v-for="yearData in ARCHIVE_DATA"
      :key="yearData.year"
      class="year-section"
    >
      <div class="year-header">
        <h3 class="year-title">{{ yearData.year }}</h3>
      </div>

      <!-- 文章网格 -->
      <div class="articles-grid">
        <article
          v-for="article in yearData.articles"
          :key="article.path"
          class="article-card"
        >
          <div class="article-card-header">
            <span class="article-date">{{ article.date }}</span>
            <div
              v-if="article.icon"
              class="article-icon"
              :style="{ backgroundColor: article.iconColor }"
            >
              <span class="icon-text">{{ article.icon }}</span>
            </div>
          </div>

          <h4 class="article-title">
            <a :href="article.path">{{ article.title }}</a>
          </h4>

          <p class="article-desc">{{ article.desc }}</p>

          <div class="article-tags">
            <span
              v-for="tag in article.tags"
              :key="tag"
              class="tag"
            >
              #{{ tag }}
            </span>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.m-archive-page {
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.archive-header {
  margin-bottom: 3rem;
  padding: 1.5rem 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  text-align: center;
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.header-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0;
}

.header-subtitle {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-brand);
  margin: 0;
}

.year-section {
  margin-bottom: 4rem;
}

.year-header {
  padding: 1.25rem 0;
  border-top: 1px solid var(--vp-c-divider);
  border-bottom: 1px solid var(--vp-c-divider);
  margin-bottom: 1.5rem;
  text-align: center;
}

.year-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.article-card {
  padding: 1.5rem;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  transition: all 0.3s;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: var(--vp-c-brand);
    box-shadow: var(--vp-shadow-2);
    transform: translateY(-2px);
  }
}

.article-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
}

.article-date {
  font-size: 0.875rem;
  color: var(--vp-c-text-3);
  font-weight: 500;
}

.article-icon {
  width: 2rem;
  height: 2rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.icon-text {
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1;
}

.article-title {
  margin: 0 0 0.75rem 0;
  font-size: 1.125rem;
  font-weight: 600;
  flex-grow: 1;

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
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-grow: 1;
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  font-size: 0.75rem;
  color: var(--vp-c-brand);
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--vp-c-brand-dark);
  }
}

// 移动端响应式
@media (max-width: 768px) {
  .archive-header {
    padding: 1.25rem 1rem;
  }

  .header-title {
    font-size: 1.25rem;
  }

  .header-subtitle {
    font-size: 1.125rem;
  }

  .year-title {
    font-size: 1.5rem;
  }

  .articles-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .article-card {
    padding: 1rem;
  }

  .article-card-header {
    margin-bottom: 0.5rem;
  }

  .article-date {
    font-size: 0.75rem;
  }

  .article-icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .icon-text {
    font-size: 0.625rem;
  }

  .article-title {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .article-desc {
    font-size: 0.8rem;
    margin-bottom: 0.75rem;
  }

  .tag {
    font-size: 0.625rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .articles-grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
}
</style>
