export interface ContactLink {
  readonly label: string;
  readonly href: string;
}

export interface ExperienceItem {
  readonly company: string;
  readonly role: string;
  readonly period: string;
  readonly summary: string;
  readonly highlights: readonly string[];
}

export interface ProjectThumbnail {
  readonly src: string;
  readonly alt: string;
}

export interface ProjectItem {
  readonly slug: string;
  readonly name: string;
  readonly category: string;
  readonly period?: string;
  readonly tagline: string;
  readonly description: string;
  readonly details: readonly string[];
  readonly stack: readonly string[];
  readonly thumbnails?: readonly ProjectThumbnail[];
  readonly repoUrl?: string;
  readonly liveUrl?: string;
  readonly relatedLinks?: readonly ContactLink[];
  readonly spotlight?: boolean;
}

export interface DetailModalData {
  readonly eyebrow: string;
  readonly title: string;
  readonly subtitle?: string;
  readonly summary: string;
  readonly details: readonly string[];
  readonly chips?: readonly string[];
  readonly links?: readonly ContactLink[];
}

export interface MediaItem {
  readonly title: string;
  readonly publisher: string;
  readonly href: string;
  readonly description: string;
  readonly thumbnail?: ProjectThumbnail;
}

export interface SkillGroup {
  readonly title: string;
  readonly items: readonly string[];
}

export interface PortfolioProfile {
  readonly name: string;
  readonly headline: string;
  readonly contact: {
    readonly email: string;
    readonly links: readonly ContactLink[];
  };
  readonly about: readonly string[];
  readonly whatIDo: readonly string[];
  readonly experience: readonly ExperienceItem[];
  readonly projects: readonly ProjectItem[];
  readonly tooling: readonly ProjectItem[];
  readonly talks: readonly MediaItem[];
  readonly writing: readonly MediaItem[];
  readonly skills: readonly SkillGroup[];
}

