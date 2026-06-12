<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import githubIcon from '../assets/github-icon.png'
import { getProjectBySlug } from '../data/projects'

const route = useRoute()
const isGithubNoticeOpen = ref(false)

const project = computed(() => getProjectBySlug(String(route.params.slug)))

function closeGithubNotice() {
  isGithubNoticeOpen.value = false
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    closeGithubNotice()
  }
}

watch(() => route.params.slug, closeGithubNotice)
onMounted(() => window.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))

function getParagraphParts(paragraph: string) {
  if (project.value?.slug !== 'quantum-portal') {
    return [{ text: paragraph, isProjectLink: false }]
  }

  return paragraph.split(/(Quantum Match)/g).map((text) => ({
    text,
    isProjectLink: text === 'Quantum Match',
  }))
}
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
            <span
              v-if="project.siteHref && project.siteNotice"
              class="site-link-with-notice"
            >
              <a
                :href="project.siteHref"
                target="_blank"
                rel="noopener"
                class="story-action"
                aria-describedby="site-notice-tooltip"
              >
                View live site
              </a>
              <span id="site-notice-tooltip" class="site-notice-tooltip" role="tooltip">
                <strong>Just a moment while we wake things up</strong>
                {{ project.siteNotice }}
              </span>
            </span>
            <a
              v-else-if="project.siteHref"
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
            <button
              v-else-if="project.githubNotice"
              type="button"
              class="story-action github-link github-notice-trigger"
              aria-label="Why the OS-Lite GitHub repository is unavailable"
              @click="isGithubNoticeOpen = true"
            >
              <img :src="githubIcon" alt="" class="github-icon" aria-hidden="true" />
            </button>
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
              :class="{ 'project-disclaimer': paragraph.startsWith('Disclaimer:') }"
            >
              <template
                v-for="(part, partIndex) in getParagraphParts(paragraph)"
                :key="`${project.slug}-${sectionIndex}-${paragraphIndex}-${partIndex}`"
              >
                <RouterLink
                  v-if="part.isProjectLink"
                  :to="{ name: 'project-detail', params: { slug: 'quantum-match' } }"
                  class="project-inline-link"
                >
                  {{ part.text }}
                </RouterLink>
                <template v-else>{{ part.text }}</template>
              </template>
            </p>
          </section>
        </div>
      </div>
    </article>

    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="isGithubNoticeOpen && project.githubNotice"
          class="github-modal-backdrop"
          role="presentation"
          @click.self="closeGithubNotice"
        >
          <section
            class="github-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="github-modal-title"
          >
            <div class="github-modal-heading">
              <img :src="githubIcon" alt="" class="github-modal-icon" aria-hidden="true" />
              <p>Repository access</p>
            </div>
            <h2 id="github-modal-title">Why the source code is not public</h2>
            <p>{{ project.githubNotice }}</p>
            <button type="button" class="github-modal-close" autofocus @click="closeGithubNotice">
              Close
            </button>
          </section>
        </div>
      </Transition>
    </Teleport>
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

.story-action + .story-action,
.site-link-with-notice + .story-action {
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

.github-notice-trigger {
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}

.site-link-with-notice {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.site-notice-tooltip {
  position: absolute;
  top: calc(100% + 0.85rem);
  left: 0;
  z-index: 10;
  width: min(20rem, calc(100vw - 3rem));
  padding: 0.85rem 1rem;
  border: 1px solid var(--line-soft);
  border-radius: 0.4rem;
  background: var(--bg);
  box-shadow: 0 14px 36px rgba(40, 29, 21, 0.16);
  color: var(--text-secondary);
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1.5;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-0.35rem);
  transition:
    opacity 160ms ease,
    transform 160ms ease;
}

.site-notice-tooltip::before {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 1.25rem;
  border: 0.4rem solid transparent;
  border-bottom-color: var(--bg);
}

.site-notice-tooltip strong {
  display: block;
  margin-bottom: 0.3rem;
  color: var(--text-primary);
  font-size: 0.82rem;
}

.site-link-with-notice:hover .site-notice-tooltip,
.site-link-with-notice:focus-within .site-notice-tooltip {
  opacity: 1;
  transform: translateY(0);
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

.github-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding: 1.5rem;
  background: rgba(17, 16, 15, 0.48);
  backdrop-filter: blur(4px);
}

.github-modal {
  width: min(100%, 44rem);
  padding: clamp(1.5rem, 4vw, 2.25rem);
  border: 1px solid var(--line-soft);
  border-radius: 0.5rem;
  background: var(--bg);
  box-shadow: 0 28px 80px rgba(40, 29, 21, 0.24);
}

.github-modal-heading {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: 1rem;
  color: var(--accent);
}

.github-modal-heading p {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.github-modal-icon {
  width: 1.15rem;
  height: 1.15rem;
  object-fit: contain;
}

.github-modal h2 {
  font-size: clamp(1.35rem, 3vw, 1.8rem);
  line-height: 1.15;
  letter-spacing: -0.03em;
}

.github-modal > p {
  margin-top: 1rem;
  padding: 0.9rem 1rem;
  border-radius: 0.4rem;
  background: var(--bg-warm);
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.65;
}

.github-modal-close {
  position: relative;
  margin-top: 1.4rem;
  padding: 0 0 0.3rem;
  border: 0;
  background: transparent;
  color: var(--text-secondary);
  font: inherit;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition:
    color 180ms ease,
    transform 180ms ease;
}

.github-modal-close::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 1.5px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 220ms ease;
}

.github-modal-close:hover,
.github-modal-close:focus-visible {
  color: var(--accent);
  transform: translateY(-1px);
}

.github-modal-close:hover::after,
.github-modal-close:focus-visible::after {
  transform: scaleX(1);
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 180ms ease;
}

.modal-enter-active .github-modal,
.modal-leave-active .github-modal {
  transition:
    opacity 180ms ease,
    transform 180ms ease;
}

.modal-enter-from,
.modal-leave-to,
.modal-enter-from .github-modal,
.modal-leave-to .github-modal {
  opacity: 0;
}

.modal-enter-from .github-modal,
.modal-leave-to .github-modal {
  transform: translateY(0.75rem) scale(0.985);
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

.story-section .project-disclaimer {
  padding: 0.8rem 1rem;
  border-radius: 0.4rem;
  background: var(--bg-warm);
}

.project-inline-link {
  position: relative;
  display: inline-block;
  color: var(--accent);
  font-weight: 700;
  text-decoration: none;
}

.project-inline-link::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0.12em;
  left: 0;
  height: 1.5px;
  border-radius: 2px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 180ms ease;
}

.project-inline-link:hover::after,
.project-inline-link:focus-visible::after {
  transform: scaleX(1);
  transform-origin: left;
}

.project-inline-link:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  .project-inline-link::after,
  .site-notice-tooltip,
  .github-modal-backdrop,
  .github-modal {
    transition: none;
  }
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
