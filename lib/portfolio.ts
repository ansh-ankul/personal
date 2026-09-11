export type ProjectCategory = "AI systems" | "Machine learning" | "Data & analytics" | "Software"
export type ProjectVisual = "vision" | "language" | "data" | "system" | "agents" | "multimodal" | "retrieval"

export interface PortfolioLink {
  label: string
  href: string
}

export interface Project {
  id: string
  title: string
  description: string
  category: ProjectCategory
  tags: string[]
  visual: ProjectVisual
  href: string
  linkLabel: string
  image: string
  featured: boolean
  metric?: { value: string; label: string }
  additionalLinks?: PortfolioLink[]
  caseStudy?: {
    organization: string
    period: string
    problem: string
    implementation: string[]
    outcomes: string[]
    links?: PortfolioLink[]
  }
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  location: string
  description: string
  achievements: string[]
  tags: string[]
  image: string
  links?: PortfolioLink[]
}

export interface Education {
  id: string
  institution: string
  degree: string
  period: string
  description: string
  courses: string[]
  image: string
  href: string
}

export const profile = {
  name: "Ansh Ankul",
  firstName: "Ansh",
  role: "AI Engineer & Forward Deployed Engineer",
  location: "Champaign, IL",
  email: "anshankul.official@gmail.com",
  github: "https://github.com/ansh-ankul",
  linkedin: "https://www.linkedin.com/in/ansh-ankul/",
  kaggle: "https://www.kaggle.com/anshankul",
  resume: "https://drive.google.com/file/d/1Y_mAGSvCMYVw4P5o8si-D5qxVFyTzudo/view?usp=sharing",
}

export const socialLinks: PortfolioLink[] = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Kaggle", href: profile.kaggle },
]