export const portfolioProfile: PortfolioProfile = {
  name: 'Bader Youssef',
  headline: 'Product-focused fullstack engineer building web apps, mobile products, tooling, and developer education.',
  contact: {
    email: 'ibnbassem@gmail.com',
    links: [
      { label: 'Website', href: 'https://badery.co' },
      { label: 'GitHub', href: 'https://github.com/CrackTheCode016' },
      { label: 'X', href: 'https://x.com/baderyo_o' },
      { label: 'Email', href: 'mailto:ibnbassem@gmail.com' },
    ],
  },
  about: [
    'I am a product-focused fullstack engineer who builds efficient, polished software across web, mobile, and developer-facing systems.',
    'My strength is turning ideas into usable products quickly while maintaining quality, performance, and UX.',
    'I work across Angular, Ionic, TypeScript, Rust, Vue, Firebase, APIs, serverless functions, and technical documentation and developer education.',
    'I also deliver talks and workshops, and I write technical articles that explain complex topics in a practical way.',
  ],
  whatIDo: [
    'Build fullstack products end-to-end, including PWA and mobile apps, dashboards, and workflow systems.',
    'Implement clean UI with Angular Material, Taiga UI, or custom component systems.',
    'Integrate services and data sources including Firebase, APIs, RSS feeds, serverless functions, and scheduled jobs.',
    'Build high-performance browsing experiences with caching, indexing, and data-heavy UI.',
    'Build developer tooling including Rust and TypeScript CLIs, starter templates, and SDK-style examples.',
    'Write documentation and learning materials, and deliver workshops and talks.',
  ],
  experience: [
    {
      company: 'Web3 Foundation',
      role: 'Technical Educator / Developer Education',
      period: '2023-2026',
      summary:
        'Bridged complex technology and builders by producing practical examples, documentation, and developer education focused on the Polkadot ecosystem.',
      highlights: [
        'Developed and recorded a Rust development course for edX (unpublished).',
        'Wrote and maintained Polkadot documentation across the Polkadot Wiki and developer docs, including tutorials and updates as the protocol evolved.',
        'Delivered workshops and talks on the Polkadot tech stack and building with the Polkadot SDK.',
        'Built custom solutions as needed, including scripts, GitHub automation, frontends, and complete end-to-end technical demos.',
        'Created, managed, and deployed an education-focused Polkadot SDK chain called EduChain and implemented the "news" pallet used by EduNews.',
      ],
    },
    {
      company: 'IoDLT',
      role: 'CTO & Cofounder',
      period: '2018-2022',
      summary:
        'Led technical direction and built multiple proof-of-concepts and products at the intersection of IoT and blockchain.',
      highlights: [
        'Defined and executed the technical vision for multiple blockchain and Web3 proof-of-concepts and product prototypes.',
        'Built embedded software for Axon, including a custom protocol bridging microcontroller data to a TypeScript backend and blockchain submission.',
        'Authored regular technical articles covering real-world blockchain and IoT use cases.',
      ],
    },
    {
      company: 'NEM Blockchain',
      role: 'Technical Project Evaluator',
      period: '2017',
      summary:
        'Reviewed project delivery quality and milestone viability for funded blockchain work.',
      highlights: [
        'Evaluated multiple project codebases and milestones to determine funding viability.',
        'Assessed whether delivered functionality matched milestone requirements.',
      ],
    },
  ],
  projects: [
    {
      slug: 'nurtube',
      name: 'NurTube',
      category: 'Angular PWA',
      tagline: 'A focused alternative to YouTube for curated religious content.',
      description:
        'Built as a fast, distraction-free video discovery product with ingestion, indexing, and performance work across the stack.',
      details: [
        'Angular PWA using the YouTube Data API and RSS feeds.',
        'Uses Netlify Functions and scheduled sync jobs to ingest content and keep it up to date.',
        'Synced and indexed around 2,000 videos for fast search and browsing.',
        'Applied aggressive caching at both database and client layers for a fast, YouTube-like experience without distraction or noise.',
      ],
      stack: ['Angular', 'PWA', 'Netlify Functions', 'YouTube Data API', 'RSS ingestion', 'Scheduled jobs', 'Caching', 'Indexing'],
      thumbnails: [
        {
          src: '/imgs/nurtube.png',
          alt: 'NurTube application screenshot.',
        },
      ],
      spotlight: true,
    },
    {
      slug: 'suluk-tracker',
      name: 'Suluk Tracker',
      category: 'Angular + Ionic + Firebase',
      tagline: 'An app for an Islamic seminary to track spiritual habits and progress.',
      description:
        'Designed for repeated daily and weekly use with simple operational workflows and clear progress tracking.',
      details: [
        'Structured tracking for habit and progress entry and review.',
        'Firebase-backed with an Angular and Ionic frontend.',
        'Designed for simple operational workflows and repeated daily and weekly use.',
      ],
      stack: ['Angular', 'Ionic', 'Firebase'],
      thumbnails: [
        {
          src: '/imgs/suluk_tracker.png',
          alt: 'Suluk Tracker application screenshot.',
        },
      ],
      spotlight: true,
    },
    {
      slug: 'educhain',
      name: 'EduChain',
      category: 'Education-Focused Chain',
      tagline: 'A teaching chain built to explain Polkadot SDK and Substrate architecture through a real implementation.',
      description:
        'Created as an educational environment for teaching chain architecture, development workflows, and practical builder concepts.',
      details: [
        'Built and maintained an education-focused chain used to teach architecture and development workflows.',
        'Produced onboarding-oriented documentation and learning materials around the project.',
      ],
      stack: ['Rust', 'Polkadot SDK', 'Substrate', 'Documentation', 'Developer education'],
      thumbnails: [
        {
          src: '/imgs/educhain_ui.png',
          alt: 'EduChain interface and teaching environment screenshot.',
        },
      ],
      repoUrl: 'https://github.com/w3f/educhain',
      liveUrl: 'https://web3educhain.xyz/',
      spotlight: true,
    },
    {
      slug: 'edunews',
      name: 'EduNews',
      category: 'On-Chain News Provenance UI',
      tagline: 'A companion UI and provenance concept built around the EduChain news pallet.',
      description:
        'Used to teach on-chain provenance concepts through a focused news module and accompanying builder-facing interface.',
      details: [
        'Implemented the "news" pallet, an on-chain news provenance module.',
        'Built and supported an accompanying UI called EduNews.',
        'Produced onboarding-oriented documentation and learning materials around the project.',
      ],
      stack: ['Rust', 'Polkadot SDK', 'Substrate', 'UI design', 'Documentation', 'Developer education'],
      thumbnails: [
        {
          src: '/imgs/edunews_ui.png',
          alt: 'EduNews interface screenshot.',
        },
      ],
      repoUrl: 'https://github.com/w3f/edunews',
      spotlight: true,
    },
    {
      slug: 'uke-messaging',
      name: 'Uke Messaging (Uke Protocol)',
      category: 'Angular/Ionic/Capacitor + Substrate pallet',
      tagline: 'A Web3 messaging proof-of-concept using local cryptography and chain-backed verification patterns.',
      description:
        'Shipped as a cross-platform messaging concept spanning product UX, identity models, and protocol-level verification.',
      details: [
        'Cross-platform messaging proof-of-concept for web, iOS, and Android built with Angular, Ionic, and Capacitor.',
        'Designed messaging and conversation UX with identity and username concepts.',
        'Built the uke pallet in Rust to support username mapping and encrypted message storage patterns.',
        'The project was also a successful Web3 Foundation grant.',
      ],
      stack: ['Angular', 'Ionic', 'Capacitor', 'TypeScript', 'Rust', 'Substrate pallet'],
      thumbnails: [
        {
          src: '/imgs/uke.png',
          alt: 'Uke messaging application screenshot.',
        },
      ],
      repoUrl: 'https://github.com/Uke-Messaging/uke',
      relatedLinks: [
        { label: 'Pallet repo', href: 'https://github.com/Uke-Messaging/uke-pallet' },
      ],
      spotlight: true,
    },
    {
      slug: 'nftize',
      name: 'NFTIZE',
      category: 'Create NFTs from NFC-tagged objects',
      tagline: 'A mobile app and protocol for creating 1-to-1 digital assets from physical objects using NFC tagging.',
      description:
        'Focused on authenticity, condition, provenance, and the UX around scanning, minting, and viewing assets.',
      details: [
        'Designed a flow for creating a digital asset from a physical, NFC-tagged item.',
        'Focused on recording authenticity, condition, and provenance and enabling ownership and trading of the digital representation.',
        'Built with a product mindset around UX for scanning, minting, and viewing assets.',
      ],
      stack: ['Angular', 'TypeScript', 'Ionic', 'IoT concepts', 'Blockchain', 'Web3', 'UX/UI design'],
      thumbnails: [
        {
          src: '/imgs/nftize.jpeg',
          alt: 'NFTIZE application screenshot.',
        },
      ],
      spotlight: true,
    },
    {
      slug: 'axon-iot',
      name: 'Axon IoT',
      category: 'IoT-to-blockchain communication',
      tagline: 'An end-to-end attempt at connecting IoT devices directly to a blockchain through a host device.',
      description:
        'Combined protocol design, serial communication, and blockchain integration into a single applied systems project.',
      details: [
        'Built and defined a protocol for serial devices to communicate with host devices.',
        'Implemented a handshake process before UART serial communication.',
        'Designed for host devices to act as light clients or send state modification requests, including transactions, to a target chain.',
        'Earlier project work included designing and developing a multipurpose IoT proof-of-concept device.',
        'Implemented a custom UART and serial-based protocol in Rust for microcontroller communication with a TypeScript service.',
        'Sent IoT sensor data to a blockchain via the TypeScript integration layer.',
      ],
      stack: ['Rust', 'IoT', 'UART', 'Serial protocol design', 'Blockchain integration', 'TypeScript'],
      thumbnails: [
        {
          src: '/imgs/axon_iot.jpeg',
          alt: 'Axon IoT prototype image.',
        },
      ],
      spotlight: true,
    },
    {
      slug: 'portable-node',
      name: 'Portable Battery Powered Server / Portable Blockchain Node',
      category: 'Hardware prototype',
      period: 'May 2019-Present',
      tagline: 'A battery-powered Raspberry Pi node designed for resilient, portable operation.',
      description:
        'Explored portable infrastructure with clean shutdown behavior, fallback power design, and custom system setup.',
      details: [
        'Built a custom hardware implementation using a Raspberry Pi, portable battery pack, and a fallback supercapacitor circuit.',
        'Explored a UPS-style design so the device can shut down cleanly if power runs low.',
        'Produced prototypes including an initial build and an inner build.',
        'Engineered a portable node setup using a battery and supercapacitors for fault-tolerant operation.',
        'Built a custom Ubuntu image with node software pre-installed for streamlined deployment.',
      ],
      stack: ['Computer hardware prototyping', 'IoT hardware', 'DevOps', 'System setup', 'Raspberry Pi'],
      thumbnails: [
        {
          src: '/imgs/iot_node_1.jpeg',
          alt: 'Portable battery powered node prototype image one.',
        },
        {
          src: '/imgs/iot_node_2.jpeg',
          alt: 'Portable battery powered node prototype image two.',
        },
      ],
      spotlight: true,
    },
    {
      slug: 'polkadot-docs-migration',
      name: 'Polkadot Docs Migration / Rewrite',
      category: 'Documentation platform',
      tagline: 'A large-scale migration and rewrite for the Polkadot documentation portal.',
      description:
        'Handled both technical migration work and editorial clarity across a substantial content surface area.',
      details: [
        'Migrated and rewrote around 300 to 400 pages for a new Polkadot documentation portal.',
      ],
      stack: ['Documentation architecture', 'MkDocs', 'Docusaurus', 'Technical writing'],
      repoUrl: 'https://github.com/polkadot-developers/polkadot-docs',
      liveUrl: 'https://docs.polkadot.com/',
      relatedLinks: [
        { label: 'MkDocs migration repo', href: 'https://github.com/w3f/polkadot-wiki-mkdocs' },
      ],
    },
    {
      slug: 'substrate-udemy-course',
      name: 'Building Custom Blockchains With Substrate',
      category: 'Udemy course',
      tagline: 'An introductory course teaching Substrate blockchain development end-to-end.',
      description:
        'Structured educational content around practical learning, including building a first module from scratch.',
      details: [
        'Built an introductory course teaching Substrate blockchain development end-to-end, including a hands-on tutorial for building a first module.',
      ],
      stack: ['Curriculum design', 'Substrate', 'Developer education', 'Video instruction'],
    },
    {
      slug: 'ants-protocol',
      name: 'ANT$ Protocol',
      category: 'Data monetization / data aggregation SDK',
      tagline: 'A permissioned data aggregation protocol and SDK in TypeScript.',
      description:
        'Focused on signed data schemas, validation, and downstream application use cases.',
      details: [
        'Built a permissioned data aggregation protocol and SDK in TypeScript.',
        'Stored signed JSON schema data on-chain and validated data submissions for downstream applications.',
      ],
      stack: ['TypeScript', 'SDK design', 'On-chain data', 'Schema validation'],
    },
    {
      slug: 'covid-tracker',
      name: 'COVID-19 Tracker',
      category: 'Data aggregation bot',
      tagline: 'A tracker built using the ANT$ approach for immutable multi-source data provenance.',
      description:
        'Aggregated multiple feeds and preserved provenance by storing the resulting data on-chain.',
      details: [
        'Built a data aggregation tracker using the ANT$ approach.',
        'Pulled data from multiple sources and stored it immutably on-chain, preserving provenance.',
      ],
      stack: ['Data aggregation', 'Automation', 'On-chain storage', 'Provenance'],
      repoUrl: 'https://github.com/CrackTheCode016/ants-site',
    },
  ],
  tooling: [
    {
      slug: 'subxt-starter',
      name: 'subxt-starter',
      category: 'Rust starter template',
      tagline: 'A starter template for Subxt chain interaction.',
      description:
        'Packaged common interaction patterns into a practical template for builder onboarding and reuse.',
      details: [
        'Rust starter template for Subxt chain interaction covering metadata and codegen, queries, extrinsics, and events.',
      ],
      stack: ['Rust', 'Subxt', 'Template authoring'],
      repoUrl: 'https://github.com/CrackTheCode016/subxt-starter',
    },
    {
      slug: 'edunews-subxt',
      name: 'edunews-subxt',
      category: 'Rust CLI demo',
      tagline: 'A CLI demonstration for multi-chain patterns using Subxt.',
      description:
        'Built to teach practical multi-chain patterns through a concise developer-facing example.',
      details: [
        'Rust CLI demo for multi-chain patterns using Subxt.',
      ],
      stack: ['Rust', 'CLI', 'Subxt'],
      repoUrl: 'https://github.com/w3f/edunews-subxt',
    },
    {
      slug: 'ondemand',
      name: 'ondemand',
      category: 'TypeScript CLI tooling',
      tagline: 'Monitoring and on-demand coretime ordering workflows in a CLI.',
      description:
        'Designed around operational monitoring and workflow-heavy chain actions.',
      details: [
        'TypeScript CLI tooling for monitoring and on-demand coretime ordering workflows.',
      ],
      stack: ['TypeScript', 'CLI', 'Workflow tooling'],
      repoUrl: 'https://github.com/CrackTheCode016/ondemand',
    },
    {
      slug: 'ondemand-ui',
      name: 'EduChain Dashboard',
      category: 'Blockchain management dashboard',
      tagline: 'A dashboard for cross-chain interaction, operational monitoring, and on-demand block creation.',
      description:
        'Focused on operational UX for cross-chain workflows, block creation flows, and ongoing chain monitoring.',
      details: [
        'Vue dashboard for workflow-heavy chain actions including monitoring, cross-chain interaction, and on-demand block creation flows.',
      ],
      stack: ['Vue', 'Dashboard design', 'Operational UX'],
      repoUrl: 'https://github.com/CrackTheCode016/ondemand-ui',
    },
    {
      slug: 'intro-to-rust-workshop',
      name: 'intro-to-rust-workshop',
      category: 'Workshop repo and curriculum',
      tagline: 'A beginner-friendly Rust workshop and teaching repository.',
      description:
        'Created to make Rust approachable through structured curriculum and practical examples.',
      details: [
        'Beginner-friendly Rust workshop repository and curriculum.',
      ],
      stack: ['Rust', 'Workshop design', 'Curriculum'],
      repoUrl: 'https://github.com/CrackTheCode016/intro-to-rust-workshop',
    },
    {
      slug: 'flipper-pvm',
      name: 'flipper-pvm',
      category: 'Educational template/example',
      tagline: 'A Rust PolkaVM smart contract educational template.',
      description:
        'Used to teach smart contract concepts with a focused example that is easy to extend.',
      details: [
        'Rust PolkaVM smart contract educational template and example.',
      ],
      repoUrl: 'https://github.com/CrackTheCode016/flipper-pvm',
      stack: ['Rust', 'PolkaVM', 'Template authoring'],
    },
    {
      slug: 'polkadot-wiki-docs',
      name: 'Polkadot Wiki / Docs',
      category: 'Documentation authoring and modernization',
      tagline: 'Documentation authoring and migration work across major Polkadot resources.',
      description:
        'Modernized documentation systems and authored practical material for builders.',
      details: [
        'Documentation authoring and migration and modernization work moving from Docusaurus to MkDocs.',
      ],
      stack: ['Technical writing', 'MkDocs', 'Docusaurus', 'Information architecture'],
      repoUrl: 'https://github.com/w3f/polkadot-wiki',
      relatedLinks: [
        { label: 'W3F education repo', href: 'https://github.com/w3f/w3f-education' },
      ],
    },
  ],
  talks: [
    {
      title: 'The Polkadot Tech Stack | The Blockspace | ETHDenver 2024',
      publisher: 'YouTube',
      href: 'https://www.youtube.com/watch?v=5layNup6bBY',
      description: 'A talk focused on the Polkadot technology stack and how the pieces fit together for builders.',
      thumbnail: {
        src: '/imgs/the_polkadot_techstack_video_workshop.png',
        alt: 'Thumbnail for The Polkadot Tech Stack talk.',
      },
    },
    {
      title: 'Intro to Rust for the Polkadot SDK | The Blockspace | ETHDenver 2024',
      publisher: 'YouTube',
      href: 'https://www.youtube.com/watch?v=deHuNZhOGP8',
      description: 'A workshop-oriented Rust introduction framed for builders working with the Polkadot SDK.',
      thumbnail: {
        src: '/imgs/intro_to_rust_for_polkadot_sdk.png',
        alt: 'Thumbnail for the Intro to Rust for the Polkadot SDK workshop.',
      },
    },
    {
      title: 'The Complete Guide Building Blockchains With the Polkadot SDK | Web3 Foundation',
      publisher: 'YouTube',
      href: 'https://www.youtube.com/watch?v=zjnAM3kdK88',
      description: 'A longer-form guide to building blockchains with the Polkadot SDK.',
      thumbnail: {
        src: '/imgs/complete_guide_building_blockchains_polkadot.jpg',
        alt: 'Thumbnail for the complete guide to building blockchains with the Polkadot SDK.',
      },
    },
  ],
  writing: [
    {
      title: 'Not Every Web3 Protocol Needs a Native Token',
      publisher: 'HackerNoon',
      href: 'https://hackernoon.com/not-every-web3-protocol-needs-a-native-token',
      description: 'A practical argument for building protocols around fit and utility rather than token defaults.',
      thumbnail: {
        src: '/imgs/not_every_web3_protocol_needs_token.png',
        alt: 'Thumbnail for the article Not Every Web3 Protocol Needs a Native Token.',
      },
    },
    {
      title: 'Everything You Need to Know About the Polkadot API (PAPI)',
      publisher: 'HackerNoon',
      href: 'https://hackernoon.com/everything-you-need-to-know-about-the-polkadot-api-papi',
      description: 'An explainer on the Polkadot API and how developers can use it effectively.',
      thumbnail: {
        src: '/imgs/everything_you_need_about_papi.png',
        alt: 'Thumbnail for the Polkadot API PAPI article.',
      },
    },
    {
      title: 'Building a Blockchain From Scratch (kind of) with Polkadot SDK and Pop!',
      publisher: 'HackerNoon',
      href: 'https://hackernoon.com/building-a-blockchain-from-scratch-kind-of-with-polkadot-sdk-and-pop',
      description: 'A builder-focused walkthrough of blockchain creation with the Polkadot SDK and Pop.',
      thumbnail: {
        src: '/imgs/building_blockchain_from_scratch.png',
        alt: 'Thumbnail for the Building a Blockchain From Scratch article.',
      },
    },
    {
      title: 'A Normie Intro to Web3 in 2023 (And How it Differs from Web2)',
      publisher: 'HackerNoon',
      href: 'https://hackernoon.com/a-normie-intro-to-web3-in-2023-and-how-it-differs-from-web2',
      description: 'A practical introduction that frames Web3 concepts in familiar product terms.',
      thumbnail: {
        src: '/imgs/normie_intro_web3.png',
        alt: 'Thumbnail for the A Normie Intro to Web3 article.',
      },
    },
    {
      title: 'Abstracting Away Account Abstraction on Polkadot',
      publisher: 'HackerNoon',
      href: 'https://hackernoon.com/abstracting-away-account-abstraction-on-polkadot',
      description: 'An article about simplifying account abstraction concepts on Polkadot.',
      thumbnail: {
        src: '/imgs/account_abstraction_polkadot_article.png',
        alt: 'Thumbnail for the account abstraction on Polkadot article.',
      },
    },
    {
      title: 'Introduction to Writing RISC-V Contracts in Rust on Polkadot',
      publisher: 'DEV',
      href: 'https://dev.to/badery/introduction-to-writing-risc-v-contracts-in-rust-on-polkadot-29n7',
      description: 'A practical introduction to writing RISC-V contracts in Rust on Polkadot.',
      thumbnail: {
        src: '/imgs/polkadot_riscv_contracts.webp',
        alt: 'Thumbnail for the RISC-V contracts in Rust on Polkadot article.',
      },
    },
  ],
  skills: [
    {
      title: 'Languages',
      items: ['Rust', 'TypeScript/JavaScript', 'Python', 'Bash/Shell', 'Solidity', 'Swift', 'Java', 'C++'],
    },
    {
      title: 'Frontend & Mobile',
      items: ['Angular', 'Ionic', 'Capacitor', 'Vue', 'PWA development', 'Angular Material', 'Taiga UI', 'Custom UI components'],
    },
    {
      title: 'Backend / Services / Integrations',
      items: ['Firebase', 'Serverless functions', 'REST APIs', 'RSS ingestion', 'Scheduled sync jobs', 'Caching & indexing strategies'],
    },
    {
      title: 'Developer Tooling / Docs / Enablement',
      items: ['Git/GitHub', 'Rust CLIs', 'TypeScript CLIs', 'Subxt', 'PAPI (polkadot-api)', 'MkDocs', 'Docusaurus', 'Tutorial authoring', 'Workshop delivery'],
    },
  ],
};
