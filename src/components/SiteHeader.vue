<script setup lang="ts">
import { RouterLink } from 'vue-router'
import resumeIcon from '../assets/resume-icon.png'
import githubIcon from '../assets/github-icon.png'
import linkedinIcon from '../assets/linkedin-icon.png'
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
        <RouterLink to="/projects" class="nav-link" active-class="is-active">
          Projects
        </RouterLink>

        <div class="icon-group">
          <a
            href="/EthanZhangsResume.pdf"
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
  backdrop-filter: saturate(140%) blur(10px);
  -webkit-backdrop-filter: saturate(140%) blur(10px);
  border-bottom: 1px solid var(--line-soft);
}

.header-shell {
  width: min(1320px, calc(100% - 3rem));
  margin-left: 50px;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.brand {
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--text-primary);
}

.nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  position: relative;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-secondary);
  padding: 0.35rem 0;
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
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 1.5px;
  background: var(--accent);
  border-radius: 2px;
}

.icon-group {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-left: 0.5rem;
  padding-left: 2.25rem;
  border-left: 1px solid var(--line-soft);
}

.icon-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
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

@media (max-width: 640px) {
  .header-shell {
    width: min(100% - 1.5rem, 1320px);
    height: 4rem;
    gap: 1rem;
  }

  .nav {
    gap: 1.1rem;
  }

  .nav-link {
    font-size: 0.88rem;
  }

  .brand {
    font-size: 1rem;
  }

  .icon-group {
    gap: 0.85rem;
    padding-left: 0.85rem;
    margin-left: 0.25rem;
  }

  .icon-link {
    width: 1.35rem;
    height: 1.35rem;
  }
}
</style>
