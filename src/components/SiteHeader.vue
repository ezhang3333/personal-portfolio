<script setup lang="ts">
import { RouterLink } from 'vue-router'
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
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(250, 250, 247, 0.85);
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
}
</style>
