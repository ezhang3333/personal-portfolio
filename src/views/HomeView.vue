<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <!-- Hero -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-headline">Hey, I'm Ethan.</h1>
        <p class="hero-bio">
          I'm a student based in [location]. I build things for the web,
          think carefully about design, and care about the details.
          Currently studying [field] and working on things I find interesting.
        </p>
      </div>
    </section>

    <!-- Navigation cards -->
    <section class="nav-cards">
      <a href="/resume.pdf" target="_blank" rel="noopener" class="card">
        <img class="card-icon" src="" alt="Resume icon" />
        <span class="card-label">Resume</span>
        <p class="card-desc">Download my current resume as a PDF.</p>
      </a>

      <a href="mailto:ezhang3333@gmail.com" class="card">
        <img class="card-icon" src="" alt="Contact icon" />
        <span class="card-label">Contact</span>
        <p class="card-desc">Reach out via email — I'd love to chat.</p>
      </a>

      <RouterLink to="/about" class="card">
        <img class="card-icon" src="" alt="About icon" />
        <span class="card-label">About Me</span>
        <p class="card-desc">Background, interests, and what drives me.</p>
      </RouterLink>
    </section>
  </main>
</template>

<style scoped>
/* Hero */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 6rem;
  padding-top: var(--nav-height);
}

.hero-content {
  max-width: 780px;
}

.hero-headline {
  font-size: clamp(3rem, 6vw, 5.5rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--accent);
  margin-bottom: 1.5rem;
}

.hero-bio {
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.8;
  color: var(--text-secondary);
  max-width: 52ch;
}

/* Nav cards */
.nav-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 5rem 6rem;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 2rem;
  border: 1px solid var(--border);
  background: var(--card-bg);
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.08);
}

.card-icon {
  width: 28px;
  height: 28px;
}

.card-label {
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--accent);
}

.card-desc {
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--text-secondary);
}
</style>
