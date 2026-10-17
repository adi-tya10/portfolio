import React, { useState, useEffect, useRef } from 'react';
import {
  Music, Volume2, Sparkles, Flame, Smartphone, Rocket,
  Terminal as TerminalIcon, Moon, Sun, ExternalLink,
  ChevronLeft, ChevronRight, Menu, X, Check, Coffee, Globe,
  FileText, Phone, Play, Pause, Cpu, Database, Layers,
  ShieldCheck, GitBranch, Server, Zap, CreditCard
} from 'lucide-react';

const GithubIcon = ({ size = 24, strokeWidth = 1.35, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
  </svg>
);

const LinkedinIcon = ({ size = 24, strokeWidth = 1.35, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
    <path d="M8 11l0 5" />
    <path d="M8 8l0 .01" />
    <path d="M12 16l0 -5" />
    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
  </svg>
);

const CurlyScribble = () => (
  <svg
    className="icon-tabler-scribble"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      d="M3 15c2 3 4 4 7 4s7 -3 7 -7s-3 -7 -6 -7s-5 1.5 -5 4s2 5 6 5s8.408 -2.453 10 -5"
      className="scribble-path"
    />
  </svg>
);

const WhatsappIcon = ({ size = 19, strokeWidth = 1.25, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
  </svg>
);

const SmileHomeIcon = ({ size = 20, strokeWidth = 1.85, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M4.5 10.5L12 4.5L19.5 10.5V18C19.5 19.1 18.6 20 17.5 20H6.5C5.4 20 4.5 19.1 4.5 18V10.5Z" />
    <path d="M8.5 14C9.5 16.2 14.5 16.2 15.5 14" />
  </svg>
);

const InstagramIcon = ({ size = 22, strokeWidth = 1.35, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const IsometricCubeIcon = ({ size = 18, color = "#52525b" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const BoomboxIcon = ({ size = 24, strokeWidth = 1.25 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="3" ry="3" />
    <path d="M16 3l-4 4" />
    <line x1="2" y1="11" x2="22" y2="11" />
    <circle cx="7" cy="15.5" r="2.5" />
    <circle cx="17" cy="15.5" r="2.5" />
  </svg>
);

const SpotifyIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#1ed760">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.495 17.303c-.215.353-.674.464-1.026.25-2.812-1.718-6.353-2.107-10.523-1.155-.403.092-.806-.16-.898-.563-.092-.403.16-.806.563-.898 4.542-1.038 8.448-.598 11.634 1.34.352.214.464.673.25 1.026zm1.468-3.262c-.27.44-.847.578-1.287.308-3.22-1.978-8.128-2.55-11.936-1.393-.497.151-1.027-.133-1.178-.63-.151-.497.133-1.027.63-1.178 4.356-1.322 9.774-.683 13.463 1.586.44.27.578.847.308 1.287zm.126-3.414C15.234 8.358 8.877 8.148 5.166 9.275c-.59.18-1.22-.158-1.4-.748-.18-.59.158-1.22.748-1.4 4.26-1.293 11.28-1.045 15.706 1.58.53.315.705 1.002.39 1.532-.315.53-1.002.705-1.532.39z" />
  </svg>
);

// Curated Audio Tracks for the Music Dropdown (Replicating Image 2)
const TRACKS = [
  {
    id: 'chill',
    genre: 'chill',
    icon: '❄️',
    title: 'Head of the Table',
    artist: 'WWE, def rebel',
    cover: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=120&auto=format&fit=crop&q=80',
    spotifyUrl: 'https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT',
    audioUrl: 'https://stream.zeno.fm/f3wvbbqmdg8uv'
  },
  {
    id: 'acoustic',
    genre: 'acoustic',
    icon: '🎸',
    title: 'Coffee & Acoustic Chills',
    artist: 'Indie Folk Collective',
    cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=120&auto=format&fit=crop&q=80',
    spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DXaImRpG7HXqp',
    audioUrl: 'https://stream.zeno.fm/0r0xa792kwzuv'
  },
  {
    id: 'indie',
    genre: 'indie',
    icon: 'IN',
    title: 'Midnight in Bengaluru',
    artist: 'Aditya Raj, Chill Beats Fusion',
    cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=120&auto=format&fit=crop&q=80',
    spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX5cO1uISf7PZ',
    audioUrl: 'https://stream.zeno.fm/f3wvbbqmdg8uv'
  }
];

// Web Audio Ambient Synthesizer: 100% Guaranteed Instant, Working Playback
let audioCtxInstance = null;
let currentSynthNodes = [];

const stopSynthMusic = () => {
  currentSynthNodes.forEach(node => {
    try {
      if (node.stop) node.stop();
      if (node.disconnect) node.disconnect();
    } catch { }
  });
  currentSynthNodes = [];
};

const playSynthMusic = (trackIdx = 0) => {
  stopSynthMusic();
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!audioCtxInstance) audioCtxInstance = new AudioContextClass();
    if (audioCtxInstance.state === 'suspended') audioCtxInstance.resume();

    // Warm chords per track
    const chordProgressions = [
      [[155.56, 196.00, 233.08, 293.66], [130.81, 196.00, 233.08, 261.63], [116.54, 174.61, 233.08, 261.63]],
      [[146.83, 220.00, 293.66, 369.99], [196.00, 246.94, 293.66, 392.00], [164.81, 220.00, 261.63, 329.63]],
      [[130.81, 196.00, 261.63, 329.63], [146.83, 220.00, 293.66, 349.23], [164.81, 196.00, 246.94, 329.63]]
    ];

    const currentChords = chordProgressions[trackIdx % chordProgressions.length];
    const masterGain = audioCtxInstance.createGain();
    masterGain.gain.setValueAtTime(0.08, audioCtxInstance.currentTime);

    const filter = audioCtxInstance.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, audioCtxInstance.currentTime);

    masterGain.connect(filter);
    filter.connect(audioCtxInstance.destination);
    currentSynthNodes.push(masterGain, filter);

    let chordStep = 0;
    const playNextChord = () => {
      if (!audioCtxInstance || audioCtxInstance.state === 'closed') return;
      const freqs = currentChords[chordStep % currentChords.length];
      chordStep++;
      const now = audioCtxInstance.currentTime;

      freqs.forEach((freq, idx) => {
        const osc = audioCtxInstance.createOscillator();
        const noteGain = audioCtxInstance.createGain();
        osc.type = idx === 0 ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(freq, now);

        noteGain.gain.setValueAtTime(0.001, now);
        noteGain.gain.linearRampToValueAtTime(0.05, now + 0.8);
        noteGain.gain.linearRampToValueAtTime(0.035, now + 2.4);
        noteGain.gain.linearRampToValueAtTime(0.0001, now + 3.8);

        osc.connect(noteGain);
        noteGain.connect(masterGain);
        osc.start(now);
        osc.stop(now + 3.9);
        currentSynthNodes.push(osc, noteGain);
      });
    };

    playNextChord();
    const chordTimer = setInterval(playNextChord, 3500);
    currentSynthNodes.push({ stop: () => clearInterval(chordTimer), disconnect: () => { } });
  } catch (err) {
    console.warn("Synth playback err:", err);
  }
};

// ==========================================
// ==========================================
// USER SPECIFIED MOUSE CLICK SOUND ENGINE
// Powered exclusively by "Mouse Click Sound Effect - (256 Kbps).mp3" (/click.mp3)
// ==========================================
let sfxAudioContext = null;
let clickAudioBuffer = null;
let isFetchingAudio = false;

// Pre-warmed audio element pool for instant zero-lag playback
const clickAudioPool = typeof window !== 'undefined' && typeof Audio !== 'undefined' ? [
  new Audio('/click.mp3'),
  new Audio('/click.mp3'),
  new Audio('/click.mp3'),
  new Audio('/click.mp3'),
  new Audio('/click.mp3'),
  new Audio('/click.mp3')
] : [];
let poolIndex = 0;

const getSfxAudioContext = () => {
  try {
    if (!sfxAudioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) sfxAudioContext = new AudioCtx();
    }
    if (sfxAudioContext && sfxAudioContext.state === 'suspended') {
      sfxAudioContext.resume().catch(() => {});
    }
    if (sfxAudioContext && !clickAudioBuffer && !isFetchingAudio) {
      isFetchingAudio = true;
      fetch('/click.mp3')
        .then(res => res.arrayBuffer())
        .then(arrayBuf => sfxAudioContext.decodeAudioData(arrayBuf))
        .then(decoded => {
          clickAudioBuffer = decoded;
          isFetchingAudio = false;
        })
        .catch(() => {
          isFetchingAudio = false;
        });
    }
  } catch {}
  return sfxAudioContext;
};

// Immediate pre-fetch on script evaluation
if (typeof window !== 'undefined') {
  clickAudioPool.forEach(a => {
    try {
      a.preload = 'auto';
      a.load();
    } catch {}
  });

  const warmUpAudio = () => {
    getSfxAudioContext();
    window.removeEventListener('pointerdown', warmUpAudio);
  };
  window.addEventListener('pointerdown', warmUpAudio, { capture: true, once: true });
}

export const playTactileClickSound = () => {
  try {
    const ctx = getSfxAudioContext();

    // 1. Primary: Hardware-accelerated Web Audio AudioBuffer with micro-pitch jitter
    if (ctx && clickAudioBuffer) {
      const source = ctx.createBufferSource();
      source.buffer = clickAudioBuffer;
      source.playbackRate.value = 0.98 + Math.random() * 0.04;
      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.85, ctx.currentTime);
      source.connect(gainNode);
      gainNode.connect(ctx.destination);
      source.start(0);
      return;
    }

    // 2. Secondary: Pre-warmed HTML5 Audio Pool (instant playback without waiting for fetch/decode)
    if (clickAudioPool.length > 0) {
      const audio = clickAudioPool[poolIndex];
      poolIndex = (poolIndex + 1) % clickAudioPool.length;
      audio.currentTime = 0;
      audio.volume = 0.85;
      audio.play().catch(() => {});
    }
  } catch (err) {
    console.debug('Click audio notice:', err);
  }
};


// ==========================================
// ADITYA RAJ - PORTFOLIO DATABASE
// ==========================================

const PERSONAL_INFO = {
  name: "Aditya Raj",
  firstName: "ADITYA",
  lastName: "RAJ",
  title: "Full-Stack & Backend Systems Engineer",
  tagline: "Computer Science & Business Systems engineer building scalable backend platforms, event-driven architectures, distributed knowledge engines, and ML systems.",
  email: "adityaeeshan5230@gmail.com",
  phone: "+91 81027 55701",
  location: "Karnataka, India",
  college: "P.E.S. College of Engineering, Mandya",
  degree: "B.E., Computer Science & Business Systems",
  expectedGraduation: "Sept 2023 - Expected 2027",
  github: "https://github.com/adi-tya10",
  linkedin: "https://linkedin.com/in/adityaraj10",
  twitter: "https://x.com/adityaraj10",
  instagram: "https://www.instagram.com/_.ad.itya_/",
  whatsapp: "https://wa.me/918102755701",
  portfolio: "https://meetwithaditya.netlify.app",
  buyCoffee: "https://buymeacoffee.com/adityaraj"
};

// Real Projects: Snapmeet, Kairo, and PRISM (with dedicated brand logos)
const PROJECTS_DATA = [
  {
    name: "Snapmeet — EventTech SaaS Platform",
    displayTitle: "Snapmeet : EventTech Platform",
    displayUrl: "snapmeet.co.in",
    category: "Full-Stack SaaS & Distributed Systems",
    logo: "/snapmeet.png",
    website: "https://snapmeet.co.in",
    github: "https://github.com/adi-tya10",
    tags: ["Django", "Python", "PostgreSQL", "Redis", "Celery", "Razorpay", "PayPal", "OAuth", "Gemini API"],
    oneLiner: "An enterprise EventTech platform automating multi-stage event ticketing and cryptographic QR verification.",
    modalDescription: "Snapmeet is an enterprise EventTech platform automating multi-stage event ticketing and cryptographic QR verification.",
    description: "Built and deployed a full-stack event management platform using Django and PostgreSQL with secure authentication, role-based access control (RBAC), and REST APIs. Engineered Celery/Redis asynchronous workers for email automation and QR-based attendance tracking, integrating Razorpay, PayPal, Google OAuth, Cloudinary, and Google Gemini API.",
    publication: "Published in GIJET Vol. 12 (June 2026) & presented at AITC 2026.",
    slides: [
      {
        image: "/slides/snapmeet/Snapmeet_Slide_01.png",
        caption: "01 / 08 • The Introduction: Make every moment count"
      },
      {
        image: "/slides/snapmeet/Snapmeet_Slide_02.png",
        caption: "02 / 08 • The Problem: Disconnected event workflows"
      },
      {
        image: "/slides/snapmeet/Snapmeet_Slide_03.png",
        caption: "03 / 08 • The Reveal: Meet Snapmeet platform"
      },
      {
        image: "/slides/snapmeet/Snapmeet_Slide_04.png",
        caption: "04 / 08 • The Experience: From discovery to the door"
      },
      {
        image: "/slides/snapmeet/Snapmeet_Slide_05.png",
        caption: "05 / 08 • The Organizer: Control room for every event"
      },
      {
        image: "/slides/snapmeet/Snapmeet_Slide_06.png",
        caption: "06 / 08 • Architecture: Publishing, forms, QR & payments"
      },
      {
        image: "/slides/snapmeet/Snapmeet_Slide_07.png",
        caption: "07 / 08 • Traction: 800+ Users across 23 live events"
      },
      {
        image: "/slides/snapmeet/Snapmeet_Slide_08.png",
        caption: "08 / 08 • The Next Chapter: Event experiences, connected"
      }
    ],
    screenshots: [
      "/slides/snapmeet/Snapmeet_Slide_01.png",
      "/slides/snapmeet/Snapmeet_Slide_03.png",
      "/slides/snapmeet/Snapmeet_Slide_05.png"
    ]
  },
  {
    name: "Kairo — Enterprise Work Continuity and Knowledge Engine",
    displayTitle: "Kairo : Enterprise Work Continuity Engine",
    category: "AI & Distributed Knowledge Graphs",
    tagline: "Event-driven developer continuity with pgvector & Neo4j",
    logo: "/kairo.png",
    website: "https://github.com/adi-tya10/kairo",
    github: "https://github.com/adi-tya10/kairo",
    tags: ["FastAPI", "Next.js", "Tauri", "Rust", "PostgreSQL", "pgvector", "Neo4j", "Redis", "Celery", "Docker"],
    oneLiner: "An autonomous Graph-RAG knowledge engine connecting engineering codebases, tasks, and temporal discussions.",
    modalDescription: "Kairo is an autonomous Graph-RAG knowledge engine connecting engineering codebases, tasks, and temporal discussions.",
    description: "Developed an event-driven engineering continuity platform using FastAPI, Celery, and Redis to ingest and normalize GitHub, Jira, GitLab, Linear, and Slack events. Designed a dual-store knowledge architecture combining PostgreSQL + pgvector and Neo4j graph database to interconnect developers, tasks, pull requests, and technical decisions while detecting cross-system workflow anomalies. Features a native Tauri/Rust developer HUD with local Git tracking and Win32 hooks.",
    metrics: "Sub-50ms graph query responses, automated anomaly detection, and CI/CD automation.",
    publication: "Open Source Platform on GitHub.",
    slides: [
      {
        image: "/slides/kairo/Kairo_Slide_01.png",
        caption: "01 / 08 • Engineering Continuity: Context shouldn't restart"
      },
      {
        image: "/slides/kairo/Kairo_Slide_02.png",
        caption: "02 / 08 • The Context Gap: Work is connected, knowledge isn't"
      },
      {
        image: "/slides/kairo/Kairo_Slide_03.png",
        caption: "03 / 08 • The Reveal: Meet Kairo citation-backed handoff"
      },
      {
        image: "/slides/kairo/Kairo_Slide_04.png",
        caption: "04 / 08 • The Workflow: Capture, Connect, Reconstruct & Handoff"
      },
      {
        image: "/slides/kairo/Kairo_Slide_05.png",
        caption: "05 / 08 • System Architecture: PostgreSQL, pgvector & Neo4j"
      },
      {
        image: "/slides/kairo/Kairo_Slide_06.png",
        caption: "06 / 08 • The Experience: Developer HUD & Ownership Map"
      },
      {
        image: "/slides/kairo/Kairo_Slide_07.png",
        caption: "07 / 08 • Traceability: Source-linked evidence RAG"
      },
      {
        image: "/slides/kairo/Kairo_Slide_08.png",
        caption: "08 / 08 • The Next Chapter: Engineering memory, connected"
      }
    ],
    screenshots: [
      "/slides/kairo/Kairo_Slide_01.png",
      "/slides/kairo/Kairo_Slide_03.png",
      "/slides/kairo/Kairo_Slide_05.png"
    ]
  },
  {
    name: "PRISM — Predictive Root-Cause Analysis for Strategic Metrics",
    displayTitle: "PRISM : Predictive Analytics & ML Engine",
    category: "Business Intelligence & Machine Learning",
    tagline: "Automated schema mapping, feature engineering & root-cause analysis",
    logo: "/prism.png",
    website: "https://github.com/adi-tya10/Prism",
    github: "https://github.com/adi-tya10/Prism",
    tags: ["React", "FastAPI", "Python", "SQLAlchemy", "SQLite", "Scikit-learn", "Pandas", "NumPy"],
    oneLiner: "A predictive analytics engine performing real-time ML anomaly detection and automated root-cause attribution.",
    modalDescription: "PRISM is a predictive analytics engine performing real-time ML anomaly detection and automated root-cause attribution.",
    description: "Developed a FastAPI-based business intelligence platform automating schema mapping, data cleaning, and feature engineering across heterogeneous datasets. Built an automated ML pipeline using Scikit-learn, Pandas, and NumPy with dynamic preprocessing, feature selection, and semantic schema matching for root-cause analysis and forecasting.",
    metrics: "Secure REST APIs with JWT authentication, SQLAlchemy ORM, and caching for large-dataset analytics.",
    publication: "Open Source Platform on GitHub.",
    slides: [
      {
        image: "/slides/prism/PRISM_Slide_01.png",
        caption: "01 / 08 • The Question: Why did it happen? Root-cause lens"
      },
      {
        image: "/slides/prism/PRISM_Slide_02.png",
        caption: "02 / 08 • The Blind Spot: A number is a signal, not explanation"
      },
      {
        image: "/slides/prism/PRISM_Slide_03.png",
        caption: "03 / 08 • The Reveal: Unify, Investigate & Predict"
      },
      {
        image: "/slides/prism/PRISM_Slide_04.png",
        caption: "04 / 08 • Data Journey: Schema mapping & automated pipeline"
      },
      {
        image: "/slides/prism/PRISM_Slide_05.png",
        caption: "05 / 08 • Investigation: A metric drops, root cause begins"
      },
      {
        image: "/slides/prism/PRISM_Slide_06.png",
        caption: "06 / 08 • Predictive Models: Linear, Random Forest & XGBoost"
      },
      {
        image: "/slides/prism/PRISM_Slide_07.png",
        caption: "07 / 08 • Scale Benchmarks: Sub-second 100K row execution"
      },
      {
        image: "/slides/prism/PRISM_Slide_08.png",
        caption: "08 / 08 • The Vision: See the drivers behind the metrics"
      }
    ],
    screenshots: [
      "/slides/prism/PRISM_Slide_01.png",
      "/slides/prism/PRISM_Slide_03.png",
      "/slides/prism/PRISM_Slide_05.png"
    ]
  }
];

// Real Work Experience
const EXPERIENCE_DATA = [
  {
    company: "Snapmeet",
    shortOrg: "SNAPMEET",
    cardType: "CORPORATE DEBIT",
    cardNumber: "4242  1337  8002  2024",
    validThru: "01/24 - PRESENT",
    role: "Lead Full-Stack & Backend Architect",
    tenure: "2024 - Present",
    cvv: "719",
    network: "rupay",
    theme: {
      gradient: "linear-gradient(135deg, #064e3b 0%, #065f46 45%, #022c22 100%)",
      accentBorder: "rgba(52, 211, 153, 0.45)",
      shimmer: "radial-gradient(ellipse at 20% 20%, rgba(52, 211, 153, 0.22), transparent 70%)",
      badgeColor: "#34d399"
    },
    bullets: [
      "Architected and deployed full-stack SaaS using Django and PostgreSQL supporting 800+ registered users.",
      "Implemented Celery/Redis asynchronous workflows for email automation and QR attendance across 23 live events.",
      "Integrated Razorpay, PayPal, Google OAuth, Cloudinary, and Gemini AI with API rate limiting."
    ]
  },
  {
    company: "Employability.life",
    shortOrg: "EMPLOYABILITY.LIFE",
    cardType: "DEBIT",
    cardNumber: "5412  8102  2025  0112",
    validThru: "02/25",
    role: "ML/AI Engineer Intern",
    tenure: "2025 · 6 Weeks",
    cvv: "842",
    network: "mastercard",
    theme: {
      gradient: "linear-gradient(135deg, #18181b 0%, #27272a 45%, #09090b 100%)",
      accentBorder: "rgba(168, 85, 247, 0.45)",
      shimmer: "radial-gradient(ellipse at 20% 20%, rgba(168, 85, 247, 0.22), transparent 70%)",
      badgeColor: "#c084fc"
    },
    bullets: [
      "Developed ML pipelines for OncoPredict AI's cancer-risk prediction model using Python and Scikit-learn.",
      "Implemented dynamic preprocessing, feature engineering, model training, hyperparameter tuning, and cross-validation.",
      "Collaborated in Agile development, code reviews, and production ML testing workflows."
    ]
  },
  {
    company: "ASCEND, P.E.S. College of Engineering",
    shortOrg: "ASCEND • PESCE",
    cardType: "PREMIUM DEBIT",
    cardNumber: "4111  2024  5570  0924",
    validThru: "09/24 - PRESENT",
    role: "Vice President",
    tenure: "09/2024 - Present",
    cvv: "523",
    network: "visa",
    theme: {
      gradient: "linear-gradient(135deg, #091e3a 0%, #172554 50%, #0369a1 100%)",
      accentBorder: "rgba(56, 189, 248, 0.45)",
      shimmer: "radial-gradient(ellipse at 20% 20%, rgba(56, 189, 248, 0.22), transparent 70%)",
      badgeColor: "#38bdf8"
    },
    bullets: [
      "Led cross-functional teams to coordinate technical initiatives, hackathons, and engineering workshops.",
      "Partnered with faculty and external industry stakeholders to plan, budget, and execute technical events.",
      "Mentored junior developers in Git workflows, full-stack systems, and open-source collaboration."
    ]
  }
];

// 9 Production Edge Nodes across India (Bihar, UP, Jharkhand, Gujarat, Pune, Karnataka, Delhi NCR, etc.)
const INDIA_MAP_NODES = [
  { id: 'delhi', label: 'Delhi NCR', top: '30.9%', left: '36.5%', delay: '0s' },
  { id: 'rajasthan', label: 'Rajasthan (Jaipur)', top: '36.8%', left: '28.6%', delay: '0.8s' },
  { id: 'up', label: 'Uttar Pradesh (UP)', top: '38.0%', left: '49.7%', delay: '0.4s' },
  { id: 'bihar', label: 'Bihar (Patna)', top: '41.0%', left: '63.3%', delay: '1.2s' },
  { id: 'jharkhand', label: 'Jharkhand (Ranchi)', top: '49.3%', left: '63.3%', delay: '1.6s' },
  { id: 'westbengal', label: 'West Bengal (Kolkata)', top: '52.9%', left: '69.4%', delay: '1.0s' },
  { id: 'gujarat', label: 'Gujarat (Ahmedabad)', top: '48.7%', left: '17.0%', delay: '0.6s' },
  { id: 'pune', label: 'Pune (Maharashtra)', top: '61.8%', left: '29.3%', delay: '1.4s' },
  { id: 'karnataka', label: 'Karnataka (Bengaluru / Mandya)', top: '80.8%', left: '34.7%', delay: '0.2s' }
];

// Dedicated Architecture Canvas for Kairo Engine (Engineering Context & Decision Intelligence)
const KairoArchitectureCanvas = ({ arch }) => {
  return (
    <div className="arch-canvas-container">
      {/* 1. TOP STATUS BAR (Engineering Telemetry & Monolith Specs) */}
      <div className="arch-telemetry-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#ffffff', background: '#18181b', padding: '4px 10px', borderRadius: '0px', border: '1.5px solid #18181b', fontFamily: 'var(--font-mono)' }}>
            {arch.sectionEyebrow}
          </span>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#18181b', background: '#f4f4f5', border: '1.5px solid #18181b', borderRadius: '0px', padding: '4px 10px', fontFamily: 'var(--font-mono)' }}>
            {arch.projectLabel}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#18181b', background: '#ffffff', border: '1.5px solid #18181b', padding: '4px 10px', borderRadius: '0px', display: 'flex', alignItems: 'center', fontFamily: 'var(--font-mono)' }}>
            SYS_MODE: MODULAR_MONOLITH
          </span>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#18181b', background: '#f4f4f5', border: '1.5px solid #18181b', padding: '4px 10px', borderRadius: '0px', fontFamily: 'var(--font-mono)' }}>
            EVAL: PYTHON_RULES (NON-LLM)
          </span>
        </div>
      </div>

      {/* 2. TITLE, SUBTITLE & EDITORIAL SPEC BRIEF */}
      <div style={{ margin: '1.5rem 0 1.75rem 0' }}>
        <h3 style={{ fontSize: 'clamp(1.3rem, 3.2vw, 2.1rem)', fontWeight: 800, color: '#18181b', margin: '0 0 0.5rem 0', lineHeight: 1.25, letterSpacing: '-0.02em' }}>
          {arch.title}
        </h3>
        <p style={{ fontSize: '0.96rem', color: '#52525b', margin: '0 0 1.25rem 0', lineHeight: 1.5, fontWeight: 500 }}>
          {arch.subtitle}
        </p>

        {/* Technical Headline Banner with Monospace Label */}
        <div className="arch-headline-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 800, color: '#18181b', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              TECHNICAL HEADLINE:
            </span>
            <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#18181b' }}>
              {arch.technicalHeadline}
            </span>
          </div>
          <p style={{ fontSize: '0.86rem', color: '#3f3f46', lineHeight: 1.6, margin: 0 }}>
            {arch.introduction}
          </p>
        </div>
      </div>

      {/* 3. TECHNICAL CONSTRAINT & ARCHITECTURAL APPROACH */}
      <div className="arch-grid-duo">
        <div style={{ background: '#fafafa', border: '1.5px solid #18181b', borderLeft: '6px solid #18181b', borderRadius: '0px', padding: '1.25rem 1.5rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#18181b', marginBottom: '0.5rem' }}>
            // 01. {arch.problemTitle}
          </div>
          <p style={{ fontSize: '0.88rem', color: '#27272a', lineHeight: 1.65, fontFamily: 'var(--font-sans)' }}>
            {arch.problem}
          </p>
        </div>

        <div style={{ background: '#fafafa', border: '1.5px solid #18181b', borderLeft: '6px solid #16a34a', borderRadius: '0px', padding: '1.25rem 1.5rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#18181b', marginBottom: '0.5rem' }}>
            // 02. {arch.solutionTitle}
          </div>
          <p style={{ fontSize: '0.88rem', color: '#27272a', lineHeight: 1.65, fontFamily: 'var(--font-sans)' }}>
            {arch.solution}
          </p>
        </div>
      </div>

      {/* 4. CONNECTED EVENT-TO-EVIDENCE PIPELINE (DISTINCT FROM SNAPMEET) */}
      <div className="arch-pipeline-wrapper">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#ffd074' }}>
            [EVENT-TO-EVIDENCE PIPELINE // DETERMINISTIC GRAPH & SYNTHESIS TOPOLOGY]
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#a1a1aa' }}>
            {"VERIFICATION_LINEAGE: 01 ──> 02 ──> 03 ──> 04 ──> 05"}
          </span>
        </div>

        {/* Dynamic Connected Flow Rail with Distinct Tiered Badges */}
        <div className="arch-stage-grid">
          {arch.pipelineStages.map((stage, sIdx) => (
            <div
              key={sIdx}
              style={{
                background: '#18181b',
                border: '1.5px solid #27272a',
                borderTop: `3px solid ${stage.accent}`,
                borderRadius: '0px',
                padding: '1.1rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: stage.accent, fontFamily: 'var(--font-mono)' }}>
                  STAGE {stage.num}
                </span>
                <span style={{ fontSize: '0.6rem', fontWeight: 700, border: '1px solid #3f3f46', background: '#09090b', color: '#e4e4e7', padding: '2px 6px', borderRadius: '0px', fontFamily: 'var(--font-mono)' }}>
                  {stage.tag}
                </span>
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.35rem', letterSpacing: '-0.01em' }}>
                {stage.label}
              </div>
              <div style={{ fontSize: '0.74rem', color: '#a1a1aa', lineHeight: 1.45, marginTop: 'auto' }}>
                {stage.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. THREE TECHNICAL SUBSYSTEMS (INTELLIGENCE MATRIX) */}
      <div className="arch-grid-trio">
        {arch.deepDives.map((dive, di) => (
          <div key={di} style={{ background: '#ffffff', border: '1.5px solid #18181b', borderRadius: '0px', padding: '1.35rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem', flexWrap: 'wrap', gap: '0.4rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 800, color: '#71717a', letterSpacing: '0.1em' }}>
                // {dive.subsystem}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 700, color: '#18181b', background: '#f4f4f5', border: '1px solid #18181b', padding: '1px 6px' }}>
                {dive.badge}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
              {dive.icon === 'TerminalIcon' && <TerminalIcon size={18} color="#18181b" strokeWidth={2} />}
              {dive.icon === 'Database' && <Database size={18} color="#18181b" strokeWidth={2} />}
              {dive.icon === 'ShieldCheck' && <ShieldCheck size={18} color="#18181b" strokeWidth={2} />}
              {dive.icon === 'Layers' && <Layers size={18} color="#18181b" strokeWidth={2} />}
              <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#18181b' }}>{dive.title}</span>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#52525b', lineHeight: 1.6, margin: 0 }}>
              {dive.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 6. TECHNOLOGY STACK FOOTER */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', padding: '1.25rem 0', borderTop: '1.5px solid #18181b' }}>
        <span style={{ fontSize: '0.72rem', fontWeight: 800, fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#18181b' }}>STACK_DEPS:</span>
        {arch.techStack.map((tech, ti) => (
          <span key={ti} style={{ fontSize: '0.72rem', fontWeight: 700, fontFamily: 'var(--font-mono)', background: '#f4f4f5', border: '1.5px solid #18181b', color: '#18181b', padding: '3px 8px', borderRadius: '0px' }}>
            [{tech}]
          </span>
        ))}
      </div>

      {/* 7. VERIFIED ENGINEERING EVIDENCE & BENCHMARK BOUNDS */}
      <div style={{ marginTop: '0.5rem', paddingTop: '1.25rem', borderTop: '1.5px dashed #18181b' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 800, color: '#18181b', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          // VERIFIED ENGINEERING EVIDENCE & BENCHMARK BOUNDS
        </div>
        <div className="arch-evidence-grid">
          <div style={{ background: '#fafafa', border: '1.2px solid #18181b', padding: '0.75rem 1rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.64rem', color: '#16a34a', fontWeight: 800, marginBottom: '0.2rem' }}>[STATUS: VERIFIED]</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#18181b' }}>{arch.evidence.tests}</div>
          </div>
          <div style={{ background: '#fafafa', border: '1.2px solid #18181b', padding: '0.75rem 1rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.64rem', color: '#71717a', fontWeight: 800, marginBottom: '0.2rem' }}>[EXECUTION: LOCAL]</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#18181b' }}>{arch.evidence.localSpeed}</div>
          </div>
          <div style={{ background: '#fafafa', border: '1.2px solid #18181b', padding: '0.75rem 1rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.64rem', color: '#71717a', fontWeight: 800, marginBottom: '0.2rem' }}>[PRODUCTION SCOPE]</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#18181b' }}>{arch.evidence.unmeasured}</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 800, color: '#71717a', textTransform: 'uppercase', flexShrink: 0, marginTop: '1px' }}>
            [NOTE]
          </span>
          <p style={{ margin: 0, fontSize: '0.74rem', color: '#71717a', lineHeight: 1.5, fontFamily: 'var(--font-mono)' }}>
            {arch.evidence.caution}
          </p>
        </div>
      </div>
    </div>
  );
};

// Dedicated Architecture Canvas for PRISM Engine (Adaptive Business Intelligence & Data Fusion)
const PrismArchitectureCanvas = ({ arch }) => {
  return (
    <div className="arch-canvas-container">
      {/* 1. TOP TELEMETRY STATUS BAR */}
      <div className="arch-telemetry-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#ffffff', background: '#18181b', padding: '4px 10px', borderRadius: '0px', border: '1.5px solid #18181b', fontFamily: 'var(--font-mono)' }}>
            {arch.sectionEyebrow}
          </span>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#18181b', background: '#f4f4f5', border: '1.5px solid #18181b', borderRadius: '0px', padding: '4px 10px', fontFamily: 'var(--font-mono)' }}>
            {arch.projectLabel}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#18181b', background: '#ffffff', border: '1.5px solid #18181b', padding: '4px 10px', borderRadius: '0px', display: 'flex', alignItems: 'center', fontFamily: 'var(--font-mono)' }}>
            SYS_TIER: DECOUPLED_REACT_FASTAPI
          </span>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#18181b', background: '#f4f4f5', border: '1.5px solid #18181b', padding: '4px 10px', borderRadius: '0px', fontFamily: 'var(--font-mono)' }}>
            PERSISTENCE: SQLITE_MVP
          </span>
        </div>
      </div>

      {/* 2. TITLE, SUBTITLE & EDITORIAL SPEC BRIEF */}
      <div style={{ margin: '1.5rem 0 1.75rem 0' }}>
        <h3 style={{ fontSize: 'clamp(1.3rem, 3.2vw, 2.1rem)', fontWeight: 800, color: '#18181b', margin: '0 0 0.5rem 0', lineHeight: 1.25, letterSpacing: '-0.02em' }}>
          {arch.title}
        </h3>
        <p style={{ fontSize: '0.96rem', color: '#52525b', margin: '0 0 1.25rem 0', lineHeight: 1.5, fontWeight: 500 }}>
          {arch.subtitle}
        </p>

        {/* Technical Headline Banner with Monospace Label */}
        <div className="arch-headline-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 800, color: '#18181b', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              TECHNICAL HEADLINE:
            </span>
            <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#18181b' }}>
              {arch.technicalHeadline}
            </span>
          </div>
          <p style={{ fontSize: '0.86rem', color: '#3f3f46', lineHeight: 1.6, margin: 0 }}>
            {arch.introduction}
          </p>
        </div>
      </div>

      {/* 3. TECHNICAL CONSTRAINT & ARCHITECTURAL APPROACH */}
      <div className="arch-grid-duo">
        <div style={{ background: '#fafafa', border: '1.5px solid #18181b', borderLeft: '6px solid #18181b', borderRadius: '0px', padding: '1.25rem 1.5rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#18181b', marginBottom: '0.5rem' }}>
            // 01. {arch.problemTitle}
          </div>
          <p style={{ fontSize: '0.88rem', color: '#27272a', lineHeight: 1.65, fontFamily: 'var(--font-sans)' }}>
            {arch.problem}
          </p>
        </div>

        <div style={{ background: '#fafafa', border: '1.5px solid #18181b', borderLeft: '6px solid #16a34a', borderRadius: '0px', padding: '1.25rem 1.5rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#18181b', marginBottom: '0.5rem' }}>
            // 02. {arch.solutionTitle}
          </div>
          <p style={{ fontSize: '0.88rem', color: '#27272a', lineHeight: 1.65, fontFamily: 'var(--font-sans)' }}>
            {arch.solution}
          </p>
        </div>
      </div>

      {/* 4. DATA TRANSFORMATION & ANALYTICAL LINEAGE CANVAS (EDITORIAL DATASET PIPELINE) */}
      <div className="arch-pipeline-wrapper">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#ffd074' }}>
            [DATA TRANSFORMATION & ANALYTICAL LINEAGE CANVAS]
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#a1a1aa' }}>
            {"PIPELINE_DEPENDENCY: 01 ➔ 02 ➔ 03 ➔ 04 ➔ 05"}
          </span>
        </div>

        {/* 5-Stage Data Transformation Grid */}
        <div className="arch-stage-grid">
          {arch.transformationStages.map((stage, stIdx) => (
            <div
              key={stIdx}
              style={{
                background: '#18181b',
                border: '1.5px solid #27272a',
                borderTop: '3px solid #e4e4e7',
                borderRadius: '0px',
                padding: '1.1rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#ffd074', fontFamily: 'var(--font-mono)' }}>
                  STAGE {stage.num}
                </span>
                <span style={{ fontSize: '0.6rem', fontWeight: 700, border: '1px solid #3f3f46', background: '#09090b', color: '#e4e4e7', padding: '2px 6px', borderRadius: '0px', fontFamily: 'var(--font-mono)' }}>
                  {stage.badge}
                </span>
              </div>
              <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.35rem', letterSpacing: '-0.01em' }}>
                {stage.title}
              </div>
              <div style={{ fontSize: '0.74rem', color: '#a1a1aa', lineHeight: 1.45, marginTop: 'auto', marginBottom: '0.75rem' }}>
                {stage.desc}
              </div>
              <div style={{ paddingTop: '0.5rem', borderTop: '1px solid #27272a', fontSize: '0.64rem', fontFamily: 'var(--font-mono)', color: '#71717a' }}>
                TRANSFORM: {stage.metric}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. THREE TECHNICAL SUBSYSTEMS (ANALYTICAL ENGINEERING DOSSIERS) */}
      <div className="arch-grid-trio">
        {arch.deepDives.map((dive, di) => (
          <div key={di} style={{ background: '#ffffff', border: '1.5px solid #18181b', borderRadius: '0px', padding: '1.35rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem', flexWrap: 'wrap', gap: '0.4rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 800, color: '#71717a', letterSpacing: '0.1em' }}>
                // {dive.subsystem}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 700, color: '#18181b', background: '#f4f4f5', border: '1px solid #18181b', padding: '1px 6px' }}>
                {dive.badge}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
              {dive.icon === 'Cpu' && <Cpu size={18} color="#18181b" strokeWidth={2} />}
              {dive.icon === 'Database' && <Database size={18} color="#18181b" strokeWidth={2} />}
              {dive.icon === 'Sparkles' && <Sparkles size={18} color="#18181b" strokeWidth={2} />}
              {dive.icon === 'FileText' && <FileText size={18} color="#18181b" strokeWidth={2} />}
              <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#18181b' }}>{dive.title}</span>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#52525b', lineHeight: 1.6, margin: '0 0 1rem 0' }}>
              {dive.desc}
            </p>
            <div style={{ marginTop: 'auto', paddingTop: '0.65rem', borderTop: '1px solid #f4f4f5', fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#71717a' }}>
              {dive.annotation}
            </div>
          </div>
        ))}
      </div>

      {/* 6. TECHNOLOGY STACK FOOTER */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', padding: '1.25rem 0', borderTop: '1.5px solid #18181b' }}>
        <span style={{ fontSize: '0.72rem', fontWeight: 800, fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#18181b' }}>STACK_DEPS:</span>
        {arch.techStack.map((tech, ti) => (
          <span key={ti} style={{ fontSize: '0.72rem', fontWeight: 700, fontFamily: 'var(--font-mono)', background: '#f4f4f5', border: '1.5px solid #18181b', color: '#18181b', padding: '3px 8px', borderRadius: '0px' }}>
            [{tech}]
          </span>
        ))}
      </div>

      {/* 7. ARCHITECTURAL BOUNDARIES & FORENSIC AUDIT DISCLOSURES */}
      <div style={{ marginTop: '0.5rem', paddingTop: '1.25rem', borderTop: '1.5px dashed #18181b' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 800, color: '#18181b', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          // ARCHITECTURAL BOUNDARIES & FORENSIC AUDIT DISCLOSURES
        </div>
        <div className="arch-evidence-grid">
          {arch.auditDisclosures.map((disc, dIdx) => (
            <div key={dIdx} style={{ background: '#fafafa', border: '1.2px solid #18181b', padding: '0.75rem 1rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.64rem', color: '#71717a', fontWeight: 800, marginBottom: '0.2rem' }}>
                [{disc.label}]
              </div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#18181b', marginBottom: '0.25rem' }}>
                {disc.title}
              </div>
              <div style={{ fontSize: '0.74rem', color: '#52525b', lineHeight: 1.45 }}>
                {disc.desc}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 800, color: '#71717a', textTransform: 'uppercase', flexShrink: 0, marginTop: '1px' }}>
            [AUDIT NOTICE]
          </span>
          <p style={{ margin: 0, fontSize: '0.74rem', color: '#71717a', lineHeight: 1.5, fontFamily: 'var(--font-mono)' }}>
            Performance benchmarks, throughput, and sub-second latency claims are omitted in strict alignment with codebase audit findings. Statistical outputs reflect association analysis; target-leakage remediation is tracked for subsequent releases.
          </p>
        </div>
      </div>
    </div>
  );
};

// System Architecture & Engineering Playbook Database
const ARCHITECTURE_PLAYBOOK_DATA = [
  {
    id: "snapmeet",
    project: "Snapmeet SaaS",
    projectLabel: "ARCHITECTURE / 01 — SNAPMEET SAAS",
    sectionEyebrow: "[SPEC // MODULAR SAAS + ASYNC PROCESSING]",
    title: "Offline-Resilient Ticketing & Gate Operations",
    subtitle: "Event management, transactional ticketing, concurrency control, and resilient venue operations.",
    technicalHeadline: "Atomic Ticketing & Offline-First Gate Synchronization",
    introduction: "Engineering reliable ticketing and venue operations through transactional integrity, asynchronous processing, and offline-first synchronization.",
    problemTitle: "CONSTRAINT & BOTTLENECK",
    problem: "Live event operations introduce challenges around concurrent ticket admissions, duplicate check-ins, unreliable venue connectivity, payment reconciliation, and timely ticket delivery.",
    solutionTitle: "ARCHITECTURAL APPROACH",
    solution: "Built a modular Django platform backed by PostgreSQL transactions, Celery/Redis background processing, and SnapScanner's offline-first synchronization system to coordinate event ticketing, payments, and venue entry.",
    flowSteps: [
      { num: "01", label: "Client Ingress", sub: "Web application, REST APIs and QR scans", tag: "Ingress" },
      { num: "02", label: "Application Core", sub: "Django business logic, registration and pricing", tag: "Core" },
      { num: "03", label: "Transactional Storage", sub: "PostgreSQL, atomic transactions and row-level locking", tag: "Storage" },
      { num: "04", label: "Async Processing", sub: "Celery, Redis, ticket generation and email dispatch", tag: "Workers" },
      { num: "05", label: "SnapScanner", sub: "IndexedDB offline queue and batch synchronization", tag: "Offline Sync" }
    ],
    deepDives: [
      {
        icon: "ShieldCheck",
        subsystem: "SUBSYSTEM 01",
        title: "Transactional Concurrency Control",
        desc: "Uses PostgreSQL select_for_update() within atomic transactions to coordinate concurrent ticket admissions, validate remaining capacity, and handle duplicate or conflicting check-ins."
      },
      {
        icon: "Smartphone",
        subsystem: "SUBSYSTEM 02",
        title: "Offline-First Gate Operations",
        desc: "SnapScanner caches attendee manifests in IndexedDB and queues offline scans for subsequent synchronization. The server reconciles batches of up to 500 records and handles duplicate-sync conflicts."
      },
      {
        icon: "CreditCard",
        subsystem: "SUBSYSTEM 03",
        title: "Precision Pricing & Payment Routing",
        desc: "An integer-paise pricing engine with deterministic rounding supports fee calculations. Razorpay and PayPal provide domestic and international payment flows, with webhook signature verification and idempotent processing."
      }
    ],
    techStack: [
      "Python",
      "Django",
      "PostgreSQL",
      "Celery",
      "Redis",
      "TypeScript",
      "Capacitor",
      "IndexedDB",
      "Razorpay",
      "PayPal",
      "Google Gemini"
    ],
    footnote: "Performance reference: Historical local dashboard testing recorded a 640 ms P50 and a 1,600 ms P99 at four concurrent users. These figures describe the dashboard endpoint, not QR-scanning latency."
  },
  {
    id: "kairo",
    project: "Kairo Engine",
    projectLabel: "ARCHITECTURE / 02 — KAIRO ENGINE",
    sectionEyebrow: "[SPEC // DETERMINISTIC REASONING + HYBRID KNOWLEDGE BACKBONE]",
    title: "Engineering Context & Decision Intelligence",
    subtitle: "Event-driven work continuity, temporal knowledge graphs, and evidence-grounded AI synthesis.",
    technicalHeadline: "Deterministic Anomaly Detection & Grounded Context Synthesis",
    introduction: "Reconcile declared task status with observed engineering activity, preserving verifiable evidence across developer handoffs.",
    problemTitle: "CONSTRAINT & BOTTLENECK",
    problem: "Engineering context fragments across Jira tickets, GitHub pull requests, commits, CI checks, Slack discussions, and architectural decisions. Traditional summaries can miss conflicting states, lose decision lineage, or generate claims that cannot be traced to source evidence.",
    solutionTitle: "ARCHITECTURAL APPROACH",
    solution: "Built an event-driven modular monolith with FastAPI, asynchronous Celery/Redis workers, a PostgreSQL + pgvector relational/vector store, and a Neo4j knowledge graph. Deterministic Python rules identify engineering anomalies before a citation-validated LLM synthesizes the handoff context.",
    pipelineStages: [
      {
        num: "01",
        label: "Event Ingestion",
        desc: "GitHub, Jira, Slack webhooks and local Git context.",
        tag: "Ingress",
        accent: "#ffd074"
      },
      {
        num: "02",
        label: "Async Processing",
        desc: "FastAPI, Celery, Redis and idempotent event ingestion.",
        tag: "Workers",
        accent: "#38bdf8"
      },
      {
        num: "03",
        label: "Dual-Store Knowledge",
        desc: "PostgreSQL + pgvector for identity and semantic retrieval; Neo4j for entity relationships and decision lineage.",
        tag: "Dual-Store",
        accent: "#a855f7"
      },
      {
        num: "04",
        label: "Deterministic Reasoning",
        desc: "HW-01–HW-05 anomaly rules and pre-retrieval access control.",
        tag: "Rule Gate",
        accent: "#22c55e"
      },
      {
        num: "05",
        label: "Grounded Synthesis",
        desc: "Citation-validated handoff packages and contextual responses.",
        tag: "Synthesis",
        accent: "#f59e0b"
      }
    ],
    deepDives: [
      {
        icon: "TerminalIcon",
        subsystem: "SUBSYSTEM 01",
        badge: "HW-01 — HW-05 NON-LLM RULES",
        title: "Deterministic Anomaly Radar",
        desc: "Implemented five Python-based anomaly rules to identify mismatches between declared task status and observed engineering activity, including unlinked commits, open pull requests, and failed CI checks. Rule evaluation does not depend on an LLM."
      },
      {
        icon: "Database",
        subsystem: "SUBSYSTEM 02",
        badge: "POSTGRESQL + PGVECTOR & NEO4J",
        title: "Dual-Store Temporal Knowledge Backbone",
        desc: "PostgreSQL with pgvector handles relational identity, event records, and 768-dimensional embedding similarity search. Neo4j represents relationships between developers, tasks, pull requests, and architectural decisions, supporting graph-based lineage traversal."
      },
      {
        icon: "ShieldCheck",
        subsystem: "SUBSYSTEM 03",
        badge: "PRE-RETRIEVAL ACL & MANIFEST",
        title: "Pre-Retrieval ACL & Evidence Validation",
        desc: "Enforces tenant and repository authorization before context retrieval. Generated handoff summaries are checked against a verified evidence manifest containing references such as PR numbers, commit identifiers, and Jira keys."
      }
    ],
    techStack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Neo4j",
      "Celery",
      "Redis",
      "Next.js",
      "Tauri 2.0",
      "Rust",
      "LLM APIs"
    ],
    evidence: {
      tests: "11 dedicated anomaly-rule tests passed.",
      localSpeed: "Historical local test execution reported 15 tests in 0.46 seconds.",
      unmeasured: "Production RPS and P95/P99 latency have not been measured.",
      caution: "Do not convert unit-test execution time into API latency or a production performance claim."
    }
  },
  {
    id: "prism",
    project: "PRISM Engine",
    projectLabel: "ARCHITECTURE / 03 — PRISM ENGINE",
    sectionEyebrow: "[SPEC // ADAPTIVE DATA PIPELINE + ANALYTICAL INTELLIGENCE]",
    title: "Adaptive Business Intelligence & Data Fusion",
    subtitle: "Multi-source analytics, intelligent schema resolution, and automated machine learning.",
    technicalHeadline: "From Fragmented Datasets to Unified Business Insights",
    introduction: "Transform inconsistent business exports into aligned financial metrics, cross-signal analysis, predictive models, and executive-ready reports.",
    problemTitle: "CONSTRAINT & BOTTLENECK",
    problem: "Business datasets arrive with inconsistent column names, different reporting frequencies, missing values, and fragmented financial signals. Rigid ETL pipelines require manual schema mapping and can fail when input structures change.",
    solutionTitle: "ARCHITECTURAL APPROACH",
    solution: "Built a decoupled React and FastAPI analytics platform with adaptive schema matching, data-quality profiling, temporal dataset fusion, statistical analysis, automated model evaluation, and server-side PDF reporting.",
    transformationStages: [
      {
        num: "01",
        title: "Multi-Source Ingestion",
        desc: "CSV/XLSX uploads, column profiling and dataset validation.",
        badge: "INGRESS",
        metric: "Schema Profiling & Type Check"
      },
      {
        num: "02",
        title: "Adaptive Schema Intelligence",
        desc: "Exact aliases, RapidFuzz, MiniLM embeddings and mapping memory.",
        badge: "RESOLUTION",
        metric: "Semantic Embeddings & RapidFuzz"
      },
      {
        num: "03",
        title: "Temporal Data Fusion",
        desc: "Date normalization, daily aggregation and full outer joins.",
        badge: "ALIGNMENT",
        metric: "Daily Full Outer Join"
      },
      {
        num: "04",
        title: "Analytical & ML Engines",
        desc: "Profit calculations, Pearson correlations, trend forecasting and model evaluation.",
        badge: "ANALYTICS",
        metric: "Statistical Association & Evaluation"
      },
      {
        num: "05",
        title: "Business Intelligence Output",
        desc: "Interactive React dashboards, analytical visualizations and PDF reports.",
        badge: "DELIVERY",
        metric: "React Dashboards & ReportLab PDF"
      }
    ],
    deepDives: [
      {
        icon: "Cpu",
        subsystem: "SUBSYSTEM 01",
        badge: "SCHEMA MAPPING & NLP",
        title: "Adaptive Schema Intelligence",
        desc: "Combines normalized exact matching, persisted mapping memory, RapidFuzz string similarity, Sentence-Transformers (all-MiniLM-L6-v2) embeddings, and data-profile signals to map inconsistent source columns to canonical business fields.",
        annotation: "STRATEGY: EXACT MATCH ➔ RAPIDFUZZ ➔ ALL-MINILM-L6-V2 ➔ MAPPING MEMORY"
      },
      {
        icon: "Database",
        subsystem: "SUBSYSTEM 02",
        badge: "TEMPORAL MERGE & MATH",
        title: "Multi-Dataset Temporal Fusion",
        desc: "Normalizes dates, aggregates financial and operational metrics at daily granularity, and performs full outer joins to align datasets with different schemas and reporting frequencies. Computes net operational profit from revenue, costs, refunds, and discounts.",
        annotation: "FORMULA: NET PROFIT = REVENUE - COSTS - REFUNDS - DISCOUNTS"
      },
      {
        icon: "FileText",
        subsystem: "SUBSYSTEM 03",
        badge: "EVALUATION & PDF",
        title: "Automated ML Benchmarking & Reporting",
        desc: "Evaluates regression and classification models using Scikit-learn, with optional XGBoost integration and permutation feature importance. Generates executive PDF reports using ReportLab.",
        annotation: "EVALUATION: SCIKIT-LEARN · OPTIONAL XGBOOST · REPORTLAB PDF GENERATION"
      }
    ],
    techStack: [
      "Python",
      "FastAPI",
      "React 19",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "Sentence-Transformers",
      "RapidFuzz",
      "SQLite",
      "SQLAlchemy",
      "ReportLab",
      "Recharts"
    ],
    auditDisclosures: [
      {
        label: "ARCHITECTURAL MVP",
        title: "Decoupled Architecture",
        desc: "Functional MVP using a decoupled React frontend and FastAPI backend, with SQLite persistence. Not a distributed microservices deployment."
      },
      {
        label: "STATISTICAL SCOPE",
        title: "Association Analysis",
        desc: "Evaluates Pearson correlations and cross-metric trends. Explicitly characterized as statistical association rather than true causal inference."
      },
      {
        label: "PIPELINE INTEGRITY",
        title: "Audit Findings & Backlog",
        desc: "Blind-spot detector service is unreferenced by the active pipeline; R² = 1.0 artifact identified as target leakage pending re-evaluation. No synthetic accuracy or latency claims."
      }
    ]
  }
];

// Multilingual translations for last name "Raj" (including Korean 자부심 as requested)
const RAJ_TRANSLATIONS = [
  { lang: "English", text: "RAJ", script: "Latin" },
  { lang: "Korean", text: "자부심", script: "한국어" },
  { lang: "Hindi", text: "राज", script: "हिन्दी" },
  { lang: "Japanese", text: "ラージ", script: "日本語" },
  { lang: "Chinese", text: "拉杰", script: "中文" },
  { lang: "Kannada", text: "ರಾಜ್", script: "ಕನ್ನಡ" },
  { lang: "Marathi", text: "राज", script: "मराठी" },
  { lang: "Bengali", text: "রাজ", script: "বাংলা" },
  { lang: "Tamil", text: "ராஜ்", script: "தமிழ்" },
  { lang: "Telugu", text: "రాజ్", script: "తెలుగు" }
];

// Continuous skills river for mobile diagonal wave animation (infinite seamless loop)
const MOBILE_SKILLS_LIST = [
  "Jenkins", "Vercel", "Git", "GitHub", "NPM", "Yarn", "JavaScript", "TypeScript",
  "React", "Next.js", "Python", "FastAPI", "Django", "PostgreSQL", "Redis",
  "Celery", "Docker", "Rust", "pgvector", "Neo4j", "SQL", "Markdown", "Lua", "CI/CD"
];
const MOBILE_SKILLS_UNIT = MOBILE_SKILLS_LIST.join(" — ") + " — ";
const MOBILE_SKILLS_STREAM = MOBILE_SKILLS_UNIT.repeat(3);



export default function App() {
  // Navigation & Music Player States (Replicating Image 2 & Image 3)
  const [isMusicOpen, setIsMusicOpen] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const musicAudioRef = useRef(null);
  const musicDropdownRef = useRef(null);
  const [timeString, setTimeString] = useState("08:00");
  const [ampmString, setAmpmString] = useState("pm");
  const [dateString, setDateString] = useState("October 14");
  const [copiedEmail, setCopiedEmail] = useState(false);




  // Close music dropdown on outside click or touch
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (musicDropdownRef.current && !musicDropdownRef.current.contains(e.target) && !e.target.closest('#music-toggle-btn')) {
        setIsMusicOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Multilingual Raj Cycle & Interactive Hover Expansion States
  const [rajIndex, setRajIndex] = useState(0);
  const [rajFadeState, setRajFadeState] = useState('visible'); // 'visible' | 'fade-out' | 'prepare-in'
  const [hasConnected, setHasConnected] = useState(false);
  const [isHoveredAditya, setIsHoveredAditya] = useState(false);
  const [isHoveredRaj, setIsHoveredRaj] = useState(false);

  // Pre-load natural speech voices on mount
  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }
  }, []);

  // Hero 3D Tilt & DOM-Direct Marquee Refs
  const [tiltStyle, setTiltStyle] = useState({});
  const heroNameRef = useRef(null);
  const leftTextPathRef = useRef(null);
  const rightTextPathRef = useRef(null);
  const mobileTextPathRef = useRef(null);
  // Mobile expandable menu states: 'closed' | 'opening' | 'open' | 'closing'
  const [mobileMenuState, setMobileMenuState] = useState('closed');
  const mobileMenuRef = useRef(null);

  const openMobileMenu = () => {
    setMobileMenuState('opening');
    setTimeout(() => {
      setMobileMenuState('open');
    }, 280);
  };

  const closeMobileMenu = () => {
    if (mobileMenuState === 'closed' || mobileMenuState === 'closing') return;
    setMobileMenuState('closing');
    setTimeout(() => {
      setMobileMenuState('closed');
    }, 220);
  };

  // Smooth animated redirect to sections
  const smoothNavigateTo = (targetId, e) => {
    if (e && e.preventDefault) e.preventDefault();
    closeMobileMenu();

    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const navOffset = 60;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = Math.max(0, elementPosition - navOffset);
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        window.history.pushState(null, '', `#${targetId}`);
      }
    }, 120);
  };

  // Close mobile nav menu on tap outside
  useEffect(() => {
    if (mobileMenuState === 'closed') return;
    const handleOutsideClick = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target) && !e.target.closest('#mobile-nav-toggle-btn')) {
        closeMobileMenu();
      }
    };
    window.addEventListener('pointerdown', handleOutsideClick);
    return () => window.removeEventListener('pointerdown', handleOutsideClick);
  }, [mobileMenuState]);

  // Terminal States & Dynamic Sequential Typing
  const [terminalMax, setTerminalMax] = useState(false);
  const [terminalDark, setTerminalDark] = useState(false);
  const [typedCommand, setTypedCommand] = useState("");
  const [typedQuote, setTypedQuote] = useState("");
  const [terminalStage, setTerminalStage] = useState(0); // 0: initial, 1: typing cmd, 2: typing quote, 3: done
  const [terminalInView, setTerminalInView] = useState(false);
  const terminalSectionRef = useRef(null);
  const [termPos, setTermPos] = useState({ x: 0, y: 0 });
  const [cliInput, setCliInput] = useState("");
  const [cliHistory, setCliHistory] = useState([]);
  const isDraggingTerm = useRef(false);
  const termDragStart = useRef({ x: 0, y: 0 });

  // Tags Scroll Reveal & Dynamic Float Parallax
  const tagsContainerRef = useRef(null);
  const [tagsRevealed, setTagsRevealed] = useState(false);
  const [tagParallax, setTagParallax] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const handleScroll = () => {
      if (!tagsContainerRef.current) return;
      const rect = tagsContainerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Reveal progressively as scrolled into view
      if (rect.top < windowHeight * 0.92) {
        setTagsRevealed(true);
      }

      // Dynamic subtle scroll float (never rigid/fixed)
      const offset = (windowHeight * 0.5 - rect.top) * 0.045;
      setTagParallax([
        Math.sin(offset) * 6,
        -Math.cos(offset * 0.9) * 8,
        Math.sin(offset * 1.2) * 5,
        -Math.cos(offset * 0.8) * 7
      ]);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Principles Bento Hover State
  const [hoveredPrinciple, setHoveredPrinciple] = useState(null);

  // Experience Cards Flip State
  const [flippedCards, setFlippedCards] = useState({});

  // Architecture Playbook State
  const [activeArchIndex, setActiveArchIndex] = useState(0);

  // Modals & Drawers with Full Smooth Animations
  const [activeProject, setActiveProject] = useState(null);
  const [projectModalClosing, setProjectModalClosing] = useState(false);

  const openProjectModal = (proj) => {
    setProjectModalClosing(false);
    setActiveProject(proj);
  };

  const closeProjectModal = () => {
    if (projectModalClosing || !activeProject) return;
    setProjectModalClosing(true);
    setTimeout(() => {
      setActiveProject(null);
      setProjectModalClosing(false);
    }, 280);
  };

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactModalClosing, setContactModalClosing] = useState(false);

  const openContactModal = () => {
    setContactModalClosing(false);
    setIsContactOpen(true);
  };

  const closeContactModal = () => {
    if (contactModalClosing || !isContactOpen) return;
    setContactModalClosing(true);
    setTimeout(() => {
      setIsContactOpen(false);
      setContactModalClosing(false);
    }, 280);
  };

  // Projects Title Click-Only Animation State (Strictly triggered on user tap/click, not automatic)
  const [isProjectsTitleActive, setIsProjectsTitleActive] = useState(false);

  const handleProjectsTitleClick = () => {
    setIsProjectsTitleActive(false);
    requestAnimationFrame(() => {
      setIsProjectsTitleActive(true);
      setTimeout(() => {
        setIsProjectsTitleActive(false);
      }, 1200);
    });
  };

  // Experience Title Click-Only Animation State (Triggered on user tap/click, with re-trigger reset)
  const [isExperienceTitleActive, setIsExperienceTitleActive] = useState(false);

  const handleExperienceTitleClick = () => {
    setIsExperienceTitleActive(false);
    requestAnimationFrame(() => {
      setIsExperienceTitleActive(true);
      setTimeout(() => {
        setIsExperienceTitleActive(false);
      }, 1200);
    });
  };

  // Experience Track Mobile Peeking Carousel Handlers
  const experienceTrackRef = useRef(null);
  const [activeExpCardIndex, setActiveExpCardIndex] = useState(0);

  const handleExperienceScroll = () => {
    if (!experienceTrackRef.current) return;
    const { scrollLeft } = experienceTrackRef.current;
    const cardWidth = Math.min(window.innerWidth * 0.78, 295) + 14.4;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveExpCardIndex(Math.max(0, Math.min(EXPERIENCE_DATA.length - 1, index)));
  };

  const scrollToExpCard = (idx) => {
    if (!experienceTrackRef.current) return;
    const cardWidth = Math.min(window.innerWidth * 0.78, 295) + 14.4;
    experienceTrackRef.current.scrollTo({
      left: idx * cardWidth,
      behavior: 'smooth'
    });
  };

  const screenshotsScrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScreenshotsScroll = () => {
    if (screenshotsScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = screenshotsScrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollScreenshots = (direction) => {
    if (screenshotsScrollRef.current) {
      // Smooth incremental nudge (140px) per click instead of jumping full slide width
      const scrollAmount = 140;
      screenshotsScrollRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (activeProject) {
      if (screenshotsScrollRef.current) {
        screenshotsScrollRef.current.scrollLeft = 0;
      }
      setCanScrollLeft(false);
      setCanScrollRight(true);
    }
  }, [activeProject]);

  useEffect(() => {
    if (!activeProject) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        scrollScreenshots('next');
      } else if (e.key === 'ArrowLeft') {
        scrollScreenshots('prev');
      } else if (e.key === 'Escape') {
        closeProjectModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject, projectModalClosing]);

  // 3-Band Home Page Transition Curtain State (Screenshots 3 & 4)
  const [curtainActive, setCurtainActive] = useState(false);
  const [curtainPhase, setCurtainPhase] = useState('idle'); // 'enter' | 'reveal' | 'exit'

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (curtainActive) return;

    setCurtainActive(true);
    setCurtainPhase('enter');

    // Stage 1: 3 cards sweep up sequentially from bottom with silk ease-in-out (950ms)
    setTimeout(() => {
      setCurtainPhase('reveal');
      window.scrollTo({ top: 0, behavior: 'auto' });
      window.history.pushState(null, '', '#home');

      // Stage 2: Display "HOME" message centered for exactly 0.3s (300ms) as requested
      setTimeout(() => {
        setCurtainPhase('exit');

        // Stage 3: 3 cards sweep sequentially up off the screen with silk easing (950ms)
        setTimeout(() => {
          setCurtainActive(false);
          setCurtainPhase('idle');
        }, 950);
      }, 300);
    }, 950);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Animated Speed Counter for Production Scale Section (starts when section scrolled into view)
  const [countStates, setCountStates] = useState(0);
  const [countEvents, setCountEvents] = useState(0);
  const [countRegistrations, setCountRegistrations] = useState(0);
  const statsSectionRef = useRef(null);

  useEffect(() => {
    let animId = null;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (animId) cancelAnimationFrame(animId);

            // Fast, punchy speed count-up over 1100ms
            const duration = 1100;
            const startTime = performance.now();

            const updateCounts = (now) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Cubic ease-out: starts fast with speed, settles cleanly
              const ease = 1 - Math.pow(1 - progress, 3);

              setCountStates(Math.round(ease * 9));
              setCountEvents(Math.round(ease * 50));
              setCountRegistrations(Math.round(ease * 4230));

              if (progress < 1) {
                animId = requestAnimationFrame(updateCounts);
              }
            };

            animId = requestAnimationFrame(updateCounts);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (statsSectionRef.current) {
      observer.observe(statsSectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  // IntersectionObserver to trigger Projects Section animations on scroll into view
  const projectsSectionRef = useRef(null);
  const [projectsInView, setProjectsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setProjectsInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsSectionRef.current) {
      observer.observe(projectsSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Global Escape key listener to close active modals
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeProjectModal();
        closeContactModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject, isContactOpen]);

  // Clock Hook
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setAmpmString(hours >= 12 ? 'pm' : 'am');
      hours = hours % 12 || 12;
      setTimeString(`${String(hours).padStart(2, '0')}:${minutes}`);

      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      setDateString(`${months[now.getMonth()]} ${now.getDate()}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Continuous Auto-Cycle Last Name "Raj" Across Languages (Very slow, 2-stage fade: one fades out, then next appears)
  useEffect(() => {
    if (!hasConnected) return;

    let timeout1, timeout2;
    const cycleInterval = setInterval(() => {
      // Step 1: Fade out current word slowly over 650ms
      setRajFadeState('fade-out');

      timeout1 = setTimeout(() => {
        // Step 2: Switch language while invisible, prepare entrance from below
        setRajIndex(prev => (prev + 1) % RAJ_TRANSLATIONS.length);
        setRajFadeState('prepare-in');

        timeout2 = setTimeout(() => {
          // Step 3: Fade in new language slowly and smoothly over 750ms
          setRajFadeState('visible');
        }, 50);
      }, 650);
    }, 4500);

    return () => {
      clearInterval(cycleInterval);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [hasConnected]);

  // Dual-Direction Converging Skills Stream: Gentle luxury pace (8.8s)
  useEffect(() => {
    let frameId;
    const duration = 8800; // 8.8s slow, majestic glide
    let startTime = null;

    const startLeft = 8;
    const targetLeft = 50.0;

    const startRight = 92;
    const targetRight = 50.0;

    // Immediately set starting positions on mount so both sides appear instantly
    if (leftTextPathRef.current) {
      leftTextPathRef.current.setAttribute('startOffset', `${startLeft}%`);
    }
    if (rightTextPathRef.current) {
      rightTextPathRef.current.setAttribute('startOffset', `${startRight}%`);
    }

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const animateMarquee = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);

      const currentLeft = startLeft + (targetLeft - startLeft) * eased;
      const currentRight = startRight + (targetRight - startRight) * eased;

      if (leftTextPathRef.current) {
        leftTextPathRef.current.setAttribute('startOffset', `${currentLeft}%`);
      }
      if (rightTextPathRef.current) {
        rightTextPathRef.current.setAttribute('startOffset', `${currentRight}%`);
      }

      if (progress < 1) {
        frameId = requestAnimationFrame(animateMarquee);
      } else {
        // Connected! Lock cleanly at exact center and stop moving
        if (leftTextPathRef.current) leftTextPathRef.current.setAttribute('startOffset', `${targetLeft}%`);
        if (rightTextPathRef.current) rightTextPathRef.current.setAttribute('startOffset', `${targetRight}%`);
        setHasConnected(true);
      }
    };

    frameId = requestAnimationFrame(animateMarquee);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Mobile Diagonal Skills River: Ultra-lightweight, 60/120fps hardware-efficient continuous flow
  useEffect(() => {
    // Only run mobile river on mobile viewports (< 900px)
    if (typeof window !== 'undefined' && window.innerWidth > 900) return;

    let frameId;
    let lastTime = null;
    let distance = 0;
    let isRunning = false;

    // Cache pre-measured unit length once to eliminate synchronous layout reflows in loop
    let unitLength = 2200;
    if (mobileTextPathRef.current) {
      try {
        const el = mobileTextPathRef.current.parentElement || mobileTextPathRef.current;
        if (el && el.getSubStringLength) {
          const measured = el.getSubStringLength(0, MOBILE_SKILLS_UNIT.length);
          if (measured && measured > 500) unitLength = measured;
        }
      } catch {}
    }

    // Smooth, gentle velocity (~120px/s in SVG coordinates) - calm and completely lag-free
    const speed = 0.12;

    const animateMobileRiver = (timestamp) => {
      if (!isRunning) return;

      if (!lastTime) lastTime = timestamp;
      const delta = Math.min(timestamp - lastTime, 48); // Cap frame spike
      lastTime = timestamp;

      distance += speed * delta;

      // Mathematical seamless modulus wrap using whole integer pixels:
      const currentOffset = Math.round((distance % unitLength) - unitLength);

      if (mobileTextPathRef.current) {
        mobileTextPathRef.current.setAttribute('startOffset', `${currentOffset}px`);
      }

      frameId = requestAnimationFrame(animateMobileRiver);
    };

    const startAnimation = () => {
      if (!isRunning) {
        isRunning = true;
        lastTime = null;
        frameId = requestAnimationFrame(animateMobileRiver);
      }
    };

    const stopAnimation = () => {
      isRunning = false;
      if (frameId) {
        cancelAnimationFrame(frameId);
        frameId = null;
      }
    };

    const heroEl = document.getElementById('spark-effect-zone');
    let observer = null;
    if (typeof IntersectionObserver !== 'undefined' && heroEl) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          stopAnimation();
        }
      }, { threshold: 0.05 });
      observer.observe(heroEl);
    } else {
      startAnimation();
    }

    return () => {
      stopAnimation();
      if (observer) observer.disconnect();
    };
  }, []);

  // Observer to trigger Terminal Typing ONLY when user scrolls to the terminal section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTerminalInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (terminalSectionRef.current) {
      observer.observe(terminalSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Terminal Sequential Typewriter Effect (Command then Quote matching reference image)
  useEffect(() => {
    if (!terminalInView) return;

    const commandText = "fortune AdityaRaj.fortune";
    const quoteText = "Perfection may not be attainable, but if we chase perfection, we can catch excellence.";

    setTerminalStage(1);
    let cmdIdx = 0;
    const startTimer = setTimeout(() => {
      const cmdInterval = setInterval(() => {
        if (cmdIdx < commandText.length) {
          setTypedCommand(commandText.slice(0, cmdIdx + 1));
          cmdIdx++;
        } else {
          clearInterval(cmdInterval);
          // Pause 300ms before bot replies
          setTimeout(() => {
            setTerminalStage(2);
            let quoteIdx = 0;
            const quoteInterval = setInterval(() => {
              if (quoteIdx < quoteText.length) {
                setTypedQuote(quoteText.slice(0, quoteIdx + 1));
                quoteIdx++;
              } else {
                clearInterval(quoteInterval);
                setTerminalStage(3); // Finished, cursor keeps blinking
              }
            }, 28);
          }, 300);
        }
      }, 35);
    }, 250);

    return () => clearTimeout(startTimer);
  }, [terminalInView]);

  // Music Player Controller (Image 2 & 3: Auto-Play, Track Switching, Equalizer Sync)
  const playTrack = (index) => {
    setCurrentTrackIndex(index);
    setIsPlayingMusic(true);

    // Warm ambient synthesizer ensures 100% reliable instant playback
    playSynthMusic(index);

    // Also attempt streaming HTML5 audio track
    try {
      if (!musicAudioRef.current) {
        musicAudioRef.current = new Audio(TRACKS[index].audioUrl);
        musicAudioRef.current.loop = true;
      } else {
        musicAudioRef.current.src = TRACKS[index].audioUrl;
      }
      musicAudioRef.current.play().catch(() => { });
    } catch { }
  };

  const stopMusic = () => {
    stopSynthMusic();
    if (musicAudioRef.current) {
      try {
        musicAudioRef.current.pause();
        musicAudioRef.current.currentTime = 0;
      } catch { }
    }
    setIsPlayingMusic(false);
  };

  const toggleMusic = (e) => {
    e.stopPropagation();
    if (isPlayingMusic) {
      stopMusic();
      setIsMusicOpen(false);
    } else {
      setIsMusicOpen(true);
      playTrack(currentTrackIndex);
    }
  };

  const togglePlayPause = (e) => {
    e.stopPropagation();
    if (isPlayingMusic) {
      stopMusic();
    } else {
      playTrack(currentTrackIndex);
    }
  };

  // Single-Color Crisp Radial Click-Spark Ray Burst (Matching Original itsvg.in reference)
  const spawnSparkBurst = (x, y) => {
    const container = document.createElement('div');
    container.className = 'click-spark-container';
    container.style.cssText = `
      position: absolute;
      left: ${x}px;
      top: ${y}px;
      width: 140px;
      height: 140px;
      pointer-events: none;
      z-index: 999999;
      transform: translate(-50%, -50%);
    `;

    // 8 Single-Color Lines radiating outward from center (70, 70)
    const sparkCount = 8;
    const baseAngle = Math.random() * 20 - 10;
    const lines = [];

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '140');
    svg.setAttribute('height', '140');
    svg.setAttribute('viewBox', '0 0 140 140');
    svg.style.overflow = 'visible';
    svg.style.display = 'block';

    for (let i = 0; i < sparkCount; i++) {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      // Single clean line extending from center (70, 70) towards (70, 44) => length 26px
      line.setAttribute('x1', '70');
      line.setAttribute('y1', '70');
      line.setAttribute('x2', '70');
      line.setAttribute('y2', '44');
      line.setAttribute('stroke', '#3f3f46'); // Single authentic charcoal color (not multi-color)
      line.setAttribute('stroke-width', '3'); // Single clean stroke (not double)
      line.setAttribute('stroke-linecap', 'round');
      line.style.transformOrigin = '70px 70px';
      line.style.willChange = 'transform, opacity';

      svg.appendChild(line);
      lines.push({ el: line, angle: baseAngle + i * (360 / sparkCount) });
    }

    container.appendChild(svg);
    document.body.appendChild(container);

    let finished = 0;
    lines.forEach(({ el, angle }) => {
      // Full revealing: emerges from center (0 length), reveals outward into clean single ray, glides outward, and dissolves
      const anim = el.animate([
        {
          transform: `rotate(${angle}deg) translateY(26px) scaleY(0.02)`,
          opacity: 0,
          offset: 0
        },
        {
          transform: `rotate(${angle}deg) translateY(0px) scaleY(1)`,
          opacity: 1,
          offset: 0.22
        },
        {
          transform: `rotate(${angle}deg) translateY(-16px) scaleY(0.95)`,
          opacity: 0.95,
          offset: 0.55
        },
        {
          transform: `rotate(${angle}deg) translateY(-36px) scaleY(0.35)`,
          opacity: 0,
          offset: 1
        }
      ], {
        duration: 800, // Slow, calm, and smooth
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        fill: 'forwards'
      });

      anim.onfinish = () => {
        finished++;
        if (finished === lines.length) {
          container.remove();
        }
      };
    });
  };

  // Pronounce Name with 100% Studio-Quality Real Human Female Voice
  const pronounceName = (e) => {
    // Play 100% Authentic Real Human Female Voice Recording (en-IN Neerja Neural)
    try {
      const humanAudio = new Audio('/aditya-raj.mp3');
      humanAudio.play().catch(() => {
        // Fallback to speech synthesis with female voice if audio tag blocked
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          const u = new SpeechSynthesisUtterance("Aditya Raj");
          u.lang = "en-IN";
          u.rate = 0.95;
          const voices = window.speechSynthesis.getVoices();
          const femaleVoice = voices.find(v => (v.name.includes('Female') || v.name.includes('Zira') || v.name.includes('Heera') || v.name.includes('Neerja') || v.name.includes('Natural')) && (v.lang.includes('IN') || v.lang.includes('en')));
          if (femaleVoice) u.voice = femaleVoice;
          window.speechSynthesis.speak(u);
        }
      });
    } catch {
      // Fallback
    }
  };

  // 3D Hover & Tactile Tilt EXCLUSIVELY on the Letter/Name Area - Silky Smooth & Weighted
  const handleNameMouseMove = (e) => {
    if (!heroNameRef.current) return;
    const rect = heroNameRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;

    const normX = Math.max(-1, Math.min(1, distX / (rect.width / 2)));
    const normY = Math.max(-1, Math.min(1, distY / (rect.height / 2)));

    // Smooth, refined 3D angles: subtle, weighted, and natural
    const rotY = (normX * 12).toFixed(2);
    const rotX = (-normY * 10).toFixed(2);
    const rotZ = (-normX * normY * 2).toFixed(2);

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg) translateY(-8px) translateZ(45px) scale3d(1.025, 1.025, 1.025)`,
      filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.14)) drop-shadow(0 8px 12px rgba(0,0,0,0.08))',
      transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), filter 0.65s cubic-bezier(0.16, 1, 0.3, 1)'
    });
  };

  const handleNameMouseLeave = () => {
    // Ultra-smooth return to original resting place over 0.9s
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateY(0px) translateZ(0px) scale3d(1, 1, 1)',
      filter: 'drop-shadow(0 0px 0px rgba(0,0,0,0))',
      transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), filter 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
    });
  };

  // Global Click Animation & Haptic Click Sound: Confined strictly to Hero Section
  useEffect(() => {
    let lastClickTime = 0;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;
    let isTouchScrolling = false;
    let lastScrollTime = 0;

    // Desktop Mouse PointerDown: Instant tactile feedback on mouse click down (Hero only)
    const handleGlobalPointerDown = (e) => {
      // Touch/pen pointers: Do NOT play audio on pointerdown!
      // On mobile devices, pointerdown fires on the very first touch contact before a scroll/swipe.
      // Playing audio here causes scrolling touches to play unwanted click sounds.
      if (e.pointerType === 'touch' || e.pointerType === 'pen') return;

      const isInsideHero = e && e.target && e.target.closest('#spark-effect-zone, #intro-section, [data-hero-section="true"]');
      if (!isInsideHero) return;

      const now = performance.now();
      if (now - lastClickTime < 80) return;
      lastClickTime = now;

      playTactileClickSound();
    };

    // Track touch interactions to differentiate intentional taps from scroll/drag touches
    const handleTouchStart = (e) => {
      if (e.touches && e.touches.length > 0) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchStartTime = performance.now();
        isTouchScrolling = false;
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        const dx = Math.abs(e.touches[0].clientX - touchStartX);
        const dy = Math.abs(e.touches[0].clientY - touchStartY);
        // More than 8px movement indicates a drag or scroll gesture, NOT an intentional tap
        if (dx > 8 || dy > 8) {
          isTouchScrolling = true;
        }
      }
    };

    const handleWindowScroll = () => {
      isTouchScrolling = true;
      lastScrollTime = performance.now();
    };

    // Global Click Handler: Handles click ray burst animation AND touch tap click sound (Hero only)
    const handleGlobalSpark = (e) => {
      // User requirement 1: "only add cliock animation to hero section"
      const isInsideHero = e && e.target && e.target.closest('#spark-effect-zone, #intro-section, [data-hero-section="true"]');
      if (!isInsideHero) return;

      // Avoid firing sparks inside text inputs/textareas so typing cursor isn't obstructed
      if (e.target && (e.target.closest('input') || e.target.closest('textarea'))) return;

      // User requirement 2: "in mobile view the click sound should not come when i touch screen for scrolling or what.. only few only"
      // If the interaction was a touch scroll/drag, or recent momentum scrolling occurred within 100ms, ignore completely
      const now = performance.now();
      if (isTouchScrolling || (now - lastScrollTime < 100)) {
        isTouchScrolling = false;
        return;
      }

      // Check if this was a touch tap or keyboard activation (where pointerdown did not play sound)
      const isTouchOrKeyboard = e.pointerType === 'touch' || e.pointerType === 'pen' || e.detail === 0 || (!e.pointerType && ('ontouchstart' in window));

      if (isTouchOrKeyboard) {
        // Enforce intentional tap duration (< 450ms) to reject long-press/hold gestures
        const touchDuration = touchStartTime > 0 ? (now - touchStartTime) : 0;
        if (touchDuration < 450 && (now - lastClickTime >= 80)) {
          lastClickTime = now;
          playTactileClickSound();
        }
      }

      // Single-Color Crisp Radial Click-Spark Ray Burst: Strictly inside Hero Section
      spawnSparkBurst(e.pageX, e.pageY);
    };

    window.addEventListener('pointerdown', handleGlobalPointerDown, { capture: true });
    window.addEventListener('touchstart', handleTouchStart, { capture: true, passive: true });
    window.addEventListener('touchmove', handleTouchMove, { capture: true, passive: true });
    window.addEventListener('scroll', handleWindowScroll, { capture: true, passive: true });
    window.addEventListener('click', handleGlobalSpark, { capture: true });

    return () => {
      window.removeEventListener('pointerdown', handleGlobalPointerDown, { capture: true });
      window.removeEventListener('touchstart', handleTouchStart, { capture: true });
      window.removeEventListener('touchmove', handleTouchMove, { capture: true });
      window.removeEventListener('scroll', handleWindowScroll, { capture: true });
      window.removeEventListener('click', handleGlobalSpark, { capture: true });
    };
  }, []);

  // Terminal Drag Handlers
  const handleTermMouseDown = (e) => {
    isDraggingTerm.current = true;
    termDragStart.current = {
      x: e.clientX - termPos.x,
      y: e.clientY - termPos.y
    };
  };

  useEffect(() => {
    const handleDocMouseMove = (e) => {
      if (!isDraggingTerm.current) return;
      setTermPos({
        x: e.clientX - termDragStart.current.x,
        y: e.clientY - termDragStart.current.y
      });
    };
    const handleDocMouseUp = () => {
      isDraggingTerm.current = false;
    };
    document.addEventListener('mousemove', handleDocMouseMove);
    document.addEventListener('mouseup', handleDocMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleDocMouseMove);
      document.removeEventListener('mouseup', handleDocMouseUp);
    };
  }, [termPos]);

  // Terminal CLI Command Execution
  const handleCliSubmit = (e) => {
    e.preventDefault();
    const cmd = cliInput.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...cliHistory, { type: 'user', text: `user@machine:~$ ${cliInput}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({ type: 'res', text: 'Available commands: whoami, skills, projects, edu, pub, contact, resume, clear, theme' });
        break;
      case 'whoami':
        newHistory.push({ type: 'res', text: 'Aditya Raj — Computer Science & Business Systems Engineer @ P.E.S. College of Engineering (Mandya, India). Full-Stack, Backend & ML Systems Architect.' });
        break;
      case 'skills':
        newHistory.push({ type: 'res', text: 'Languages: Python, C++, C, SQL, Rust, TypeScript, JavaScript\nBackend: FastAPI, Django, Celery, Redis, REST APIs, JWT, Webhooks\nDatabases: PostgreSQL, pgvector, Neo4j, MongoDB, SQLite\nML: Scikit-learn, Pandas, NumPy\nTools: Docker, Git, GitHub Actions, Linux, Tauri' });
        break;
      case 'projects':
        newHistory.push({ type: 'res', text: '1. Snapmeet (snapmeet.co.in) - EventTech SaaS (800+ users, 1,542 registrations)\n2. Kairo - AI Work Continuity & Temporal Knowledge Graph (FastAPI, pgvector, Neo4j, Tauri)\n3. PRISM - Root-Cause BI Intelligence Engine (FastAPI, Scikit-learn)\n4. OncoPredict AI - Oncology ML Pipeline' });
        break;
      case 'edu':
        newHistory.push({ type: 'res', text: 'P.E.S. College of Engineering, Mandya — B.E. in Computer Science & Business Systems (Sept 2023 - Expected 2027)' });
        break;
      case 'pub':
        newHistory.push({ type: 'res', text: 'Co-authored: "Snapmeet: EventTech Framework for Automating Multi-Stage Event Management" in GIJET Vol. 12, Issue 2, June 2026, pp. 5681-5688; presented at AITC 2026.' });
        break;
      case 'contact':
        newHistory.push({ type: 'res', text: `Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone}\nLinkedIn: ${PERSONAL_INFO.linkedin}\nGitHub: ${PERSONAL_INFO.github}` });
        break;
      case 'resume':
        window.open('/Aditya_Raj_SDE_v10.pdf', '_blank');
        newHistory.push({ type: 'res', text: 'Opened Aditya Raj\'s resume (PDF) in a new tab.' });
        break;
      case 'clear':
        setCliHistory([]);
        setCliInput('');
        return;
      case 'theme':
        setTerminalDark(!terminalDark);
        newHistory.push({ type: 'res', text: `Switched terminal theme to ${!terminalDark ? 'dark' : 'light'} mode.` });
        break;
      default:
        newHistory.push({ type: 'err', text: `Command not found: "${cmd}". Type "help" for a list of valid commands.` });
    }

    setCliHistory(newHistory);
    setCliInput('');
  };

  // Flip Experience Card
  const toggleCardFlip = (idx) => {
    setFlippedCards(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div
      style={{ position: 'relative', width: '100%', minHeight: '100vh', background: 'var(--bg-main)' }}
    >
      {/* TOP NAVIGATION BAR - Light, Delicate Weights & Working Music Interface */}
      <nav id="home" className="site-nav">
        <a href="#home" className="hello-badge" style={{ gap: '0.45rem', textDecoration: 'none', display: 'flex', alignItems: 'baseline' }}>
          <span className="waving-hand" aria-hidden="true" style={{ fontSize: '2.5rem', lineHeight: 1 }}>👋</span>
          <div className="hello-text desktop-only" style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f59e0b', letterSpacing: '-0.01em', display: 'flex', alignItems: 'baseline', lineHeight: 1.1 }}>
            Hello<span className="hello-expand" style={{ fontWeight: 500 }}>ooooooo</span>!
          </div>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          {/* Quick Actions & Working Music Player */}
          <div className="nav-social-group" style={{ display: 'flex', alignItems: 'center', gap: '1.6rem' }}>
            {/* Music Player Icon with Pop-Out Interface (Image 2 & 3) */}
            <div style={{ position: 'relative' }}>
              <button
                id="music-toggle-btn"
                onClick={toggleMusic}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: isPlayingMusic ? '#18181b' : '#71717a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '6px',
                  borderRadius: '50%',
                  transition: 'color 0.2s ease, transform 0.2s ease'
                }}
                aria-label="Toggle Lo-Fi Music player"
              >
                {isPlayingMusic ? (
                  <div className="nav-equalizer">
                    <span className="equalizer-bar" />
                    <span className="equalizer-bar" />
                    <span className="equalizer-bar" />
                  </div>
                ) : (
                  <Music size={24} strokeWidth={1.35} />
                )}
              </button>

              {/* Music Dropdown Modal Card (Desktop + Mobile Responsive Center Modal) */}
              {isMusicOpen && (
                <>
                  <div
                    className="music-dropdown-backdrop"
                    onClick={() => setIsMusicOpen(false)}
                    aria-hidden="true"
                  />
                  <div
                    ref={musicDropdownRef}
                    className="music-dropdown-card"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Top Header Row: Boombox Icon + "Change Track" + 3 Genre Pill Buttons */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', gap: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', minWidth: 0 }}>
                      <BoomboxIcon size={24} strokeWidth={1.3} />
                      <span style={{ fontSize: '0.98rem', fontWeight: 500, color: '#18181b', letterSpacing: '-0.01em' }}>
                        Change Track
                      </span>
                    </div>

                    {/* 3 Genre Selector Buttons (Image 2: Snowflake ❄️, Guitar 🎸, IN) */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      {TRACKS.map((track, idx) => {
                        const isActive = currentTrackIndex === idx;
                        return (
                          <button
                            key={track.id}
                            onClick={() => playTrack(idx)}
                            style={{
                              width: '34px',
                              height: '34px',
                              flexShrink: 0,
                              borderRadius: '50%',
                              border: isActive ? '1.5px solid #38bdf8' : '1px solid #e4e4e7',
                              background: isActive ? '#f0f9ff' : '#ffffff',
                              boxShadow: isActive ? '0 0 0 3px rgba(56, 189, 248, 0.2)' : 'none',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              fontSize: track.icon === 'IN' ? '0.72rem' : '0.92rem',
                              fontWeight: track.icon === 'IN' ? 600 : 400,
                              color: track.icon === 'IN' ? '#0284c7' : '#18181b',
                              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                            }}
                            aria-label={track.title}
                          >
                            {track.icon}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Subtle Separator */}
                  <div style={{ height: '1px', background: '#f1f1f4', margin: '0 0 12px 0', width: '100%' }} />

                  {/* "Top on Spotify" Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '10px' }}>
                    <SpotifyIcon size={18} />
                    <span style={{ fontSize: '0.82rem', fontWeight: 500, color: '#18181b' }}>
                      Top on Spotify
                    </span>
                  </div>

                  {/* Track Info Card */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                    <img
                      src={TRACKS[currentTrackIndex].cover}
                      alt={TRACKS[currentTrackIndex].title}
                      style={{ width: '46px', height: '46px', borderRadius: '8px', objectFit: 'cover', flexShrink: 0, boxShadow: '0 2px 5px rgba(0,0,0,0.08)' }}
                    />
                    <div style={{ overflow: 'hidden', flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#18181b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', lineHeight: 1.25 }}>
                        {TRACKS[currentTrackIndex].title}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#71717a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '2px' }}>
                        {TRACKS[currentTrackIndex].artist}
                      </div>
                    </div>
                    <button
                      onClick={togglePlayPause}
                      style={{
                        background: '#f4f4f5',
                        border: 'none',
                        borderRadius: '50%',
                        width: '30px',
                        height: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: '#18181b',
                        flexShrink: 0,
                        transition: 'background 0.2s ease'
                      }}
                      aria-label={isPlayingMusic ? "Pause" : "Play"}
                    >
                      {isPlayingMusic ? <Pause size={13} fill="#18181b" /> : <Play size={13} fill="#18181b" style={{ marginLeft: '1px' }} />}
                    </button>
                  </div>

                  {/* Full-width "Listen on Spotify ↗" Button */}
                  <a
                    href={TRACKS[currentTrackIndex].spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      width: '100%',
                      padding: '10px 16px',
                      background: '#18181b',
                      color: '#ffffff',
                      borderRadius: '10px',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'background 0.2s ease',
                      boxShadow: '0 4px 10px rgba(24, 24, 27, 0.15)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#27272a'}
                    onMouseLeave={(e) => e.currentTarget.style.background = '#18181b'}
                  >
                    <span>Listen on Spotify</span>
                    <span style={{ fontSize: '0.9rem' }}>↗</span>
                  </a>
                </div>
              </>
            )}
            </div>

            {/* GitHub Profile */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="header-social-link"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={24} strokeWidth={1.35} />
              <CurlyScribble />
            </a>

            {/* LinkedIn Profile */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="header-social-link"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={24} strokeWidth={1.35} />
              <CurlyScribble />
            </a>
          </div>

          {/* Live Clock - Elevated Scale & Crisp Typography (Hidden on mobile) */}
          <div className="nav-clock desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginLeft: '0.75rem' }}>
            <span style={{ fontSize: '2.65rem', fontWeight: 500, fontFamily: 'var(--font-sans)', letterSpacing: '-0.03em', lineHeight: 1, color: '#18181b' }}>
              {timeString}
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', fontSize: '0.88rem', lineHeight: 1.2, fontFamily: 'var(--font-sans)', color: '#18181b' }}>
              <span style={{ fontWeight: 600, textTransform: 'lowercase', color: '#18181b' }}>{ampmString}</span>
              <span style={{ fontWeight: 400, color: '#71717a', fontSize: '0.82rem' }}>{dateString}</span>
            </div>
          </div>
        </div>
      </nav>


      {/* HERO SECTION */}
      <section
        id="spark-effect-zone"
        data-hero-section="true"
        className="hero-display-zone"
      >
        {/* SVG Dual-Direction (Desktop) & Sinuous Diagonal River (Mobile) Skills Marquee */}
        <div className="hero-wave-container">
          <svg viewBox="0 0 2530.7 740.4" className="hero-wave-svg">
            <defs>
              <path id="heroWave" fill="none" stroke="none" d="M0.29 193.68 C244.36 193.68 298.61 497.83 539.27 489.34 704.88 464.85 736.35 221.77 1038.78 221.77 1282.85 221.77 1347.1 542.91 1589.76 516.62 1780.25 496.03 1833.21 282.54 2003.81 253.25 2246.97 208.68 2312.12 574.4 2554.78 548.11" />
            </defs>

            {/* Desktop Wave Text: Dual-direction converging */}
            <g className="desktop-wave-group">
              <text className="textPathAnimated" textAnchor="end" fontSize="26" fill="#8e8e93">
                <textPath ref={leftTextPathRef} href="#heroWave" xlinkHref="#heroWave" textAnchor="end" startOffset="8%">
                  — Linux — Docker — Rust — PostgreSQL — Redis — Celery — pgvector — Neo4j — SQL — Python — FastAPI — Django
                </textPath>
              </text>
              <text className="textPathAnimated" textAnchor="start" fontSize="26" fill="#8e8e93">
                <textPath ref={rightTextPathRef} href="#heroWave" xlinkHref="#heroWave" textAnchor="start" startOffset="92%">
                  — React — Next.js — TypeScript — Scikit-learn — Pandas — NumPy — Tauri — Webhooks — GitHub Actions — CI/CD — Pytest —
                </textPath>
              </text>
            </g>

            {/* Mobile Wave Text: Diagonally flowing continuous stream across the curved river */}
            <g className="mobile-wave-group">
              <text className="textPathAnimated mobile-textpath" fontSize="36" fill="#a1a1aa">
                <textPath ref={mobileTextPathRef} href="#heroWave" xlinkHref="#heroWave" startOffset="0%">
                  {MOBILE_SKILLS_STREAM}
                </textPath>
              </text>
            </g>
          </svg>
        </div>

        {/* 3D Perspective Hero Name - Hover Tilt ONLY on Letters Area */}
        <div
          ref={heroNameRef}
          onMouseMove={handleNameMouseMove}
          onMouseLeave={handleNameMouseLeave}
          style={{
            ...tiltStyle,
            textAlign: 'center',
            userSelect: 'none',
            zIndex: 10,
            position: 'relative',
            transformStyle: 'preserve-3d',
            cursor: 'pointer'
          }}
        >
          <div style={{ fontSize: 'clamp(3.8rem, 9.5vw, 7.8rem)', fontWeight: 800, lineHeight: 1.1, textTransform: 'uppercase', color: '#18181b', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
              onMouseEnter={() => setIsHoveredAditya(true)}
              onMouseLeave={() => setIsHoveredAditya(false)}
              style={{
                display: 'inline-flex',
                alignItems: 'baseline',
                position: 'relative',
                letterSpacing: isHoveredAditya ? '0.14em' : '0.05em',
                transition: 'letter-spacing 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s ease',
                transformStyle: 'preserve-3d',
                padding: '0.2rem 0.6rem',
                cursor: 'pointer'
              }}
            >
              <span className="hero-letter-group" onMouseOver={(e) => e.currentTarget.style.color = '#3b82f6'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>A</span>
              <span className="hero-letter-group" onMouseOver={(e) => e.currentTarget.style.color = '#10b981'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>D</span>
              <span className="hero-letter-group" onMouseOver={(e) => e.currentTarget.style.color = '#f59e0b'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>I</span>
              <span className="hero-letter-group" onMouseOver={(e) => e.currentTarget.style.color = '#ec4899'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>T</span>
              <span className="hero-letter-group" onMouseOver={(e) => e.currentTarget.style.color = '#8b5cf6'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>Y</span>
              <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'baseline' }}>
                <span className="hero-letter-group" onMouseOver={(e) => e.currentTarget.style.color = '#06b6d4'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>A</span>

                <button
                  onClick={pronounceName}
                  style={{
                    position: 'absolute',
                    left: '100%',
                    top: '0.15rem',
                    marginLeft: '0.35rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#a1a1aa',
                    transform: 'rotate(-45deg)',
                    transformOrigin: 'center center',
                    transition: 'transform 0.25s ease, color 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2px',
                    zIndex: 20
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'rotate(-45deg) scale(1.18)'; e.currentTarget.style.color = '#3b82f6'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'rotate(-45deg) scale(1)'; e.currentTarget.style.color = '#a1a1aa'; }}
                  aria-label="Pronounce Aditya Raj"
                >
                  <Volume2 size={22} strokeWidth={1.25} />
                </button>
              </span>
            </div>

            {/* Dynamic Multilingual Last Name "Raj" - Continuous Cycle, Never Changes Color */}
            <div
              onMouseEnter={() => setIsHoveredRaj(true)}
              onMouseLeave={() => setIsHoveredRaj(false)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: 'clamp(3.8rem, 9.5vw, 7.8rem)',
                justifyContent: 'center',
                marginTop: '0.25rem',
                transformStyle: 'preserve-3d',
                cursor: 'pointer',
                padding: '0.2rem 0.6rem'
              }}
            >
              <span
                style={{
                  color: '#71717a',
                  display: 'inline-block',
                  opacity: rajFadeState === 'visible' ? 1 : 0,
                  transform: rajFadeState === 'fade-out'
                    ? 'translateY(-14px) scale(0.96)'
                    : rajFadeState === 'prepare-in'
                      ? 'translateY(14px) scale(0.96)'
                      : 'translateY(0) scale(1)',
                  filter: rajFadeState === 'visible' ? 'blur(0px)' : 'blur(5px)',
                  transition: rajFadeState === 'prepare-in'
                    ? 'none'
                    : 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease, letter-spacing 0.85s cubic-bezier(0.16, 1, 0.3, 1)',
                  letterSpacing: isHoveredRaj
                    ? (RAJ_TRANSLATIONS[rajIndex].script === 'Latin' ? '0.15em' : '0.08em')
                    : (RAJ_TRANSLATIONS[rajIndex].script === 'Latin' ? '0.06em' : '0.03em')
                }}
              >
                {RAJ_TRANSLATIONS[rajIndex].text}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO HERO SECTION: TAGLINE + STICKERS + TERMINAL + 3D WIREFRAME PLANE (Exact itsvg.in Reference) */}
      <section
        id="intro-section"
        className="intro-hero-section"
        data-hero-section="true"
        style={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1.5rem 0 3.5rem 0',
          overflow: 'hidden'
        }}
      >
        {/* 3D Perspective Grid Background (Runs seamlessly behind both tagline and terminal, extending above terminal) */}
        <div className="perspective-grid-container">
          <div className="perspective-grid-plane">
            <div className="animate-grid-floor"></div>
          </div>
          <div className="perspective-grid-mask"></div>
        </div>

        {/* TAGLINE & CLUSTERED OVERLAPPING STICKER BADGES (Symmetrical Equal Margins on Left & Right) */}
        <div
          className="hero-intro-container"
          style={{
            position: 'relative',
            zIndex: 10
          }}
        >
          <p className="hero-intro-greeting">
            👋 Hey, I'm {PERSONAL_INFO.name}, coding and crafting products and I'm a...
          </p>
          <h2 className="headline-single-line">
            <span className="headline-text-part">Product-Oriented</span>{' '}
            <span className="headline-text-part">Software Developer,</span>
          </h2>
          <div className="hero-intro-description">
            specialized in building scalable, production-ready products that prioritize real-world problems, user experience and performance.
          </div>

          {/* DYNAMIC SCROLL-REVEALED ORIGINAL TAGS (Revealing with scroll, kinetic floating, not fixed) */}
          <div
            ref={tagsContainerRef}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginTop: '1.75rem',
              perspective: '1000px'
            }}
          >
            {/* Tag 1: Product Engineering */}
            <div
              className={`tag-reveal-item ${tagsRevealed ? 'is-revealed' : ''}`}
              style={{
                transform: tagsRevealed
                  ? `translateY(${tagParallax[0]}px) rotate(-3.5deg)`
                  : 'translateY(32px) scale(0.88) rotate(-8deg)',
                opacity: tagsRevealed ? 1 : 0,
                transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                willChange: 'transform, opacity'
              }}
            >
              <span className="tag-badge-pill tag-lime">
                <Layers size={19} strokeWidth={2.2} />
                <span>Product Engineering</span>
              </span>
            </div>

            {/* Tag 2: System Design */}
            <div
              className={`tag-reveal-item ${tagsRevealed ? 'is-revealed' : ''}`}
              style={{
                transform: tagsRevealed
                  ? `translateY(${tagParallax[1]}px) rotate(3deg)`
                  : 'translateY(36px) scale(0.88) rotate(8deg)',
                opacity: tagsRevealed ? 1 : 0,
                transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.12s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.12s',
                willChange: 'transform, opacity'
              }}
            >
              <span className="tag-badge-pill tag-pink">
                <GitBranch size={19} strokeWidth={2.2} />
                <span>System Design</span>
              </span>
            </div>

            {/* Tag 3: Scalability */}
            <div
              className={`tag-reveal-item ${tagsRevealed ? 'is-revealed' : ''}`}
              style={{
                transform: tagsRevealed
                  ? `translateY(${tagParallax[2]}px) rotate(-4deg)`
                  : 'translateY(40px) scale(0.88) rotate(-10deg)',
                opacity: tagsRevealed ? 1 : 0,
                transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.24s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.24s',
                willChange: 'transform, opacity'
              }}
            >
              <span className="tag-badge-pill tag-yellow">
                <Zap size={19} strokeWidth={2.2} />
                <span>Scalability</span>
              </span>
            </div>

            {/* Tag 4: Deployment */}
            <div
              className={`tag-reveal-item ${tagsRevealed ? 'is-revealed' : ''}`}
              style={{
                transform: tagsRevealed
                  ? `translateY(${tagParallax[3]}px) rotate(4deg)`
                  : 'translateY(44px) scale(0.88) rotate(10deg)',
                opacity: tagsRevealed ? 1 : 0,
                transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.36s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.36s',
                willChange: 'transform, opacity'
              }}
            >
              <span className="tag-badge-pill tag-fuchsia">
                <Globe size={19} strokeWidth={2.2} />
                <span>Deployment</span>
              </span>
            </div>
          </div>
        </div>

        {/* DRAGGABLE MACOS TERMINAL */}
        <div
          id="intro"
          ref={terminalSectionRef}
          className="intro-terminal-wrapper"
          style={{
            position: 'relative',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.25rem 0.75rem',
            margin: '0.5rem 0 1.75rem 0',
            zIndex: 10
          }}
        >
          <div
            id="intro-terminal"
            className={`intro-terminal-card ${terminalDark ? "dark-mode" : ""}`}
            style={{
              transform: `translate(${termPos.x}px, ${termPos.y}px)`,
              maxWidth: terminalMax ? '95vw' : '42rem',
              width: '100%', background: '#ffffff', borderRadius: '0.75rem',
              boxShadow: '0 20px 45px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.06)',
              overflow: 'hidden', zIndex: 10
            }}
          >
            {/* Header Bar */}
            <div
              onMouseDown={handleTermMouseDown}
              className="terminal-header-bar"
              style={{ background: '#e5e7eb', padding: '0.45rem 0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #d1d5db', cursor: 'grab', userSelect: 'none' }}
            >
              <div style={{ display: 'flex', gap: '6px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }}></div>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308' }}></div>
                <div onClick={() => setTerminalMax(!terminalMax)} style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', cursor: 'pointer' }}></div>
              </div>
              <div style={{ fontSize: '0.75rem', fontWeight: 500, color: '#4b5563', fontFamily: 'var(--font-mono)' }}>Terminal</div>
              <div onClick={() => setTerminalDark(!terminalDark)} style={{ cursor: 'pointer', color: '#4b5563', display: 'flex', alignItems: 'center' }}>
                {terminalDark ? <Sun size={14} strokeWidth={1.5} /> : <Moon size={14} strokeWidth={1.5} />}
              </div>
            </div>

            {/* Interactive Shell Body - Sequential Typing Sequence (Compact Landscape Rectangle) */}
            <div
              className="terminal-shell-body"
              style={{ padding: '0.75rem 1rem', background: terminalDark ? '#18181b' : '#ffffff', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', lineHeight: 1.45, color: terminalDark ? '#f4f4f5' : '#18181b', maxHeight: '300px', overflowY: 'auto' }}
            >
              <div style={{ color: '#71717a', opacity: 0.75, marginBottom: '0.4rem', fontSize: '0.72rem' }}>Last login: Thu Oct 15 12:08:56 on console</div>

              {/* Line 2: user@machine:~$ fortune AdityaRaj.fortune */}
              {terminalStage >= 1 && (
                <div style={{ marginBottom: '0.3rem' }}>
                  <span style={{ color: '#16a34a', fontWeight: 600 }}>user@machine:~$</span> <span style={{ color: '#ca8a04' }}>{typedCommand}</span>
                  {terminalStage === 1 && <span className="term-cursor">|</span>}
                </div>
              )}

              {/* Line 3: bot@gpt:~$ Perfection may not be attainable... */}
              {terminalStage >= 2 && (
                <div style={{ marginBottom: '0.45rem', color: terminalDark ? '#f4f4f5' : '#18181b' }}>
                  <span style={{ color: '#2563eb', fontWeight: 600 }}>bot@gpt:~$</span> {typedQuote}
                  {(terminalStage === 2 || terminalStage === 3) && <span className="term-cursor">|</span>}
                </div>
              )}

              {/* CLI History */}
              {cliHistory.map((item, idx) => (
                <div key={idx} style={{ marginBottom: '0.25rem', whiteSpace: 'pre-wrap' }}>
                  {item.type === 'user' && <span style={{ color: '#2563eb', fontWeight: 600 }}>{item.text}</span>}
                  {item.type === 'sys' && <span style={{ color: '#71717a' }}>{item.text}</span>}
                  {item.type === 'res' && <span style={{ color: '#10b981' }}>{item.text}</span>}
                  {item.type === 'err' && <span style={{ color: '#ef4444' }}>{item.text}</span>}
                </div>
              ))}

              {/* Interactive Input Form */}
              {terminalStage === 3 && (
                <form onSubmit={handleCliSubmit} style={{ display: 'flex', alignItems: 'center', marginTop: '0.35rem' }}>
                  <span style={{ color: '#16a34a', fontWeight: 600, marginRight: '0.4rem' }}>user@machine:~$</span>
                  <input
                    type="text"
                    value={cliInput}
                    onChange={(e) => setCliInput(e.target.value)}
                    placeholder="type 'help', 'projects', 'skills'..."
                    style={{
                      flex: 1, background: 'transparent', border: 'none', outline: 'none',
                      color: terminalDark ? '#ffffff' : '#18181b', fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem'
                    }}
                  />
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION (Spacious breathing room, actively moving upward dot matrix bg) */}
      <section
        id="projects"
        ref={projectsSectionRef}
        className={`pattern-bg-project ${projectsInView ? 'is-in-view' : ''}`}
        style={{
          position: 'relative',
          width: '100%',
          padding: '1rem 1.5rem 5.5rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'hidden',
          marginTop: '3.5rem'
        }}
      >
        {/* Dedicated Hardware-Accelerated Fast-Moving Background Dot Matrix Layer */}
        <div className="project-animated-bg" />

        {/* Soft edge blend mask at bottom only */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4.5rem', background: 'linear-gradient(to top, #ffffff, transparent)', pointerEvents: 'none', zIndex: 1 }} />

        {/* Projects Main Title with Signature Tri-Color Stripe Animation (Triggered exclusively on user click/tap) */}
        <ul className="nav-ul" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', marginTop: '0', marginBottom: '2.5rem', zIndex: 2 }}>
          <li className="nav-li">
            <span
              className={`nav-a ${isProjectsTitleActive ? 'is-clicked' : ''}`}
              onClick={handleProjectsTitleClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleProjectsTitleClick();
                }
              }}
              style={{ cursor: 'pointer', userSelect: 'none' }}
              title="Click to trigger stripe animation"
            >
              <span className="nav-a-letters">
                {"Projects".split("").map((c, i) => <span key={i} className="nav-a-letter">{c}</span>)}
              </span>
              <span className="nav-a-stripe nav-a-stripe--yellow"></span>
              <span className="nav-a-stripe nav-a-stripe--turquoise"></span>
              <span className="nav-a-stripe nav-a-stripe--purple"></span>
              <span className="nav-a-letters-top">
                {"Projects".split("").map((c, i) => <span key={i} className="nav-a-letter">{c}</span>)}
              </span>
            </span>
          </li>
        </ul>

        {/* 3-Column Neo-Brutalist Grid (Screenshot 2 & 3) */}
        <div className={`projects-grid ${projectsInView ? 'is-in-view' : ''}`}>
          {PROJECTS_DATA.map((proj, idx) => (
            <div
              key={idx}
              className="project-card-container"
              onClick={() => openProjectModal(proj)}
              role="button"
              tabIndex={0}
              style={{ height: '100%', position: 'relative' }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openProjectModal(proj);
                }
              }}
            >
              {/* Top Layer (White, Content: Strict Horizontal Row & 100% Height) */}
              <div
                className="project-card-top"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  gap: '1.35rem',
                  padding: '1.25rem 1.65rem',
                  minHeight: '108px',
                  height: '100%',
                  borderRadius: '28px',
                  backgroundColor: '#ffffff',
                  border: '1.5px solid #000000',
                  boxSizing: 'border-box'
                }}
              >
                {/* Left Side: Logo Container (64px Rounded Square) */}
                <div
                  className="project-card-logo"
                  style={{
                    width: '64px',
                    height: '64px',
                    minWidth: '64px',
                    minHeight: '64px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    overflow: 'hidden',
                    background: '#ffffff',
                    border: '1px solid rgba(0, 0, 0, 0.12)',
                    padding: '3px'
                  }}
                >
                  <img
                    src={proj.logo}
                    alt={proj.displayTitle || proj.name}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '13px', display: 'block' }}
                  />
                </div>

                {/* Right Side: Title Only (Link text removed per user request) */}
                <div
                  className="project-card-info"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    textAlign: 'left',
                    flex: '1 1 auto',
                    minWidth: 0
                  }}
                >
                  <h3
                    className="project-card-title"
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: '#18181b',
                      margin: 0,
                      lineHeight: 1.35,
                      letterSpacing: '-0.015em',
                      whiteSpace: 'normal',
                      overflow: 'visible',
                      textOverflow: 'clip',
                      wordBreak: 'break-word',
                      textAlign: 'left'
                    }}
                  >
                    {proj.displayTitle || proj.name}
                  </h3>
                </div>
              </div>

              {/* Middle Layer (Golden Yellow Reveal on Hover) */}
              <div className="project-card-middle" />

              {/* Bottom Layer (Lavender Purple on Hover, Zinc Offset by Default) */}
              <div className="project-card-bottom" />
            </div>
          ))}
        </div>
      </section>

      {/* RESEARCH & PUBLICATION DOSSIER */}
      <section className="research-dossier-section">
        <div className="research-dossier-container">
          {/* Top Archival Header Bar */}
          <div className="research-dossier-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  background: '#18181b',
                  color: '#ffffff',
                  padding: '4px 10px',
                  border: '1.5px solid #18181b'
                }}
              >
                [PEER_REVIEWED_PAPER // GIJET-2026]
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#18181b',
                  background: '#f4f4f5',
                  padding: '4px 10px',
                  border: '1.5px solid #18181b'
                }}
              >
                ISSN: 2395-5252 · VOL. 12, ISSUE 2
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  color: '#18181b',
                  background: '#ffffff',
                  border: '1.5px solid #18181b',
                  padding: '4px 10px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                CONFERENCE_PRESENTATION: AITC-2026
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#71717a',
                  background: '#fafafa',
                  border: '1.5px solid #18181b',
                  padding: '4px 10px'
                }}
              >
                ID: AITC2026-141
              </span>
            </div>
          </div>

          {/* Main 2-Column Academic Spec Layout */}
          <div className="research-dossier-grid">
            {/* Left Column: Academic Title, Authors, and Abstract */}
            <div className="research-dossier-content">
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  color: '#71717a',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem'
                }}
              >
                // ACADEMIC PUBLICATION & PROCEEDINGS
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1.35rem, 2.8vw, 2.1rem)',
                  fontWeight: 800,
                  color: '#18181b',
                  lineHeight: 1.25,
                  letterSpacing: '-0.025em',
                  marginBottom: '0.75rem'
                }}
              >
                "Snapmeet: EventTech Framework for Automating Multi-Stage Event Management"
              </h3>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: '#52525b',
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  flexWrap: 'wrap'
                }}
              >
                <span style={{ fontWeight: 700, color: '#18181b' }}>Aditya Raj*</span>
                <span style={{ color: '#a1a1aa' }}>·</span>
                <span>PES College of Engineering, Mandya</span>
              </div>

              <p
                style={{
                  fontSize: '0.92rem',
                  lineHeight: 1.7,
                  color: '#3f3f46',
                  marginBottom: '1.75rem',
                  textAlign: 'justify',
                  textJustify: 'inter-word',
                  textAlignLast: 'left'
                }}
              >
                Published in the <em>Grenze International Journal of Engineering and Technology (GIJET)</em>, June 2026, pp. 5681–5688; presented at the AITC 2026 conference. Analyzes event-driven architecture, distributed Redis/Celery queue concurrency, and cryptographic QR attendance systems engineered to eliminate race conditions under high concurrent registration spikes.
              </p>

              {/* Action Button */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
                <a
                  href="https://share.google/eAA6kg3nIZr6B7yLr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="research-paper-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.55rem',
                    background: '#ffd074',
                    color: '#18181b',
                    padding: '0.85rem 1.4rem',
                    borderRadius: '0px',
                    fontWeight: 800,
                    border: '1.5px solid #18181b',
                    boxShadow: '3px 3px 0px #18181b',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    textDecoration: 'none',
                    letterSpacing: '0.04em',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <FileText size={17} /> READ_PAPER (PDF) <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Right Column: Certificate Specimen Preview Card */}
            <div className="research-specimen-card">
              {/* Top Card Label */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: '#71717a'
                }}
              >
                <span>OFFICIAL SPECIMEN</span>
              </div>

              {/* Certificate Image Thumbnail */}
              <div
                style={{
                  border: '1.5px solid #18181b',
                  overflow: 'hidden',
                  background: '#ffffff',
                  marginBottom: '1rem'
                }}
              >
                <img
                  src="/AITC2026-141.jpg"
                  alt="AITC 2026 Presentation Certificate"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Ledger Summary */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  borderTop: '1px solid #e4e4e7',
                  paddingTop: '0.75rem'
                }}
              >
                <div>
                  <div style={{ color: '#71717a', fontSize: '0.65rem' }}>CONFERENCE</div>
                  <div style={{ fontWeight: 700, color: '#18181b' }}>AITC-2026</div>
                </div>
                <div>
                  <div style={{ color: '#71717a', fontSize: '0.65rem' }}>PROCEEDINGS</div>
                  <div style={{ fontWeight: 700, color: '#18181b' }}>GIJET Vol. 12</div>
                </div>
                <div>
                  <div style={{ color: '#71717a', fontSize: '0.65rem' }}>CITATION</div>
                  <div style={{ fontWeight: 700, color: '#18181b' }}>pp. 5681–5688</div>
                </div>
                <div>
                  <div style={{ color: '#71717a', fontSize: '0.65rem' }}>VERIFICATION</div>
                  <div style={{ fontWeight: 700, color: '#16a34a' }}>AITC2026-141</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUANTIFIED IMPACT & INDIA REACH */}
      <section
        id="stats"
        ref={statsSectionRef}
        style={{ width: '100%', maxWidth: '80rem', margin: '4rem auto', padding: '2rem 1.5rem', textAlign: 'center' }}
      >
        <h2 className="stats-section-title" style={{ marginBottom: '2.75rem' }}>
          Production Scale & Regional Footprint
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '1.25rem', border: '1px solid #e4e4e7', boxShadow: '0 10px 25px rgba(0,0,0,0.04)' }}>
            <div style={{ fontSize: '2.85rem', fontWeight: 900, color: '#2563eb', fontFamily: 'var(--font-mono)' }}>
              {countStates}+
            </div>
            <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#18181b', marginTop: '0.35rem' }}>States Across India</div>
            <div style={{ fontSize: '0.82rem', color: '#71717a', marginTop: '0.2rem' }}>Karnataka, Maharashtra, Gujarat, UP, Bihar & more</div>
          </div>

          <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '1.25rem', border: '1px solid #e4e4e7', boxShadow: '0 10px 25px rgba(0,0,0,0.04)' }}>
            <div style={{ fontSize: '2.85rem', fontWeight: 900, color: '#10b981', fontFamily: 'var(--font-mono)' }}>
              {countEvents}+
            </div>
            <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#18181b', marginTop: '0.35rem' }}>Live Events</div>
            <div style={{ fontSize: '0.82rem', color: '#71717a', marginTop: '0.2rem' }}>High-throughput ticketing & QR check-ins</div>
          </div>

          <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '1.25rem', border: '1px solid #e4e4e7', boxShadow: '0 10px 25px rgba(0,0,0,0.04)' }}>
            <div style={{ fontSize: '2.85rem', fontWeight: 900, color: '#8b5cf6', fontFamily: 'var(--font-mono)' }}>
              {countRegistrations.toLocaleString()}+
            </div>
            <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#18181b', marginTop: '0.35rem' }}>Event Registrations</div>
            <div style={{ fontSize: '0.82rem', color: '#71717a', marginTop: '0.2rem' }}>Engineered with zero race conditions</div>
          </div>
        </div>

        <div className="india-map-container">
          <div className="india-map-stage">
            <img
              src="/india-map.png"
              alt="India Scale Map"
              className="india-map-graphic"
            />
            {/* 9 Geographic Beacon Pulse Nodes across India (Bihar, UP, Jharkhand, Gujarat, Pune, etc.) */}
            {INDIA_MAP_NODES.map((node) => (
              <div
                key={node.id}
                className="geo-pin"
                style={{ top: node.top, left: node.left }}
                title={node.label}
              >
                <span className="geo-pin-ring" style={{ animationDelay: node.delay }} />
                <span className="geo-pin-dot" />
              </div>
            ))}
          </div>

          {/* Callout Cards: floating on desktop, neatly arranged below map on mobile */}
          <div className="map-callout-card callout-events">
            <div className="map-callout-value">50+ Live Events</div>
            <div className="map-callout-sub">High-throughput ticketing & QR verification</div>
          </div>

          <div className="map-callout-card callout-karnataka">
            <div className="map-callout-value">Primary Tech Base</div>
            <div className="map-callout-sub">Core Distributed Engineering Hub</div>
          </div>

          <div className="map-callout-card callout-states">
            <div className="map-callout-value text-blue">9+ States Footprint</div>
            <div className="map-callout-sub">Active production infrastructure</div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES BENTO GRID */}
      <section id="features" style={{ width: '100%', maxWidth: '80rem', margin: '6rem auto', padding: '0 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ul className="nav-ul" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', marginBottom: '4rem' }}>
          <li className="nav-li">
            <span className="nav-a">
              <span className="nav-a-letters">
                {"Principles".split("").map((c, i) => <span key={i} className="nav-a-letter">{c}</span>)}
              </span>
              <span className="nav-a-stripe nav-a-stripe--yellow"></span>
              <span className="nav-a-stripe nav-a-stripe--turquoise"></span>
              <span className="nav-a-stripe nav-a-stripe--purple"></span>
              <span className="nav-a-letters-top">
                {"Principles".split("").map((c, i) => <span key={i} className="nav-a-letter">{c}</span>)}
              </span>
            </span>
          </li>
        </ul>

        <div className={`bento-grid bento-container ${hoveredPrinciple ? 'has-hover' : ''}`}>
          <div onMouseEnter={() => setHoveredPrinciple(1)} onMouseLeave={() => setHoveredPrinciple(null)} className="bento-card bento-col-7" style={{ backgroundColor: 'var(--tech-cyan)', minHeight: '13.5rem' }}>
            <Sparkles size={28} strokeWidth={1.5} color="#18181b" />
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 500, color: '#18181b', letterSpacing: '-0.01em' }}>Problem-First Thinking</h3>
              <p style={{ fontSize: '0.88rem', color: '#27272a', opacity: 0.88, marginTop: '0.35rem', lineHeight: 1.5, fontWeight: 400 }}>Solving the right problem before writing the first line of code.</p>
            </div>
          </div>

          <div onMouseEnter={() => setHoveredPrinciple(2)} onMouseLeave={() => setHoveredPrinciple(null)} className="bento-card bento-col-5" style={{ backgroundColor: 'var(--responsive-lavender)', minHeight: '13.5rem' }}>
            <Layers size={28} strokeWidth={1.5} color="#18181b" />
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 500, color: '#18181b', letterSpacing: '-0.01em' }}>Scalable Architecture</h3>
              <p style={{ fontSize: '0.88rem', color: '#27272a', opacity: 0.88, marginTop: '0.35rem', lineHeight: 1.5, fontWeight: 400 }}>Building maintainable systems designed to evolve with product needs.</p>
            </div>
          </div>

          <div onMouseEnter={() => setHoveredPrinciple(3)} onMouseLeave={() => setHoveredPrinciple(null)} className="bento-card bento-col-4" style={{ backgroundColor: 'var(--perf-yellow)', minHeight: '13.5rem' }}>
            <ShieldCheck size={28} strokeWidth={1.5} color="#18181b" />
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 500, color: '#18181b', letterSpacing: '-0.01em' }}>Reliability by Default</h3>
              <p style={{ fontSize: '0.88rem', color: '#27272a', opacity: 0.88, marginTop: '0.35rem', lineHeight: 1.5, fontWeight: 400 }}>Writing secure, tested code that behaves predictably in production.</p>
            </div>
          </div>

          <div onMouseEnter={() => setHoveredPrinciple(4)} onMouseLeave={() => setHoveredPrinciple(null)} className="bento-card bento-col-4" style={{ backgroundColor: 'var(--ui-salmon)', minHeight: '13.5rem' }}>
            <Flame size={28} strokeWidth={1.5} color="#18181b" />
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 500, color: '#18181b', letterSpacing: '-0.01em' }}>Performance at Scale</h3>
              <p style={{ fontSize: '0.88rem', color: '#27272a', opacity: 0.88, marginTop: '0.35rem', lineHeight: 1.5, fontWeight: 400 }}>Optimizing bottlenecks across APIs, databases, and application workflows.</p>
            </div>
          </div>

          <div onMouseEnter={() => setHoveredPrinciple(5)} onMouseLeave={() => setHoveredPrinciple(null)} className="bento-card bento-col-4" style={{ backgroundColor: 'var(--ux-mint)', minHeight: '13.5rem' }}>
            <Rocket size={28} strokeWidth={1.5} color="#18181b" />
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 500, color: '#18181b', letterSpacing: '-0.01em' }}>Continuous Improvement</h3>
              <p style={{ fontSize: '0.88rem', color: '#27272a', opacity: 0.88, marginTop: '0.35rem', lineHeight: 1.5, fontWeight: 400 }}>Shipping iteratively, learning from feedback, and measuring what makes a product better.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE 3D DEBIT CARDS SECTION */}
      <section id="experience" style={{ width: '100%', padding: '6rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>
        <ul className="nav-ul" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', marginBottom: '3.5rem' }}>
          <li className="nav-li">
            <span
              className={`nav-a ${isExperienceTitleActive ? 'is-clicked' : ''}`}
              onClick={handleExperienceTitleClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleExperienceTitleClick();
                }
              }}
              style={{ cursor: 'pointer', userSelect: 'none' }}
              title="Click to trigger stripe animation"
            >
              <span className="nav-a-letters">
                {"Experience".split("").map((c, i) => <span key={i} className="nav-a-letter">{c}</span>)}
              </span>
              <span className="nav-a-stripe nav-a-stripe--yellow"></span>
              <span className="nav-a-stripe nav-a-stripe--turquoise"></span>
              <span className="nav-a-stripe nav-a-stripe--purple"></span>
              <span className="nav-a-letters-top">
                {"Experience".split("").map((c, i) => <span key={i} className="nav-a-letter">{c}</span>)}
              </span>
            </span>
          </li>
        </ul>

        <div
          ref={experienceTrackRef}
          onScroll={handleExperienceScroll}
          className="experience-cards-track"
        >
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div key={idx} className={`visa-card ${flippedCards[idx] ? 'flipped' : ''}`} onClick={() => toggleCardFlip(idx)}>
              <div className="visa-card-inner">
                {/* FRONT: AUTHENTIC DEBIT CARD */}
                <div className="visa-card-front" style={{ background: exp.theme.gradient, border: `1px solid ${exp.theme.accentBorder}` }}>
                  <div className="debit-gloss-overlay" />
                  <div className="debit-shimmer-overlay" style={{ background: exp.theme.shimmer }} />

                  {/* TOP ROW: Issuer / Org Name + Tier Badge (Single clean line) */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 2 }}>
                    <span className="card-org-name">
                      {exp.shortOrg}
                    </span>
                    <span className="card-type-badge">
                      {exp.cardType}
                    </span>
                  </div>

                  {/* CHIP & INTERACTIVE FLIP ROW */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0.35rem 0 0.15rem 0', position: 'relative', zIndex: 2 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      {/* Realistic Satin Gold EMV Chip */}
                      <svg className="card-emv-chip" width="36" height="26" viewBox="0 0 38 26" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '4px', overflow: 'hidden', flexShrink: 0 }}>
                        <defs>
                          <linearGradient id={`emvGold-${idx}`} x1="0" y1="0" x2="38" y2="26" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#fef08a" />
                            <stop offset="0.4" stopColor="#eab308" />
                            <stop offset="0.8" stopColor="#ca8a04" />
                            <stop offset="1" stopColor="#fef08a" />
                          </linearGradient>
                        </defs>
                        <rect width="38" height="26" rx="4" fill={`url(#emvGold-${idx})`} stroke="#854d0e" strokeWidth="0.6" />
                        <path d="M0 9 H14 V17 H0 M24 9 H38 V17 H24 M14 0 V9 M24 0 V9 M14 17 V26 M24 17 V26 M14 9 H24 V17 H14 Z" stroke="#713f12" strokeWidth="0.6" strokeOpacity="0.75" />
                        <circle cx="19" cy="13" r="2.5" fill="#a16207" fillOpacity="0.4" />
                      </svg>

                      {/* Genuine Right-Radiating Contactless RFID Waves */}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" style={{ opacity: 0.75, color: '#ffffff' }}>
                        <path d="M5 8.5a5 5 0 0 1 0 7" />
                        <path d="M8.5 5a10 10 0 0 1 0 14" />
                        <path d="M12 2a15 15 0 0 1 0 20" />
                      </svg>
                    </div>
                  </div>

                  {/* EMBOSSED DEBIT CARD NUMBER */}
                  <div style={{ position: 'relative', zIndex: 2, margin: '0.12rem 0' }}>
                    <div className="card-number-text">
                      {exp.cardNumber}
                    </div>
                  </div>

                  {/* ROLE DISPLAY */}
                  <div style={{ position: 'relative', zIndex: 2, margin: '0.08rem 0' }}>
                    <div className="card-role-text">
                      {exp.role}
                    </div>
                  </div>

                  {/* BOTTOM ROW: CARDHOLDER, VALID THRU & NETWORK LOGO */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', position: 'relative', zIndex: 2 }}>
                    <div>
                      <div className="card-meta-label">Cardholder</div>
                      <div className="card-meta-val">ADITYA RAJ</div>
                    </div>

                    <div>
                      <div className="card-meta-label">Valid Thru</div>
                      <div className="card-meta-val">{exp.validThru}</div>
                    </div>

                    {/* Payment Network Emblem */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {exp.network === 'mastercard' && (
                        <svg width="36" height="22" viewBox="0 0 38 24">
                          <circle cx="13" cy="12" r="11" fill="#eb001b" />
                          <circle cx="25" cy="12" r="11" fill="#f79e1b" fillOpacity="0.88" />
                        </svg>
                      )}
                      {exp.network === 'visa' && (
                        <span style={{ fontSize: '1.2rem', fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.04em', color: '#ffffff', textShadow: '0 1px 3px rgba(0,0,0,0.6)', fontFamily: 'sans-serif' }}>
                          VISA
                        </span>
                      )}
                      {exp.network === 'rupay' && (
                        <span style={{ fontSize: '1rem', fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.02em', color: '#ffffff' }}>RuPay</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* BACK: PREVIOUS ARCHITECTURAL DESIGN (MOBILE OPTIMIZED, NO FLIP PROMPTS) */}
                <div className="visa-card-back" style={{ background: '#09090b', border: `1px solid ${exp.theme.accentBorder}` }}>
                  {/* Zebra-Striped Signature Strip & CVV Box */}
                  <div className="card-sig-strip-prev">
                    <span className="card-sig-text">
                      Authorized Signature: Aditya Raj
                    </span>
                    <span className="card-cvv-box">
                      CVV {exp.cvv}
                    </span>
                  </div>

                  {/* Core Architectural Contributions */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '0.1rem 0' }}>
                    <div className="card-back-header">
                      <span className="card-back-header-dot" />
                      <span>CORE SYSTEMS & ARCHITECTURE IMPACT</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.22rem' }}>
                      {exp.bullets.map((b, bi) => (
                        <p key={bi} className="card-back-bullet">
                          <span className="card-back-chevron">›</span>
                          <span>{b}</span>
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Micro-print footer - zero flip mention */}
                  <div className="card-back-footer">
                    <span>CREDENTIAL #{exp.cvv}025</span>
                    <span>AUTHENTICATED · SECURE EMV</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Experience Carousel Indicators */}
        <div className="experience-dots-container" aria-label="Experience cards pagination">
          {EXPERIENCE_DATA.map((_, dIdx) => (
            <button
              key={dIdx}
              type="button"
              className={`experience-dot ${activeExpCardIndex === dIdx ? 'active' : ''}`}
              onClick={() => scrollToExpCard(dIdx)}
              aria-label={`Go to experience card ${dIdx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* SYSTEM ARCHITECTURE & ENGINEERING PLAYBOOK */}
      <section id="architecture" className="arch-section">
        <ul className="nav-ul" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', marginBottom: '1.25rem' }}>
          <li className="nav-li">
            <span className="nav-a">
              <span className="nav-a-letters">
                {"Architecture".split("").map((c, i) => <span key={i} className="nav-a-letter">{c}</span>)}
              </span>
              <span className="nav-a-stripe nav-a-stripe--yellow"></span>
              <span className="nav-a-stripe nav-a-stripe--turquoise"></span>
              <span className="nav-a-stripe nav-a-stripe--purple"></span>
              <span className="nav-a-letters-top">
                {"Architecture".split("").map((c, i) => <span key={i} className="nav-a-letter">{c}</span>)}
              </span>
            </span>
          </li>
        </ul>
        <p style={{ fontSize: '1rem', color: '#71717a', maxWidth: '44rem', margin: '0 auto 2.5rem auto', fontWeight: 500 }}>
          Production blueprints, concurrency frameworks, and distributed system pipelines.
        </p>

        {/* INTERACTIVE TAB CONTROLS (Sharp Technical Segments) */}
        <div className="arch-tab-track">
          {ARCHITECTURE_PLAYBOOK_DATA.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveArchIndex(idx)}
              className={`arch-tab-btn ${activeArchIndex === idx ? 'is-active' : ''}`}
            >
              <span className="tab-num">0{idx + 1}</span>
              <span>{tab.project.toUpperCase()}</span>
            </button>
          ))}
        </div>

        {/* BLUEPRINT CANVAS (Architectural Spec Sheet) */}
        {(() => {
          const arch = ARCHITECTURE_PLAYBOOK_DATA[activeArchIndex];
          if (arch.id === "kairo") {
            return <KairoArchitectureCanvas arch={arch} />;
          }
          if (arch.id === "prism") {
            return <PrismArchitectureCanvas arch={arch} />;
          }
          return (
            <div className="arch-canvas-container">
              {/* TOP STATUS BAR (Engineering Telemetry - Zero Rounded Pills) */}
              <div className="arch-telemetry-bar">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#ffffff', background: '#18181b', padding: '4px 10px', borderRadius: '0px', border: '1.5px solid #18181b', fontFamily: 'var(--font-mono)' }}>
                    {arch.sectionEyebrow ? arch.sectionEyebrow : `[SPEC // ${arch.badge ? arch.badge.toUpperCase() : ''}]`}
                  </span>
                  {arch.projectLabel && (
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#18181b', background: '#f4f4f5', border: '1.5px solid #18181b', borderRadius: '0px', padding: '4px 10px', fontFamily: 'var(--font-mono)' }}>
                      {arch.projectLabel}
                    </span>
                  )}
                  {arch.throughput && (
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#18181b', background: '#ffffff', border: '1.5px solid #18181b', borderRadius: '0px', padding: '4px 10px', fontFamily: 'var(--font-mono)' }}>
                      LOAD: {arch.throughput}
                    </span>
                  )}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                  {arch.status && (
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#18181b', background: '#ffffff', border: '1.5px solid #18181b', padding: '4px 10px', borderRadius: '0px', display: 'flex', alignItems: 'center', fontFamily: 'var(--font-mono)' }}>
                      SYS_STATUS: {arch.status.toUpperCase().replace(/\s+/g, '_')}
                    </span>
                  )}
                  {arch.latency && (
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#18181b', background: '#f4f4f5', border: '1.5px solid #18181b', padding: '4px 10px', borderRadius: '0px', fontFamily: 'var(--font-mono)' }}>
                      LATENCY: {arch.latency}
                    </span>
                  )}
                </div>
              </div>

              {/* TITLE & OVERVIEW */}
              <div style={{ margin: '1.5rem 0 1.75rem 0' }}>
                <h3 style={{ fontSize: 'clamp(1.3rem, 3.2vw, 2rem)', fontWeight: 800, color: '#18181b', margin: '0 0 0.5rem 0', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
                  {arch.title}
                </h3>
                {arch.subtitle && (
                  <p style={{ fontSize: '0.96rem', color: '#52525b', margin: '0 0 1.25rem 0', lineHeight: 1.5, fontWeight: 500 }}>
                    {arch.subtitle}
                  </p>
                )}
                {arch.technicalHeadline && (
                  <div className="arch-headline-box">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 800, color: '#18181b', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        TECHNICAL HEADLINE:
                      </span>
                      <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#18181b' }}>
                        {arch.technicalHeadline}
                      </span>
                    </div>
                    {arch.introduction && (
                      <p style={{ fontSize: '0.86rem', color: '#3f3f46', lineHeight: 1.6, margin: 0 }}>
                        {arch.introduction}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* TECHNICAL CONSTRAINT & ARCHITECTURAL REMEDY */}
              <div className="arch-grid-duo">
                <div style={{ background: '#fafafa', border: '1.5px solid #18181b', borderLeft: '6px solid #18181b', borderRadius: '0px', padding: '1.25rem 1.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#18181b', marginBottom: '0.5rem' }}>
                    // 01. {arch.problemTitle || "CONSTRAINT_AND_BOTTLENECK"}
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#27272a', lineHeight: 1.65, fontFamily: 'var(--font-sans)' }}>
                    {arch.problem}
                  </p>
                </div>

                <div style={{ background: '#fafafa', border: '1.5px solid #18181b', borderLeft: '6px solid #16a34a', borderRadius: '0px', padding: '1.25rem 1.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#18181b', marginBottom: '0.5rem' }}>
                    // 02. {arch.solutionTitle || "ARCHITECTURAL_REMEDY_SPEC"}
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#27272a', lineHeight: 1.65, fontFamily: 'var(--font-sans)' }}>
                    {arch.solution}
                  </p>
                </div>
              </div>

              {/* VISUAL MICRO-DIAGRAM PIPELINE TRACK */}
              <div className="arch-pipeline-wrapper">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#ffd074' }}>
                    [DATAFLOW_TOPOLOGY // STEP_SEQUENCE]
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#71717a' }}>
                    {"// SCROLL_HORIZONTAL_FOR_FLOW ──>"}
                  </span>
                </div>

                <div className="arch-pipeline-container">
                  {arch.flowSteps.map((step, si) => (
                    <React.Fragment key={si}>
                      <div className="arch-pipeline-node" style={{ flex: '1 0 160px', background: '#18181b', border: '1.5px solid #27272a', borderRadius: '0px', padding: '1rem', textAlign: 'left' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                          <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#ffd074', fontFamily: 'var(--font-mono)' }}>{step.num}</span>
                          <span style={{ fontSize: '0.6rem', fontWeight: 700, border: '1px solid #3f3f46', background: '#09090b', color: '#e4e4e7', padding: '2px 6px', borderRadius: '0px', fontFamily: 'var(--font-mono)' }}>{step.tag}</span>
                        </div>
                        <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.3rem', letterSpacing: '-0.01em' }}>{step.label}</div>
                        <div style={{ fontSize: '0.72rem', color: '#a1a1aa', lineHeight: 1.45 }}>{step.sub}</div>
                      </div>
                      {si < arch.flowSteps.length - 1 && (
                        <span style={{ color: '#71717a', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', fontWeight: 800, flexShrink: 0, padding: '0 0.25rem' }}>{"──>"}</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* THREE DEEP-DIVE ENGINEERING PILLARS */}
              <div className="arch-grid-trio">
                {arch.deepDives.map((dive, di) => (
                  <div key={di} style={{ background: '#ffffff', border: '1.5px solid #18181b', borderRadius: '0px', padding: '1.25rem' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 700, color: '#71717a', letterSpacing: '0.1em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                      // {dive.subsystem || `SUBSYSTEM 0${di + 1}`}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      {dive.icon === 'ShieldCheck' && <ShieldCheck size={18} color="#18181b" strokeWidth={2} />}
                      {dive.icon === 'Smartphone' && <Smartphone size={18} color="#18181b" strokeWidth={2} />}
                      {dive.icon === 'CreditCard' && <CreditCard size={18} color="#18181b" strokeWidth={2} />}
                      {dive.icon === 'Sparkles' && <Sparkles size={18} color="#18181b" strokeWidth={2} />}
                      {dive.icon === 'Zap' && <Zap size={18} color="#18181b" strokeWidth={2} />}
                      {dive.icon === 'Server' && <Server size={18} color="#18181b" strokeWidth={2} />}
                      {dive.icon === 'GitBranch' && <GitBranch size={18} color="#18181b" strokeWidth={2} />}
                      {dive.icon === 'Database' && <Database size={18} color="#18181b" strokeWidth={2} />}
                      {dive.icon === 'Cpu' && <Cpu size={18} color="#18181b" strokeWidth={2} />}
                      {dive.icon === 'Flame' && <Flame size={18} color="#18181b" strokeWidth={2} />}
                      <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#18181b' }}>{dive.title}</span>
                    </div>
                    <p style={{ fontSize: '0.82rem', color: '#52525b', lineHeight: 1.55 }}>{dive.desc}</p>
                  </div>
                ))}
              </div>

              {/* TECH STACK FOOTER */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', paddingTop: '1.25rem', borderTop: '1.5px solid #18181b' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#18181b' }}>STACK_DEPS:</span>
                {arch.techStack.map((tech, ti) => (
                  <span key={ti} style={{ fontSize: '0.72rem', fontWeight: 700, fontFamily: 'var(--font-mono)', background: '#f4f4f5', border: '1.5px solid #18181b', color: '#18181b', padding: '3px 8px', borderRadius: '0px' }}>
                    [{tech}]
                  </span>
                ))}
              </div>

              {/* PERFORMANCE FOOTNOTE */}
              {arch.footnote && (
                <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px dashed #d4d4d8', display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 800, color: '#71717a', letterSpacing: '0.08em', textTransform: 'uppercase', flexShrink: 0, marginTop: '2px' }}>
                    [NOTE]
                  </span>
                  <p style={{ margin: 0, fontSize: '0.76rem', color: '#71717a', lineHeight: 1.55, fontFamily: 'var(--font-mono)' }}>
                    {arch.footnote}
                  </p>
                </div>
              )}
            </div>
          );
        })()}
      </section>

      {/* CONNECT WITH ME & CONTINUOUS MARQUEE FOOTER (REPLICA) */}
      <footer style={{ width: '100%', marginTop: '6rem', paddingBottom: '8rem', overflow: 'hidden', textAlign: 'center' }}>
        {/* Connect With Me Heading */}
        <div style={{ fontSize: '0.95rem', fontWeight: 500, color: '#18181b', marginBottom: '1.25rem', letterSpacing: '-0.01em' }}>
          Connect with me on:
        </div>

        {/* 5 Verified Social Outline Icons */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.75rem', marginBottom: '3.5rem' }}>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link link-github"
            aria-label="GitHub"
          >
            <GithubIcon size={24} strokeWidth={1.35} />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link link-linkedin"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={24} strokeWidth={1.35} />
          </a>
          <a
            href={PERSONAL_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link link-instagram"
            aria-label="Instagram"
          >
            <InstagramIcon size={23} strokeWidth={1.35} />
          </a>
          <a
            href={PERSONAL_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link link-whatsapp"
            aria-label="WhatsApp"
          >
            <WhatsappIcon size={23} strokeWidth={1.35} />
          </a>
        </div>

        {/* Continuous Infinite Running Marquee Track */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', borderTop: '1px solid #f1f5f9', paddingTop: '1.75rem' }}>
          {/* Track 1: Thanks for visiting my portfolio! */}
          <div className="footer-marquee-row">
            <div className="footer-marquee-track-left">
              {[...Array(6)].map((_, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
                    fontWeight: 700,
                    color: '#94a3b8',
                    letterSpacing: '-0.01em',
                    paddingRight: '1rem',
                    display: 'inline-flex',
                    alignItems: 'center'
                  }}
                >
                  Thanks for visiting my portfolio! <span style={{ margin: '0 0.85rem', opacity: 0.5 }}>|</span>
                </span>
              ))}
            </div>
            <div className="footer-marquee-track-left" aria-hidden="true">
              {[...Array(6)].map((_, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
                    fontWeight: 700,
                    color: '#94a3b8',
                    letterSpacing: '-0.01em',
                    paddingRight: '1rem',
                    display: 'inline-flex',
                    alignItems: 'center'
                  }}
                >
                  Thanks for visiting my portfolio! <span style={{ margin: '0 0.85rem', opacity: 0.5 }}>|</span>
                </span>
              ))}
            </div>
          </div>

          {/* Track 2: Code & Crafted with 🧡 by Aditya Raj */}
          <div className="footer-marquee-row">
            <div className="footer-marquee-track-right">
              {[...Array(6)].map((_, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
                    fontWeight: 700,
                    color: '#94a3b8',
                    letterSpacing: '-0.01em',
                    paddingRight: '1rem',
                    display: 'inline-flex',
                    alignItems: 'center'
                  }}
                >
                  Code &amp; Crafted with 🧡 by Aditya Raj <span style={{ margin: '0 0.85rem', opacity: 0.5 }}>|</span>
                </span>
              ))}
            </div>
            <div className="footer-marquee-track-right" aria-hidden="true">
              {[...Array(6)].map((_, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
                    fontWeight: 700,
                    color: '#94a3b8',
                    letterSpacing: '-0.01em',
                    paddingRight: '1rem',
                    display: 'inline-flex',
                    alignItems: 'center'
                  }}
                >
                  Code &amp; Crafted with 🧡 by Aditya Raj <span style={{ margin: '0 0.85rem', opacity: 0.5 }}>|</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING GLASSMORPHISM ISLAND DOCK (Desktop only) */}
      <nav
        aria-label="Floating Navigation Dock"
        className="menu-bar desktop-dock"
        style={{
          position: 'fixed',
          bottom: '1.75rem',
          left: '50%',
          transform: 'translateX(-50%)',
          height: '3.85rem',
          width: 'calc(100% - 2rem)',
          maxWidth: '30.5rem',
          borderRadius: '9999px',
          padding: '0.35rem 0.45rem 0.35rem 0.65rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontWeight: 500,
          fontSize: '0.9rem',
          color: '#ffffff',
          zIndex: 1000,
          boxSizing: 'border-box'
        }}
      >
        <button
          onClick={handleHomeClick}
          className="dock-home-btn"
          aria-label="Navigate to Home with smooth transition"
          title="Home"
        >
          <SmileHomeIcon size={21} />
        </button>

        <div style={{ display: 'flex', gap: '0.2rem', alignItems: 'center' }}>
          <a href="#projects" onClick={(e) => smoothNavigateTo('projects', e)} className="dock-nav-link">Projects</a>
          <a href="#experience" onClick={(e) => smoothNavigateTo('experience', e)} className="dock-nav-link">Experience</a>
          <a href="#architecture" onClick={(e) => smoothNavigateTo('architecture', e)} className="dock-nav-link">Architecture</a>
        </div>

        <button
          onClick={openContactModal}
          className="dock-talk-btn"
          aria-label="Open Let's Talk contact dialog"
        >
          Let's Talk
        </button>
      </nav>

      {/* MOBILE BACKDROP FOR OUTSIDE CLICK DISMISSAL */}
      {mobileMenuState !== 'closed' && (
        <div
          className={`mobile-menu-backdrop ${mobileMenuState === 'closing' ? 'is-closing' : 'is-opening'}`}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* MOBILE EXPANDABLE FLOATING MENU (Exact match to reference screenshot with smooth maximize/minimize animation) */}
      <div className="mobile-fab-container">
        <button
          id="mobile-nav-toggle-btn"
          onClick={openMobileMenu}
          className={`mobile-fab-btn ${mobileMenuState !== 'closed' ? 'is-active-menu' : ''}`}
          aria-label="Open navigation menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>

        {mobileMenuState !== 'closed' && (
          <div
            ref={mobileMenuRef}
            className={`mobile-menu-card ${mobileMenuState === 'closing' ? 'is-closing' : 'is-opening'}`}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            {/* Top Right Close '✕' Button (Screenshot match) */}
            <button
              onClick={closeMobileMenu}
              className="mobile-menu-close-btn"
              aria-label="Close navigation menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Centered Navigation Links (Home, Projects, Experience, Architecture) */}
            <nav className="mobile-menu-items-list" aria-label="Mobile navigation links">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  closeMobileMenu();
                  setTimeout(() => {
                    handleHomeClick(e);
                  }, 120);
                }}
                className="mobile-menu-link"
              >
                Home
              </a>
              <a
                href="#projects"
                onClick={(e) => smoothNavigateTo('projects', e)}
                className="mobile-menu-link"
              >
                Projects
              </a>
              <a
                href="#experience"
                onClick={(e) => smoothNavigateTo('experience', e)}
                className="mobile-menu-link"
              >
                Experience
              </a>
              <a
                href="#architecture"
                onClick={(e) => smoothNavigateTo('architecture', e)}
                className="mobile-menu-link"
              >
                Architecture
              </a>
            </nav>
          </div>
        )}
      </div>

      {/* MOBILE FLOATING "LET'S TALK" BUTTON (Screenshot match: bottom-right pill button) */}
      <div className={`mobile-talk-container ${mobileMenuState !== 'closed' ? 'is-menu-open' : ''}`}>
        <button
          id="mobile-talk-trigger-btn"
          onClick={openContactModal}
          className="mobile-talk-btn"
          aria-label="Let's talk"
        >
          <span>Let's talk</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="M13 18l6-6" />
            <path d="M13 6l6 6" />
          </svg>
        </button>
      </div>

      {/* PROJECT DETAILS MODAL (Exact match to Reference Image 2: iOS/Store Card with Slides & Single Action Button) */}
      {activeProject && (
        <>
          <div
            className={`modal-overlay active ${projectModalClosing ? 'is-closing' : 'is-opening'}`}
            onClick={closeProjectModal}
          />
          <div
            className={`modal-ref-sheet active ${projectModalClosing ? 'is-closing' : 'is-opening'}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            {/* Top Drag Handle */}
            <div className="modal-ref-drag-handle" onClick={closeProjectModal} />

            {/* Header: Brand + Close button */}
            <div className="modal-ref-header">
              <div className="modal-ref-header-brand">
                <IsometricCubeIcon size={19} color="#52525b" />
                <span>Aditya Raj Store</span>
              </div>
              <button
                onClick={closeProjectModal}
                className="modal-ref-close-btn"
                aria-label="Close dialog"
              >
                <X size={15} strokeWidth={2.4} />
              </button>
            </div>

            {/* Project Identity matching Reference Screenshot */}
            <div className="modal-ref-identity">
              <img
                src={activeProject.logo}
                alt={activeProject.displayTitle || activeProject.name}
                className="modal-ref-logo"
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 id="project-modal-title" className="modal-ref-title">
                  {activeProject.displayTitle || activeProject.name}
                </h3>
                {activeProject.displayUrl && (
                  <a
                    href={activeProject.website || activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-ref-url"
                  >
                    {activeProject.displayUrl}
                  </a>
                )}
              </div>
            </div>

            {/* Multi-Card Peeking Gallery Track */}
            <div className="modal-ref-gallery-wrapper">
              <div
                ref={screenshotsScrollRef}
                onScroll={handleScreenshotsScroll}
                className="modal-ref-gallery-track"
              >
                {(activeProject.slides || []).map((slide, sIdx) => (
                  <div key={sIdx} className="modal-ref-card">
                    <img
                      src={slide.image}
                      alt={slide.caption || `${activeProject.name} slide ${sIdx + 1}`}
                      className="modal-ref-card-img"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {canScrollLeft && (
                <button
                  type="button"
                  onClick={() => scrollScreenshots('prev')}
                  className="modal-ref-gallery-nav-btn prev"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={18} strokeWidth={2.4} />
                </button>
              )}
              {canScrollRight && (
                <button
                  type="button"
                  onClick={() => scrollScreenshots('next')}
                  className="modal-ref-gallery-nav-btn next"
                  aria-label="Next slide"
                >
                  <ChevronRight size={18} strokeWidth={2.4} />
                </button>
              )}
            </div>

            {/* Project Summary Statement below gallery matching reference screenshot */}
            <p className="modal-ref-description">
              {activeProject.modalDescription || activeProject.oneLiner}
            </p>

            {/* Single Full-Width Action Button */}
            {(() => {
              const hasLiveWebsite = Boolean(
                activeProject.website &&
                !activeProject.website.toLowerCase().includes('github.com')
              );

              if (hasLiveWebsite) {
                return (
                  <a
                    href={activeProject.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-ref-action-btn"
                  >
                    <ExternalLink size={18} strokeWidth={2.2} /> Visit
                  </a>
                );
              }

              return (
                <a
                  href={activeProject.github || activeProject.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-ref-action-btn"
                >
                  <GithubIcon size={18} strokeWidth={1.6} /> View on GitHub
                </a>
              );
            })()}
          </div>
        </>
      )}

      {/* LET'S TALK MODAL (Screenshot 1: Clean iOS/Linear style card with drag handle and verified content) */}
      {isContactOpen && (
        <>
          <div
            className={`modal-overlay active ${contactModalClosing ? 'is-closing' : 'is-opening'}`}
            onClick={closeContactModal}
          />
          <div
            className={`modal-talk-sheet active ${contactModalClosing ? 'is-closing' : 'is-opening'}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="talk-dialog-title"
          >
            {/* Top Drag / Pull Bar Handle */}
            <div className="drawer-drag-handle" onClick={closeContactModal} />

            {/* Title & Instructions */}
            <h3
              id="talk-dialog-title"
              style={{
                fontSize: '1.45rem',
                fontWeight: 700,
                color: '#111827',
                margin: '0 0 0.65rem 0',
                letterSpacing: '-0.02em',
                lineHeight: 1.25
              }}
            >
              Let's Talk
            </h3>

            <p
              style={{
                fontSize: '0.94rem',
                lineHeight: 1.6,
                color: '#4b5563',
                margin: '0 0 1.65rem 0',
                fontWeight: 400
              }}
            >
              Please use emailing only regrading services, works, potential offers or professional talk. Kindly use other social media handles for other queries or chatting, Thanks!
            </p>

            {/* Primary Action Button: "Yes, I'll send an email" */}
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Professional%20Inquiry%20-%20Let's%20Talk`}
              className="modal-talk-btn-primary"
            >
              Yes, I'll send an email
            </a>

            {/* Secondary Action Button: "Let me copy the email" */}
            <button
              onClick={handleCopyEmail}
              className="modal-talk-btn-secondary"
            >
              {copiedEmail ? '✓ Copied adityaeeshan5230@gmail.com!' : 'Let me copy the email'}
            </button>

            {/* Helper Disclaimer Note */}
            <p
              style={{
                fontSize: '0.8rem',
                color: '#6b7280',
                margin: '1.35rem 0 0 0',
                lineHeight: 1.5,
                textAlign: 'left'
              }}
            >
              I also don't like mailto links but I had to use it here to avoid spam bots. Sorry!
            </p>
          </div>
        </>
      )}

      {/* 3-CARD CASCADING HOME TRANSITION (Ultra Smooth) */}
      {curtainActive && (
        <div className={`curtain-container curtain-${curtainPhase}`} aria-hidden="true">
          <div className="curtain-card curtain-card-1" />
          <div className="curtain-card curtain-card-2" />
          <div className="curtain-card curtain-card-3">
            <div className="curtain-home-label">HOME</div>
          </div>
        </div>
      )}

    </div>
  );
}