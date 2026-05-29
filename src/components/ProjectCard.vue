<script setup lang="ts">
import { computed, ref } from 'vue'
import { ChevronRight, ChevronDown } from '@lucide/vue'

const props = withDefaults(
  defineProps<{
    title: string
    summary: string
    details: string
    githubHref: string
    visualVariant?: 'ember' | 'grain' | 'field'
    initiallyExpanded?: boolean
  }>(),
  {
    visualVariant: 'ember',
    initiallyExpanded: false,
  },
)

const isExpanded = ref(props.initiallyExpanded)

const visualClass = computed(() => `variant-${props.visualVariant}`)

function toggleExpanded() {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
  <article class="project-card" :class="{ 'is-expanded': isExpanded }">
    <div class="visual-panel" :class="visualClass" aria-hidden="true">
      <span class="visual-grid"></span>
      <span class="visual-band"></span>
    </div>

    <div class="content-panel">
      <div class="title-row">
        <button
          type="button"
          class="title-toggle"
          :aria-expanded="isExpanded"
          @click="toggleExpanded"
        >
          <span class="project-title">{{ title }}</span>
          <component
            :is="isExpanded ? ChevronDown : ChevronRight"
            class="arrow-mark"
            :size="16"
            :stroke-width="2"
            aria-hidden="true"
          />
        </button>

        <a
          class="github-link"
          :href="githubHref"
          target="_blank"
          rel="noopener"
          aria-label="Open project GitHub link"
        >
          <svg
            class="github-mark"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>
      </div>

      <p class="card-copy">
        {{ isExpanded ? details : summary }}
      </p>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  position: relative;
  width: min(100%, 350px);
  height: 350px;
  overflow: hidden;
  border: 1px solid var(--line-soft);
  border-radius: 1.75rem;
  background: rgba(255, 251, 245, 0.92);
  box-shadow: var(--shadow-soft);
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease;
}

.project-card:hover {
  transform: translateY(-2px);
  border-color: var(--line-strong);
  box-shadow: var(--shadow-lifted);
}

.visual-panel {
  position: absolute;
  inset: 0;
  overflow: hidden;
  transition:
    opacity 220ms ease,
    transform 220ms ease;
}

.variant-ember {
  background:
    radial-gradient(circle at 22% 24%, rgba(255, 243, 231, 0.85), transparent 18%),
    linear-gradient(135deg, rgba(158, 100, 62, 0.92), rgba(101, 66, 46, 0.95));
}

.variant-grain {
  background:
    radial-gradient(circle at 72% 25%, rgba(254, 241, 224, 0.72), transparent 14%),
    linear-gradient(135deg, rgba(109, 84, 58, 0.98), rgba(73, 52, 40, 0.98));
}

.variant-field {
  background:
    radial-gradient(circle at 30% 68%, rgba(247, 235, 215, 0.7), transparent 18%),
    linear-gradient(160deg, rgba(128, 92, 60, 0.94), rgba(87, 60, 43, 0.98));
}

.visual-grid,
.visual-band {
  position: absolute;
  pointer-events: none;
}

.visual-grid {
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 28px 28px;
  opacity: 0.7;
}

.visual-band {
  inset: auto 0 5.7rem 0;
  height: 1px;
  background: rgba(255, 247, 238, 0.46);
}

.content-panel {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 35%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.15rem 1.15rem 1rem;
  background:
    linear-gradient(180deg, rgba(255, 251, 244, 0.9), rgba(255, 248, 240, 0.98)),
    rgba(255, 250, 244, 0.96);
  border-top: 1px solid rgba(111, 74, 51, 0.12);
  transition:
    height 220ms ease,
    background 220ms ease;
}

.title-row {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.title-toggle {
  flex: 1;
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0;
  border: 0;
  background: transparent;
  text-align: left;
  cursor: pointer;
}

.project-title {
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: var(--text-primary);
}

.arrow-mark {
  flex: 0 0 auto;
  color: var(--accent);
  transition: transform 220ms ease;
}

.github-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin-left: auto;
  border: 1px solid rgba(111, 74, 51, 0.16);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.52);
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background 180ms ease;
}

.github-link:hover,
.github-link:focus-visible {
  transform: translateY(-1px);
  border-color: var(--line-strong);
  background: rgba(255, 255, 255, 0.8);
}

.github-mark {
  width: 1rem;
  height: 1rem;
  fill: var(--accent);
}

.card-copy {
  max-width: 26ch;
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--text-secondary);
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.project-card.is-expanded .visual-panel {
  opacity: 0.16;
  transform: scale(1.03);
}

.project-card.is-expanded .content-panel {
  height: 100%;
  background:
    linear-gradient(180deg, rgba(255, 250, 243, 0.92), rgba(255, 247, 239, 0.98)),
    rgba(255, 249, 242, 0.97);
}

.project-card.is-expanded .card-copy {
  max-width: none;
  overflow: auto;
  -webkit-line-clamp: unset;
  padding-right: 0.35rem;
}

.project-card.is-expanded .card-copy::-webkit-scrollbar {
  width: 0.35rem;
}

.project-card.is-expanded .card-copy::-webkit-scrollbar-thumb {
  background: rgba(111, 74, 51, 0.22);
  border-radius: 999px;
}

@media (max-width: 640px) {
  .project-card {
    width: min(100%, 320px);
    height: 320px;
  }

  .card-copy {
    max-width: none;
  }
}
</style>
