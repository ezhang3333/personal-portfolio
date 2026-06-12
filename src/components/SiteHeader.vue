<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import resumeIcon from '../assets/resume-icon.png'
import githubIcon from '../assets/github-icon.png'
import linkedinIcon from '../assets/linkedin-icon.png'
import locationIcon from '../assets/location-icon.png'

const route = useRoute()
const isProjectsRoute = computed(() =>
  ['projects', 'all-projects', 'project-detail'].includes(String(route.name)),
)
</script>

<template>
  <header class="site-header">
    <div class="header-shell">
      <RouterLink to="/" class="brand">Ethan Zhang</RouterLink>

      <nav class="nav" aria-label="Primary">
        <RouterLink to="/" class="nav-link" exact-active-class="is-active">
          Home
        </RouterLink>
        <RouterLink to="/about" class="nav-link" active-class="is-active">
          About Me
        </RouterLink>
        <RouterLink
          to="/projects"
          class="nav-link"
          active-class="is-active"
          :class="{ 'is-active': isProjectsRoute }"
        >
          Projects
        </RouterLink>

        <div class="icon-group">
          <a
            href="/EthanZhangResume.pdf"
            target="_blank"
            rel="noopener"
            class="icon-link"
            aria-label="Resume"
          >
            <img :src="resumeIcon" alt="" class="icon" />
          </a>
          <a
            href="https://github.com/ezhang3333"
            target="_blank"
            rel="noopener"
            class="icon-link"
            aria-label="GitHub"
          >
            <img :src="githubIcon" alt="" class="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/ethan-zhang-10a56519b/"
            target="_blank"
            rel="noopener"
            class="icon-link"
            aria-label="LinkedIn"
          >
            <img :src="linkedinIcon" alt="" class="icon" />
          </a>
          <span class="location">
            <img :src="locationIcon" alt="" class="icon location-icon" />
            Boston, MA
          </span>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(254, 254, 254, 0.85);
  backdrop-filter: saturate(140%) blur(8.5px);
  -webkit-backdrop-filter: saturate(140%) blur(8.5px);
  border-bottom: 1px solid var(--line-soft);
}

.header-shell {
  width: 100%;
  padding-right: 32px;
  padding-left: 32px;
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.275rem;
}

.brand {
  display: inline-block;
  transform-origin: left center;
  font-size: 0.935rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--text-primary);
  transition:
    color 180ms ease,
    transform 180ms ease;
}

.brand:hover,
.brand:focus-visible {
  color: var(--accent);
  transform: scale(1.045);
}

.nav-link::after {
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

.nav-link:hover::after,
.nav-link:focus-visible::after,
.nav-link.is-active::after {
  transform: scaleX(1);
}

.nav {
  display: flex;
  align-items: center;
  gap: 1.7rem;
}

.nav-link {
  position: relative;
  font-size: 0.8075rem;
  font-weight: 500;
  color: var(--text-secondary);
  padding: 0.2975rem 0;
  transition: color 160ms ease;
}

.nav-link:hover,
.nav-link:focus-visible {
  color: var(--text-primary);
}

.nav-link.is-active {
  color: var(--accent);
}

.nav-link.is-active::after {
  background: var(--accent);
}

.icon-group {
  display: flex;
  align-items: center;
  gap: 1.0625rem;
  margin-left: 0.425rem;
  padding-left: 1.9125rem;
  border-left: 1px solid #000;
}

.icon-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.36rem;
  height: 1.36rem;
  opacity: 0.78;
  transition: opacity 160ms ease, transform 160ms ease;
}

.icon-link:hover,
.icon-link:focus-visible {
  opacity: 1;
  transform: translateY(-1px);
}

.icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.location {
  display: inline-flex;
  align-items: center;
  gap: 0.34rem;
  font-size: 0.8075rem;
  font-weight: 500;
  color: var(--text-secondary);
  white-space: nowrap;
  padding-left: 2.805rem;
}

.location-icon {
  width: 0.935rem;
  height: 0.935rem;
  opacity: 0.78;
}

@media (max-width: 640px) {
  .header-shell {
    width: 100%;
    padding-right: 32px;
    padding-left: 32px;
    height: var(--header-height);
    gap: 0.85rem;
  }

  .nav {
    gap: 0.935rem;
  }

  .nav-link {
    font-size: 0.748rem;
  }

  .brand {
    font-size: 0.85rem;
  }

  .icon-group {
    gap: 0.7225rem;
    padding-left: 0.7225rem;
    margin-left: 0.2125rem;
  }

  .icon-link {
    width: 1.1475rem;
    height: 1.1475rem;
  }
}
</style>
