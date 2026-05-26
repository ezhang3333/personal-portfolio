<script setup lang="ts">
import { ref } from 'vue'

const isExpanded = ref(false)
const toggle = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
  <article class="project-card" :class="{ 'is-expanded': isExpanded }">
    <div class="card-image"></div>
    <div class="card-body">
      <p class="card-caption">
        Project description placeholder. Add details about what this project does,
        the technologies used, and what you learned building it. This text expands
        when you click the arrow below to reveal the full description.
      </p>
      <div class="card-actions">
        <a href="#" class="github-btn">
          <img class="github-icon" src="" alt="GitHub" />
          View on GitHub
        </a>
        <button
          class="toggle-btn"
          :aria-label="isExpanded ? 'Collapse details' : 'Expand details'"
          @click="toggle"
        >
          <img class="arrow-icon" src="" alt="Toggle details" />
        </button>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  border: 1px solid var(--border);
  background: var(--card-bg);
  overflow: hidden;
  transition: box-shadow 0.2s ease;
}

.project-card:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.07);
}

/* Image area — shrinks when expanded */
.card-image {
  height: 210px;
  background: #e4e4e4;
  transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card.is-expanded .card-image {
  height: 120px;
}

.card-body {
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Caption — clamped to 2 lines by default, fully shown when expanded */
.card-caption {
  font-size: 0.875rem;
  line-height: 1.7;
  color: var(--text-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-card.is-expanded .card-caption {
  -webkit-line-clamp: unset;
  overflow: visible;
}

.card-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.github-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  border: 1px solid var(--border);
  padding: 0.4rem 0.85rem;
  background: transparent;
  transition: background 0.18s;
  cursor: pointer;
}

.github-btn:hover {
  background: #f0f0f0;
}

.github-icon {
  width: 15px;
  height: 15px;
}

.toggle-btn {
  background: none;
  border: 1px solid var(--border);
  cursor: pointer;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.18s;
}

.toggle-btn:hover {
  background: #f0f0f0;
}

.arrow-icon {
  width: 15px;
  height: 15px;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card.is-expanded .arrow-icon {
  transform: rotate(180deg);
}
</style>
