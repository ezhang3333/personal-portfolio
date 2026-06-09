import loanMatch from '../assets/loan-match.png'
import nflFantasyBreakout from '../assets/nfl-fantasy-breakout.png'
import osLite from '../assets/os-lite.svg'
import quantumDataPortal from '../assets/quantum-data-portal.png'
import quantumMatch from '../assets/quantum-match.png'
import toneClassifier from '../assets/tone-classifier.png'

export interface ProjectBodySection {
  heading?: string
  paragraphs: string[]
}

export interface Project {
  slug: string
  title: string
  summary: string
  imageSrc: string
  imageAlt: string
  imagePosition?: string
  githubHref: string
  siteHref?: string
  body: ProjectBodySection[]
}

const githubProfile = 'https://github.com/ezhang3333'

export const featuredProjects: Project[] = [
  {
    slug: 'quantum-match',
    title: 'Quantum Match',
    summary: 'Facial matching chromium kiosk prototype for the $500M Illinois Quantum & Microelectronics Park',
    imageSrc: quantumMatch,
    imageAlt: 'Quantum Match facial recognition interface',
    imagePosition: 'center center',
    githubHref: githubProfile,
    siteHref: 'https://quantum-match.vercel.app/',
    body: [],
  },
  {
    slug: 'nfl-breakout',
    title: 'NFL Breakout',
    summary: 'To help me win my $500 NFL fantasy football league',
    imageSrc: nflFantasyBreakout,
    imageAlt: 'NFL fantasy breakout analytics screenshot',
    githubHref: githubProfile,
    siteHref: 'https://fantasy-football-tawny.vercel.app/',
    body: [],
  },
  {
    slug: 'os-lite',
    title: 'OS-Lite',
    summary: 'A RISC-V 64-bit operating system with processes, filesystems, drivers, and a UNIX-style shell',
    imageSrc: osLite,
    imageAlt: 'OS-Lite booting into the LUMON OS shell in QEMU',
    githubHref: githubProfile,
    body: [],
  },
  {
    slug: 'loan-match',
    title: 'Loan Match',
    summary: 'Vibe-coded app to improve the loan matching process.',
    imageSrc: loanMatch,
    imageAlt: 'Loan match web application screenshot',
    githubHref: githubProfile,
    body: [],
  },
]

export const moreProjects: Project[] = [
  {
    slug: 'quantum-portal',
    title: 'Quantum Portal',
    summary: 'Collection data portal used by the Univeristy of Illinois academic staff to help with the Quantum Match project',
    imageSrc: quantumDataPortal,
    imageAlt: 'Quantum data portal dashboard screenshot',
    imagePosition: 'center center',
    githubHref: githubProfile,
    siteHref: 'https://quantum-data-portal.vercel.app/',
    body: [],
  },
  {
    slug: 'tone-classifier',
    title: 'Tone Classifier',
    summary: 'My first machine learning project',
    imageSrc: toneClassifier,
    imageAlt: 'Tone classifier application screenshot',
    githubHref: githubProfile,
    body: [],
  },
]

export const projects: Project[] = [...featuredProjects, ...moreProjects]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
