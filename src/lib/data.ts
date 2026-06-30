export const personalInfo = {
  name: "Shubh Jain",
  title: "Computer Science @ UIUC | AI Researcher | Full-Stack Engineer",
  email: "shubhj3@illinois.edu",
  phone: "+2179795689",
  github: "https://github.com/infoshubhjain",
  linkedin: "https://www.linkedin.com/in/infoshubhjain/",
  resumeUrl: "/Shubh_Jain_Resume.pdf",
  description: "I architect ambitious AI systems, conduct boundary-pushing research, and ship full-stack solutions that scale. From multi-agent Bayesian learning platforms to leading 200+ volunteers in community transformation."
};

export const stats = [
  { value: "3.83", label: "CGPA at UIUC", sub: "Dean's List | James Scholar" },
  { value: "200+", label: "Volunteers Led", sub: "Across 6 Cities" },
  { value: "$34k+", label: "Funds Raised", sub: "Grants & Sponsorships" },
  { value: "2", label: "Published Books", sub: "XAI & IoT in Agriculture" }
];

export const projects = [
  {
    title: "AI Adaptive Learning Platform",
    url: "https://aiceuiuc.vercel.app/",
    tags: ["AI", "Full Stack", "LLMs", "Production", "Machine Learning"],
    timeline: "Dec 2025 - May 2026",
    tech: ["Next.js 15", "FastAPI", "Supabase", "OpenAI API", "Python", "TypeScript"],
    problem: "Static learning platforms fail to adapt to individual user mastery and cognitive friction points.",
    solution: "Architected a full-stack multi-agent platform orchestrating 7 specialized agents (Roadmap, Knowledge, Quiz, Conversation, Tasker, Memory Compactor, Orchestrator) using a custom ReAct loop. Implemented a Bayesian Knowledge Tracing (BKT) engine from scratch to model per-skill mastery.",
    impact: "Deployed on Vercel + GCP with 11 DB migrations, pgvector for semantic retrieval, and cross-session state persistence. Engineered sliding-window memory managing 200+ message transcripts."
  },
  {
    title: "SIGAIDA Campus Energy",
    tags: ["AI", "IoT", "Full Stack", "Leadership", "Machine Learning"],
    timeline: "Aug 2025 - Dec 2025",
    tech: ["Next.js 14", "FastAPI", "PyTorch LSTM", "Docker", "SQLite"],
    problem: "Lack of unified real-time environmental monitoring and predictive analytics for campus infrastructure.",
    solution: "Led a 10-member team to build a full-stack monitoring platform. Engineered a PyTorch LSTM pipeline forecasting PM2.5 levels 24 hours ahead. Built automated ETL pipelines integrating OpenAQ, Open-Meteo, Google Earth Engine, and GTFS.",
    impact: "Containerized backend services with Docker Compose. Delivered interactive geospatial and time-series visualizations for scalable querying."
  },
  {
    title: "neuro-rust | Neural Network from Scratch",
    tags: ["AI", "Machine Learning", "Research"],
    timeline: "Spring 2026",
    tech: ["Rust", "ndarray"],
    problem: "Understanding the foundational mathematics of deep learning without relying on high-level libraries.",
    solution: "Built a feedforward neural network from scratch in Rust with zero ML libraries. Implemented Xavier/Glorot initialization, sigmoid activation, MSE loss, and chain-rule backpropagation.",
    impact: "Successfully trained network to solve XOR in 10,000 epochs. Authored 15 rigorous unit tests covering forward pass cache consistency and exact weight update verification."
  },
  {
    title: "Project Harvest",
    tags: ["Web Development", "Full Stack", "Production", "Automation"],
    timeline: "Dec 2025 - Present",
    tech: ["React", "Node.js", "Python", "Selenium", "SQLite"],
    problem: "Students lack accessible, real-time nutritional data across multiple dining halls.",
    solution: "Developed a full-stack ecosystem for 4 dining halls. Engineered Python Selenium scrapers and RESTful Node.js endpoints serving 100% of frontend requests from SQLite.",
    impact: "Serving 1000+ daily users. CI/CD pipelines via GitHub Actions cut manual maintenance by 90%."
  },
  {
    title: "BERT Ad Compliance Classifier",
    tags: ["AI", "NLP", "Research", "Machine Learning"],
    timeline: "Jan 2025 - May 2026",
    tech: ["PyTorch", "HuggingFace", "DistilBERT"],
    problem: "Detecting FDA/FTC advertising compliance violations across diverse media formats is unscalable manually.",
    solution: "Built data preprocessing and tokenization infrastructure for a DistilBERT-based NLP system. Designed the canonical dataset schema and tensor artifact specification. Curated a domain-specific NLP dataset spanning social media, e-commerce, and broadcast.",
    impact: "Expanded training corpus by 5.3× (430% increase) while maintaining balanced binary classification across 15 compliance categories."
  },
  {
    title: "Project Helix",
    tags: ["Web Development", "Full Stack", "Automation"],
    timeline: "Aug 2025 - Dec 2025",
    tech: ["Next.js", "Playwright", "BeautifulSoup", "OAuth2"],
    problem: "Campus events are scattered across 15+ inconsistent university sources.",
    solution: "Built a campus event aggregation platform combining BeautifulSoup and Playwright to handle static and JS-rendered sources. Implemented deduplication logic and OAuth2-based Google Calendar integration.",
    impact: "Aggregated and unified 1000+ events into a centralized relational schema for dynamic querying."
  }
];

