import React, { useState } from 'react';
import { 
  PERSONAL_DETAILS, 
  ALGORITHMIC_STATS, 
  FEATURED_PROJECTS, 
  ADDITIONAL_PROJECTS, 
  SKILL_CATEGORIES, 
  EXPERIENCE, 
  EDUCATION, 
  TARGET_COMPANIES 
} from './data/portfolioData';
import { Project } from './types';
import { 
  Shield, 
  Zap, 
  Target, 
  ArrowRight, 
  ExternalLink, 
  Terminal, 
  FileText, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Check, 
  Sun, 
  Moon, 
  X, 
  Copy,
  Layers,
  Sparkles,
  Server,
  Layout,
  Cpu,
  Code2,
  Database
} from 'lucide-react';

export function App() {
  const [selectedRole, setSelectedRole] = useState<'all' | 'sde' | 'swe' | 'aiml'>('all');
  const [projectFilter, setProjectFilter] = useState<'all' | 'systems' | 'aiml' | 'fullstack'>('all');
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    document.documentElement.classList.toggle('light');
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DETAILS.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const filteredProjects = projectFilter === 'all' 
    ? FEATURED_PROJECTS 
    : FEATURED_PROJECTS.filter(p => p.category === projectFilter);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#080c14] text-slate-100' : 'bg-slate-50 text-slate-900'} font-sans transition-colors duration-300`}>
      {/* Header */}
      <header className="sticky top-0 z-40 w-full glass-nav border-b border-slate-800/80 px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 via-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-sky-500/20">
            SM
          </div>
          <div>
            <span className="font-bold text-base text-white tracking-tight">{PERSONAL_DETAILS.name}</span>
            <span className="block text-xs text-slate-400">Class of 2027</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300 font-medium">
          <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
          <a href="#competitive" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
            <span>Algorithms</span>
            <span className="px-1.5 py-0.5 text-[10px] bg-amber-500/20 text-amber-300 rounded font-mono">Knight</span>
          </a>
          <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-sky-400 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-sky-400 transition-colors">Experience</a>
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white" title="Toggle Theme">
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
          <button onClick={() => setIsResumeOpen(true)} className="px-3 py-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-sky-300 border border-sky-500/30 rounded-lg flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
          <a href="#contact" className="px-3.5 py-1.5 text-xs font-semibold bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-lg shadow-md shadow-sky-500/20 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        {/* Hero */}
        <section id="hero" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for 2025–2027 Opportunities &bull; Hyderabad, India</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400">High-Performance</span> Software & AI Systems
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {PERSONAL_DETAILS.aboutText}
            </p>

            {/* Interactive Role Switcher */}
            <div className="space-y-3 pt-2">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-sky-400" />
                <span>Tailor My Profile By Role:</span>
              </p>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => setSelectedRole('all')} className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${selectedRole === 'all' ? 'border-sky-500 bg-sky-500/20 text-sky-300' : 'border-slate-800 bg-slate-900 text-slate-400'}`}>All-Around Overview</button>
                <button onClick={() => setSelectedRole('sde')} className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${selectedRole === 'sde' ? 'border-sky-500 bg-sky-500/20 text-sky-300' : 'border-slate-800 bg-slate-900 text-slate-400'}`}>SDE / Backend</button>
                <button onClick={() => setSelectedRole('swe')} className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${selectedRole === 'swe' ? 'border-sky-500 bg-sky-500/20 text-sky-300' : 'border-slate-800 bg-slate-900 text-slate-400'}`}>SWE / Full-Stack</button>
                <button onClick={() => setSelectedRole('aiml')} className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${selectedRole === 'aiml' ? 'border-sky-500 bg-sky-500/20 text-sky-300' : 'border-slate-800 bg-slate-900 text-slate-400'}`}>AI / Machine Learning</button>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a href="#projects" className="px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium text-sm flex items-center gap-2 shadow-lg shadow-sky-500/25">
                <span>View Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#competitive" className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-medium text-sm flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-400" />
                <span>LeetCode Knight & Codeforces</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            {ALGORITHMIC_STATS.map((stat, i) => (
              <a key={i} href={stat.url} target="_blank" rel="noopener noreferrer" className="block p-4 rounded-2xl glass-card border border-slate-800 hover:border-sky-500/50 transition-all group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-sky-400 uppercase">{stat.platform}</span>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-sky-400" />
                </div>
                <div className="text-xl font-bold text-white">{stat.badge}</div>
                <p className="text-xs text-amber-300 font-mono mt-0.5">{stat.metric} &bull; Rating: {stat.rating}</p>
                <p className="text-xs text-slate-400 mt-2">{stat.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Featured Projects Grid */}
        <section id="projects" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">Case Studies</span>
              <h2 className="text-3xl font-extrabold text-white mt-1">Featured Technical Implementations</h2>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setProjectFilter('all')} className={`px-3 py-1.5 text-xs rounded-lg border ${projectFilter === 'all' ? 'border-sky-500 bg-sky-500/20 text-sky-300' : 'border-slate-800 bg-slate-900 text-slate-400'}`}>All (6)</button>
              <button onClick={() => setProjectFilter('systems')} className={`px-3 py-1.5 text-xs rounded-lg border ${projectFilter === 'systems' ? 'border-sky-500 bg-sky-500/20 text-sky-300' : 'border-slate-800 bg-slate-900 text-slate-400'}`}>Real-Time & Systems</button>
              <button onClick={() => setProjectFilter('aiml')} className={`px-3 py-1.5 text-xs rounded-lg border ${projectFilter === 'aiml' ? 'border-sky-500 bg-sky-500/20 text-sky-300' : 'border-slate-800 bg-slate-900 text-slate-400'}`}>AI / Machine Learning</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="p-6 rounded-2xl glass-card border border-slate-800 flex flex-col justify-between group hover:border-sky-500/50 transition-all">
                <div>
                  <span className="px-2 py-0.5 text-[10px] font-mono bg-sky-500/10 text-sky-400 rounded border border-sky-500/20">{project.badge}</span>
                  <h3 className="text-xl font-bold text-white mt-3 group-hover:text-sky-400 transition-colors">{project.title}</h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">{project.summary}</p>
                  
                  <ul className="mt-4 space-y-1.5 text-xs text-slate-400">
                    {project.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-800 space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 text-[10px] font-mono bg-slate-900 text-slate-300 rounded">{t}</span>
                    ))}
                  </div>
                  <button onClick={() => setActiveCaseStudy(project)} className="w-full py-2 px-4 rounded-xl bg-slate-900 hover:bg-sky-500 hover:text-white text-sky-400 border border-sky-500/30 text-xs font-semibold transition-all flex items-center justify-center gap-1.5">
                    <span>Inspect Deep Dive</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-8">
          <div>
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">Verified Arsenal</span>
            <h2 className="text-3xl font-extrabold text-white mt-1">Technical Skills & Systems Knowledge</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat, i) => (
              <div key={i} className="p-6 rounded-2xl glass-card border border-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white">{cat.title}</h3>
                <div className="space-y-3">
                  {cat.skills.map((s, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-xs text-slate-300 mb-1">
                        <span className="font-semibold">{s.name}</span>
                        <span className="text-slate-400 font-mono text-[11px]">{s.context}</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full" style={{ width: `${s.proficiency}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience & Education */}
        <section id="experience" className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-bold text-white">Work Experience</h2>
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="p-6 rounded-2xl glass-card border border-slate-800 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <p className="text-xs text-sky-400">{exp.company}</p>
                  </div>
                  <span className="text-xs font-mono bg-slate-800 text-slate-400 px-2 py-0.5 rounded">{exp.duration}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pt-2">{exp.description}</p>
                <div className="flex flex-wrap gap-1 pt-2">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono bg-slate-900 text-slate-400 px-2 py-0.5 rounded">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl font-bold text-white">Academic Details</h2>
            <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-3">
              <p className="text-lg font-bold text-white">{EDUCATION.institution}</p>
              <p className="text-xs text-slate-400">{EDUCATION.location} &bull; {EDUCATION.duration}</p>
              <p className="text-sm text-sky-400 font-medium">{EDUCATION.degree}</p>
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center text-xs">
                <span>Cumulative Grade Point Average</span>
                <span className="font-mono font-bold text-emerald-400">{EDUCATION.cgpa}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="p-8 rounded-2xl glass-card border border-slate-800 text-center space-y-4">
          <h2 className="text-3xl font-extrabold text-white">Let's Connect</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Ready to interview for Software Development Engineer (SDE), SWE, and AI/ML Engineer roles graduating in 2027.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <a href={`mailto:${PERSONAL_DETAILS.email}`} className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-xs flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>{PERSONAL_DETAILS.email}</span>
            </a>
            <button onClick={copyEmail} className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 text-xs flex items-center gap-1.5">
              <Copy className="w-3.5 h-3.5" />
              <span>{copiedEmail ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
            </button>
          </div>
        </section>
      </main>

      {/* Case Study Modal */}
      {activeCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-3xl max-h-[85vh] bg-[#0d1424] border border-slate-700 rounded-2xl p-6 overflow-y-auto space-y-6">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono text-sky-400 font-bold uppercase">{activeCaseStudy.badge}</span>
                <h3 className="text-xl font-bold text-white mt-1">{activeCaseStudy.title}</h3>
              </div>
              <button onClick={() => setActiveCaseStudy(null)} className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-300">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <span className="font-bold text-sky-400 block mb-1">Architecture Overview:</span>
                <p className="font-mono text-slate-400">{activeCaseStudy.caseStudy.architectureOverview}</p>
              </div>

              <div>
                <h4 className="font-bold text-white text-sm mb-2">Key Engineering Decisions:</h4>
                <div className="space-y-2">
                  {activeCaseStudy.caseStudy.engineeringDecisions.map((dec, i) => (
                    <div key={i} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                      <span className="font-bold text-white block">{dec.title}</span>
                      <p className="text-slate-400 mt-1">{dec.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                <span className="font-bold block">Verification & Metrics:</span>
                <p>{activeCaseStudy.caseStudy.metrics}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Resume Modal */}
      {isResumeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-3xl max-h-[85vh] bg-[#0c1220] border border-slate-700 rounded-2xl p-6 overflow-y-auto space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white">Sriman Miryala — Official Resume</h3>
              <div className="flex gap-2">
                <button onClick={() => window.print()} className="px-3 py-1 bg-sky-500 text-white rounded text-xs font-semibold">Print / Save PDF</button>
                <button onClick={() => setIsResumeOpen(false)} className="p-1 text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
              </div>
            </div>
            <div className="text-xs space-y-3 text-slate-300">
              <p><strong className="text-white">Education:</strong> Vasavi College of Engineering &bull; B.Tech CSE (2023-2027) &bull; CGPA 8.03/10</p>
              <p><strong className="text-white">Achievements:</strong> LeetCode Knight (Top 5%), Codeforces Specialist, 1,000+ Algorithmic Problems Solved</p>
              <p><strong className="text-white">Core Skills:</strong> Python, Java, C, JavaScript, SQL, FastAPI, Flask, Node.js, Express, Socket.IO, Redis, MySQL, MongoDB, PyTorch, TensorFlow</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
