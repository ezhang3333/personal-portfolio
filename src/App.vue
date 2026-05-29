<script setup lang="ts">
import ProjectCard from './components/ProjectCard.vue'

type Project = {
  title: string
  summary: string
  details: string
  githubHref: string
  visualVariant: 'ember' | 'grain' | 'field'
}

type ProjectYear = {
  year: string
  projects: Project[]
}

const projectYears: ProjectYear[] = [
  {
    year: '2026',
    projects: [
      {
        title: 'Portfolio redesign',
        summary: 'A warmer single-page portfolio with a stronger editorial rhythm.',
        details:
          'I am rebuilding this site around a clearer hierarchy, a centered timeline, and a tighter design system so the work feels more deliberate from the first screen to the last.',
        githubHref: '#',
        visualVariant: 'ember',
      },
      {
        title: 'Interface studies',
        summary: 'Short experiments around motion restraint and card behavior.',
        details:
          'These studies focus on spacing, transitions, and how interactions can feel more physical without becoming loud or decorative.',
        githubHref: '#',
        visualVariant: 'grain',
      },
      {
        title: 'Component patterns',
        summary: 'Reusable layout and content blocks for personal web projects.',
        details:
          'I use these patterns to test visual systems quickly, especially typography scales, section spacing, and how repeated components behave across breakpoints.',
        githubHref: '#',
        visualVariant: 'field',
      },
      {
        title: 'Placeholder project',
        summary: 'Short summary to replace later.',
        details:
          'Longer description that I will fill in once the project is real.',
        githubHref: '#',
        visualVariant: 'ember',
      },
    ],
  },
  {
    year: '2025',
    projects: [
      {
        title: 'Frontend prototypes',
        summary: 'Small builds centered on layout systems and visual polish.',
        details:
          'These projects were mostly about learning how to iterate on structure quickly and make simple interfaces feel more intentional through typography and spacing.',
        githubHref: '#',
        visualVariant: 'grain',
      },
      {
        title: 'Design system notes',
        summary: 'A running record of UI decisions, tokens, and reusable rules.',
        details:
          'I started documenting recurring design choices so future changes would be more consistent and I would not need to re-decide the basics every time I updated a page.',
        githubHref: '#',
        visualVariant: 'ember',
      },
    ],
  },
  {
    year: '2024',
    projects: [
      {
        title: 'Student projects',
        summary: 'Course and independent work that taught me how to ship.',
        details:
          'This was the period where I spent the most time translating rough ideas into working interfaces and learning which details actually matter once something is live.',
        githubHref: '#',
        visualVariant: 'field',
      },
    ],
  },
]
</script>

<template>
  <main class="landing-page">
    <section class="hero-section">
      <div class="section-shell hero-shell">
        <div class="hero-copy">
          <h1>Hey, I&apos;m Ethan.</h1>
          <p class="hero-lead">
            I&apos;m a student who likes building for the web, thinking through
            interfaces, and making simple things feel considered.
          </p>
          <p class="hero-support">
            This page is a compact view of what I&apos;m making, how I think, and
            the best way to reach me.
          </p>
        </div>
      </div>
    </section>

    <section class="timeline-section" aria-labelledby="timeline-title">
      <div class="section-shell timeline-shell">
        <div class="section-heading timeline-heading">
          <h2 id="timeline-title">Projects</h2>
        </div>

        <div class="timeline">
          <div
            v-for="yearGroup in projectYears"
            :key="yearGroup.year"
            class="year-block"
          >
            <div class="year-marker">
              <span class="year-label">{{ yearGroup.year }}</span>
            </div>

            <div class="projects-grid">
              <ProjectCard
                v-for="project in yearGroup.projects"
                :key="`${yearGroup.year}-${project.title}`"
                :title="project.title"
                :summary="project.summary"
                :details="project.details"
                :github-href="project.githubHref"
                :visual-variant="project.visualVariant"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-section" aria-labelledby="contact-title">
      <div class="section-shell contact-shell">
        <div class="section-heading">
          <p class="section-kicker">Resume and contact</p>
          <h2 id="contact-title">If you want the quick version, start here.</h2>
        </div>

        <div class="contact-grid">
          <a href="/resume.pdf" target="_blank" rel="noopener" class="contact-card">
            <span class="contact-label">Resume</span>
            <p>Open the current PDF version of my resume.</p>
            <span class="contact-action">View resume</span>
          </a>

          <a href="mailto:ezhang3333@gmail.com" class="contact-card">
            <span class="contact-label">Contact</span>
            <p>Email me if you want to talk about a project, internship, or idea.</p>
            <span class="contact-action">ezhang3333@gmail.com</span>
          </a>
        </div>

        <p class="closing-note">
          I care about clear systems, thoughtful design, and work that holds up
          after the first draft.
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.landing-page {
  position: relative;
}

