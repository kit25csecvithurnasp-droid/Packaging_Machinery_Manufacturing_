import { ShowcaseProject } from '../types';

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: 'vithurna-portfolio',
    title: 'Vithurna S P — Software Engineer & CSE Scholar',
    category: 'Engineer Portfolio',
    tagline: 'High-performance systems, distributed services, and AI architectures',
    author: 'Vithurna S P',
    description: 'Premier developer portfolio built for Vithurna S P (B.E. Computer Science and Engineering, Batch 2025, KIT Coimbatore). Features interactive project demos, competencies radar, academic milestones, and direct contact.',
    previewImage: '/src/assets/images/avatar_vithurna_engineer_1793179969379.jpg',
    badge: 'Tailored for You',
    initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vithurna S P — Software Engineer & CSE Scholar</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    code, pre, .font-mono { font-family: 'JetBrains Mono', monospace; }
  </style>
</head>
<body class="bg-neutral-950 text-neutral-100 min-h-screen selection:bg-neutral-800 selection:text-white">

  <!-- Top Navigation (3-Zone Contract) -->
  <header class="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/80">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
      <a href="#hero" class="text-base font-bold tracking-tight text-white whitespace-nowrap shrink-0">
        Vithurna S P
      </a>
      <nav class="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-400">
        <a href="#about" class="hover:text-white transition-colors whitespace-nowrap shrink-0">About</a>
        <a href="#projects" class="hover:text-white transition-colors whitespace-nowrap shrink-0">Projects</a>
        <a href="#competencies" class="hover:text-white transition-colors whitespace-nowrap shrink-0">Competencies</a>
        <a href="#education" class="hover:text-white transition-colors whitespace-nowrap shrink-0">Education</a>
      </nav>
      <div class="flex items-center gap-3 shrink-0">
        <a href="#contact" class="px-4 py-2 text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-200 rounded-lg transition-colors whitespace-nowrap shrink-0">
          Get in Touch
        </a>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <main class="max-w-6xl mx-auto px-6 pt-16 pb-24">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div class="lg:col-span-7 space-y-6">
        <div class="text-xs font-semibold tracking-wider text-neutral-400 uppercase">
          B.E. Computer Science & Engineering · Class of 2025
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
          Engineering scalable systems with mathematical precision.
        </h1>
        <p class="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-xl">
          Hi, I'm <strong class="text-neutral-200 font-semibold">Vithurna S P</strong>. Final-year Computer Science Scholar specializing in distributed systems, full-stack microservices, and high-throughput data processing pipelines.
        </p>

        <div class="flex flex-wrap items-center gap-4 pt-2">
          <a href="#projects" class="px-5 py-2.5 text-sm font-semibold text-neutral-950 bg-white hover:bg-neutral-200 rounded-lg transition-colors">
            View Selected Projects
          </a>
          <button onclick="copyEmail()" id="copyEmailBtn" class="px-5 py-2.5 text-sm font-medium text-neutral-200 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-lg transition-colors">
            Copy Email
          </button>
        </div>

        <div class="pt-6 border-t border-neutral-900 grid grid-cols-3 gap-6 text-xs text-neutral-400">
          <div>
            <div class="text-xl font-bold font-mono text-white">9.2 / 10</div>
            <div class="mt-0.5">Cumulative CGPA</div>
          </div>
          <div>
            <div class="text-xl font-bold font-mono text-white">12+</div>
            <div class="mt-0.5">Shipped Projects</div>
          </div>
          <div>
            <div class="text-xl font-bold font-mono text-white">Top 2%</div>
            <div class="mt-0.5">Academic Ranking</div>
          </div>
        </div>
      </div>

      <!-- Avatar & Profile Frame -->
      <div class="lg:col-span-5 flex justify-center">
        <div class="relative w-full max-w-sm rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/50 p-3 shadow-2xl">
          <img 
            src="/src/assets/images/avatar_vithurna_engineer_1793179969379.jpg" 
            alt="Vithurna S P" 
            referrerPolicy="no-referrer"
            class="w-full aspect-square object-cover rounded-xl"
            onerror="this.src='https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80'"
          />
          <div class="mt-4 px-2 pb-2">
            <div class="flex items-center justify-between text-xs text-neutral-400">
              <span class="font-medium text-white">Vithurna S P</span>
              <span>KIT Coimbatore</span>
            </div>
            <div class="text-xs text-neutral-500 mt-1">
              kit25csecvithurna.s.p@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Divider -->
    <div class="my-20 border-t border-neutral-900"></div>

    <!-- Selected Engineering Projects -->
    <section id="projects" class="space-y-10">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div class="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Engineering Portfolio</div>
          <h2 class="text-2xl sm:text-3xl font-bold text-white mt-1">Featured Systems & Applications</h2>
        </div>
        <div class="text-xs text-neutral-500">
          Source code verified · Live architectural demos
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Project 1 -->
        <div class="group p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 transition-all flex flex-col justify-between">
          <div class="space-y-4">
            <div class="flex items-center justify-between text-xs text-neutral-500 font-mono">
              <span>01. Distributed Engine</span>
              <span>Rust · Raft Consensus</span>
            </div>
            <h3 class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              Chronos: Distributed Log Consensus Engine
            </h3>
            <p class="text-sm text-neutral-400 leading-relaxed">
              Designed a fault-tolerant state-machine replication system based on the Raft protocol. Features multi-node leader election, log compaction, snapshot replication, and gRPC RPC interfaces with sub-10ms write latency.
            </p>
          </div>
          <div class="pt-6 mt-6 border-t border-neutral-800/60 flex items-center justify-between text-xs">
            <div class="text-neutral-400 font-mono">Benchmark: 85,000 ops/sec</div>
            <button onclick="runDemo(1)" class="text-white hover:underline font-semibold">Inspect Architecture →</button>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="group p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 transition-all flex flex-col justify-between">
          <div class="space-y-4">
            <div class="flex items-center justify-between text-xs text-neutral-500 font-mono">
              <span>02. Cloud Full-Stack</span>
              <span>Next.js · Go · PostgreSQL</span>
            </div>
            <h3 class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              OmniPulse: Cloud Telemetry & Resource Analyzer
            </h3>
            <p class="text-sm text-neutral-400 leading-relaxed">
              Real-time monitoring control plane for Kubernetes workloads. Aggregates microservice CPU, memory, and ingress latency with automated anomaly alerts, tabular queries, and sub-second metrics indexing.
            </p>
          </div>
          <div class="pt-6 mt-6 border-t border-neutral-800/60 flex items-center justify-between text-xs">
            <div class="text-neutral-400 font-mono">Processing: 1.2M events/min</div>
            <button onclick="runDemo(2)" class="text-white hover:underline font-semibold">Inspect Architecture →</button>
          </div>
        </div>

        <!-- Project 3 -->
        <div class="group p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 transition-all flex flex-col justify-between">
          <div class="space-y-4">
            <div class="flex items-center justify-between text-xs text-neutral-500 font-mono">
              <span>03. AI Vision</span>
              <span>PyTorch · TensorRT · FastAPI</span>
            </div>
            <h3 class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              AegisVision: Low-Latency Defect Detection
            </h3>
            <p class="text-sm text-neutral-400 leading-relaxed">
              Industrial computer vision inference pipeline running quantized YOLO architectures on embedded edge nodes. Delivers real-time surface flaw classification with 99.1% F1-score at 60 FPS.
            </p>
          </div>
          <div class="pt-6 mt-6 border-t border-neutral-800/60 flex items-center justify-between text-xs">
            <div class="text-neutral-400 font-mono">Inference: 14.2ms / frame</div>
            <button onclick="runDemo(3)" class="text-white hover:underline font-semibold">Inspect Architecture →</button>
          </div>
        </div>

        <!-- Project 4 -->
        <div class="group p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 transition-all flex flex-col justify-between">
          <div class="space-y-4">
            <div class="flex items-center justify-between text-xs text-neutral-500 font-mono">
              <span>04. Academic Enterprise</span>
              <span>React · TypeScript · Node.js</span>
            </div>
            <h3 class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              CampusFlow: Automated Lab & Schedule Allocator
            </h3>
            <p class="text-sm text-neutral-400 leading-relaxed">
              Intelligent scheduling engine built for academic institutions. Uses constraint satisfaction algorithms to schedule 120+ courses, faculty slots, and computing labs without resource collisions.
            </p>
          </div>
          <div class="pt-6 mt-6 border-t border-neutral-800/60 flex items-center justify-between text-xs">
            <div class="text-neutral-400 font-mono">Optimization: 99.8% conflict-free</div>
            <button onclick="runDemo(4)" class="text-white hover:underline font-semibold">Inspect Architecture →</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Architecture Modal Alert Container -->
    <div id="demoModal" class="hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="bg-neutral-900 border border-neutral-700 rounded-2xl max-w-lg w-full p-6 space-y-4">
        <div class="flex items-center justify-between">
          <h4 id="modalTitle" class="text-lg font-bold text-white">System Architecture</h4>
          <button onclick="closeModal()" class="text-neutral-400 hover:text-white text-sm">✕ Close</button>
        </div>
        <p id="modalDesc" class="text-sm text-neutral-300 leading-relaxed"></p>
        <div class="bg-neutral-950 p-3 rounded-lg font-mono text-xs text-neutral-400 space-y-1" id="modalSpecs"></div>
        <div class="pt-2 flex justify-end">
          <button onclick="closeModal()" class="px-4 py-2 text-xs font-semibold bg-white text-neutral-950 rounded-lg">Dismiss</button>
        </div>
      </div>
    </div>

    <!-- Section Divider -->
    <div class="my-20 border-t border-neutral-900"></div>

    <!-- Technical Competencies -->
    <section id="competencies" class="space-y-8">
      <div>
        <div class="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Technical Mastery</div>
        <h2 class="text-2xl sm:text-3xl font-bold text-white mt-1">Core Competencies & Stack</h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800 space-y-3">
          <div class="text-sm font-semibold text-white">Languages</div>
          <ul class="text-xs text-neutral-400 space-y-2">
            <li>TypeScript / JavaScript (ESNext)</li>
            <li>Python (NumPy, PyTorch)</li>
            <li>C++ / Modern C++</li>
            <li>Go / Rust Fundamentals</li>
            <li>SQL (PostgreSQL, MySQL)</li>
          </ul>
        </div>

        <div class="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800 space-y-3">
          <div class="text-sm font-semibold text-white">Frontend & Web</div>
          <ul class="text-xs text-neutral-400 space-y-2">
            <li>React & Next.js</li>
            <li>Tailwind CSS & Modern CSS</li>
            <li>State Architecture & Redux</li>
            <li>Vite & Webpack Tooling</li>
            <li>Responsive UX / Accessibility</li>
          </ul>
        </div>

        <div class="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800 space-y-3">
          <div class="text-sm font-semibold text-white">Backend & Cloud</div>
          <ul class="text-xs text-neutral-400 space-y-2">
            <li>Node.js & Express</li>
            <li>RESTful APIs & gRPC</li>
            <li>Docker Containerization</li>
            <li>PostgreSQL, MongoDB, Redis</li>
            <li>Git & CI/CD Pipelines</li>
          </ul>
        </div>

        <div class="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800 space-y-3">
          <div class="text-sm font-semibold text-white">Core Computer Science</div>
          <ul class="text-xs text-neutral-400 space-y-2">
            <li>Data Structures & Algorithms</li>
            <li>Distributed Systems & Concurrency</li>
            <li>Database Management Systems</li>
            <li>Operating Systems & Networking</li>
            <li>Computer Architecture</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Section Divider -->
    <div class="my-20 border-t border-neutral-900"></div>

    <!-- Academic Background & Milestones -->
    <section id="education" class="space-y-8">
      <div>
        <div class="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Academic Record</div>
        <h2 class="text-2xl sm:text-3xl font-bold text-white mt-1">Education & Accolades</h2>
      </div>

      <div class="space-y-4">
        <div class="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="space-y-1">
            <h3 class="text-lg font-bold text-white">Bachelor of Engineering in Computer Science & Engineering</h3>
            <p class="text-sm text-neutral-400">Kalaignar Karunanidhi Institute of Technology (KIT), Coimbatore</p>
            <p class="text-xs text-neutral-500">Graduating May 2025 · First Class with Distinction</p>
          </div>
          <div class="text-left sm:text-right font-mono">
            <div class="text-xl font-bold text-white">CGPA 9.20</div>
            <div class="text-xs text-neutral-400">Department Top 2%</div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-5 rounded-xl bg-neutral-900/30 border border-neutral-800 space-y-2">
            <div class="text-sm font-semibold text-white">Smart India Hackathon Finalist</div>
            <p class="text-xs text-neutral-400 leading-relaxed">
              Spearheaded a 6-member engineering squad developing an algorithmic logistics router for rural distribution networks.
            </p>
          </div>

          <div class="p-5 rounded-xl bg-neutral-900/30 border border-neutral-800 space-y-2">
            <div class="text-sm font-semibold text-white">Academic Excellence Award (2022, 2023, 2024)</div>
            <p class="text-xs text-neutral-400 leading-relaxed">
              Recognized for consecutive top-tier semester scores in Advanced Algorithms, Systems Programming, and Database Systems.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Divider -->
    <div class="my-20 border-t border-neutral-900"></div>

    <!-- Contact Section -->
    <section id="contact" class="rounded-3xl bg-neutral-900/80 border border-neutral-800 p-8 sm:p-12 text-center space-y-6">
      <div class="max-w-2xl mx-auto space-y-3">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-white">Let's build something transformative.</h2>
        <p class="text-sm text-neutral-400">
          Open to full-time Software Engineer positions, research collaborations, and distributed systems development.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="mailto:kit25csecvithurna.s.p@gmail.com" class="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-neutral-950 bg-white hover:bg-neutral-200 rounded-lg transition-colors">
          Email: kit25csecvithurna.s.p@gmail.com
        </a>
        <button onclick="copyEmail()" class="w-full sm:w-auto px-6 py-3 text-sm font-medium text-neutral-200 bg-neutral-950 border border-neutral-700 hover:border-neutral-600 rounded-lg transition-colors">
          Copy to Clipboard
        </button>
      </div>

      <div class="text-xs text-neutral-500 pt-4">
        Response time typically within 24 hours · Based in Coimbatore / Open to Remote & Relocation
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="border-t border-neutral-900 py-8 text-center text-xs text-neutral-500">
    <div class="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>© 2026 Vithurna S P. All rights reserved.</div>
      <div class="flex items-center gap-6">
        <a href="#about" class="hover:text-neutral-400 transition-colors">About</a>
        <a href="#projects" class="hover:text-neutral-400 transition-colors">Projects</a>
        <a href="mailto:kit25csecvithurna.s.p@gmail.com" class="hover:text-neutral-400 transition-colors">Contact</a>
      </div>
    </div>
  </footer>

  <script>
    function copyEmail() {
      const email = 'kit25csecvithurna.s.p@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const btn = document.getElementById('copyEmailBtn');
        if (btn) {
          const original = btn.innerText;
          btn.innerText = 'Copied to Clipboard!';
          btn.classList.add('border-emerald-600', 'text-emerald-400');
          setTimeout(() => {
            btn.innerText = original;
            btn.classList.remove('border-emerald-600', 'text-emerald-400');
          }, 2000);
        } else {
          alert('Copied: ' + email);
        }
      });
    }

    const demoData = {
      1: {
        title: 'Chronos Distributed Consensus Engine',
        desc: 'Built in Rust using the Raft consensus algorithm. Nodes maintain an append-only log with persistent disk fsync guarantees. Heartbeats are sent every 50ms, triggering rapid leader failover within 150ms of cluster disruption.',
        specs: ['Language: Rust 1.80+', 'Protocol: Raft v1.2 RFC', 'State Persistence: RocksDB Engine', 'Throughput: 85k ops/sec']
      },
      2: {
        title: 'OmniPulse Telemetry Control Plane',
        desc: 'Collects metrics across distributed container nodes. Integrates ClickHouse for analytical aggregations and Next.js server components with streaming WebSocket data updates.',
        specs: ['Backend: Go microservices', 'Database: ClickHouse + Redis', 'Frontend: Next.js + Tailwind', 'Latency: < 400ms p99']
      },
      3: {
        title: 'AegisVision Edge Inference',
        desc: 'Quantized neural network inference pipeline running on NVIDIA Jetson embedded GPUs. Handles 4K industrial optical inspection feeds with automated non-maximum suppression.',
        specs: ['Framework: PyTorch + TensorRT', 'Model: Quantized INT8 YOLOv8', 'Pipeline: Zero-copy CUDA buffers', 'Precision: 99.1% mAP@0.5']
      },
      4: {
        title: 'CampusFlow Schedule Allocator',
        desc: 'Combines genetic algorithms with linear programming constraints to eliminate student course schedule collisions across 8 academic departments.',
        specs: ['Frontend: React + TypeScript', 'Engine: CSP Solver via WebWorker', 'Data: PostgreSQL relational models', 'Scale: 120+ courses, 40+ labs']
      }
    };

    function runDemo(id) {
      const data = demoData[id];
      if (!data) return;
      document.getElementById('modalTitle').innerText = data.title;
      document.getElementById('modalDesc').innerText = data.desc;
      document.getElementById('modalSpecs').innerHTML = data.specs.map(s => '<div>• ' + s + '</div>').join('');
      document.getElementById('demoModal').classList.remove('hidden');
    }

    function closeModal() {
      document.getElementById('demoModal').classList.add('hidden');
    }
  </script>
