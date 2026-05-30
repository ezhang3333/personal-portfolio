<script setup lang="ts">
</script>

<template>
  <main class="about-page">
    <div class="section-shell">
      <h1>About Me</h1>
    </div>
  </main>
</template>

<style scoped>
.about-page {
  height: calc(100dvh - 4.5rem);
  display: flex;
  align-items: center;
  overflow: hidden;
}

.section-shell {
  width: min(1120px, calc(100% - 3rem));
  margin: 0 auto;
}

h1 {
  font-size: clamp(3rem, 8vw, 7rem);
  line-height: 0.98;
  letter-spacing: -0.04em;
}

@media (max-width: 760px) {
  .about-page {
    height: calc(100dvh - 4rem);
  }
}
</style>
