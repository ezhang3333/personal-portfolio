import loanMatch from '../assets/loan-match.png'
import nflFantasyBreakout from '../assets/nfl-fantasy-breakout.png'
import osLite from '../assets/os-lite.svg'
import quantumDataPortal from '../assets/quantum-data-portal.png'
import quantumMatch from '../assets/quantum-match.png'
import toneClassifier from '../assets/tone-classifier.png'

export interface ProjectBodySection {
  heading: string
  paragraphs: string[]
}

export interface Project {
  slug: string
  title: string
  cardDescription: string
  imageSrc: string
  imageAlt: string
  imagePosition?: string
  githubHref?: string
  siteHref?: string
  body: ProjectBodySection[]
}

export const featuredProjects: Project[] = [
  {
    slug: 'quantum-match',
    title: 'Quantum Match',
    cardDescription: 'Facial matching chromium kiosk prototype for the $500M Illinois Quantum & Microelectronics Park',
    imageSrc: quantumMatch,
    imageAlt: 'Quantum Match facial recognition interface',
    imagePosition: 'center center',
    githubHref: 'https://github.com/ezhang3333/quantum-match',
    siteHref: 'https://quantum-match.vercel.app/',
    body: [
      {
        heading: 'Project Overview',
        paragraphs: [
          'Quantum Match is an interactive facial-matching project built as a smart mirror prototype for the Illinois Quantum and Microelectronics Park. The goal was to create an engaging experience ' +
            'where a user could choose a category like Scientist, Engineer, or Entrepreneur, have their face scanned, and be matched with a notable Quantum figure from that category.',
          'The original prototype was built around physical hardware: a one-way mirror, a hidden monitor, a webcam, an ESP32 control box, and a Raspberry Pi running the facial recognition pipeline. ' +
            'Since the actual prototype depended on hardware and had to run within the constraints of a Raspberry Pi with ' +
            'limited RAM, I adapted the concept into a website so users could interact with the matching experience directly from a browser.',
          'The application flow is: landing page, the user selects a match category, provides an image through the web interface, and the system processes the face and compares it against the selected dataset. The closest ' +
            'match is then returned with the matched figure, category, and related information.',
          'This version keeps the most important part of the project: the facial matching logic and the personalized result experience.',
        ],
      },
      {
        heading: 'Facial Matching Pipeline',
        paragraphs: [
          'The matching pipeline was built around facial embeddings instead of raw image comparison. Since the original prototype ran locally on a Raspberry Pi 4 with a 4GB RAM constraint, ' +
            'we had to be intentional about using lightweight, open-source computer vision libraries instead of heavier cloud-based or large-model solutions.',
          'We used OpenCV for camera input, image preprocessing, face detection support, cropping, resizing, and normalization because it is fast, well-supported, and efficient enough to run on embedded hardware. ' +
            'The system converted each detected face into a numerical embedding, which allowed us to compare faces using vector similarity instead of repeatedly analyzing full-resolution images.',
          'To make the pipeline more efficient, embeddings for the known scientists, engineers, and entrepreneurs were precomputed ahead of time and stored locally. During a user interaction, the system only needed to generate ' +
            "one embedding for the user, filter the local dataset by the selected category, and compare that vector against the stored embeddings using similarity scoring such as cosine distance.",
          'This design helped reduce memory usage and runtime overhead on the Raspberry Pi. Rather than loading and processing every database image during each scan, the application worked with compact embedding vectors, ' +
            'making the system more practical for a hardware prototype with limited RAM and compute resources.',
        ],
      },
      {
        heading: 'Dataset and Matching Categories',
        paragraphs: [
          'The project organizes matches into three main categories: Scientists, Engineers, and Entrepreneurs.',
          'This category system was part of the original physical interaction. On the prototype, each category was represented by a physical button connected to the ESP32. On the web version, that same idea ' +
            'is translated into the user interface.',
        ],
      },
      {
        heading: 'Hardware',
        paragraphs: [
          'Although the portfolio version is software-focused, the original Quantum Match prototype included a full physical system. We built a smart mirror using a 70% reflective one-way mirror, a monitor ' +
            'mounted behind the glass, a Logitech webcam, a Raspberry Pi 4, and an ESP32-based control box with category buttons.',
          'The ESP32 sent the selected category to the Raspberry Pi over Bluetooth Low Energy, while the Pi handled image capture, facial recognition, database lookup, and result rendering. The custom PCB ' +
            'included button inputs, debouncing circuitry, boot/reset controls, and a 5V to 3.3V power regulation circuit for the microcontroller.',
        ],
      },
    ],
  },
  {
    slug: 'nfl-breakout',
    title: 'NFL Breakout',
    cardDescription: 'To help me win my $500 NFL fantasy football league',
    imageSrc: nflFantasyBreakout,
    imageAlt: 'NFL fantasy breakout analytics screenshot',
    githubHref: 'https://github.com/ezhang3333/fantasy-football',
    siteHref: 'https://fantasy-football-tawny.vercel.app/',
    body: [
      {
        heading: 'Project Overview',
        paragraphs: ['A fantasy football analytics project built to help me win my $500 NFL fantasy football league.'],
      },
    ],
  },
  {
    slug: 'os-lite',
    title: 'OS-Lite',
    cardDescription: 'A RISC-V 64-bit operating system with processes, filesystems, drivers, and a UNIX-style shell',
    imageSrc: osLite,
    imageAlt: 'OS-Lite booting into the LUMON OS shell in QEMU',
    body: [
      {
        heading: 'Project Overview',
        paragraphs: [
          'OS-Lite is a RISC-V 64-bit operating system with processes, filesystems, drivers, and a UNIX-style shell.',
        ],
      },
    ],
  },
  {
    slug: 'loan-match',
    title: 'Loan Match',
    cardDescription: 'Vibe-coded app to improve the loan matching process.',
    imageSrc: loanMatch,
    imageAlt: 'Loan match web application screenshot',
    githubHref: 'https://github.com/ezhang3333/Loan-Assistant',
    body: [
      {
        heading: 'Project Overview',
        paragraphs: ['Loan Match is a vibe-coded application designed to improve the loan matching process.'],
      },
    ],
  },
]

export const moreProjects: Project[] = [
  {
    slug: 'quantum-portal',
    title: 'Quantum Portal',
    cardDescription: 'Collection data portal used by the Univeristy of Illinois academic staff to help with the Quantum Match project',
    imageSrc: quantumDataPortal,
    imageAlt: 'Quantum data portal dashboard screenshot',
    imagePosition: 'center center',
    githubHref: 'https://github.com/ezhang3333/quantum-data-portal',
    siteHref: 'https://quantum-data-portal.vercel.app/',
    body: [
      {
        heading: 'Project Overview',
        paragraphs: [
          'Quantum Portal is a data collection portal used by University of Illinois academic staff to support the Quantum Match project.',
        ],
      },
    ],
  },
  {
    slug: 'tone-classifier',
    title: 'Tone Classifier',
    cardDescription: 'My first machine learning project',
    imageSrc: toneClassifier,
    imageAlt: 'Tone classifier application screenshot',
    githubHref: 'https://github.com/ezhang3333/ToneClassifier',
    body: [
      {
        heading: 'Project Overview',
        paragraphs: ['Tone Classifier was my first machine learning project.'],
      },
    ],
  },
]

export const projects: Project[] = [...featuredProjects, ...moreProjects]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
