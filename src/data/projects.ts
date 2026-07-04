/**
 * ── Project Data ──
 */

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  techStack: string[];
  image: string;
  repoUrl: string;
  demoUrl: string | null;
  overview: string;
  problem: string;
  architecture: string;
  features: string[];
  challenges: string[];
  decisions: string[];
  futureWork: string[];
}

export const projects: Project[] = [
  /* ───────────────────── AttackLayer ───────────────────── */

  {
    id: "attacklayer",
    title: "AttackLayer",
    tagline: "Securing AI agent memory against poisoning attacks.",
    description:
      "A research-driven AI security platform that detects memory poisoning attacks against LLM agents using semantic analysis, explainable trust scoring, human-in-the-loop review, and benchmarking tools.",

    category: "AI Security",

    techStack: [
      "FastAPI",
      "React",
      "TypeScript",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "ChromaDB",
      "Ollama",
      "Docker",
      "JWT"
    ],

    image: "https://placehold.co/800x450/111827/047857?text=AttackLayer",

    repoUrl: "https://github.com/SharvaniLekkala/AttackLayer",

    demoUrl: null,

    overview:
      "AttackLayer is a full-stack AI security platform designed to protect LLM agents from memory poisoning attacks. The platform combines semantic similarity analysis, vector embeddings, explainable trust evaluation, interactive review workflows, and benchmarking utilities into a unified security dashboard.",

    problem:
      "Large Language Model agents increasingly rely on persistent memory, making them vulnerable to memory poisoning attacks that manipulate future responses. Existing solutions focus primarily on prompt injection while offering limited protection against memory corruption and almost no explainability.",

    architecture:
      "The backend is built with FastAPI and PostgreSQL while ChromaDB stores vector embeddings for semantic retrieval. Ollama powers local embedding generation and inference. React provides an interactive dashboard with memory visualization, benchmark analytics, and human-in-the-loop review. Docker enables reproducible deployment across environments.",

    features: [
      "Semantic memory poisoning detection",
      "Human-in-the-loop review workflow",
      "Interactive Memory Vault",
      "Real-time security dashboard",
      "Benchmark evaluation suite",
      "Vector embedding similarity engine",
      "Explainable trust scoring",
      "REST API for AI security pipelines",
      "Dockerized deployment"
    ],

    challenges: [
      "Reducing false positives without compromising detection accuracy",
      "Designing scalable semantic similarity searches",
      "Building explainable security decisions for analysts",
      "Supporting multiple AI security evaluation datasets"
    ],

    decisions: [
      "Selected FastAPI for asynchronous API performance",
      "Used ChromaDB for efficient vector retrieval",
      "Integrated Ollama for local embedding generation",
      "Built a modular security pipeline for extensibility",
      "Containerized services using Docker"
    ],

    futureWork: [
      "Support additional attack categories including prompt injection",
      "Automated remediation recommendations",
      "Distributed monitoring for multiple AI agents",
      "Cloud deployment with Kubernetes",
      "Enterprise authentication and RBAC"
    ]
  },

  /* ───────────────────── WatchTower ───────────────────── */

  {
    id: "watchtower",

    title: "WatchTower",

    tagline: "Real-time monitoring and incident management for modern APIs.",

    description:
      "A production-grade API monitoring platform that continuously tracks service health, detects failures, manages incidents, and provides live operational insights through an interactive dashboard.",

    category: "Full-Stack",

    techStack: [
      "FastAPI",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Celery",
      "SQLAlchemy",
      "JWT",
      "WebSockets",
      "Docker"
    ],

    image: "https://placehold.co/800x450/111827/047857?text=WatchTower",

    repoUrl: "https://github.com/SharvaniLekkala/WatchTower",

    demoUrl: null,

    overview:
      "WatchTower is a full-stack monitoring and incident management platform inspired by tools such as Better Stack and Datadog. It continuously monitors APIs, records uptime statistics, detects failures, and presents operational metrics through a modern real-time dashboard.",

    problem:
      "Growing applications depend on multiple APIs whose failures directly impact users. Existing monitoring services are often expensive, complex, or lack customization for student projects and small engineering teams.",

    architecture:
      "FastAPI exposes monitoring APIs while Celery workers perform asynchronous health checks using Redis as the task broker. PostgreSQL stores uptime history and incident logs. WebSockets push live updates to a React frontend, providing instant visibility into service health.",

    features: [
      "Continuous API uptime monitoring",
      "Automated incident detection",
      "Real-time dashboard updates",
      "Historical uptime analytics",
      "JWT authentication",
      "RESTful API",
      "Background monitoring workers",
      "WebSocket notifications",
      "Dockerized deployment"
    ],

    challenges: [
      "Designing scalable asynchronous health checks",
      "Maintaining live dashboard synchronization",
      "Optimizing monitoring intervals without excessive resource usage",
      "Managing concurrent monitoring jobs"
    ],

    decisions: [
      "Used FastAPI for asynchronous backend performance",
      "Selected Redis and Celery for distributed background jobs",
      "Implemented SQLAlchemy ORM with PostgreSQL",
      "Used WebSockets for instant dashboard updates",
      "Adopted Docker for reproducible deployments"
    ],

    futureWork: [
      "Slack and Discord alert integrations",
      "Multi-region health monitoring",
      "Custom alert thresholds",
      "Public status pages",
      "Kubernetes deployment support"
    ]
  },
    /* ───────────────────── CarbonTwin ───────────────────── */

  {
    id: "carbontwin",

    title: "CarbonTwin",

    tagline: "Forecasting carbon emissions with explainable AI.",

    description:
      "An end-to-end machine learning platform that forecasts carbon emissions using LSTM-based time-series models, automated data pipelines, explainable AI, and interactive analytics.",

    category: "Machine Learning",

    techStack: [
      "Python",
      "TensorFlow",
      "FastAPI",
      "React",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "SHAP",
      "LSTM",
      "Docker"
    ],

    image: "https://placehold.co/800x450/111827/047857?text=CarbonTwin",

    repoUrl: "https://github.com/SharvaniLekkala/CarbonTwin",

    demoUrl: null,

    overview:
      "CarbonTwin is an AI-powered carbon emission forecasting platform that helps organizations analyze historical emission trends and generate accurate future forecasts. It combines automated preprocessing, deep learning, explainable AI, and interactive visualizations to simplify sustainability planning.",

    problem:
      "Organizations increasingly need reliable forecasting tools to support sustainability goals and regulatory reporting. Existing solutions either require significant machine learning expertise or provide only simplistic statistical projections without explainability.",

    architecture:
      "Historical emission datasets are cleaned and transformed through automated preprocessing pipelines before training LSTM models for multi-step forecasting. A FastAPI backend serves predictions while a React frontend visualizes forecasts, trends, and explainability insights generated using SHAP.",

    features: [
      "LSTM-based time-series forecasting",
      "Automated preprocessing pipeline",
      "Interactive forecasting dashboard",
      "SHAP model explainability",
      "Historical trend visualization",
      "Multi-horizon prediction support",
      "REST API for prediction services",
      "Exportable forecasting reports",
      "Dockerized deployment"
    ],

    challenges: [
      "Handling missing and irregular time-series observations",
      "Reducing overfitting while maintaining forecasting accuracy",
      "Improving interpretability of deep learning predictions",
      "Optimizing inference latency for interactive dashboards"
    ],

    decisions: [
      "Selected LSTM networks for sequential pattern learning",
      "Used rolling-window validation to prevent temporal leakage",
      "Integrated SHAP for explainable machine learning",
      "Designed modular preprocessing pipelines for reusable workflows",
      "Separated training and inference pipelines for scalability"
    ],

    futureWork: [
      "Support Transformer-based forecasting models",
      "Multi-variable environmental forecasting",
      "Real-time IoT sensor integration",
      "Cloud deployment for enterprise users",
      "Automated model retraining pipeline"
    ]
  }

];