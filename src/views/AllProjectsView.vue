<script setup lang="ts">
import { nextTick, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useRoute } from 'vue-router'
import ProjectCard from '../components/ProjectCard.vue'
import { featuredProjects, moreProjects } from '../data/projects'

const route = useRoute()

onMounted(async () => {
  if (route.hash !== '#more-projects') return

  await nextTick()
  document.querySelector(route.hash)?.scrollIntoView({ behavior: 'smooth' })
})

</script>

<template>
  <main class="project-page">
    <section class="section-shell" aria-labelledby="all-projects-title">
      <div class="project-heading">
        <div>
          <h1 id="all-projects-title" class="project-header">Projects</h1>
        </div>

        <RouterLink to="/projects" class="back-link">Back to latest</RouterLink>
      </div>

      <div class="project-grid">
        <ProjectCard
          v-for="project in featuredProjects"
          :key="project.slug"
          :slug="project.slug"
          :title="project.title"
          :summary="project.summary"
          :image-src="project.imageSrc"
          :image-alt="project.imageAlt"
          :image-position="project.imagePosition"
          :site-href="project.siteHref"
        />
      </div>

      <section id="more-projects" class="more-projects" aria-labelledby="more-projects-title">
        <div class="section-heading">
          <h2 id="more-projects-title">More Projects</h2>
        </div>

        <div class="project-grid">
          <ProjectCard
            v-for="project in moreProjects"
            :key="project.slug"
            :slug="project.slug"
            :title="project.title"
            :summary="project.summary"
            :image-src="project.imageSrc"
            :image-alt="project.imageAlt"
            :image-position="project.imagePosition"
            :site-href="project.siteHref"
          />
        </div>
      </section>
    </section>
  </main>
</template>

<style scoped>
.project-page {
  height: calc(100dvh - var(--header-height));
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

.project-header {
  font-size: 60px;
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
  font-size: 60px;
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
    height: calc(100dvh - var(--header-height));
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
