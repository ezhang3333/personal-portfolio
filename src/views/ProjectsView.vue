<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue'

const years = [2026, 2025, 2024, 2023]
</script>

<template>
  <main class="projects-main">
    <h1 class="projects-heading">Projects</h1>

    <div class="timeline">
      <div v-for="year in years" :key="year" class="timeline-item">
        <div class="timeline-marker">
          <div class="timeline-dot"></div>
          <span class="timeline-year">{{ year }}</span>
          <div class="timeline-connector"></div>
        </div>
        <ProjectCard />
      </div>
    </div>
  </main>
</template>

<style scoped>
.projects-main {
  padding-top: calc(var(--nav-height) + 3rem);
  padding-bottom: 6rem;
  max-width: 860px;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
}

.projects-heading {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 4rem;
}

/* Timeline container */
.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

/* Continuous vertical line through all items */
.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 25%;
  width: 1px;
  background: var(--border);
  transform: translateX(-50%);
}

/* Each year row */
.timeline-item {
  display: grid;
  grid-template-columns: 25% 1fr;
  align-items: start;
  position: relative;
}

/* Left marker zone */
.timeline-marker {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 1.5rem;
  padding-top: 1.25rem;
}

.timeline-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--accent);
  border: 2px solid #fff;
  box-shadow: 0 0 0 1px var(--accent);
  flex-shrink: 0;
}

.timeline-year {
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-secondary);
  margin-top: 0.4rem;
}

/* Horizontal line from dot to card */
.timeline-connector {
  position: absolute;
  /* align vertically to dot center: padding-top (1.25rem) + half dot height (6px) */
  top: calc(1.25rem + 6px);
  right: 0;
  width: 1.5rem;
  height: 1px;
  background: var(--border);
}
</style>
