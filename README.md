# 🚀 Aditya Raj Bhandari — Portfolio

A modern, fully responsive developer portfolio built with **React**, **Three.js**, and **GSAP** — featuring a custom 3D globe, smooth scroll animations, and a dark/light theme toggle.

**Live:** [aditya4635.github.io/portfolio](https://portfolio-azure-one-41.vercel.app) 

---

## ✨ Features

- 🌍 **Interactive 3D Globe** — custom Three.js scene with a rotating Earth and orbital rings, pinpointing Delhi, India
- 🎨 **Dark / Light Theme** — persisted across sessions via `localStorage`
- 📱 **Fully Responsive** — optimised layouts for mobile, tablet, and desktop
- ⚡ **Lazy Loading** — heavy sections loaded on demand for fast initial paint
- 📬 **Contact Form** — powered by EmailJS with live validation
- 🔢 **Visitor Counter** — client-side persistent counter
- 🚀 **Smooth Animations** — GSAP scroll-triggered entrance animations throughout

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| 3D | Three.js, `@react-three/fiber`, `@react-three/drei` |
| Animation | GSAP + ScrollTrigger |
| Styling | Tailwind CSS |
| Email | EmailJS |
| Linting | ESLint |

---

## 🗂️ Project Structure

```
src/
├── components/       # Reusable UI & 3D components
│   ├── HeroCanvas.jsx      # Three.js canvas wrapper
│   ├── HeroGeometry.jsx    # 3D Earth + orbital rings
│   ├── CyberCube.jsx       # Animated 3D cube (Projects section)
│   ├── ProjectsCanvas.jsx  # Canvas for projects hero
│   ├── Alert.jsx           # Toast notification
│   ├── Button.jsx          # ActionLink & IconButton
│   ├── ErrorBoundary.jsx   # Error boundary wrapper
│   ├── FormField.jsx       # Reusable form input
│   └── Loading.jsx         # Canvas loader
├── hooks/            # Custom React hooks
│   ├── useClipboard.js     # Copy-to-clipboard with timeout
│   ├── useContactForm.js   # Form state + EmailJS submission
│   ├── useTheme.js         # Dark/light mode toggle
│   └── useVisitorCount.js  # Persistent visitor counter
├── sections/         # Page sections
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   ├── TechStack.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
└── constants/
    └── index.js      # Nav links, project data, tech stack
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
git clone https://github.com/aditya4635/portfolio.git
cd portfolio
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these from [emailjs.com](https://emailjs.com).

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

---

## 📄 License

MIT © [Aditya Raj Bhandari](https://github.com/aditya4635)
