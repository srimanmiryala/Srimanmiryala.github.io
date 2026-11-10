import { Project, AlgorithmicStat } from '../types';

export const PERSONAL_DETAILS = {
  name: "Miryala Sriman",
  email: "srimanmiryala9@gmail.com",
  phone: "+91 9030243813",
  location: "Hyderabad, Telangana",
  college: "Vasavi College of Engineering",
  degree: "B.Tech Computer Science and Engineering",
  graduationYear: 2027,
  cgpa: "8.03 / 10",
  currentRole: "Software Engineer Apprentice — DBS Bank Technology",
  headline: "Software Engineer Apprentice @ DBS Bank | LeetCode Knight (Top 3%) | Codeforces Specialist",
  aboutText: "Software Engineer Apprentice at DBS Bank and B.Tech CS student at Vasavi College of Engineering (CGPA 8.03, graduating June 2027). Strong in data structures and algorithms (LeetCode Knight, top 3% globally; Codeforces Specialist). Built a real-time distributed platform (40% lower connection overhead, sub-50ms sync, 60% faster deployments) and a PyTorch model that runs 350x faster, using Python and Java.",
  socials: {
    leetcode: "https://leetcode.com/u/Srimanmiryala",
    codeforces: "https://codeforces.com/profile/Srimanmiryala",
    linkedin: "https://www.linkedin.com/in/sriman-miry3549651b6",
    github: "https://github.com/srimanmiryala",
    email: "mailto:srimanmiryala9@gmail.com"
  }
};

export const ALGORITHMIC_STATS: AlgorithmicStat[] = [
  {
    platform: "LeetCode",
    badge: "Knight",
    metric: "Top 3% Globally",
    rating: "Peak 1989",
    handle: "Srimanmiryala",
    url: "https://leetcode.com/u/Srimanmiryala",
    description: "Ranked 936 of 20,000+ in LeetCode Biweekly Contest 177 and 1,331 of 25,000+ in Weekly Contest 501."
  },
  {
    platform: "Codeforces",
    badge: "Specialist",
    metric: "Cyan Rank",
    rating: "Peak 1503",
    handle: "Srimanmiryala",
    url: "https://codeforces.com/profile/Srimanmiryala",
    description: "Consistent high-tempo competitive programmer specializing in graph theory, constructive algorithms, and DP."
  },
  {
    platform: "Problem Solving Volume",
    badge: "1,500+ Solved",
    metric: "Multi-Platform Verified",
    rating: "Multi-Platform",
    handle: "srimanmiryala",
    url: "https://leetcode.com/u/Srimanmiryala",
    description: "DSA, Graph Theory, DP, Segment Trees, Backtracking, and Greedy Algorithms across LeetCode, Codeforces, and GFG."
  }
];

