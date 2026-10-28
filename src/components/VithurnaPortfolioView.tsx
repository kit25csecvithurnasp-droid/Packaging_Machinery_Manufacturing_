import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Copy, Check, Mail, Code2, Cpu, Globe, Award, BookOpen, Layers } from 'lucide-react';

interface VithurnaPortfolioViewProps {
  onBackToStudio: () => void;
}

export const VithurnaPortfolioView: React.FC<VithurnaPortfolioViewProps> = ({
  onBackToStudio,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'systems' | 'cloud' | 'ai'>('all');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeModalProject, setActiveModalProject] = useState<number | null>(null);

  const email = 'kit25csecvithurna.s.p@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const projects = [
    {
      id: 1,
      category: 'systems',
      index: '01. Distributed Engine',
      title: 'Chronos: Distributed Log Consensus Engine',
      stack: 'Rust · Raft Consensus · RocksDB · gRPC',
      desc: 'Engineered a high-throughput, fault-tolerant state-machine replication system based on the Raft protocol. Implements leader election with randomized timeouts, append-only log compaction, snapshot replication over gRPC, and disk-persisted state with sub-10ms write latency.',
      metric: 'Benchmark: 85,000 ops/sec',
      specs: [
        'Language: Rust 1.80+ with Tokio async runtime',
        'Protocol: Raft consensus with leader election & log compaction',
        'Throughput: 85,000 serialized operations/second',
        'State Storage: Embedded RocksDB with write-ahead logging (WAL)',
      ]
    },
    {
      id: 2,
      category: 'cloud',
      index: '02. Cloud Full-Stack',
      title: 'OmniPulse: Cloud Telemetry & Workload Analyzer',
      stack: 'Next.js · Go Microservices · ClickHouse · Docker',
      desc: 'Real-time observability control plane for containerized microservice architectures. Ingests telemetry metrics, performs streaming time-series aggregations, and provides tabular querying with sub-second analytical execution.',
      metric: 'Throughput: 1.2M events/min',
      specs: [
        'Frontend: Next.js 15 App Router + Tailwind CSS',
        'Backend: High-concurrency Go ingestion services',
        'Analytics: ClickHouse columnar storage for time-series events',
        'Deployment: Multi-cluster Docker & Kubernetes ingress',
      ]
    },
    {
      id: 3,
      category: 'ai',
      index: '03. Computer Vision',
      title: 'AegisVision: Low-Latency Defect Detection Pipeline',
      stack: 'PyTorch · TensorRT · OpenCV · FastAPI',
      desc: 'Industrial defect detection inference engine deployed on embedded edge hardware. Processes high-framerate optical inspection feeds using quantized neural models with sub-15ms inference latency per frame.',
      metric: 'Latency: 14.2ms / frame',
      specs: [
        'Model: Quantized INT8 YOLOv8 architecture',
        'Acceleration: NVIDIA TensorRT GPU pipelines',
        'Accuracy: 99.1% F1-score on benchmark industrial surface flaws',
        'API: Async streaming FastAPI endpoint with WebSocket telemetry',
      ]
    },
    {
      id: 4,
      category: 'systems',
      index: '04. Enterprise Resource Optimizer',
      title: 'CampusFlow: Automated Schedule & Lab Allocator',
      stack: 'React · TypeScript · Node.js · PostgreSQL',
      desc: 'Algorithmic constraint-satisfaction engine resolving multi-department resource collisions. Generates conflict-free scheduling timetables across 120+ courses, faculty allocations, and laboratory slots.',
      metric: 'Efficiency: 99.8% conflict-free',
      specs: [
        'Algorithm: Backtracking CSP solver with forward-checking heuristics',
        'Architecture: Modular React frontend + Node.js Express backend',
        'Database: PostgreSQL relational schema with composite constraints',
        'Impact: Adopted for department-wide timetable simulations',
      ]
    }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  const activeProjectData = projects.find(p => p.id === activeModalProject);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-neutral-800 selection:text-white">
      {/* Studio Return Banner */}
      <div className="bg-neutral-900/90 border-b border-neutral-800 px-6 py-2.5 flex items-center justify-between text-xs">
        <button
          onClick={onBackToStudio}
          className="flex items-center gap-2 text-neutral-400 hover:text-white font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Studio Workspace</span>
        </button>
        <div className="text-neutral-500 font-mono hidden sm:block">
          Standalone Portfolio View Mode · Vithurna S P
        </div>
        <button
          onClick={handleCopyEmail}
          className="text-neutral-300 hover:text-white flex items-center gap-1.5"
        >
          {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold tracking-wider text-neutral-400 uppercase">
              B.E. Computer Science & Engineering · Class of 2025
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
              Engineering scalable systems with mathematical precision.
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-xl">
              Hi, I'm <strong className="text-neutral-200 font-semibold">Vithurna S P</strong>. Computer Science Scholar at Kalaignar Karunanidhi Institute of Technology (KIT), specialized in distributed consensus, full-stack microservices, and high-performance computing.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#featured-projects" 
                className="px-5 py-2.5 text-sm font-semibold text-neutral-950 bg-white hover:bg-neutral-200 rounded-lg transition-colors"
              >
                Explore Projects
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-5 py-2.5 text-sm font-medium text-neutral-200 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-lg transition-colors flex items-center gap-2"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4" />}
                <span>{copiedEmail ? 'Copied to Clipboard' : 'Copy Email'}</span>
              </button>
            </div>

            <div className="pt-6 border-t border-neutral-900 grid grid-cols-3 gap-6 text-xs text-neutral-400 font-mono">
              <div>
                <div className="text-xl font-bold text-white tabular-nums">9.20 / 10</div>
                <div className="mt-0.5 font-sans">Cumulative CGPA</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white tabular-nums">12+</div>
                <div className="mt-0.5 font-sans">Shipped Projects</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white tabular-nums">Top 2%</div>
                <div className="mt-0.5 font-sans">Department Rank</div>
              </div>
            </div>
          </div>

          {/* Profile Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/60 p-3 shadow-2xl">
              <img
                src="/src/assets/images/avatar_vithurna_engineer_1793179969379.jpg"
                alt="Vithurna S P"
                referrerPolicy="no-referrer"
                className="w-full aspect-square object-cover rounded-xl"
              />
              <div className="mt-4 px-2 pb-2">
                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span className="font-semibold text-white">Vithurna S P</span>
                  <span>KIT Coimbatore</span>
                </div>
                <div className="text-xs text-neutral-500 font-mono mt-1">
                  kit25csecvithurna.s.p@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects with Interactive Filter */}
        <section id="featured-projects" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                Engineering Showcase
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Featured Systems & Distributed Applications
              </h2>
            </div>

            {/* Segmented Filter Control */}
            <div className="flex items-center gap-1 p-1 bg-neutral-900 rounded-lg border border-neutral-800 text-xs">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-3 py-1 font-medium rounded-md transition-colors ${
                  selectedFilter === 'all' ? 'bg-white text-neutral-950 shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                All (4)
              </button>
              <button
                onClick={() => setSelectedFilter('systems')}
                className={`px-3 py-1 font-medium rounded-md transition-colors ${
                  selectedFilter === 'systems' ? 'bg-white text-neutral-950 shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Systems
              </button>
              <button
                onClick={() => setSelectedFilter('cloud')}
                className={`px-3 py-1 font-medium rounded-md transition-colors ${
                  selectedFilter === 'cloud' ? 'bg-white text-neutral-950 shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Cloud
              </button>
              <button
                onClick={() => setSelectedFilter('ai')}
                className={`px-3 py-1 font-medium rounded-md transition-colors ${
                  selectedFilter === 'ai' ? 'bg-white text-neutral-950 shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                AI & Vision
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                className="group p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-neutral-500 font-mono">
                    <span>{p.index}</span>
                    <span>{p.stack}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{p.desc}</p>
                </div>
                <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                  <div className="text-neutral-400 font-mono">{p.metric}</div>
                  <button
                    onClick={() => setActiveModalProject(p.id)}
                    className="text-white hover:underline font-semibold"
                  >
                    Inspect Architecture →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Competencies Grid */}
        <section className="space-y-8">
          <div>
            <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              Technical Mastery
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Core Competencies & Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800 space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Code2 className="w-4 h-4 text-blue-400" />
                <span>Languages</span>
              </div>
              <ul className="text-xs text-neutral-400 space-y-2">
                <li>TypeScript / JavaScript (ESNext)</li>
                <li>Python (NumPy, PyTorch)</li>
                <li>C++ / Modern C++</li>
                <li>Go / Rust Fundamentals</li>
                <li>SQL (PostgreSQL, MySQL)</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800 space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>Frontend & Web</span>
              </div>
              <ul className="text-xs text-neutral-400 space-y-2">
                <li>React & Next.js 15</li>
                <li>Tailwind CSS & Modern UI</li>
                <li>Vite & Webpack Bundlers</li>
                <li>Responsive UX Architecture</li>
                <li>State Synchronization</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800 space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Layers className="w-4 h-4 text-purple-400" />
                <span>Backend & Cloud</span>
              </div>
              <ul className="text-xs text-neutral-400 space-y-2">
                <li>Node.js & Express</li>
                <li>RESTful Microservices & gRPC</li>
                <li>Docker & Kubernetes Basics</li>
                <li>PostgreSQL, ClickHouse, Redis</li>
                <li>CI/CD Workflows (GitHub Actions)</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800 space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Cpu className="w-4 h-4 text-amber-400" />
                <span>CS Fundamentals</span>
              </div>
              <ul className="text-xs text-neutral-400 space-y-2">
                <li>Data Structures & Algorithms</li>
                <li>Distributed Systems & Consensus</li>
                <li>Operating Systems & Concurrency</li>
                <li>Database Management & Indexing</li>
                <li>Network Protocols (TCP/IP, HTTP/2)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Academic Record & Recognition */}
        <section className="space-y-6">
          <div>
            <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              Academic Background
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Education & Honors
            </h2>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <h3 className="text-lg font-bold text-white">
                  Bachelor of Engineering in Computer Science & Engineering
                </h3>
              </div>
              <p className="text-sm text-neutral-400">
                Kalaignar Karunanidhi Institute of Technology (KIT), Coimbatore
              </p>
              <p className="text-xs text-neutral-500">
                Class of 2025 · First Class with Distinction
              </p>
            </div>
            <div className="text-left sm:text-right font-mono">
              <div className="text-2xl font-bold text-white tabular-nums">9.20 CGPA</div>
              <div className="text-xs text-neutral-400 font-sans">Ranked in Department Top 2%</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-800 space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Smart India Hackathon Finalist</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Led 6-member engineering squad solving algorithmic logistics distribution across constrained rural clusters.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-800 space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Academic Excellence Distinction</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Awarded top semester grades across Advanced Algorithms, Systems Architecture, and Database Design.
              </p>
            </div>
          </div>
        </section>

        {/* Direct Contact Banner */}
        <section className="rounded-3xl bg-neutral-900/80 border border-neutral-800 p-8 sm:p-12 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Let's engineer transformative software.
            </h2>
            <p className="text-sm text-neutral-400">
              Actively seeking Software Engineer roles, distributed systems teams, and high-impact technology projects.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${email}`}
              className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-neutral-950 bg-white hover:bg-neutral-200 rounded-lg transition-colors"
            >
              Email: {email}
            </a>
            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-neutral-200 bg-neutral-950 border border-neutral-700 hover:border-neutral-600 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedEmail ? 'Copied!' : 'Copy to Clipboard'}</span>
            </button>
          </div>
        </section>
      </div>

      {/* Architecture Detail Modal */}
      {activeProjectData && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-700 rounded-2xl max-w-lg w-full p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold text-white">{activeProjectData.title}</h4>
              <button
                onClick={() => setActiveModalProject(null)}
                className="text-neutral-400 hover:text-white text-sm"
              >
                ✕ Close
              </button>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed">{activeProjectData.desc}</p>
            <div className="bg-neutral-950 p-4 rounded-xl font-mono text-xs text-neutral-400 space-y-1.5 border border-neutral-800">
              {activeProjectData.specs.map((spec, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>{spec}</span>
                </div>
              ))}
            </div>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 text-xs font-semibold bg-white text-neutral-950 rounded-lg"
              >
                Close Architecture View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