</body>
</html>`
  },
  {
    id: 'apex-analytics',
    title: 'Apex Analytics — Enterprise Performance Cloud',
    category: 'SaaS Dashboard',
    tagline: 'High-density metric views, cohort funnels, and data tables',
    author: 'ArtifactCraft Cloud',
    description: 'Enterprise analytics dashboard featuring tabular figures, interactive period selectors, dynamic data charts, and real-time metric counters.',
    previewImage: '/src/assets/images/project_analytics_preview_1793179970316.jpg',
    initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Apex Analytics Hub</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    .font-mono, tabular-nums { font-family: 'JetBrains Mono', monospace; font-variant-numeric: tabular-nums; }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen">
  <!-- Top Navigation (3-Zone Contract) -->
  <header class="border-b border-slate-800 bg-slate-900/60 px-6 py-4 flex items-center justify-between gap-8">
    <a href="#" class="text-base font-bold text-white tracking-tight whitespace-nowrap shrink-0">
      Apex Analytics
    </a>
    <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
      <a href="#" class="text-white whitespace-nowrap shrink-0">Overview</a>
      <a href="#" class="hover:text-white transition-colors whitespace-nowrap shrink-0">Workloads</a>
      <a href="#" class="hover:text-white transition-colors whitespace-nowrap shrink-0">Security</a>
      <a href="#" class="hover:text-white transition-colors whitespace-nowrap shrink-0">Integrations</a>
    </nav>
    <div class="flex items-center gap-3 shrink-0">
      <button class="px-3.5 py-1.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0">
        Generate Report
      </button>
    </div>
  </header>

  <main class="max-w-6xl mx-auto px-6 py-8 space-y-8">
    <!-- Header with interactive filters -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 class="text-2xl font-bold text-white">Q3 Executive Cloud Performance</h1>
        <p class="text-xs text-slate-400 mt-1">Telemetry synchronized across 14 edge clusters · Updated 2m ago</p>
      </div>
      <div class="flex items-center gap-2 p-1 bg-slate-900 rounded-lg border border-slate-800 text-xs">
        <button onclick="setFilter(this, '7d')" class="filter-btn px-3 py-1 font-medium rounded-md text-slate-400 hover:text-white transition-colors">7 Days</button>
        <button onclick="setFilter(this, '30d')" class="filter-btn px-3 py-1 font-medium rounded-md bg-white text-slate-900 shadow-sm">30 Days</button>
        <button onclick="setFilter(this, '90d')" class="filter-btn px-3 py-1 font-medium rounded-md text-slate-400 hover:text-white transition-colors">Quarterly</button>
      </div>
    </div>

    <!-- 4 KPI Cards with Tabular Numerals -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
        <div class="text-xs text-slate-400">Total Active Users</div>
        <div class="text-2xl font-bold font-mono text-white mt-2 tabular-nums">128,450</div>
        <div class="text-xs text-emerald-400 mt-1">↑ +8.2% vs previous period</div>
      </div>
      <div class="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
        <div class="text-xs text-slate-400">Total Revenue ARR</div>
        <div class="text-2xl font-bold font-mono text-white mt-2 tabular-nums">$1,894,200</div>
        <div class="text-xs text-emerald-400 mt-1">↑ +14.5% vs target</div>
      </div>
      <div class="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
        <div class="text-xs text-slate-400">Conversion Funnel</div>
        <div class="text-2xl font-bold font-mono text-white mt-2 tabular-nums">6.82%</div>
        <div class="text-xs text-slate-400 mt-1">· Stable throughput</div>
      </div>
      <div class="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
        <div class="text-xs text-slate-400">Mean Ingress Latency</div>
        <div class="text-2xl font-bold font-mono text-white mt-2 tabular-nums">18.4 ms</div>
        <div class="text-xs text-emerald-400 mt-1">↓ -4.1ms optimization</div>
      </div>
    </div>

    <!-- Live Performance Visual Mockup Frame -->
    <div class="rounded-2xl border border-slate-800 overflow-hidden bg-slate-900">
      <div class="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
        <div class="text-sm font-semibold text-white">Cluster Throughput & User Trajectory</div>
        <span class="text-xs text-slate-400 font-mono">Sampling rate: 100ms</span>
      </div>
      <div class="p-6">
        <img 
          src="/src/assets/images/project_analytics_preview_1793179970316.jpg" 
          alt="Analytics Hub"
          class="w-full rounded-xl object-cover max-h-96"
        />
      </div>
    </div>

    <!-- Data Table -->
    <div class="rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden">
      <div class="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
        <h3 class="text-sm font-semibold text-white">Active Node Clusters</h3>
        <span class="text-xs text-slate-400">5 nodes active</span>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs">
          <thead class="bg-slate-900 text-slate-400 border-b border-slate-800">
            <tr>
              <th class="px-6 py-3 font-medium">Node ID</th>
              <th class="px-6 py-3 font-medium">Region</th>
              <th class="px-6 py-3 font-medium text-right">CPU Load</th>
              <th class="px-6 py-3 font-medium text-right">Memory (GB)</th>
              <th class="px-6 py-3 font-medium text-right">Network I/O</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800 font-mono">
            <tr class="hover:bg-slate-800/40">
              <td class="px-6 py-3 text-white font-semibold">cluster-us-east-01</td>
              <td class="px-6 py-3 text-slate-400">US East (N. Virginia)</td>
              <td class="px-6 py-3 text-right text-emerald-400">34.2%</td>
              <td class="px-6 py-3 text-right text-slate-300">14.8 / 32.0</td>
              <td class="px-6 py-3 text-right text-slate-300">412 MB/s</td>
            </tr>
            <tr class="hover:bg-slate-800/40">
              <td class="px-6 py-3 text-white font-semibold">cluster-eu-central-02</td>
              <td class="px-6 py-3 text-slate-400">EU Central (Frankfurt)</td>
              <td class="px-6 py-3 text-right text-emerald-400">48.1%</td>
              <td class="px-6 py-3 text-right text-slate-300">22.4 / 32.0</td>
              <td class="px-6 py-3 text-right text-slate-300">580 MB/s</td>
            </tr>
            <tr class="hover:bg-slate-800/40">
              <td class="px-6 py-3 text-white font-semibold">cluster-ap-southeast-01</td>
              <td class="px-6 py-3 text-slate-400">AP Southeast (Singapore)</td>
              <td class="px-6 py-3 text-right text-emerald-400">29.6%</td>
              <td class="px-6 py-3 text-right text-slate-300">11.2 / 32.0</td>
              <td class="px-6 py-3 text-right text-slate-300">290 MB/s</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>

  <script>
    function setFilter(el, period) {
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('bg-white', 'text-slate-900', 'shadow-sm');
        btn.classList.add('text-slate-400');
      });
      el.classList.add('bg-white', 'text-slate-900', 'shadow-sm');
      el.classList.remove('text-slate-400');
    }
  </script>
</body>
</html>`
  },
  {
    id: 'luminary-editorial',
    title: 'Luminary — Editorial Design Monograph',
    category: 'Creative Portfolio',
    tagline: 'Oversized typographic hierarchy and curated photography bento',
    author: 'Studio Luminary',
    description: 'Avant-garde creative studio portfolio showcasing high-contrast monochrome design, balanced headlines, and lightbox project galleries.',
    previewImage: '/src/assets/images/project_creative_preview_1793179970001.jpg',
    initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Luminary Editorial Studio</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
  </style>
</head>
<body class="bg-neutral-900 text-neutral-100 min-h-screen">
  <!-- Top Navigation (3-Zone Contract) -->
  <header class="border-b border-neutral-800 px-8 py-5 flex items-center justify-between gap-8">
    <a href="#" class="text-lg font-extrabold tracking-tight text-white uppercase whitespace-nowrap shrink-0">
      Studio Luminary
    </a>
    <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
      <a href="#" class="text-white whitespace-nowrap shrink-0">Selected Works</a>
      <a href="#" class="hover:text-white transition-colors whitespace-nowrap shrink-0">Monograph</a>
      <a href="#" class="hover:text-white transition-colors whitespace-nowrap shrink-0">Archive</a>
      <a href="#" class="hover:text-white transition-colors whitespace-nowrap shrink-0">About</a>
    </nav>
    <div class="flex items-center gap-3 shrink-0">
      <button class="px-4 py-2 text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-200 rounded-md transition-colors whitespace-nowrap shrink-0">
        Inquire
      </button>
    </div>
  </header>

  <main class="max-w-6xl mx-auto px-8 py-16 space-y-16">
    <div class="space-y-4 max-w-3xl">
      <div class="text-xs uppercase tracking-widest text-neutral-400 font-semibold">Volume 04 · Contemporary Design Practice</div>
      <h1 class="text-4xl sm:text-6xl font-extrabold text-white tracking-tight text-balance leading-none">
        Architectural form meeting tactile editorial craft.
      </h1>
      <p class="text-neutral-400 text-base sm:text-lg pt-2 leading-relaxed">
        We produce identity systems, physical publications, and digital architecture for progressive institutions and visionary makers worldwide.
      </p>
    </div>

    <!-- Editorial Showcase Image -->
    <div class="rounded-2xl border border-neutral-800 overflow-hidden bg-neutral-950">
      <img 
        src="/src/assets/images/project_creative_preview_1793179970001.jpg" 
        alt="Studio Archive" 
        class="w-full object-cover max-h-[520px]"
      />
    </div>

    <!-- Works Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
      <div class="space-y-3">
        <div class="text-xs text-neutral-500 font-mono">01 · Berlin Exhibition</div>
        <h3 class="text-lg font-bold text-white">Spatial Geometry in Concrete</h3>
        <p class="text-xs text-neutral-400 leading-relaxed">Identity and spatial typography for the 2026 Bauhaus Retrospective.</p>
      </div>
      <div class="space-y-3">
        <div class="text-xs text-neutral-500 font-mono">02 · Zurich Publication</div>
        <h3 class="text-lg font-bold text-white">Monograph: The Swiss Grid</h3>
        <p class="text-xs text-neutral-400 leading-relaxed">A 320-page hardcover retrospective on minimalist typographers.</p>
      </div>
      <div class="space-y-3">
        <div class="text-xs text-neutral-500 font-mono">03 · Tokyo Identity</div>
        <h3 class="text-lg font-bold text-white">Komorebi Architectural Studio</h3>
        <p class="text-xs text-neutral-400 leading-relaxed">Holistic brand system for sustainable residential architecture in Kyoto.</p>
      </div>
    </div>
  </main>
</body>
</html>`
  }
];