export const experience = [
  {
    role: "Junior AI & NLP Lead Researcher & Intern",
    company: "Exam Lounge",
    timeline: "May 2024 – August 2024",
    type: "Internship",
    tech: ["Python", "NLP", "Data Pipelines"],
    achievements: [
      "Led a cross-functional team of 31 interns using Agile methodology, improving exam model accuracy by 15%.",
      "Developed optimization techniques enhancing software performance by 20%.",
      "Coordinated multiple bug detection teams, reducing critical production errors by 40%.",
      "Awarded 'Intern of the Month' for 3 out of 4 months for exceptional problem-solving."
    ]
  },
  {
    role: "Machine Learning Intern",
    company: "IETE",
    timeline: "June 2023 – August 2023",
    type: "Internship",
    tech: ["Python", "Bi-LSTM", "SQL"],
    achievements: [
      "Developed full-stack AI chatbot handling 200+ daily inquiries.",
      "Implemented Bidirectional LSTM model with 87% accuracy for misinformation detection.",
      "Created customer sentiment analysis tool processing 10,000+ reviews."
    ]
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    timeline: "May 2023 - May 2025",
    type: "Professional",
    tech: ["HTML/CSS", "Wix", "Squarespace", "SEO"],
    achievements: [
      "Designed and developed 40+ websites managing complete project lifecycles.",
      "Implemented SEO, responsive UI/UX, payment gateways, and e-commerce systems."
    ]
  }
];

export const research = [
  {
    title: "A Comparative Assessment of Advanced Conversational Agents",
    venue: "International Journal of Emerging Technology and Advanced Engineering (IJETAE)",
    date: "June 2024",
    type: "Research Paper",
    abstract: "Comprehensive comparative analysis evaluating factual accuracy, relevance, completeness, coherence, creativity, and bias across ChatGPT, Gemini, Perplexity, and Claude using mixed-methods approach."
  },
  {
    title: "Investigation of the Performance of ChatGPT in Answering Common Sense-Based Questionnaires",
    venue: "IJETAE",
    date: "September 2023",
    type: "Research Paper",
    abstract: "Developed comprehensive questionnaire evaluating ChatGPT's common-sense reasoning abilities. Awarded Best Junior Author of the Year 2023 (USD 1,000); most downloaded high school-authored paper in journal history."
  },
  {
    title: "IoT and Agriculture",
    venue: "Patent",
    date: "June 2024",
    type: "Patent",
    abstract: "Comprehensive IoT-based precision agriculture system enabling real-time monitoring of soil, crop, water, and environmental parameters to improve efficiency and reduce resource waste."
  },
  {
    title: "IoT in Agriculture: Revolutionizing Indian Farming",
    venue: "ISBN: 978-9394351950",
    date: "November 2024",
    type: "Book",
    abstract: "Explored IoT applications in Indian agriculture. Distributed 500+ copies to universities. Recognized by the Governor of Madhya Pradesh for significant contribution to agricultural innovation."
  },
  {
    title: "Beyond the Black Box: Unlocking the Secrets of Explainable AI",
    venue: "ISBN: B0F38TX4ZR",
    date: "May 2025",
    type: "Book",
    abstract: "Investigated the black-box problem in AI, presenting comprehensive methods including post-hoc interpretability, counterfactual reasoning, and surrogate modeling techniques in healthcare and autonomous vehicles."
  }
];

export const leadership = [
  {
    role: "Founder & President",
    org: "Project Uthaan",
    timeline: "Dec 2022 - Dec 2025",
    points: ["Raised $24,000+ in funding.", "Directed 200+ volunteers across 6 cities.", "Constructed 8 classrooms, installed 100+ computers.", "Benefited 2,200+ participants through digital literacy workshops."]
  },
  {
    role: "Founder & President",
    org: "AI and STEM Club",
    timeline: "Mar 2023 - Mar 2025",
    points: ["Established city's first AI & STEM lab.", "Built school's largest club (80+ members).", "Secured $7,000+ annual funding.", "Developed AI-powered chatbot for school operations."]
  },
  {
    role: "Head of Operations",
    org: "SBI Sustainability Drive",
    timeline: "Jun 2023 - Jul 2023",
    points: ["Led 80-member team liaising with SBI, BHEL, NGOs.", "Raised $10,000+ and oversaw plantation of 18,000+ trees across 6 acres."]
  },
  {
    role: "Panels Head",
    org: "UI-CON | UIUC",
    timeline: "Oct 2025 - Feb 2026",
    points: ["Led panel programming for convention attracting 2,000+ attendees.", "Managed 60+ volunteers and 40+ speakers across 20+ panels."]
  },
  {
    role: "Management Head",
    org: "IGSA Diwali on the Quad",
    timeline: "October 2025",
    points: ["Directed operational planning for 1,000+ attendees.", "Managed 30+ member volunteer team for 4+ hour campus-wide celebration."]
  },
  {
    role: "Secretary General / Chair",
    org: "Model United Nations",
    timeline: "Feb 2022 - Nov 2024",
    points: ["Chaired 8+ committees, served as Secretary General for 2 large-scale MUNs (700+ delegates).", "Participated in 35+ MUNs, winning 17 Best Delegate awards."]
  }
];
