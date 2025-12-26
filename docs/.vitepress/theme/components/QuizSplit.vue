<script setup>
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
  id: { type: String, required: true },
  tag: { type: String, default: '' },      // 例如：Vue3, 算法
  difficulty: { type: String, default: '' } // level: easy, medium, hard
})

const isPinned = ref(false)
const status = ref('none') // none | master | review
const storageKeyPin = `quiz-pin-${props.id}`
const storageKeyStatus = `quiz-status-${props.id}`

onMounted(() => {
  // 恢复固定状态
  isPinned.value = localStorage.getItem(storageKeyPin) === 'true'
  // 恢复掌握状态
  const savedStatus = localStorage.getItem(storageKeyStatus)
  if (savedStatus) status.value = savedStatus
})

const togglePin = () => {
  isPinned.value = !isPinned.value
  if (isPinned.value) localStorage.setItem(storageKeyPin, 'true')
  else localStorage.removeItem(storageKeyPin)
}

// 标记掌握程度
const setStatus = (newStatus) => {
  status.value = newStatus
  localStorage.setItem(storageKeyStatus, newStatus)
  
  // 如果标记为“会了”，自动取消固定，收起答案（可选体验）
  if (newStatus === 'master') {
    isPinned.value = false
    localStorage.removeItem(storageKeyPin)
  }
}

// 计算难度颜色
const difficultyColor = computed(() => {
  switch(props.difficulty.toLowerCase()) {
    case 'hard': return 'red';
    case 'medium': return 'orange';
    case 'easy': return 'green';
    default: return 'gray';
  }
})
</script>

<template>
  <div class="quiz-container" :class="[`status-${status}`]">
    <div class="quiz-left">
      <div class="pane-header">
        <div class="header-left">
          <span>题目</span>
          <span v-if="tag" class="badge tag">{{ tag }}</span>
          <span v-if="difficulty" class="badge level" :class="difficultyColor">{{ difficulty }}</span>
        </div>
        
        <div class="status-indicator" v-if="status !== 'none'">
          {{ status === 'master' ? '已掌握' : '需复习' }}
        </div>
      </div>
      <div class="pane-content">
        <slot name="question"></slot>
      </div>
    </div>

    <div class="quiz-right" :class="{ 'is-pinned': isPinned }">
      <div class="pane-header header-right">
        <span>答案</span>
        <button class="pin-btn" @click.stop="togglePin">
          <span class="icon">{{ isPinned ? '📌' : '📍' }}</span>
          {{ isPinned ? '已固定' : '固定' }}
        </button>
      </div>

      <div class="answer-wrapper" @click="!isPinned && togglePin()">
        <div class="blur-mask" v-if="!isPinned">
          <div class="mask-content">
            <span>🖱️ 悬停查看 / 点击固定</span>
          </div>
        </div>
        
        <div class="pane-content answer-content">
          <slot name="answer"></slot>
          
          <div class="action-bar">
            <div class="action-text">这道题你掌握了吗？</div>
            <div class="action-buttons">
              <button 
                class="btn-review" 
                :class="{ active: status === 'review' }"
                @click.stop="setStatus('review')"
              >
                忘了/模糊
              </button>
              <button 
                class="btn-master" 
                :class="{ active: status === 'master' }"
                @click.stop="setStatus('master')"
              >
                😎 斩杀/会了
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* --- 容器布局 --- */
.quiz-container {
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin: 32px 0;
  align-items: stretch;
  font-size: 15px;
}

@media (max-width: 768px) {
  .quiz-container { flex-direction: column; gap: 16px; }
}

/* --- 卡片通用样式 --- */
.quiz-left, .quiz-right {
  flex: 1;
  border-radius: 16px; /* 更大的圆角 */
  background-color: var(--vp-c-bg); /* 使用主背景色 */
  border: 1px solid var(--vp-c-border); /* 更淡的边框 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02); /* 极淡的阴影，增加层次 */
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); /* 弹性动画 */
}

/* 悬停时稍微浮起，增加交互感 */
.quiz-left:hover, .quiz-right:hover {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
  border-color: var(--vp-c-brand-dimm);
  transform: translateY(-2px);
}

/* --- 状态反馈 (左侧) --- */
/* 掌握状态：绿色光晕 */
.status-master .quiz-left { 
  border-color: #10b981; 
  background-color: rgba(16, 185, 129, 0.02);
}
/* 复习状态：红色光晕 */
.status-review .quiz-left { 
  border-color: #f43f5e; 
  background-color: rgba(244, 63, 94, 0.02);
}

