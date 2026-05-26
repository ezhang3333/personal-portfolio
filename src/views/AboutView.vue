<template>
  <main class="about-main">
    <!-- Left: sticky photo -->
    <aside class="photo-col">
      <div class="photo-placeholder">
        <span>photo coming soon</span>
      </div>
    </aside>

    <!-- Right: scrollable bio -->
    <section class="bio-col">
      <h1 class="about-heading">About Me</h1>

      <div class="bio-block">
        <h2 class="bio-label">Background</h2>
        <p>
          Placeholder — tell readers where you're from, what you've studied,
          and any defining experiences that shaped how you think and work.
        </p>
      </div>

      <div class="bio-block">
        <h2 class="bio-label">Interests</h2>
        <p>
          Placeholder — what are you genuinely curious about? Topics, fields,
          hobbies, or questions you keep coming back to.
        </p>
      </div>

      <div class="bio-block">
        <h2 class="bio-label">Currently</h2>
        <p>
          Placeholder — what are you actively working on, learning, or building
          right now? Keep this section fresh.
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-main {
  display: grid;
  grid-template-columns: 40% 60%;
  min-height: 100vh;
  padding-top: var(--nav-height);
}

/* Left column — sticky photo */
.photo-col {
  position: sticky;
  top: var(--nav-height);
  height: calc(100vh - var(--nav-height));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  border-right: 1px solid var(--grid-color);
}

.photo-placeholder {
  width: 100%;
  max-width: 300px;
  aspect-ratio: 3 / 4;
  border: 1px solid var(--border);
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.photo-placeholder span {
  font-size: 0.72rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #aaa;
}

/* Right column — scrollable bio */
.bio-col {
  padding: 5rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}

.about-heading {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.02em;
}

.bio-label {
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--grid-color);
}

.bio-block p {
  font-size: 1rem;
  line-height: 1.9;
  color: var(--text-secondary);
  max-width: 60ch;
  font-weight: 300;
}
</style>
