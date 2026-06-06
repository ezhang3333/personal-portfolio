<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ProjectCard from '../components/ProjectCard.vue'
import quantumDataPortal from '../assets/quantum-data-portal.png'
import loanMatch from '../assets/loan-match.png'
import toneClassifier from '../assets/tone-classifier.png'
import nflFantasyBreakout from '../assets/nfl-fantasy-breakout.png'
import osLite from '../assets/os-lite.svg'
import quantumMatch from '../assets/quantum-match.png'

const featuredProjects = [
  {
    title: 'Quantum Match',
    summary: 'An interactive smart mirror that matches a face with a scientist, engineer, or entrepreneur.',
    imageSrc: quantumMatch,
    imageAlt: 'Quantum Match facial recognition interface',
    detailsHref: 'https://github.com/ezhang3333',
    siteHref: 'https://quantum-match.vercel.app/',
  },
  {
    title: 'Loan Match',
    summary: 'Vibe-coded app to improve the loan matching process.',
    imageSrc: loanMatch,
    imageAlt: 'Loan match web application screenshot',
    detailsHref: 'https://github.com/ezhang3333',
    hideSiteAction: true,
  },
  {
    title: 'OS-Lite',
    summary: 'A RISC-V 64-bit operating system with processes, filesystems, drivers, and a UNIX-style shell.',
    imageSrc: osLite,
    imageAlt: 'OS-Lite booting into the LUMON OS shell in QEMU',
    detailsHref: 'https://github.com/ezhang3333',
    hideSiteAction: true,
  },
  {
    title: 'NFL Breakout',
    summary: 'A football analytics project for surfacing player breakout signals.',
    imageSrc: nflFantasyBreakout,
    imageAlt: 'NFL fantasy breakout analytics screenshot',
    detailsHref: 'https://github.com/ezhang3333',
    siteHref: 'https://fantasy-football-tawny.vercel.app/',
  },
]

const moreProjects = [
  {
    title: 'Quantum Portal',
    summary: 'A clean dashboard for exploring quantum company and leadership data.',
    imageSrc: quantumDataPortal,
    imageAlt: 'Quantum data portal dashboard screenshot',
    detailsHref: 'https://github.com/ezhang3333',
    siteHref: 'https://quantum-data-portal.vercel.app/',
  },
  {
    title: 'Tone Classifier',
    summary: 'My first machine learning project.',
    imageSrc: toneClassifier,
    imageAlt: 'Tone classifier application screenshot',
    detailsHref: 'https://github.com/ezhang3333',
    hideSiteAction: true,
  },
]
</script>

<template>
  <main class="project-page">
    <section class="section-shell" aria-labelledby="all-projects-title">
      <div class="project-heading">
        <div>
          <p class="eyebrow">Selected work / 06 projects</p>
          <h1 id="all-projects-title">All Projects</h1>
        </div>

        <RouterLink to="/projects" class="back-link">Back to latest</RouterLink>
      </div>

      <div class="project-grid">
        <ProjectCard
          v-for="project in featuredProjects"
          :key="project.title"
          v-bind="project"
        />
      </div>

      <section class="more-projects" aria-labelledby="more-projects-title">
        <div class="section-heading">
          <p class="eyebrow">Archive</p>
          <h2 id="more-projects-title">More Projects</h2>
        </div>

        <div class="project-grid">
          <ProjectCard
            v-for="project in moreProjects"
            :key="project.title"
            v-bind="project"
          />
        </div>
      </section>
    </section>
  </main>
</template>

<style scoped>
.project-page {
  height: calc(100dvh - 4.5rem);
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

.section-shell {
  width: min(1320px, calc(100% - 3rem));
  margin: 0 auto;
  padding: 3.5rem 0 6rem;
}

.project-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2.15rem;
}

.eyebrow {
  margin-bottom: 0.7rem;
  color: var(--text-secondary);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

h1 {
  font-size: clamp(3.8rem, 8vw, 7.5rem);
  line-height: 0.86;
  letter-spacing: -0.055em;
  text-wrap: balance;
}

.back-link {
  position: relative;
  flex: 0 0 auto;
  margin-right: 1.25rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 700;
  transition: color 180ms ease;
}

.back-link::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: -0.32rem;
  left: 0;
  height: 1.5px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 220ms ease;
}

.back-link:hover,
.back-link:focus-visible {
  color: var(--accent);
}

.back-link:hover::after,
.back-link:focus-visible::after {
  transform: scaleX(1);
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 650px));
  justify-content: center;
  gap: 20px;
}

.more-projects {
  padding-top: 5rem;
}

.section-heading {
  margin-bottom: 1.6rem;
}

.section-heading h2 {
  font-size: clamp(2.3rem, 5vw, 4.5rem);
  line-height: 0.95;
  letter-spacing: -0.045em;
}

@media (max-width: 1120px) {
  .project-grid {
    grid-template-columns: minmax(0, 650px);
  }
}

@media (max-width: 760px) {
  .project-page {
    height: calc(100dvh - 4rem);
  }

  .section-shell {
    width: min(100% - 1.5rem, 650px);
    padding: 3rem 0 4rem;
  }

  .project-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 1.25rem;
  }

  .back-link {
    margin-right: 0;
  }
}
</style>