/* --- 头部 Header --- */
.pane-header {
  padding: 12px 18px;
  background-color: var(--vp-c-bg-soft); /* 稍微深一点的背景 */
  border-bottom: 1px solid var(--vp-c-divider);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  user-select: none;
}

.header-left { display: flex; align-items: center; gap: 10px; }

/* --- 徽章 (Badges) --- */
.badge {
  padding: 3px 10px;
  border-radius: 20px; /* 胶囊形状 */
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.tag { 
  background: var(--vp-c-default-soft); 
  color: var(--vp-c-text-1); 
  border: 1px solid var(--vp-c-divider);
}

/* 难度颜色微调 */
.level.easy { background: rgba(16, 185, 129, 0.15); color: #059669; }
.level.medium { background: rgba(245, 158, 11, 0.15); color: #d97706; }
.level.hard { background: rgba(244, 63, 94, 0.15); color: #e11d48; }

/* 状态指示文字 */
.status-indicator {
  font-size: 12px;
  font-weight: bold;
  animation: fadeIn 0.5s ease;
}

/* --- 内容区域 --- */
.pane-content {
  padding: 20px;
  flex-grow: 1;
  line-height: 1.7; /* 增加行高，阅读更舒适 */
}

/* --- 右侧答案区特有样式 --- */
.quiz-right.is-pinned {
  border-color: var(--vp-c-brand);
  box-shadow: 0 0 0 2px var(--vp-c-brand-dimm); /* 固定时的外发光 */
}

.answer-wrapper {
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

/* 模糊层 */
.answer-content {
  flex-grow: 1;
  filter: blur(12px); /* 加大模糊力度 */
  opacity: 0.4;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  transform: scale(0.98); /* 模糊时稍微缩小 */
}

/* 激活状态（悬停或固定） */
.quiz-right:hover .answer-content,
.quiz-right.is-pinned .answer-content {
  filter: blur(0);
  opacity: 1;
  transform: scale(1); /* 还原大小 */
}

/* --- 遮罩提示 --- */
.blur-mask {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  z-index: 10;
  backdrop-filter: blur(2px); /* 磨砂效果 */
  transition: opacity 0.3s ease;
}

.mask-content {
  background: rgba(255, 255, 255, 0.9); /* 亮色背景 */
  padding: 10px 24px;
  border-radius: 30px;
  font-weight: 600;
  color: var(--vp-c-brand-dark);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  border: 1px solid rgba(255,255,255,0.5);
  display: flex; align-items: center; gap: 8px;
}
/* 暗黑模式下的遮罩适配 */
:root.dark .mask-content {
  background: rgba(30, 30, 30, 0.9);
  border-color: rgba(255,255,255,0.1);
  color: var(--vp-c-brand-light);
}

/* --- 底部操作栏 (Action Bar) --- */
.action-bar {
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid var(--vp-c-divider);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  opacity: 0; 
  transform: translateY(10px);
  transition: all 0.4s ease 0.1s; /* 稍微延迟一点出现 */
}

.quiz-right:hover .action-bar,
.quiz-right.is-pinned .action-bar {
  opacity: 1;
  transform: translateY(0);
}

.action-buttons { display: flex; gap: 16px; }

/* 按钮美化 */
.btn-review, .btn-master {
  padding: 8px 20px;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.2s;
  display: flex; align-items: center; gap: 6px;
}

.btn-review { background: var(--vp-c-bg-mute); color: var(--vp-c-text-2); }
.btn-review:hover { background: #fee2e2; color: #ef4444; transform: scale(1.05); }
.btn-review.active { background: #ef4444; color: white; box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3); }

.btn-master { background: var(--vp-c-bg-mute); color: var(--vp-c-text-2); }
.btn-master:hover { background: #d1fae5; color: #10b981; transform: scale(1.05); }
.btn-master.active { background: #10b981; color: white; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3); }

/* 固定按钮 (右上角) */
.pin-btn {
  background: transparent;
  border: 1px solid transparent;
  color: var(--vp-c-text-3);
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex; align-items: center; gap: 4px;
}
.pin-btn:hover { background: var(--vp-c-bg-soft); color: var(--vp-c-brand); }
.quiz-right.is-pinned .pin-btn { background: var(--vp-c-brand-dimm); color: var(--vp-c-brand); font-weight: bold; }

@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
</style>