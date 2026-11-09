# Sriman Miryala — Premium Developer Portfolio

A visually exceptional, production-grade personal portfolio for **Sriman Miryala**, Computer Science undergraduate (Class of 2027) at **Vasavi College of Engineering, Hyderabad**.

Designed and engineered to position Sriman for competitive roles in:
- **Software Development Engineer (SDE)**
- **Software Engineer (SWE)**
- **Artificial Intelligence / Machine Learning Engineer (AI/ML)**

---

## 🌟 Key Highlights & Engineering Features

- **Linear / Raycast / Vercel-inspired Aesthetic**: Sleek glassmorphism, glowing ambient lighting, modern typography (`Plus Jakarta Sans`, `Inter`, `Fira Code`), and high-contrast dark/light mode toggle.
- **Interactive Role Perspective Switcher**: Dynamic perspective filter allowing recruiters to view tailored value propositions for SDE, SWE, or AI/ML roles.
- **Competitive Programming Hub**:
  - **LeetCode Knight** (1850+ Rating, Top ~5% worldwide)
  - **Codeforces Specialist** (1400+ Rating, Cyan badge)
  - **1,000+ Algorithmic Challenges Solved** with visual category distribution and topic mastery bars.
- **6 In-Depth Technical Case Studies with Architecture Diagrams**:
  1. **Collaborative Code Editor**: Monaco Editor, Socket.IO bidirectional event sync, Redis room presence and debounced delta sync.
  2. **ResuNet**: Residual U-Net deep convolutional neural network for semantic feature segmentation with skip connections.
  3. **Smart Timetable Maker**: Constraint Satisfaction Problem (CSP) optimization with backtracking and MRV heuristics.
  4. **AI Movie Recommendation System**: Google Gemini AI semantic NLP, TMDb API integration, and vector cosine similarity.
  5. **Machine Unlearning Framework**: Privacy research on SISA architecture, selective influence negation, and Membership Inference Attack (MIA) defense.
  6. **Real Estate Application with Maps**: Google Maps API, dynamic bounding box queries, and MongoDB `2dsphere` spatial indexing.
- **Interactive CLI Terminal**: Functional in-browser developer terminal simulator with executable commands (`help`, `about`, `cp-stats`, `skills`, `projects`, `resume`, `contact`, `sudo hire`).
- **Command Palette (`Cmd+K` / `Ctrl+K`)**: Rapid navigation across case studies, sections, and qualifications.
- **Interactive Resume Modal & Print/PDF Export**: One-click preview and print/save to PDF.
- **Fully Working Contact Form**: Live client-side validation, instant feedback toast, direct `mailto:` fallback, and one-click email copying.

---

## 🚀 How to Run Locally

### Option 1: Instant Zero-Dependency Run (Any Machine, Python Built-In)
No Node.js or npm dependencies required! Simply run:

```bash
cd /Users/srimanmiryala/.gemini/antigravity/scratch/sriman-portfolio
python3 serve.py
```

Then open your browser at `http://localhost:3000`.

Or open `index.html` directly in your browser:
```bash
open index.html
```

---

### Option 2: Vite / React / TypeScript Workflow
If you want to run with Vite or deploy to Vercel/Netlify:

```bash
cd /Users/srimanmiryala/.gemini/antigravity/scratch/sriman-portfolio
npm install
npm run dev
```

To build for production:
```bash
npm run build
```

---

## 📂 Project Structure

```
sriman-portfolio/
├── index.html                 # Complete standalone production application (zero-dependency)
├── serve.py                   # Python 3 local development server
├── package.json               # Node.js dependencies (React, Vite, Tailwind, Lucide, Framer Motion)
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.js         # Tailwind styling tokens & theme extensions
├── README.md                  # Project documentation
└── src/
    ├── main.tsx               # React application root
    ├── App.tsx                # Master React application component
    ├── index.css              # Custom Tailwind CSS utilities & glassmorphism
    ├── types/
    │   └── index.ts           # TypeScript interfaces (Project, SkillCategory, AlgorithmicStat)
    └── data/
        └── portfolioData.ts   # Structured portfolio data store
```

---

## 👤 Personal & Contact Coordinates

- **Name:** Sriman Miryala
- **Email:** [srimanmiryala9@gmail.com](mailto:srimanmiryala9@gmail.com)
- **Location:** Hyderabad, Telangana, India
- **College:** Vasavi College of Engineering
- **Degree:** B.Tech Computer Science and Engineering (2023–2027) &bull; CGPA: 8.03/10
- **LeetCode:** [leetcode.com/u/Srimanmiryala/](https://leetcode.com/u/Srimanmiryala/)
- **Codeforces:** [codeforces.com/profile/srimanmiryala](https://codeforces.com/profile/srimanmiryala)
