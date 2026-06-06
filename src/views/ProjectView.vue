<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ProjectCard from '../components/ProjectCard.vue'
import loanMatch from '../assets/loan-match.png'
import nflFantasyBreakout from '../assets/nfl-fantasy-breakout.png'
import osLite from '../assets/os-lite.svg'
import quantumMatch from '../assets/quantum-match.png'
import nextIcon from '../assets/next-icon.png'

const projects = [
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
    summary: 'Vibe-coded app to improve the loan matching process',
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
</script>

<template>
  <main class="project-page">
    <section class="section-shell" aria-labelledby="projects-title">
      <div class="project-heading">
        <h1 class="project-header" id="projects-title">Latest Projects</h1>
        <RouterLink to="/projects/all" class="all-projects-link">
          <span>All Projects</span>
          <img :src="nextIcon" alt="" class="next-icon" aria-hidden="true" />
        </RouterLink>
      </div>

      <div class="project-grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          v-bind="project"
        />
      </div>
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

.project-page::-webkit-scrollbar {
  width: 0.65rem;
}

.project-page::-webkit-scrollbar-track {
  background: transparent;
}

.project-page::-webkit-scrollbar-thumb {
  background: rgba(111, 74, 51, 0.22);
  border-radius: 999px;
}

.section-shell {
  width: min(1320px, calc(100% - 3rem));
  margin: 0 auto;
  padding: 4.2rem 0 6rem;
}

.project-heading {
  display: flex;
  align-items: baseline;
  width: 100%;
  max-width: 1320px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 2.15rem;
}

.project-header {
  font-size: 60px;
}

h1 {
  font-size: clamp(3.8rem, 9vw, 8.5rem);
  line-height: 0.9;
  letter-spacing: -0.045em;
}

.all-projects-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  flex: 0 0 auto;
  margin-left: auto;
  margin-right: 20px;
  color: var(--text-secondary);
  font-size: clamp(0.9rem, 1.2vw, 1rem);
  font-weight: 700;
  line-height: 1;
  transform: translateY(-0.32rem);
  transition:
    color 180ms ease,
    transform 180ms ease;
}

.all-projects-link::after {
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

.all-projects-link:hover,
.all-projects-link:focus-visible {
  color: var(--accent);
  transform: translateY(-0.32rem) translateX(2px);
}

.all-projects-link:hover::after,
.all-projects-link:focus-visible::after {
  transform: scaleX(1);
}

.next-icon {
  width: 0.86rem;
  height: 0.86rem;
  object-fit: contain;
  transition: transform 180ms ease;
}

.all-projects-link:hover .next-icon,
.all-projects-link:focus-visible .next-icon {
  transform: translateX(2px);
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 650px));
  justify-content: center;
  gap: 20px;
}

@media (max-width: 1120px) {
  .project-heading {
    max-width: 650px;
  }

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
    gap: 0.9rem;
  }

  .all-projects-link,
  .all-projects-link:hover,
  .all-projects-link:focus-visible {
    margin-right: 0;
    transform: none;
  }
}
</style>
