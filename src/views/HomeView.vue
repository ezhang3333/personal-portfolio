<script setup lang="ts">
import sketchHeadshot from '../assets/sketch_headshot.png'
</script>

<template>
  <main class="home-page">
    <div class="section-shell hero-shell">
      <div class="hero-image-wrap">
        <img :src="sketchHeadshot" alt="Sketch portrait of Ethan Zhang" class="hero-sketch" />
      </div>
      <div class="hero-copy">
        <h1>Ethan Zhang</h1>
        <p class="hero-role">Software Engineer at Onshape by PTC</p>
        <p class="hero-bio">
          <strong>2 years</strong> of scaling full-stack web applications and
          <span class="text-highlight">building microservices.</span> 
          Passionate about maximizing my efficiency as a software 
          engineer without deteriorating the level of code produced.
          Constantly trying to build
          <RouterLink :to="{ name: 'projects' }" class="projects-link">projects</RouterLink>
          from the ground up
          that target both personal and globally unsolved problems.
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.home-page {
  height: calc(100dvh - var(--header-height));
  display: flex;
  align-items: center;
  overflow: hidden;
}

.section-shell {
  width: min(1120px, calc(100% - 3rem));
  margin: 0 auto;
}

.hero-shell {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: center;
  gap: 3.5rem;
}

.hero-image-wrap {
  display: flex;
  justify-content: center;
}

.hero-sketch {
  width: 100%;
  max-width: 480px;
  height: auto;
}

.hero-copy {
  max-width: 36rem;
}

.hero-copy h1 {
  font-size: clamp(2.8rem, 6.4vw, 5.4rem);
  line-height: 0.98;
  letter-spacing: -0.04em;
  margin-bottom: 0.6rem;
  text-wrap: balance;
}

.hero-role {
  font-size: clamp(1.1rem, 1.6vw, 1.35rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.4rem;
}

.hero-bio {
  max-width: 38ch;
  font-size: 1.02rem;
  line-height: 1.75;
  color: var(--text-secondary);
  text-wrap: pretty;
}

.text-highlight {
  color: var(--accent);
}

.projects-link {
  position: relative;
  display: inline-block;
  color: var(--accent);
  font-weight: 700;
  text-decoration: none;
}

.projects-link::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0.12em;
  left: 0;
  height: 2px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 180ms ease;
}

.projects-link:hover::after,
.projects-link:focus-visible::after {
  transform: scaleX(1);
  transform-origin: left;
}

.projects-link:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
}

@media (prefers-reduced-motion: reduce) {
  .projects-link::after {
    transition: none;
  }
}

@media (max-width: 760px) {
  .home-page {
    height: calc(100dvh - var(--header-height));
  }

  .hero-shell {
    grid-template-columns: minmax(0, 1fr);
    gap: 1.5rem;
  }

  .hero-sketch {
    max-width: 260px;
  }
}
</style>
