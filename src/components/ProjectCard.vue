<script setup lang="ts">
defineProps<{
  title: string
  summary: string
  imageSrc: string
  imageAlt: string
  detailsHref: string
  siteHref?: string
}>()
</script>

<template>
  <article class="project-card">
    <img :src="imageSrc" :alt="imageAlt" class="project-image" />

    <div class="image-shade" aria-hidden="true"></div>

    <div class="project-copy">
      <h2>{{ title }}</h2>
      <p>{{ summary }}</p>

      <div class="project-actions">
        <a :href="detailsHref" target="_blank" rel="noopener" class="project-button">
          More details
        </a>
        <a
          v-if="siteHref"
          :href="siteHref"
          target="_blank"
          rel="noopener"
          class="project-button project-button-primary"
        >
          View site
        </a>
        <span v-else class="project-button project-button-disabled" aria-disabled="true">
          View site
        </span>
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
  gap: 0.62rem;
  padding: 1.55rem 1.6rem 1.45rem;
  color: #fff;
  transform: translateY(3.05rem);
  transition: transform 280ms ease;
}

.project-copy h2 {
  max-width: 16ch;
  font-size: clamp(1.65rem, 2.25vw, 2.25rem);
  line-height: 0.98;
  letter-spacing: -0.035em;
  text-wrap: balance;
}

.project-copy p {
  max-width: 39ch;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 1px 18px rgba(0, 0, 0, 0.32);
}

.project-actions {
  display: flex;
  align-items: center;
  gap: 0.65rem;
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
  min-height: 2.35rem;
  padding: 0.65rem 0.9rem;
  border: 1px solid rgba(255, 255, 255, 0.56);
  border-radius: 0.35rem;
  background: rgba(255, 255, 255, 0.11);
  color: #fff;
  font-size: 0.88rem;
  font-weight: 700;
  line-height: 1;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition:
    transform 180ms ease,
    background 180ms ease,
    border-color 180ms ease;
}

.project-button::after {
  content: '';
  position: absolute;
  left: 0.9rem;
  right: 0.9rem;
  bottom: 0.48rem;
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
  background: rgba(255, 255, 255, 0.22);
  border-color: rgba(255, 255, 255, 0.82);
}

.project-button:hover::after,
.project-button:focus-visible::after {
  transform: scaleX(1);
}

.project-button-primary {
  background: rgba(255, 255, 255, 0.92);
  color: #2e2017;
  border-color: rgba(255, 255, 255, 0.92);
}

.project-button-primary:hover,
.project-button-primary:focus-visible {
  background: #fff;
  border-color: #fff;
}

.project-button-disabled {
  cursor: not-allowed;
  opacity: 0.52;
}

.project-button-disabled::after {
  content: none;
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
    transform: translateY(2.85rem);
  }

  .project-copy h2 {
    font-size: clamp(1.35rem, 8vw, 1.9rem);
  }

  .project-copy p {
    font-size: 0.92rem;
  }

  .project-button {
    min-height: 2.2rem;
    padding: 0.58rem 0.72rem;
  }
}
</style>
