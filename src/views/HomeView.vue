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
          3+ years of scaling full-stack web applications and
          <span class="bio-highlight">building microservices</span>
          at companies of all different sizes. Passionate about maximizing my
          efficiency as a software engineer while maintaining the level of
          code I produce. In current times, that means constantly learning
          and staying up to date with the newest agentic coding methods and
          github repos as well as experimenting myself.
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.home-page {
  height: calc(100dvh - 4.5rem);
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

.bio-highlight {
  background: rgba(111, 74, 51, 0.14);
  color: var(--accent);
  padding: 0 0.25em;
  border-radius: 3px;
  font-weight: 600;
}

@media (max-width: 760px) {
  .home-page {
    height: calc(100dvh - 4rem);
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
