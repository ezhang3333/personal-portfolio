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
              v-if="project.githubHref"
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

        </header>

        <div class="story-body">
          <section
            v-for="(section, sectionIndex) in project.body"
            :key="`${project.slug}-${sectionIndex}`"
            class="story-section"
          >
            <h2>{{ section.heading }}</h2>
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
  height: calc(100dvh - var(--header-height));
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

.story-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 0.85rem;
  padding-bottom: 0.9rem;
  border-bottom: 1px solid var(--line-soft);
}

.story-action {
  position: relative;
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

.story-action:not(.github-link)::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: -0.32rem;
  left: 0;
  height: 1.5px;
  border-radius: 2px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 220ms ease;
}

.story-action + .story-action {
  margin-left: 0.85rem;
  padding-left: 0.85rem;
  border-left: 1px solid #000;
}

.story-actions .back-link {
  margin-left: auto;
  padding-left: 0;
  border-left: 0;
}

.story-action:hover,
.story-action:focus-visible {
  color: var(--accent);
  transform: translateY(-1px);
}

.story-action:not(.github-link):hover::after,
.story-action:not(.github-link):focus-visible::after {
  transform: scaleX(1);
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
  position: relative;
  padding-top: 2rem;
  padding-left: 3.25rem;
}

.story-body::before {
  content: '';
  position: absolute;
  top: 2rem;
  bottom: 0;
  left: 0.45rem;
  width: 1px;
  background: var(--line-soft);
}

.story-section + .story-section {
  margin-top: 3.5rem;
}

.story-section h2 {
  position: relative;
  margin-bottom: 1.15rem;
  font-size: clamp(1.05rem, 1.35vw, 1.2rem);
  line-height: 1.2;
  letter-spacing: -0.02em;
  text-wrap: balance;
}

.story-section h2::before {
  content: '';
  position: absolute;
  top: 0.35em;
  left: -3.075rem;
  width: 0.55rem;
  height: 0.55rem;
  border: 2px solid var(--bg);
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 1px var(--accent);
}

.story-section h2::after {
  content: '';
  position: absolute;
  top: calc(0.35em + 0.275rem);
  left: -2.8rem;
  width: 2.15rem;
  height: 1px;
  background: var(--line-sfot);
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
    height: calc(100dvh - var(--header-height));
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

  .story-body {
    padding-left: 2.25rem;
  }

  .story-body::before {
    left: 0.3rem;
  }

  .story-section h2::before {
    left: -2.225rem;
  }

  .story-section h2::after {
    left: -1.95rem;
    width: 1.3rem;
  }
}
</style>