.section-shell {
  width: min(1120px, calc(100% - 3rem));
  margin: 0 auto;
}

.hero-section {
  min-height: 100dvh;
  display: flex;
  align-items: center;
  padding: 4.5rem 0 3rem;
}

.hero-shell {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 2rem;
}

.section-kicker {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
}

.hero-copy {
  max-width: 44rem;
}

.hero-copy h1 {
  max-width: 10ch;
  font-size: clamp(3.6rem, 8vw, 7.4rem);
  line-height: 0.94;
  letter-spacing: -0.05em;
  margin-bottom: 1.5rem;
  text-wrap: balance;
}

.hero-lead,
.hero-support,
.section-heading h2,
.closing-note {
  text-wrap: pretty;
}

.hero-lead {
  max-width: 34ch;
  font-size: clamp(1.15rem, 2.1vw, 1.5rem);
  line-height: 1.65;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.hero-support {
  max-width: 42ch;
  font-size: 1rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.timeline-section,
.contact-section {
  padding: 5.5rem 0;
}

.timeline-shell {
  width: min(1320px, calc(100% - 3rem));
}

.section-heading {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  margin-bottom: 3rem;
}

.timeline-heading {
  align-items: center;
  text-align: center;
}

.section-heading h2 {
  max-width: 18ch;
  font-size: clamp(2rem, 4.2vw, 3.6rem);
  line-height: 1.02;
  letter-spacing: -0.04em;
}

.timeline {
  position: relative;
  display: grid;
  gap: 4.5rem;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0.4rem;
  bottom: 0.4rem;
  left: 25%;
  width: 1px;
  background: linear-gradient(180deg, var(--line-strong), rgba(111, 74, 51, 0.18));
}

.year-block {
  display: grid;
  grid-template-columns: 25% minmax(0, 1fr);
  align-items: start;
  column-gap: 0;
}

.year-marker {
  position: relative;
  grid-column: 1;
  padding-right: 1.5rem;
  text-align: right;
}

.year-label {
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--accent);
}

.year-marker::after {
  content: '';
  position: absolute;
  top: 0.35rem;
  right: 0;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 999px;
  background: #cc7f52;
  border: 2px solid rgba(255, 249, 240, 0.95);
  box-shadow: 0 0 0 1px var(--line-strong);
  transform: translateX(50%);
  z-index: 1;
}

.projects-grid {
  grid-column: 2;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 350px));
  gap: 1.75rem;
  padding-left: 2rem;
  justify-content: start;
}

.contact-shell {
  padding-bottom: 6rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
}

.contact-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 15rem;
  padding: 1.75rem;
  border: 1px solid var(--line-soft);
  border-radius: var(--radius-lg);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.2)),
    var(--surface-raised);
  box-shadow: var(--shadow-soft);
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease;
}

.contact-card:hover,
.contact-card:focus-visible {
  transform: translateY(-3px);
  border-color: var(--line-strong);
  box-shadow: var(--shadow-lifted);
}

.contact-label {
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.contact-card p {
  max-width: 28ch;
  font-size: 0.98rem;
  line-height: 1.75;
  color: var(--text-secondary);
}

.contact-action {
  margin-top: auto;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--accent);
}

.closing-note {
  max-width: 40ch;
  margin-top: 2.25rem;
  font-size: 1rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

@media (max-width: 1024px) {
  .timeline-shell {
    width: min(100% - 2rem, 1320px);
  }

  .timeline::before {
    left: 18%;
  }

  .year-block {
    grid-template-columns: 18% minmax(0, 1fr);
  }

  .projects-grid {
    gap: 1.25rem;
    padding-left: 1.5rem;
  }
}

@media (max-width: 760px) {
  .hero-section {
    padding-top: 3.25rem;
  }

  .timeline-heading {
    align-items: flex-start;
    text-align: left;
  }

  .timeline {
    gap: 3rem;
  }

  .timeline::before {
    left: 1.05rem;
  }

  .year-block {
    grid-template-columns: 1fr;
    row-gap: 1.25rem;
  }

  .year-marker {
    grid-column: 1;
    padding-left: 2rem;
    padding-right: 0;
    text-align: left;
  }

  .year-marker::after {
    top: 0.5rem;
    right: auto;
    left: 1.05rem;
    transform: translateX(-50%);
  }

  .projects-grid {
    grid-column: 1;
    grid-template-columns: minmax(0, 350px);
    padding-left: 2rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .section-shell,
  .timeline-shell {
    width: min(100% - 1.5rem, 1320px);
  }

  .hero-section,
  .timeline-section,
  .contact-section {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .hero-copy h1 {
    max-width: 8ch;
  }
}
</style>
