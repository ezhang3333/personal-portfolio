<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import githubIcon from '../assets/github-icon.png'
import { getProjectBySlug } from '../data/projects'

const route = useRoute()

const project = computed(() => getProjectBySlug(String(route.params.slug)))
</script>

<template>
  <main v-if="project" class="project-detail-page">
    <figure class="project-hero">
      <img
        :src="project.imageSrc"
        :alt="project.imageAlt"
        class="project-hero-image"
        :style="{ objectPosition: project.imagePosition ?? 'top center' }"
      />
    </figure>

    <article class="project-story">
      <div class="story-content">
        <header class="story-header">
          <h1>{{ project.title }}</h1>

          <nav class="story-actions" aria-label="Project links">
            <a
              v-if="project.siteHref"
              :href="project.siteHref"
              target="_blank"
              rel="noopener"
              class="story-action"
            >
              View live site
            </a>
            <a
              :href="project.githubHref"
              target="_blank"
              rel="noopener"
              class="story-action github-link"
              aria-label="View project on GitHub"
            >
              <img :src="githubIcon" alt="" class="github-icon" aria-hidden="true" />
            </a>
            <RouterLink :to="{ name: 'all-projects' }" class="story-action back-link">
              Back to projects
            </RouterLink>
          </nav>

          <p class="project-summary">{{ project.summary }}</p>
        </header>

        <div v-if="project.body.length" class="story-body">
          <section
            v-for="(section, sectionIndex) in project.body"
            :key="`${project.slug}-${sectionIndex}`"
            class="story-section"
          >
            <h2 v-if="section.heading">{{ section.heading }}</h2>
            <p
              v-for="(paragraph, paragraphIndex) in section.paragraphs"
              :key="`${project.slug}-${sectionIndex}-${paragraphIndex}`"
            >
              {{ paragraph }}
            </p>
          </section>
        </div>
      </div>
    </article>
  </main>
</template>

<style scoped>
.project-detail-page {
  height: calc(100dvh - 4.5rem);
  overflow-x: hidden;
  overflow-y: auto;
  background: #efefed;
  scroll-behavior: smooth;
}

.project-detail-page::-webkit-scrollbar {
  width: 0.65rem;
}

.project-detail-page::-webkit-scrollbar-track {
  background: transparent;
}

.project-detail-page::-webkit-scrollbar-thumb {
  border-radius: 999px;
  background: rgba(184, 99, 58, 0.24);
}

.project-hero {
  width: 100%;
  height: clamp(27rem, 62vh, 43rem);
  overflow: hidden;
  background: var(--bg-warm);
}

.project-hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

.project-story {
  position: relative;
  z-index: 1;
  width: min(66.666vw, 80rem);
  min-height: 22rem;
  margin: -6.5rem auto 0;
  padding: clamp(2rem, 4vw, 4rem) clamp(1.5rem, 5vw, 5rem) 7rem;
  background: var(--bg);
  box-shadow: 0 24px 70px rgba(40, 29, 21, 0.1);
}

.story-content {
  width: 100%;
}

.story-header,
.story-body {
  width: min(100%, 75ch);
}

.story-header h1 {
  font-size: clamp(1.25rem, 1.8vw, 1.5rem);
  font-weight: 750;
  line-height: 1.2;
  letter-spacing: -0.025em;
  text-wrap: balance;
}

.project-summary {
  max-width: 65ch;
  margin-top: 1.25rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 450;
  line-height: 1.7;
  text-wrap: pretty;
}

.story-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 0.85rem;
  padding-bottom: 0.9rem;
  border-bottom: 1px solid var(--line-soft);
}

.story-action {
  display: inline-flex;
  align-items: center;
  min-height: 1.35rem;
  color: var(--text-secondary);
  font-size: 0.82rem;
  font-weight: 650;
  line-height: 1;
  transition:
    color 180ms ease,
    transform 180ms ease;
}

.story-action + .story-action {
  margin-left: 0.85rem;
  padding-left: 0.85rem;
  border-left: 1px solid #000;
}

.story-action:hover,
.story-action:focus-visible {
  color: var(--accent);
  transform: translateY(-1px);
}

.github-link {
  justify-content: center;
  opacity: 0.78;
}

.github-link:hover,
.github-link:focus-visible {
  opacity: 1;
  transform: translateY(-1px);
}

.github-icon {
  width: 1.15rem;
  height: 1.15rem;
  object-fit: contain;
}

.story-body {
  padding-top: 2rem;
}

.story-section + .story-section {
  margin-top: 3.5rem;
}

.story-section h2 {
  margin-bottom: 1.15rem;
  font-size: clamp(1.6rem, 2.5vw, 2.35rem);
  line-height: 1.05;
  letter-spacing: -0.035em;
  text-wrap: balance;
}

.story-section p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.7;
  text-wrap: pretty;
}

.story-section p + p {
  margin-top: 1.25rem;
}

@media (max-width: 900px) {
  .project-story {
    width: min(100% - 3rem, 48rem);
    margin-top: -4rem;
  }
}

@media (max-width: 640px) {
  .project-detail-page {
    height: calc(100dvh - 4rem);
  }

  .project-hero {
    height: clamp(20rem, 58vh, 30rem);
  }

  .project-story {
    width: calc(100% - 1.5rem);
    margin-top: -2.5rem;
    padding: 1.75rem 1.25rem 5rem;
  }

  .story-header h1 {
    font-size: 1.25rem;
  }
}
</style>