export const CERTIFICATIONS = [
  {
    title: "Oracle Cloud Infrastructure Generative AI Professional",
    issuer: "Oracle",
    year: "2025",
    description: "Certified in enterprise Large Language Model deployment, prompt engineering, fine-tuning, embeddings, and vector store retrieval."
  },
  {
    title: "Python Essentials 1 & 2",
    issuer: "Cisco Networking Academy",
    year: "2025",
    description: "Comprehensive certification covering advanced data structures, OOP design patterns, file processing, and algorithmic problem-solving."
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "code-editor",
    title: "Real-Time Collaborative Coding Platform",
    category: "systems",
    badge: "Distributed Systems",
    summary: "A collaborative code editing platform where multiple users work on shared code in real time with sub-50ms sync latency.",
    highlights: [
      "Reduced connection overhead by 40% in load tests by adding a Redis pub/sub layer to sync user sessions",
      "Kept sync latency under 50ms (WebSocket round-trip time) by designing and debugging real-time editing",
      "Made deployments 60% faster by using Docker containers and automating CI/CD with GitHub Actions",
      "Ranked Top 10 out of 100+ teams at GenAI Hackathon 2025 by building a live multi-user coding product"
    ],
    techStack: ["FastAPI", "Redis Pub/Sub", "WebSockets", "React.js", "Docker", "GitHub Actions"],
    caseStudy: {
      problemStatement: "Synchronous pair programming demands sub-millisecond distribution of textual modifications while preventing race conditions.",
      architectureOverview: "FastAPI + WebSockets -> Redis Pub/Sub sync layer -> React frontend -> Dockerized CI/CD via GitHub Actions.",
      engineeringDecisions: [
        {
          title: "Redis Pub/Sub Layer",
          description: "Reduced connection overhead by 40% under high-volume load tests by decoupling active user sessions."
        },
        {
          title: "Sub-50ms Sync Latency",
          description: "Engineered low-latency WebSocket packet pipelines to ensure immediate round-trip state reflection."
        }
      ],
      metrics: "Sub-50ms sync latency; 40% lower connection overhead; 60% faster CI/CD deployments; Top 10 at GenAI Hackathon 2025."
    }
  },
  {
    id: "resunet",
    title: "ResU-Net Surrogate for Topology Optimization",
    category: "aiml",
    badge: "AI / Deep Learning",
    summary: "Deep Residual U-Net neural network surrogate replacing traditional physics-based topology optimization solvers.",
    highlights: [
      "Made topology optimization 350x faster than the old optimizer using a PyTorch encoder-decoder model",
      "Reached a Dice score of 0.89 against ground-truth simulations by training and evaluating the model",
      "Improved training speed 10x (samples per second) by using CUDA Automatic Mixed Precision (AMP)",
      "Owned the full ML pipeline (preprocessing, training, evaluation, inference) from raw data to results"
    ],
    techStack: ["Python", "PyTorch", "CUDA AMP", "React.js", "Google Colab"],
    caseStudy: {
      problemStatement: "Finite-element topology optimization in structural mechanics is computationally prohibitive for rapid iteration.",
      architectureOverview: "Raw boundary conditions -> ResU-Net encoder-decoder surrogate -> CUDA AMP training pipeline -> Fast density mask inference.",
      engineeringDecisions: [
        {
          title: "CUDA Automatic Mixed Precision (AMP)",
          description: "Leveraged FP16/FP32 mixed precision to accelerate training speed by 10x without sacrificing numerical precision."
        },
        {
          title: "Residual U-Net Architecture",
          description: "Incorporated deep residual units into U-Net skip paths to achieve a 0.89 Dice similarity score against ground-truth simulations."
        }
      ],
      metrics: "350x faster inference than traditional optimizers; 0.89 Dice score; 10x training throughput speedup."
    }
  },
  {
    id: "timetable",
    title: "Constraint-Based Scheduling Engine",
    category: "systems",
    badge: "CSP & Graph Theory",
    summary: "Automated institutional scheduling engine formulated as a multi-dimensional Constraint Satisfaction Problem (CSP).",
    highlights: [
      "Modeled university timetabling as a CSP with graph coloring across 50+ hard constraints",
      "Used backtracking search to find valid timetables for the CSP",
      "Applied AC-3 arc consistency to cut down the search space, checked with runtime benchmarks",
      "Built an automated scheduler with 99.7% conflict-free timetables, 60% faster than brute force"
    ],
    techStack: ["Python", "CSP", "Graph Coloring", "AC-3", "FastAPI"],
    caseStudy: {
      problemStatement: "Multi-department university timetabling involves overlapping educators, room capacities, and student cohort constraints.",
      architectureOverview: "Institutional parameters -> Graph coloring CSP formulation -> Backtracking + AC-3 arc consistency -> Conflict-free timetable matrix.",
      engineeringDecisions: [
        {
          title: "AC-3 Arc Consistency",
          description: "Pre-emptively pruned invalid domain values prior to recursive backtracking, reducing search time by 60% compared to brute force."
        },
        {
          title: "50+ Hard Constraint Verification",
          description: "Strictly verified zero professor double-bookings, laboratory limits, and batch conflicts."
        }
      ],
      metrics: "99.7% conflict-free schedule generation; 60% faster runtime execution than brute-force backtracking."
    }
  }
];

export const EXPERIENCE = [
  {
    role: "Software Engineer Apprentice",
    company: "DBS Bank Technology",
    duration: "Jun 2026 – Present",
    current: true,
    description: "Completing labs on application security and common cyber attacks in the DBS apprenticeship program. Learning enterprise tech stacks like Spring Boot and DevOps through structured training.",
    tech: ["DBS Bank", "Spring Boot", "Application Security", "Enterprise DevOps", "Microservices"]
  }
];

export const EDUCATION = {
  institution: "Vasavi College of Engineering",
  location: "Hyderabad, India",
  degree: "B.Tech, Computer Science and Engineering",
  duration: "Sep 2023 – Jun 2027",
  cgpa: "8.03 / 10",
  coursework: ["DSA", "Algorithm Analysis", "Operating Systems", "Distributed Systems", "DBMS", "Computer Networks"],
  intermediate: {
    institution: "Narayana Junior College, Hyderabad",
    score: "98.1%",
    duration: "Aug 2021 – Jul 2023"
  }
};
