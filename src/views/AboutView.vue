<script setup lang="ts">
import { ref, onMounted } from 'vue'
import nextIcon from '../assets/next-icon.png'

const contributionCount = ref<number | null>(null)

onMounted(async () => {
  try {
    const res = await fetch('https://github-contributions-api.jogruber.de/v4/ezhang3333?y=last')
    const data = await res.json()
    contributionCount.value = data?.total?.lastYear ?? null
  } catch {
    contributionCount.value = null
  }
})
</script>

<template>
  <main class="about-page">
    <div class="section-shell about-shell">
      <div class="about-top">
        <div class="about-intro">
          <h1>About Me</h1>
        </div>
        <div class="about-detail">
          <p>
            Software Enginner who is exploring the middle ground between keeping up with the boundary of agentic coding,
            learning and gaining experience as an entry-level dev, and maximizing the efficiency and level of code produced.
          </p>
          <p>

          </p>
          <div class="working-list">
            Currently working on:<br>
            <span class="working-item">
              <img :src="nextIcon" alt="" class="working-icon" aria-hidden="true" />
              this project
            </span>
            <span class="working-item">
              <img :src="nextIcon" alt="" class="working-icon" aria-hidden="true" />
              learning neovim (previously a VSCode user)
            </span>
          </div>
        </div>
      </div>
      <div class="contribution">
        <h2 class="contribution-title">
          Contributions
          <span v-if="contributionCount !== null" class="contribution-count">
            {{ contributionCount }} in the last year
          </span>
        </h2>
        <img
          src="https://ghchart.rshah.org/6f4a33/ezhang3333"
          alt="Ethan Zhang's GitHub contribution graph"
          class="contribution-graph"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
.about-page {
  height: calc(100dvh - 4.5rem);
  display: flex;
  overflow: hidden;
}

.section-shell {
  width: min(1120px, calc(100% - 3rem));
  margin: 0 auto;
}

.about-shell {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 6.5rem;
  padding-bottom: 7.5rem;
}

.about-top {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: start;
  gap: 4.0rem;
}

.contribution {
  margin-top: auto;
}

.contribution-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.contribution-count {
  margin-left: 0.6rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.contribution-graph {
  width: 100%;
  height: auto;
  display: block;
}

h1 {
  font-size: 80px;
  line-height: 0.98;
  letter-spacing: -0.04em;
  margin-bottom: 1.6rem;
  padding-top: 0.6rem;
}

.about-lead {
  max-width: 40ch;
  font-size: 1.02rem;
  line-height: 1.75;
  color: var(--text-secondary);
  text-wrap: pretty;
}

.about-lead + .about-lead {
  margin-top: 1.1rem;
}

.about-detail {
  max-width: 46ch;
}

.about-detail p {
  font-size: 1.02rem;
  line-height: 1.75;
  color: var(--text-secondary);
  text-wrap: pretty;
}

.about-detail p + p {
  margin-top: 1.1rem;
}

.working-list {
  margin-top: 1.1rem;
  font-size: 1.02rem;
  line-height: 1.75;
  color: var(--text-secondary);
}

.working-item {
  display: flex;
  align-items: center;
  gap: 0.48rem;
}

.working-icon {
  width: 0.78rem;
  height: 0.78rem;
  object-fit: contain;
  flex: 0 0 auto;
}

/* Helpers ready for real content */
.about-bold {
  font-weight: 700;
  color: var(--text-primary);
}

.about-link {
  position: relative;
  color: var(--accent);
  text-decoration: none;
}

.about-link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 1.5px;
  background: currentColor;
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 220ms ease;
}

.about-link:hover::after,
.about-link:focus-visible::after {
  transform: scaleX(1);
}

@media (max-width: 760px) {
  .about-page {
    height: calc(100dvh - 4rem);
  }

  .about-shell {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .about-top {
    grid-template-columns: minmax(0, 1fr);
    gap: 1.5rem;
  }

  h1 {
    margin-bottom: 1rem;
  }
}
</style>
