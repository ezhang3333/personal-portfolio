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
  githubNotice?: string
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
        ],
      },
      {
        heading: 'Facial Matching Pipeline',
        paragraphs: [
          'The matching pipeline was built around facial embeddings instead of raw image comparison. Since the original prototype ran locally on a Raspberry Pi 4 with a 4GB RAM constraint, ' +
            'we had to be intentional about using lightweight, open-source computer vision libraries instead of heavier cloud-based or large-model solutions.',
          'We used OpenCV for camera input, image preprocessing, face detection support, cropping, resizing, and normalization because it is fast, well-supported, and efficient enough to run on embedded hardware. ' +
            'OpenCV and InsightFace would do much of the heavy lifting, and we would take the vector embeddings and run cosine similarity against our pre-computed dataset of famous Quantum people from the selected category.',
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
        heading: 'Project Overview and Purpose',
        paragraphs: [
          'I built this platform to improve the weekly lineup and waiver-wire decisions I made for my fantasy football team. Rankings from platforms such as ESPN, Sleeper, and FantasyPros were useful references, but they often reacted slowly to changes in player usage, opportunity, and recent performance. I wanted an evidence-based system that could identify those changes directly from current NFL data.',
          'The result is a full-stack prediction platform that forecasts a player\'s average fantasy-point production over the next four weeks. Based on week-over-week testing, its predictions were more useful for my decision-making than the rankings from ESPN, Sleeper, and even FantasyPros, which was an aggregate of over 50+ fantasy experts. Personally, I would use it as a tool in my $500 fantasy football league.',
        ],
      },
      {
        heading: 'Workflow and Implementation',
        paragraphs: [
          'The project collects and combines approximately ten seasons of data from nflverse, NFL Next Gen Stats, Pro Football Reference, and ESPN. Weekly player statistics, snap counts, schedules, betting lines, advanced efficiency metrics, roster information, and opposing-defense performance are cleaned and combined into a dataset that is indexed by (player, week).',
          'I designed separate prediction models for quarterbacks, running backs, wide receivers, and tight ends because future performance at each position depends on different signals. Quarterback features emphasize passing volume, air yards, efficiency, rushing production, and pass-defense matchups; running back features prioritize touches, snap share, rushing workload, receiving involvement, and opponent strength; receiver and tight-end features focus on targets, air yards, target share, separation, yards after catch, and recent usage.',
          'Models are trained on historical seasons and evaluated against a later season rather than randomly mixing games from different years, preventing future information from leaking into training. Evaluation includes prediction error, ranking correlation, comparisons with recent-performance baselines, and the ability to identify each week\'s top performers.',
          'A FastAPI backend manages model training, prediction requests, and historical results, while SQLite stores training configurations and outputs so model runs can be compared. ',
        ],
      },
      {
        heading: 'Tech Stack',
        paragraphs: [
          'Python, XGBoost, FastAPI, React, TypeScript, SQLite, nflverse',
        ],
      },
    ],
  },
  {
    slug: 'os-lite',
    title: 'OS-Lite',
    cardDescription: 'A RISC-V 64-bit operating system with processes, filesystems, drivers, and a UNIX-style shell',
    imageSrc: osLite,
    imageAlt: 'OS-Lite booting into the LUMON OS shell in QEMU',
    githubNotice: 'This operating system was developed as part of a university course, so I cannot publish the source code in a public GitHub repository without violating university policy. Anyone who would like to verify my work is welcome to contact me and ask about the project :). I chose to feature it on my personal portfolio because the kernel contained approximately 7,000 lines of code, while only about 1,500 lines were provided at the beginning of the course. I wrote the remaining 5,500 lines, implementing the core operating-system functionality, including interrupts, the Platform-Level Interrupt Controller (PLIC), threads, processes, user programs, the shell, VirtIO, the backing device, the NGFS filesystem, and other essential kernel components.',
    body: [
      {
        heading: 'Project Overview and Purpose',
        paragraphs: [
          'OS-lite is a single-core multithreaded 64-bit RISC-V operating system that was supports all the basic functionality of a operating system at a toned down scale. The drivers we support are uart, rtc, virtio, vioblk (virtio block device), and viorng (entropy). All testing was done on a QEMU emulator and to learn more about the purpose of this project please click on the github icon. '
        ],
      },
      {
        heading: 'Implementation',
        paragraphs: [
          'OS-lite is very in-depth and I could talk about all the design decisions and implementation decisions endlessly but in a technical overview the kernal is meant to run on a single core with 512MB of RAM and will be multithreaded with preemptive multitasking. What I mean by that is that the internal timer will cause a thread to yield at a certain clock cycle rate but also the kernel itself can also cause context switches due to things like condition variables, locks, etc.',
          'The main filesystem where all the user programs are stored is an NGFS FAT-style system that uses a virtual backing device (Vioblk) due to a lack of physical persistant storage device. A write-back cache is implemented in RAM for performance.',
          'Threads and processes are preempted with syscalls like fork, exec, wait, exit. Our paging scheme is Sv39 and follow the RISC-V paging and flag architecture that can be found on their website.',
          'The user space can run games like trek, rogue, zork, etc. With the help of syscalls, it was also possible to implement a shell that supports the basic shell commands like pipes, sequencing, background, redirection, cat, ls, wc, echo, rm, etc. '
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
        heading: 'Project Overview and Purpose',
        paragraphs: [
          'Loan Maatch is a vibe-coded loan approval and matching application to improve the current matching process. All the predictions and smart features such as the bank approval heatmap and loan assistant are based on datasets extracted from Kaggle so in order to reach a production state we would need to have access to real-time data. Besides the underlying data, the features and base functionality can truly rival any of the current most used loan approval websites.',
        ],
      },
      {
        heading: 'Workflow and Implementation',
        paragraphs: [
          'Users create an account and enter information including income, credit score, employment status, existing loans, location, and desired loan amount. A personalized dashboard organizes this information into an estimated prequalification score, lender recommendations, and the financial factors most likely to affect approval.',
          'A bank approval heatmap compares estimated approval rates across lenders, credit-score ranges, and loan types. This visualization makes differences between lenders easier to understand than a traditional list of rates and requirements.',
          'The Loan Assistant evaluates factors such as debt-to-income ratio, credit utilization, down payment, and employment stability. It converts those findings into prioritized recommendations and a practical timeline for improving the user\'s financial profile.',
          'A What-If Simulator lets users adjust variables such as credit score, income, debt, and down payment to see how potential changes may affect projected approval odds. Instead of only identifying weaknesses, the simulator helps users explore realistic paths toward becoming stronger applicants.',
        ],
      },
      {
        heading: 'Tech Stack',
        paragraphs: [
          'React, Express, MySQL, GCP',
        ],
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
        heading: 'Project Overview and Purpose',
        paragraphs: [
          'I developed this web-based data collection portal to support Quantum Match. The portal provides a reliable, user-friendly way to collect the structured biographies, headshots, and introductory videos needed to build the matching dataset. Instead of manually gathering and organizing profiles, the application creates a standardized pipeline for collecting, validating, and storing participant data.',
          'Disclaimer: Due to Supabase free tier shutting down databases that go inactive after 7 days, viewing the live site might not work because the OAuth with Google and Microsoft wont be up and running. '
        ],
      },
      {
        heading: 'Workflow and Implementation',
        paragraphs: [
          'Quantum researchers, engineers, and entrepreneurs complete a four-step submission process covering personal information, academic background, professional experience, notable publications, a headshot, and a short video introduction. ',
          'Existing profiles are updated through an upsert operation instead of creating additional database rows. Photo and video uploads run concurrently to reduce submission time, and private media can be accessed by other parts of the system through temporary signed URLs.',
          'Authentication uses Supabase OAuth with Google and Microsoft account support.',
        ],
      },
      {
        heading: 'Tech Stack',
        paragraphs: [
          'Angular, PostgreSQL, Supabase, LESS',
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
        heading: 'Project Overview and Purpose',
        paragraphs: [
          'I built this interactive sentiment-analysis application as my first hands-on machine learning project. Its purpose was to help me understand how a pretrained language model could be adapted to classify movie and product reviews as positive or negative.',
          'The project compares two approaches: prompting GPT-2 to answer a structured yes-or-no sentiment question and adding a classification layer that is trained on labeled examples. Implementing both approaches demonstrated the difference between using a pretrained model through prompting and adapting it to a specific task through supervised fine-tuning.',
        ],
      },
      {
        heading: 'Workflow and Implementation',
        paragraphs: [
          'I built the training pipeline with Python, PyTorch, and Hugging Face Transformers using 500 labeled movie and product reviews split between positive and negative examples. The pipeline validates and tokenizes the dataset, creates training and validation splits, dynamically pads batches, and limits sequence length to control memory usage.',
          'Training is configured with gradient accumulation, weight decay, checkpointing, and automatic validation after each epoch. Fixed random seeds make runs more reproducible, while explicit padding and truncation logic handles GPT-2\'s lack of a default padding token and keeps inputs within practical memory limits.',
          'For the fine-tuned approach, GPT-2 processes each review and produces scores for the positive and negative classes. The application converts those scores into probabilities, displays the class with the higher confidence, and measures validation accuracy and loss so the model can be evaluated beyond individual predictions.',
          'A vibe-coded Streamlit interface makes both classification approaches available outside the training script. Users can enter a review, select an approach, and inspect the resulting sentiment and confidence scores. Session state preserves a history of reviews classified during the current visit.',
          'The application automatically uses CUDA when a compatible GPU is available and falls back to the CPU when necessary. Model caching reduces repeated loading time, and the separation between training and inference code keeps the interactive application focused on prediction.',
        ],
      },
      {
        heading: 'Tech Stack',
        paragraphs: [
          'Hugging Face Transformers, GPT-2, Streamlit, CUDA ',
        ],
      },
    ],
  },
]

export const projects: Project[] = [...featuredProjects, ...moreProjects]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
