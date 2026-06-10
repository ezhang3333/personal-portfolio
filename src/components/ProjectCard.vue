<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  slug: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  imagePosition?: string
  siteHref?: string
}>()
</script>

<template>
  <article class="project-card">
    <img
      :src="imageSrc"
      :alt="imageAlt"
      class="project-image"
      :style="{ objectPosition: imagePosition ?? 'top center' }"
    />

    <div class="image-shade" aria-hidden="true"></div>

    <div class="project-copy">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>

      <div class="project-actions">
        <RouterLink
          :to="{ name: 'project-detail', params: { slug } }"
          class="project-button"
        >
          More details
        </RouterLink>
        <a
          v-if="siteHref"
          :href="siteHref"
          target="_blank"
          rel="noopener"
          class="project-button project-button-primary"
        >
          View site
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  position: relative;
  width: 100%;
  max-width: 650px;
  aspect-ratio: 13 / 8;
  overflow: hidden;
  border-radius: 0.45rem;
  background: var(--bg-warm);
  box-shadow: 0 22px 54px rgba(73, 43, 23, 0.13);
  isolation: isolate;
}

.project-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition:
    transform 320ms ease,
    filter 320ms ease;
}

.image-shade {
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(180deg, rgba(16, 12, 9, 0.06) 18%, rgba(16, 12, 9, 0.82) 100%),
    linear-gradient(90deg, rgba(16, 12, 9, 0.24), rgba(16, 12, 9, 0.04) 48%);
  transition: background 320ms ease;
}

.project-copy {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.42rem;
  padding: 1.55rem 1.6rem 1.45rem;
  color: #fff;
  transform: translateY(calc(3.05rem - 5px));
  transition: transform 280ms ease;
}

.project-copy h2 {
  max-width: 16ch;
  font-size: clamp(1.65rem, 2.25vw, 2.25rem);
  font-weight: 550;
  line-height: 0.98;
  letter-spacing: -0.035em;
  text-wrap: balance;
}

.project-copy p {
  max-width: 39ch;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 1px 18px rgba(0, 0, 0, 0.32);
}

.project-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.65rem;
  width: 100%;
  padding-top: 0.3rem;
  opacity: 0;
  transform: translateY(0.8rem);
  transition:
    opacity 240ms ease,
    transform 240ms ease;
}

.project-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 1.35rem;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: #fff;
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1;
  transition:
    color 180ms ease,
    opacity 180ms ease,
    transform 180ms ease;
}

.project-button::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -0.32rem;
  height: 1.5px;
  background: currentColor;
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 220ms ease;
}

.project-button:hover,
.project-button:focus-visible {
  transform: translateY(-1px);
  color: #fff;
}

.project-button:hover::after,
.project-button:focus-visible::after {
  transform: scaleX(1);
}

.project-button-primary {
  color: #fff;
}

.project-button-primary:hover,
.project-button-primary:focus-visible {
  color: #fff;
}

.project-card:hover .project-image,
.project-card:focus-within .project-image {
  transform: scale(1.045);
  filter: saturate(1.06) contrast(1.04);
}

.project-card:hover .image-shade,
.project-card:focus-within .image-shade {
  background:
    linear-gradient(180deg, rgba(16, 12, 9, 0.08) 6%, rgba(16, 12, 9, 0.9) 100%),
    linear-gradient(90deg, rgba(16, 12, 9, 0.32), rgba(16, 12, 9, 0.08) 48%);
}

.project-card:hover .project-copy,
.project-card:focus-within .project-copy {
  transform: translateY(0);
}

.project-card:hover .project-actions,
.project-card:focus-within .project-actions {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 720px) {
  .project-copy {
    padding: 1.15rem;
    transform: translateY(calc(2.85rem - 5px));
  }

  .project-copy h2 {
    font-size: clamp(1.35rem, 8vw, 1.9rem);
  }

  .project-copy p {
    font-size: 0.92rem;
  }

  .project-button {
    min-height: 2.2rem;
  }
}
</style>