// Current AI case studies follow the September 2026 résumé.
// Earlier projects and their destinations are retained from the original portfolio.
// A profile destination is labeled explicitly when no project repository was supplied.
export const projects: Project[] = [
  {
    "id": "ai-agribench",
    "title": "AI-AgriBench: evaluating AI at scale",
    "description": "A public benchmark for 25+ LLMs and vision-language models across 6+ datasets. I own the architecture, evaluation infrastructure, expert-review platform, and release workflows at NCSA.",
    "category": "AI systems",
    "tags": [
      "LLM evaluation",
      "FastAPI",
      "Next.js"
    ],
    "visual": "system",
    "href": "/projects/ai-agribench",
    "linkLabel": "Read case study",
    "image": "",
    "featured": true,
    "metric": {
      "value": "25+",
      "label": "LLMs & VLMs evaluated"
    },
    "caseStudy": {
      "organization": "NCSA · Lead AI Engineer",
      "period": "August 2025 – Present",
      "problem": "Researchers, agricultural experts, and external partners needed a shared way to evaluate model performance, validate data, and publish benchmark results. Their evaluation requirements had to become usable software and repeatable releases.",
      "implementation": [
        "Own AI-AgriBench’s benchmark architecture, evaluation infrastructure, and release workflows for a public platform spanning 25+ LLMs and vision-language models.",
        "Build Python pipelines for ingestion, deduplication, semantic filtering, and LLM-assisted quality control over agricultural question-answer data.",
        "Develop and deploy an annotation and evaluation platform with Next.js, React, FastAPI, and SQLite so agricultural experts can validate datasets, score model responses, and review results.",
        "Translate requirements from researchers, domain experts, and external partners into production APIs, expert-review workflows, dashboards, and public leaderboard releases."
      ],
      "outcomes": [
        "The public benchmark evaluates 25+ LLMs and vision-language models across 6+ datasets.",
        "Curated evaluation and RAG datasets for CropWizard from 80,000+ agricultural question-answer pairs.",
        "Deployed a full-stack platform used by agricultural experts for dataset validation, response scoring, and benchmark review."
      ],
      "links": [
        {
          "label": "Visit AI-AgriBench",
          "href": "https://aiagribench.org/"
        },
        {
          "label": "Explore CropWizard",
          "href": "https://uiuc.chat/cropwizard-1.5/chat"
        }
      ]
    }
  },
  {
    "id": "aganswers-agents",
    "title": "Tool-using agents for farm operations",
    "description": "Deployed LLM agents that turn natural-language requests into SQL-backed inventory and equipment workflows. Integrated John Deere APIs with Supabase/Postgres against live customer data.",
    "category": "AI systems",
    "tags": [
      "Tool calling",
      "n8n",
      "PostgreSQL"
    ],
    "visual": "agents",
    "href": "/projects/aganswers-agents",
    "linkLabel": "Read case study",
    "image": "",
    "featured": true,
    "caseStudy": {
      "organization": "AgAnswers Inc. · Forward Deployed Engineer (part-time)",
      "period": "May 2025 – Present",
      "problem": "Inventory and equipment requests needed to work across live customer data and operational APIs. The integration had to support multi-step agent workflows and allow development and debugging without a live customer account.",
      "implementation": [
        "Design and deploy tool-using LLM agents with n8n to translate natural-language requests into multi-step, SQL-backed inventory and equipment-management workflows.",
        "Integrate John Deere Operations Center APIs using OAuth 2.0.",
        "Recursively ingest nested equipment, location, operating-hour, and alert resources into Supabase/Postgres for live agent queries.",
        "Create mock farm datasets and local fixtures to validate multi-step workflows without relying on live customer accounts."
      ],
      "outcomes": [
        "Deployed agents operate against live customer data for inventory and equipment-management workflows.",
        "John Deere operational resources are available in Supabase/Postgres for agent queries.",
        "Local test fixtures support integration validation and debugging without live customer-account dependencies."
      ]
    }
  },
  {
    "id": "llm-council",
    "title": "LLM Council: multimodal annotation",
    "description": "A multi-VLM annotation pipeline integrated into AI-AgriBench. Consensus voting and quality checks produce reproducible agricultural image labels, validated against expert annotations.",
    "category": "AI systems",
    "tags": [
      "Multimodal AI",
      "VLM evaluation",
      "Consensus voting"
    ],
    "visual": "multimodal",
    "href": "/projects/llm-council",
    "linkLabel": "Read case study",
    "image": "",
    "featured": true,
    "metric": {
      "value": "91%",
      "label": "agreement with expert labels"
    },
    "caseStudy": {
      "organization": "National Center for Supercomputing Applications",
      "period": "August 2025 – Present",
      "problem": "Agricultural image datasets needed reproducible labels and a way to measure their quality against expert judgment across crop diseases, pests, and nutrient deficiencies.",
      "implementation": [
        "Design a multi-VLM annotation pipeline and integrate it into AI-AgriBench.",
        "Combine model outputs through consensus voting and quality-control checks to generate reproducible labels.",
        "Compare consensus-generated labels against expert annotations and analyze failure modes across crop-disease, pest, and nutrient-deficiency categories."
      ],
      "outcomes": [
        "Generated labels across 10,000+ agricultural images.",
        "Achieved 91% agreement when evaluated against 500 expert-annotated images.",
        "Analyzed failure modes across crop diseases, pests, and nutrient deficiencies."
      ],
      "links": [
        {
          "label": "Visit AI-AgriBench",
          "href": "https://aiagribench.org/"
        }
      ]
    }
  },
  {
    "id": "document-retrieval",
    "title": "Graph-augmented document retrieval",
    "description": "A GPT-based RAG system combining FAISS with an entity graph. Evaluated standard and graph-augmented retrieval across 5,000 queries to improve precision and grounding on multi-hop questions.",
    "category": "AI systems",
    "tags": [
      "RAG",
      "FAISS",
      "Entity graphs"
    ],
    "visual": "retrieval",
    "href": "/projects/document-retrieval",
    "linkLabel": "Read case study",
    "image": "",
    "featured": false,
    "metric": {
      "value": "+40%",
      "label": "retrieval precision vs. baseline"
    },
    "caseStudy": {
      "organization": "Selected project · Intelligent Document Retrieval System",
      "period": "February 2024 – May 2024",
      "problem": "A document-retrieval system needed more relevant results and better grounding for questions that connect multiple pieces of information. The project compared graph-augmented retrieval with a dense-vector baseline.",
      "implementation": [
        "Design and evaluate a GPT-based RAG system combining FAISS retrieval with an entity graph.",
        "Compare standard retrieval with graph-augmented retrieval across 5,000 queries.",
        "Evaluate retrieval precision, irrelevant results, and grounding on multi-hop questions."
      ],
      "outcomes": [
        "Improved retrieval precision by 40% over the dense-vector baseline in an evaluation spanning 5,000 queries.",
        "Reduced irrelevant retrievals by 10%.",
        "Improved grounding on multi-hop questions."
      ]
    }
  },
  {
    id: "accident-hotspots",
    title: "Mapping California's accident hotspots",
    description:
      "Finding patterns in 1.74 million traffic accidents. A machine learning pipeline combines risk modeling with NLP to turn accident reports into insights about California's roads.",
    category: "Data & analytics",
    tags: ["Python", "XGBoost", "NLP"],
    visual: "data",
    href: "https://github.com/ansh-ankul/STAT432-Project",
    linkLabel: "View repository",
    image: "/accident.png",
    featured: false,
    metric: { value: "1.74M", label: "accidents analyzed" },
  },
  {
    id: "pneumonia-detection",
    title: "Pneumonia detection with deep learning",
    description:
      "Exploring how transfer learning can support pneumonia detection. Inception v3 and VGG16 models use data augmentation and resampling to address an imbalanced dataset.",
    category: "Machine learning",
    tags: ["Computer vision", "Transfer learning", "VGG16"],
    visual: "vision",
    href: "https://github.com/ansh-ankul/Pneumonia-detection",
    linkLabel: "View repository",
    image: "/pneumonia.png",
    featured: false,
    metric: { value: "95%", label: "validation accuracy" },
  },
  {
    id: "liver-disease-prediction",
    title: "Making liver disease data accessible",
    description:
      "A predictive modeling study using the UCI Indian Liver Patient Dataset. An interactive R Shiny dashboard brings logistic regression, random forests, and SVM predictions into one interface.",
    category: "Data & analytics",
    tags: ["R Shiny", "Machine learning", "SMOTE"],
    visual: "system",
    href: "https://github.com/ansh-ankul/liver-disease-prediction",
    linkLabel: "View repository",
    image: "/liver.png",
    featured: false,
  },
  {
    id: "python-learning-library",
    title: "A practical Python learning library",
    description:
      "Concise reference guides and tutorials for Python fundamentals, object-oriented programming, databases, Pandas, and NumPy, with practical examples for everyday development.",
    category: "Software",
    tags: ["Python", "Pandas", "NumPy"],
    visual: "system",
    href: "https://github.com/ansh-ankul/pythonBasicsCheatsheet",
    linkLabel: "View repository",
    image: "/python.png",
    featured: false,
    additionalLinks: [
      { label: "Python OOP", href: "https://github.com/ansh-ankul/PythonOOPS" },
      { label: "Databases", href: "https://github.com/ansh-ankul/PythonDatabases" },
      { label: "Pandas", href: "https://github.com/ansh-ankul/Python-pandas" },
      { label: "NumPy", href: "https://github.com/ansh-ankul/Numpy-Tutorial" },
    ],
  },
  {
    id: "warehouse-apparel-detection",
    title: "Real-time warehouse apparel detection",
    description:
      "A web application that identifies apparel items with YOLOv5 and PyTorch, applying computer vision to inventory management and reducing manual inspection work.",
    category: "Machine learning",
    tags: ["YOLOv5", "PyTorch", "Computer vision"],
    visual: "vision",
    href: profile.github,
    linkLabel: "Explore GitHub profile",
    image: "/warehouse.png",
    featured: false,
    metric: { value: "85%", label: "detection accuracy" },
  },
  {
    id: "machine-translation",
    title: "From Irish songs to poetry",
    description:
      "An experiment in machine translation using a sequential bidirectional LSTM. The model explores transforming Irish songs into poetry through language modeling.",
    category: "Machine learning",
    tags: ["NLP", "BiLSTM", "Deep learning"],
    visual: "language",
    href: profile.github,
    linkLabel: "Explore GitHub profile",
    image: "/irish.png",
    featured: false,
  },
  {
    id: "churn-classification",
    title: "Understanding churn with neural networks",
    description:
      "A supervised, multiclass classification experiment using an artificial neural network to model churn and evaluate predictive performance.",
    category: "Machine learning",
    tags: ["Neural networks", "Classification", "Deep learning"],
    visual: "data",
    href: profile.github,
    linkLabel: "Explore GitHub profile",
    image: "/churn.png",
    featured: false,
    metric: { value: "86%", label: "classification accuracy" },
  },
  {
    id: "fashion-image-classification",
    title: "Teaching a model to recognize clothing",
    description:
      "An artificial neural network trained on Fashion MNIST to classify images into ten clothing categories, exploring the fundamentals of visual recognition.",
    category: "Machine learning",
    tags: ["Fashion MNIST", "Neural networks", "Computer vision"],
    visual: "vision",
    href: profile.github,
    linkLabel: "Explore GitHub profile",
    image: "/clothes.png",
    featured: false,
    metric: { value: "88%", label: "classification accuracy" },
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

// Roles, dates, and outcomes reflect the current résumé supplied by Ansh.
export const experience: Experience[] = [
  {
    id: "ncsa",
    company: "National Center for Supercomputing Applications",
    role: "Lead AI Engineer",
    period: "August 2025 – Present",
    location: "Champaign, Illinois",
    description:
      "Own the technical development of AI-AgriBench, turning evaluation requirements from researchers, agricultural experts, and external partners into a public benchmarking platform.",
    achievements: [
      "Lead benchmark architecture, evaluation infrastructure, and release workflows for 25+ LLMs and vision-language models across 6+ datasets.",
      "Engineered Python pipelines to ingest, deduplicate, semantically filter, and quality-check 80,000+ agricultural QA pairs for evaluation and CropWizard RAG datasets.",
      "Developed and deployed an annotation and evaluation platform with Next.js, React, FastAPI, and SQLite for experts to validate data, score responses, and review results.",
      "Translate ambiguous domain requirements into production APIs, expert-review workflows, benchmark dashboards, and public leaderboard releases.",
    ],
    tags: ["LLM / VLM evaluation", "Python", "Next.js", "FastAPI", "SQLite"],
    image: "/NCSA.png",
    links: [
      { label: "Explore AI-AgriBench", href: "https://aiagribench.org/" },
      { label: "Explore CropWizard", href: "https://uiuc.chat/cropwizard-1.5/chat" },
    ],
  },
  {
    id: "aganswers",
    company: "AgAnswers Inc.",
    role: "Forward Deployed Engineer · Part-time",
    period: "May 2025 – Present",
    location: "Champaign, Illinois",
    description:
      "Translate customer requests into deployed LLM agents and live integrations for agricultural inventory and equipment management.",
    achievements: [
      "Designed and deployed tool-using agents with n8n that turn natural-language requests into multi-step, SQL-backed workflows against live customer data.",
      "Integrated John Deere Operations Center APIs with OAuth 2.0, recursively ingesting equipment, location, operating-hour, and alert resources into Supabase/Postgres for agent queries.",
      "Built mock farm datasets and local test fixtures to validate multi-step workflows without live customer accounts, accelerating integration development and debugging.",
    ],
    tags: ["Agentic AI", "n8n", "API integrations", "OAuth 2.0", "Supabase"],
    image: "",
  },
  {
    id: "yahoo",
    company: "Yahoo",
    role: "Data Science Intern",
    period: "June 2024 – August 2024",
    location: "Remote / Champaign, Illinois",
    description:
      "Built advertising-revenue monitoring systems, from anomaly detection and forecasting to dashboards, automated alerts, and deployed model services.",
    achievements: [
      "Evaluated multiple unsupervised approaches for advertising-revenue time series, improving anomaly-detection recall by 25% over the prior baseline.",
      "Developed Prophet and ARIMA forecasting models with interactive Looker dashboards and automated alerting, improving RMSE by 20% and reducing false-positive alerts by 30%.",
      "Containerized and deployed model services on AWS with Docker and Kubernetes, reducing deployment time by 35% through CI/CD automation and reusable infrastructure templates.",
    ],
    tags: ["Anomaly detection", "Forecasting", "AWS", "Docker", "Kubernetes"],
    image: "/yahoo.png",
  },
  {
    id: "uiuc-research",
    company: "University of Illinois Urbana-Champaign",
    role: "Machine Learning Research Assistant",
    period: "January 2024 – December 2024",
    location: "Champaign, Illinois",
    description:
      "Applied machine learning and neural models to predict subsurface rock permeability from mineralogical data.",
    achievements: [
      "Trained and evaluated models on 10,000+ mineralogical records, achieving an R² of 0.93 on a held-out 20% test set.",
    ],
    tags: ["Machine learning", "Neural networks", "Model evaluation"],
    image: "/uiuc.jpeg",
  },
  {
    id: "bigstep",
    company: "Bigstep Technologies",
    role: "Software Engineer",
    period: "January 2022 – June 2023",
    location: "Gurugram, India",
    description:
      "Delivered frontend features, backend APIs, and database integrations for a full-stack marketplace, alongside an NLP content-moderation pipeline.",
    achievements: [
      "Engineered a marketplace serving 1,000+ users with TypeScript, React/Next.js, Node.js, Flask, and MongoDB.",
      "Trained a content-moderation pipeline using spaCy, NLTK, and RoBERTa to classify and moderate 1,000+ user-generated comments.",
    ],
    tags: ["TypeScript", "React / Next.js", "Node.js", "MongoDB", "NLP"],
    image: "/bigstep.png",
  },
  {
    id: "ey",
    company: "Ernst & Young",
    role: "Data Science Intern",
    period: "June 2021 – August 2021",
    location: "Gurugram, India",
    description:
      "Evaluated machine learning approaches and automated model tuning for anti-money-laundering detection.",
    achievements: [
      "Compared 15+ machine-learning approaches on 17,000+ transactions, improving F1-score from 0.82 to 0.88.",
      "Automated hyperparameter optimization with Optuna, reducing tuning time by 40%.",
    ],
    tags: ["Machine learning", "Optuna", "Model evaluation"],
    image: "/ey.png",
  },
]

export const education: Education[] = [
  {
    id: "illinois",
    institution: "University of Illinois Urbana-Champaign",
    degree: "Master of Science in Statistics",
    period: "August 2023 – May 2025",
    description:
      "A foundation in statistical learning, probability, and data science, with advanced study in computer vision and natural language processing.",
    courses: [
      "Statistical Learning",
      "Statistical Modeling",
      "Deep Learning for Computer Vision",
      "Data Science Programming Methods",
      "Advanced Natural Language Processing",
      "Time Series Analysis",
      "Probability and Statistics",
      "Mathematical Statistics",
    ],
    image: "/uiuc.png",
    href: "https://illinois.edu/",
  },
  {
    id: "manipal",
    institution: "Manipal University Jaipur",
    degree: "Bachelor of Technology in Computer and Communications Engineering",
    period: "July 2018 – July 2022",
    description:
      "Studied computer science and engineering fundamentals, from algorithms and operating systems to machine learning and relational databases.",
    courses: [
      "Data Structures and Algorithms",
      "Linear Algebra",
      "Machine Learning",
      "Deep Learning",
      "Relational Database Management Systems",
      "Operating Systems",
    ],
    image: "/manipal.jpeg",
    href: "",
  },
]

export const skillGroups = [
  {
    title: "AI & agents",
    skills: ["Python", "PyTorch", "RAG", "Tool calling", "Multimodal AI", "n8n", "Google ADK", "LangGraph", "OpenAI API"],
  },
  {
    title: "Evaluation & data",
    skills: ["LLM / VLM evaluation", "Benchmarking", "Expert validation", "Consensus evaluation", "SQL", "PostgreSQL", "Supabase", "SQLite", "scikit-learn"],
  },
  {
    title: "Full-stack delivery",
    skills: ["TypeScript", "Next.js", "React", "FastAPI", "Node.js", "REST APIs", "AWS", "Docker", "Kubernetes"],
  },
]
