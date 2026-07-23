<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'

const props = defineProps<{
  open: boolean
  href: string
  projectTitle: string
  notice?: string
}>()

const emit = defineEmits<{
  close: []
}>()

const dialog = ref<HTMLElement | null>(null)
const continueLink = ref<HTMLAnchorElement | null>(null)
let previouslyFocusedElement: HTMLElement | null = null
let previousBodyOverflow = ''

const defaultNotice =
  'This project uses free-tier hosting, so its backend may pause after seven days without traffic. If you hit a cold start, please give the site 30 to 60 seconds to wake up and if that does not work, please feel free to reach out to me through any form of contact. Lets be honest...you are probably going to be the only traffic on the site since I last went on it. Thanks for being patient with me :)'

function close() {
  emit('close')
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    close()
    return
  }

  if (event.key !== 'Tab' || !dialog.value) return

  const focusableElements = Array.from(
    dialog.value.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
  )

  if (focusableElements.length === 0) return

  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault()
    lastElement.focus()
  } else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault()
    firstElement.focus()
  }
}

watch(
  () => props.open,
  async (isOpen) => {
    if (isOpen) {
      previouslyFocusedElement = document.activeElement as HTMLElement | null
      previousBodyOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      await nextTick()
      continueLink.value?.focus()
      return
    }

    document.body.style.overflow = previousBodyOverflow
    previouslyFocusedElement?.focus()
    previouslyFocusedElement = null
  },
)

onBeforeUnmount(() => {
  if (props.open) {
    document.body.style.overflow = previousBodyOverflow
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition name="live-site-modal">
      <div
        v-if="open"
        class="live-site-modal-backdrop"
        role="presentation"
        @click.self="close"
      >
        <section
          ref="dialog"
          class="live-site-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="live-site-modal-title"
          aria-describedby="live-site-modal-description"
          @keydown="handleKeydown"
        >
          <div class="live-site-modal-heading">
            <span class="status-dot" aria-hidden="true"></span>
            <p>Before you visit</p>
          </div>

          <h2 id="live-site-modal-title">The server may need a moment</h2>
          <p id="live-site-modal-description">{{ notice ?? defaultNotice }}</p>

          <div class="live-site-modal-actions">
            <a
              ref="continueLink"
              :href="href"
              target="_blank"
              rel="noopener"
              class="live-site-modal-continue"
              :aria-label="`Continue to ${projectTitle} live site`"
              @click="close"
            >
              Continue to live site
              <span aria-hidden="true">&#8599;</span>
            </a>
            <button type="button" class="live-site-modal-close" @click="close">Not now</button>
          </div>
        </section>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.live-site-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 110;
  display: grid;
  place-items: center;
  padding: 1.5rem;
  background: rgba(17, 16, 15, 0.48);
  backdrop-filter: blur(4px);
}

.live-site-modal {
  width: min(100%, 38rem);
  padding: clamp(1.5rem, 4vw, 2.25rem);
  border: 1px solid var(--line-soft);
  border-radius: 0.5rem;
  background: var(--bg);
  box-shadow: 0 28px 80px rgba(40, 29, 21, 0.24);
}

.live-site-modal-heading {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: 1rem;
  color: var(--accent);
}

.live-site-modal-heading p {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.status-dot {
  width: 0.58rem;
  height: 0.58rem;
  border: 2px solid color-mix(in srgb, var(--accent) 28%, transparent);
  border-radius: 50%;
  background: var(--accent);
  box-sizing: content-box;
}

.live-site-modal h2 {
  color: var(--text-primary);
  font-size: clamp(1.35rem, 3vw, 1.8rem);
  line-height: 1.15;
  letter-spacing: -0.03em;
}

.live-site-modal > p {
  margin-top: 1rem;
  padding: 0.9rem 1rem;
  border-radius: 0.4rem;
  background: var(--bg-warm);
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.65;
}

.live-site-modal-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.25rem;
  margin-top: 1.4rem;
}

.live-site-modal-continue,
.live-site-modal-close {
  font: inherit;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition:
    color 180ms ease,
    background 180ms ease,
    border-color 180ms ease,
    transform 180ms ease;
}

.live-site-modal-continue {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  min-height: 2.6rem;
  padding: 0.65rem 0.9rem;
  border: 1px solid var(--accent);
  border-radius: 0.35rem;
  background: var(--accent);
  color: #fff;
}

.live-site-modal-continue:hover,
.live-site-modal-continue:focus-visible {
  border-color: var(--text-primary);
  background: var(--text-primary);
  transform: translateY(-1px);
}

.live-site-modal-close {
  position: relative;
  padding: 0 0 0.3rem;
  border: 0;
  background: transparent;
  color: var(--text-secondary);
}

.live-site-modal-close::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 1.5px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 220ms ease;
}

.live-site-modal-close:hover,
.live-site-modal-close:focus-visible {
  color: var(--accent);
  transform: translateY(-1px);
}

.live-site-modal-close:hover::after,
.live-site-modal-close:focus-visible::after {
  transform: scaleX(1);
}

.live-site-modal-enter-active,
.live-site-modal-leave-active {
  transition: opacity 180ms ease;
}

.live-site-modal-enter-active .live-site-modal,
.live-site-modal-leave-active .live-site-modal {
  transition:
    opacity 180ms ease,
    transform 180ms ease;
}

.live-site-modal-enter-from,
.live-site-modal-leave-to,
.live-site-modal-enter-from .live-site-modal,
.live-site-modal-leave-to .live-site-modal {
  opacity: 0;
}

.live-site-modal-enter-from .live-site-modal,
.live-site-modal-leave-to .live-site-modal {
  transform: translateY(0.75rem) scale(0.985);
}

@media (max-width: 480px) {
  .live-site-modal-backdrop {
    padding: 0.75rem;
  }

  .live-site-modal-actions {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (prefers-reduced-motion: reduce) {
  .live-site-modal-backdrop,
  .live-site-modal,
  .live-site-modal-continue,
  .live-site-modal-close,
  .live-site-modal-close::after {
    transition: none;
  }
}
</style>
