<script setup lang="ts">
import { computed, ref } from 'vue'

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
          <span class="arrow-mark" aria-hidden="true"></span>
        </button>

        <a
          class="github-link"
          :href="githubHref"
          target="_blank"
          rel="noopener"
          aria-label="Open project GitHub link"
        >
          <span class="github-mark" aria-hidden="true">GH</span>
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
  position: relative;
  width: 0.85rem;
  height: 0.85rem;
  flex: 0 0 auto;
  transition: transform 220ms ease;
}

.arrow-mark::before,
.arrow-mark::after {
  content: '';
  position: absolute;
  background: var(--accent);
  border-radius: 999px;
}

.arrow-mark::before {
  top: 50%;
  left: 0.1rem;
  width: 0.65rem;
  height: 1px;
}

.arrow-mark::after {
  top: 0.26rem;
  right: 0.1rem;
  width: 1px;
  height: 0.65rem;
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
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--accent);
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

.project-card.is-expanded .arrow-mark {
  transform: rotate(45deg);
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
