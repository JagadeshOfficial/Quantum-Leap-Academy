export type Course = {
  name: string;
  slug: string;
  category: string;
  tagline: string;
  enrolledStudents: number;
  duration: string;
  learningHours: string;
  rating: number;
  highlights: string[];
  batchDetails: {
    name: string;
    startDate: string;
    timings: string;
  }[];
  tools: string[];
  learningPath: {
    title: string;
    topics: string[];
  }[];
  recruiters: string[];
  reviews: {
    rating: number;
    text: string;
    author: string;
    role: string;
    company?: string;
  }[];
  imageId: string;
  videoPreview?: string;
  brochureContent?: string; // Optional field for specific brochure content if meaningful
  brochureUrl?: string;
  syllabusUrl?: string;
  fees: string;
  earlyBirdOffer?: string;
};

export const courses: Course[] = [
  {
    name: "Data Science Program",
    slug: "data-science",
    category: "Data Science",
    tagline: "Become a job-ready Data Scientist with hands-on projects and mentorship.",
    enrolledStudents: 3200,
    duration: "4-5 Months",
    learningHours: "150+ Hours",
    rating: 4.8,
    imageId: 'course-data-science',
    videoPreview: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    brochureUrl: "/Brouchers/DATA SCIENTIST FINAL broucher.pdf",
    syllabusUrl: "/downloads/data-science-syllabus.pdf",
    fees: "₹45,000",
    earlyBirdOffer: "10% Off for next 5 enrollments",
    highlights: [
      "Top Faculty & Mentors: Learn from experience.",
      "Curriculum with Practical Exposure.",
      "Real-Life Projects.",
      "Job Readiness Training.",
      "24/7 Support.",
    ],
    batchDetails: [
      { name: "Batch 01 (Weekday)", startDate: "Nov 25, 2025", timings: "7 PM – 9 PM (IST)" },
      { name: "Batch 02 (Weekend)", startDate: "Dec 8, 2025", timings: "10 AM – 1 PM (IST)" },
    ],
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "SQL", "Power BI", "Tableau", "TensorFlow", "Keras"],
    learningPath: [
      {
        title: "Introduction to Data Science",
        topics: [
          "What are analytics & Data Science?",
          "Business Analytics vs. Data Analytics vs. Data Science",
          "Lifecycle of Data Science",
          "Applications in Various Industries",
          "Key tools and frameworks"
        ]
      },
      {
        title: "MySQL",
        topics: [
          "Introduction to SQL and Database Types",
          "CRUD Operations and Data Integrity",
          "Data Retrieval, Filtering, String Operations",
          "Aggregate Functions, Joins, Constraints, ER Modelling",
          "Advanced Query Writing, Case Statements, CTEs",
          "Date Manipulation, Window Functions",
          "Views, Indexes, Data Partitioning",
          "Stored Procedures, Triggers, TCL/DCL Commands"
        ]
      },
      {
        title: "Power BI",
        topics: [
          "Introduction to Power BI & Power Query Editor",
          "M Query, Data Modelling, Filter Context",
          "Data Transformation, Calculations, Measures",
          "Visualizations, Different Charts, Dashboard Creation",
          "DAX, Row-Level Security (RLS)"
        ]
      },
      {
        title: "Programming for Data Science (Python)",
        topics: [
          "Python Fundamentals: Syntax, Variables, Data Types",
          "Operators, Strings, Data Structures (List, Tuple, Set, Dictionary)",
          "Control Flow (if, else, for, while, break, continue)",
          "Functions, Exception Handling, Modules, File Handling",
          "NumPy: Array Management, Statistical Analysis",
          "Pandas: Data Manipulation, Aggregation",
          "Visualization: Matplotlib, Seaborn",
          "OOPS Concepts, Database Connectivity",
          "EDA: Univariate and Bivariate Analysis"
        ]
      },
      {
        title: "Statistics",
        topics: [
          "Descriptive Statistics: Mean, Median, Mode, Variance, SD",
          "Probability Distributions: Bernoulli, Binomial, Poisson, Normal",
          "Sampling Techniques, Central Limit Theorem",
          "Hypothesis Testing: Null/Alternative, Type I/II Errors, p-Value",
          "Statistical Tests: Z-Test, t-Test, Chi-Square, ANOVA"
        ]
      },
      {
        title: "Machine Learning",
        topics: [
          "Supervised Learning (Regression): Linear Regression, metrics (RMSE, R²)",
          "Supervised Learning (Classification): Decision Trees, Logistic Regression, KNN, Naive Bayes, SVM",
          "Ensemble Methods: Random Forests, AdaBoost, Gradient Boosting, XGBoost",
          "Model Evaluation: Cross-Validation, Bias-Variance Trade-Off",
          "Unsupervised Learning: K-Means, DBSCAN, Hierarchical Clustering",
          "Dimensionality Reduction: PCA, t-SNE"
        ]
      },
      {
        title: "Deep Learning",
        topics: [
          "Neural Networks: Neurons, Layers, Activation Functions, Backpropagation",
          "CNNs for Image Classification",
          "Transfer Learning (ResNet, VGG)",
          "RNNs, LSTM, GRU for Sequence Data",
          "NLP Basics: Tokenization, TF-IDF, Word Embeddings (Word2Vec, GloVe)",
          "Transformers: BERT, GPT overview"
        ]
      },
      {
        title: "Big Data Hadoop and Spark",
        topics: [
          "Big Data Overview, Hadoop Ecosystem (HDFS, MapReduce, Hive)",
          "Apache Spark Architecture, RDDs",
          "Spark DataFrames, Spark SQL",
          "Data Processing & Transformations in Spark"
        ]
      },
      {
        title: "Generative AI and Prompt Engineering",
        topics: [
          "Overview of GenAI, GANs, VAEs",
          "LLMs and GPT Evolution",
          "Prompt Engineering Basics",
          "ChatGPT Interface and Use Cases",
          "Image Generation (MidJourney, DALL-E)",
          "GenAI in Security & Audio Processing"
        ]
      },
    ],
    recruiters: ["IBM", "Oracle", "Deloitte", "Wipro", "DXC", "Honeywell", "Salesforce", "Facebook"],
    reviews: [
      { rating: 5, text: "The Data Science course helped me land a role as a Data Analyst at Infosys!", author: "Aditya Sharma", role: "Career Switcher", company: "Infosys" },
      { rating: 4, text: "Curriculum is very practical. You actually build models and dashboards.", author: "Vikram Iyer", role: "MBA Graduate" },
    ],
  },
  {
    name: "Data Analysis Program",
    slug: "data-analysis",
    category: "Data Analysis",
    tagline: "Master Excel, SQL, and Power BI to derive actionable business insights.",
    enrolledStudents: 2700,
    duration: "4-5 Months",
    learningHours: "100+ Hours",
    rating: 4.9,
    imageId: 'course-data-analysis',
    videoPreview: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    brochureUrl: "/Brouchers/data analysis fian broucher .pdf",
    syllabusUrl: "/downloads/data-analysis-syllabus.pdf",
    fees: "₹40,000",
    earlyBirdOffer: "10% Off for next 5 enrollments",
    highlights: [
      "Industry Experts as Trainers.",
      "Curriculum with Practical Exposure.",
      "Real-Life Projects.",
      "Job Readiness Focus.",
      "24/7 Support.",
    ],
    batchDetails: [
      { name: "Batch 01 (Evening)", startDate: "Nov 20, 2025", timings: "6:30 PM – 8:30 PM (IST)" },
      { name: "Batch 02 (Weekend)", startDate: "Dec 6, 2025", timings: "10 AM – 12:30 PM (IST)" },
    ],
    tools: ["Microsoft Excel", "SQL", "Power BI", "Python", "Tableau", "MySQL", "ChatGPT"],
    learningPath: [
      {
        title: "Introduction to Data Analytics",
        topics: [
          "Analytics vs Data Science",
          "Types of data (Structured vs Unstructured)",
          "Analytics Methodology & problem-solving framework",
          "Stages of Analytics"
        ]
      },
      {
        title: "MySQL",
        topics: [
          "Fundamentals of SQL, CRUD, Data Integrity",
          "Joins, Constraints, ER Modelling",
          "Advanced Query Writing, Aggregate Functions, CTEs",
          "Window Functions, Views, Indexes, Stored Procedures"
        ]
      },
      {
        title: "Power BI",
        topics: [
          "Power Query Editor, M Query",
          "Data Modeling, Filter Context, DAX",
          "Visualizations, Dashboard Creation, Row-Level Security"
        ]
      },
      {
        title: "Python",
        topics: [
          "Python Syntax, Data Types, Control Flow",
          "Functions, Exception Handling, File Handling",
          "NumPy for Array Management",
          "Pandas for Data Analysis",
          "Matplotlib & Seaborn for Visualization",
          "OOPS Concepts, Database Connectivity"
        ]
      },
      {
        title: "Statistics & Probability",
        topics: [
          "Measures of Central Tendency & Dispersion",
          "Probability Distributions, Central Limit Theorem",
          "Hypothesis Testing, Confidence Intervals",
          "Statistical Tests (Z-Test, t-Test, Chi-Square, ANOVA)"
        ]
      },
      {
        title: "Generative AI & Prompt Engineering",
        topics: [
          "Introduction to GenAI, GANs, VAEs",
          "LLMs and GPT Evolution",
          "Prompt Engineering Basics & Best Practices",
          "ChatGPT Use Cases",
          "Image Generation Tools (MidJourney, DALL-E)"
        ]
      },
    ],
    recruiters: ["Deloitte", "Wipro", "Mphasis", "Mindtree", "HP", "IBM", "Oracle", "Cisco"],
    reviews: [
      { rating: 5, text: "From zero experience to building dashboards — the course gave me confidence.", author: "Karan Malhotra", role: "College Student" },
      { rating: 4, text: "The mentors are amazing, and the Power BI projects were directly useful.", author: "Ananya Sethi", role: "Data Intern" },
    ],
  },
  {
    name: "AI/ML Program",
    slug: "ai-ml",
    category: "AI/ML",
    tagline: "Build and deploy advanced AI and Machine Learning models.",
    enrolledStudents: 2450,
    duration: "4-5 Months",
    learningHours: "120+ Hours",
    rating: 4.9,
    imageId: 'course-ai-ml',
    videoPreview: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    brochureUrl: "/downloads/ai-ml-brochure.pdf",
    syllabusUrl: "/downloads/ai-ml-syllabus.pdf",
    fees: "₹50,000",
    earlyBirdOffer: "10% Off for next 5 enrollments",
    highlights: [
      "Top Industry Faculty & Trainers.",
      "Curriculum with Practical Exposure.",
      "Real-Life Projects.",
      "Job Readiness Training.",
      "24/7 Support.",
    ],
    batchDetails: [
      { name: "Batch 01 (Weekday)", startDate: "Dec 1, 2025", timings: "7 PM – 9 PM (IST)" },
      { name: "Batch 02 (Weekend)", startDate: "Dec 7, 2025", timings: "10 AM – 1 PM (IST)" },
    ],
    tools: ["Python", "TensorFlow", "Keras", "PyTorch", "Scikit-learn", "NumPy", "Pandas", "Matplotlib", "OpenCV"],
    learningPath: [
      {
        title: "Mathematical Foundations",
        topics: ["Linear algebra", "Calculus (derivatives, gradients)", "Probability & statistics", "Optimization basics"]
      },
      {
        title: "Programming Fundamentals",
        topics: ["Python programming", "NumPy", "Pandas", "Matplotlib/Seaborn", "Data structures & algorithms"]
      },
      {
        title: "Introduction to AI & ML",
        topics: ["Supervised, Unsupervised, Reinforcement Learning", "AI fundamentals", "Intelligent agents"]
      },
      {
        title: "Data Handling and Preprocessing",
        topics: ["EDA", "Feature engineering", "Handling missing values", "Scaling & normalization"]
      },
      {
        title: "Supervised Learning Algorithms",
        topics: ["Linear/Logistic regression", "Decision trees", "Random forests", "SVM", "KNN", "Naive Bayes"]
      },
      {
        title: "Model Evaluation and Validation",
        topics: ["Cross-validation", "Performance metrics (Accuracy, F1, ROC)", "Overfitting/Underfitting", "Hyperparameter tuning"]
      },
      {
        title: "Unsupervised Learning",
        topics: ["K-means", "Hierarchical clustering", "DBSCAN", "PCA", "t-SNE", "Anomaly detection"]
      },
      {
        title: "Ensemble Methods",
        topics: ["Bagging", "Boosting (AdaBoost, XGBoost, LightGBM)", "Stacking"]
      },
      {
        title: "Neural Networks & Deep Learning",
        topics: ["Perceptrons", "Backpropagation", "CNNs", "RNNs", "LSTMs", "Transfer learning"]
      },
      {
        title: "Natural Language Processing",
        topics: ["Tokenization", "Word embeddings (Word2Vec, GloVe)", "Transformers (BERT, GPT)", "Sentiment analysis"]
      },
      {
        title: "Computer Vision",
        topics: ["Image recognition", "Object detection (YOLO)", "Facial recognition"]
      },
      {
        title: "Reinforcement Learning",
        topics: ["Markov decision processes", "Q-learning", "DQN"]
      },
      {
        title: "Time Series Analysis & Emerging Tech",
        topics: ["ARIMA", "Prophet", "Generative AI", "AutoML", "Explainable AI"]
      },
      {
        title: "MLOps and Model Deployment",
        topics: ["Flask/FastAPI", "Docker", "AWS/GCP/Azure deployment", "CI/CD pipelines", "MLflow"]
      },
    ],
    recruiters: ["IBM", "Facebook", "Qualcomm", "Honeywell", "Oracle", "Cisco", "Algoworks", "Nexgen"],
    reviews: [
      { rating: 5, text: "The course gave me real project experience. The mentors were outstanding.", author: "Ritika Verma", role: "B.Tech Student" },
      { rating: 5, text: "Opened my eyes to autonomous systems.", author: "Amit Shah", role: "AI Developer" },
    ],
  },
  {
    name: "Agentic AI Program",
    slug: "agentic-ai",
    category: "AI/ML",
    tagline: "Build autonomous AI agents with LangChain, OpenAI, and more.",
    enrolledStudents: 2450,
    duration: "3-4 Months",
    learningHours: "120+ Hours",
    rating: 5,
    imageId: 'course-agentic-ai',
    videoPreview: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    brochureUrl: "/downloads/agentic-ai-brochure.pdf",
    syllabusUrl: "/downloads/agentic-ai-syllabus.pdf",
    fees: "₹55,000",
    earlyBirdOffer: "10% Off for next 5 enrollments",
    highlights: [
      "Learn from AI engineers and researchers.",
      "Hand-on exercises with LangChain & LangGraph.",
      "Build live Agentic AI projects.",
      "Job readiness training.",
    ],
    batchDetails: [
      { name: "Batch 01 (Weekday)", startDate: "Dec 1, 2025", timings: "7 PM – 9 PM (IST)" },
      { name: "Batch 02 (Weekend)", startDate: "Dec 7, 2025", timings: "10 AM – 1 PM (IST)" },
    ],
    tools: ["LangChain", "OpenAI API", "LangGraph", "CrewAI", "Phidata", "Autogen", "Pinecone", "AgentOps"],
    learningPath: [
      {
        title: "Agentic AI Essentials",
        topics: ["Agents vs Agentic AI", "Autonomous Agents", "Human-in-the-Loop", "Frameworks Overview", "Ethical AI"]
      },
      {
        title: "Architectures and Design Patterns",
        topics: ["Perception, Cognitive, Action Modules", "Reflection, Tool Use, Planning Patterns", "ReAct, ReWOO", "Multi-Agent Patterns"]
      },
      {
        title: "Working with LangChain and LCEL",
        topics: ["Data Ingestion", "Embeddings & Vector stores", "LCEL Introduction", "Chains & Runnables", "Langserve Deployment"]
      },
      {
        title: "Building AI Agents with LangGraph",
        topics: ["State & Memory Schema", "State Reducer", "Human-in-the-Loop (HITL)", "Short vs Long Term Memory", "Agent Deployment"]
      },
      {
        title: "Implementing Agentic RAG",
        topics: ["Agentic vs Traditional RAG", "Adaptive RAG", "Implementation with LlamaIndex & Cohere"]
      },
      {
        title: "Developing AI Agents with Phidata",
        topics: ["Agents, Models, Tools", "Knowledge & Vector DB", "Workflows with Phidata"]
      },
      {
        title: "Multi-Agent Systems (LangGraph & CrewAI)",
        topics: ["Multi-Agent Workflows", "Collaborative Agents", "CrewAI Components & Environment Setup"]
      },
      {
        title: "Advanced Agent Development with Autogen",
        topics: ["Roles & Conversations", "Code Executor & Tool Use", "Conversation Patterns", "Deployment"]
      },
      {
        title: "AI Agent Observability and AgentOps",
        topics: ["Langfuse Dashboard & Tracing", "Managing Prompts", "Langsmith Observability", "AgentOps Implementation"]
      },
      {
        title: "No/Low-Code AI Agents",
        topics: ["Building Workflows visually", "Drag-and-Drop Interfaces", "Integration & Customization", "Security"]
      },
    ],
    recruiters: ["IBM", "Facebook", "Qualcomm", "Salesforce", "Oracle", "Cisco"],
    reviews: [
      { rating: 5, text: "I now lead an AI automation team!", author: "Amit Shah", role: "AI Developer" },
      { rating: 4, text: "Affordable and structured.", author: "Sonia Gupta", role: "Career Switcher" },
    ],
  },
  {
    name: "Quantum Computing Program",
    slug: "quantum-computing",
    category: "Emerging Tech",
    tagline: "Dive into the future of computation with Qiskit and IBM Quantum.",
    enrolledStudents: 1800,
    duration: "40 Hours (~8 Modules)",
    learningHours: "40+ Hours",
    rating: 4.9,
    imageId: 'course-quantum-computing',
    videoPreview: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    brochureUrl: "/downloads/quantum-computing-brochure.pdf",
    syllabusUrl: "/downloads/quantum-computing-syllabus.pdf",
    fees: "₹60,000",
    earlyBirdOffer: "10% Off for next 5 enrollments",
    highlights: [
      "Learn from Quantum Computing Experts.",
      "Hands-on Qiskit Projects.",
      "Real-World Applications.",
      "Certification Preparation.",
    ],
    batchDetails: [
      { name: "Batch 01 (Weekday)", startDate: "Dec 10, 2025", timings: "7 PM – 9 PM (IST)" },
      { name: "Batch 02 (Weekend)", startDate: "Dec 20, 2025", timings: "10 AM – 1 PM (IST)" },
    ],
    tools: ["Qiskit", "Python", "IBM Quantum Experience", "OpenQASM", "Quantum SDKs"],
    learningPath: [
      { title: "Introduction to Quantum Computing", topics: ["Quantum mechanics fundamentals", "Classical vs Quantum", "Qubits, superposition, entanglement", "Use cases"] },
      { title: "Qiskit Framework Setup", topics: ["Architecture", "Environment setup", "Basic quantum circuits"] },
      { title: "Building & Operating Quantum Circuits", topics: ["Multi-qubit registers", "Measurement operations", "Circuit optimization", "OpenQASM"] },
      { title: "Visualizing Circuits & Results", topics: ["Histograms, Bloch vectors", "Gate maps", "Error-rate visualization"] },
      { title: "Quantum Information Concepts", topics: ["Fidelity metrics", "Quantum states & operators", "Decoherence"] },
      { title: "Running Quantum Experiments", topics: ["Simulators vs Hardware", "Interpreting results", "Noise impact analysis"] },
      { title: "Advanced Features in Qiskit", topics: ["Backend access", "Job management", "Noise mitigation", "Error correction intro"] },
      { title: "Certification Prep & Capstone", topics: ["IBM Certified Associate Developer prep", "Grover/Deutsch–Jozsa implementation", "Mock assessments"] },
    ],
    recruiters: ["IBM", "Honeywell", "Qualcomm", "Oracle"],
    reviews: [
      { rating: 5, text: "Transitioned from data science to quantum algorithm development.", author: "Riya Mehta", role: "Data Scientist" },
      { rating: 5, text: "Implementation on real IBM Quantum hardware was amazing.", author: "Anirudh Bansal", role: "M.Tech Student" },
    ],
  },
  {
    name: "Cyber Security Program",
    slug: "cyber-security",
    category: "Security",
    tagline: "Become an ethical hacker and cybersecurity expert with hands-on labs.",
    enrolledStudents: 2100,
    duration: "4-5 Months",
    learningHours: "160+ Hours",
    rating: 4.8,
    imageId: 'course-cyber-security',
    videoPreview: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    brochureUrl: "/downloads/cyber-security-brochure.pdf",
    syllabusUrl: "/downloads/cyber-security-syllabus.pdf",
    fees: "₹42,000",
    earlyBirdOffer: "10% Off for next 5 enrollments",
    highlights: [
      "Master End-to-End Cyber Security.",
      "Hands-on Labs (Ethical Hacking, VAPT).",
      "Aligned with CompTIA Security+, CEH, CISSP.",
      "Job Readiness Training.",
    ],
    batchDetails: [
      { name: "Batch 01 (Weekday)", startDate: "Nov 28, 2025", timings: "7 PM – 9 PM (IST)" },
      { name: "Batch 02 (Weekend)", startDate: "Dec 7, 2025", timings: "10 AM – 1 PM (IST)" },
    ],
    tools: ["Kali Linux", "Metasploit", "Wireshark", "Burp Suite", "Nmap", "Splunk", "AWS Cloud Security"],
    learningPath: [
      {
        title: "Introduction to Cyber Security",
        topics: ["Threats, vulnerabilities, risk", "Enterprise Architecture", "Governance & Compliance", "Incident management"]
      },
      {
        title: "Core Security Principles",
        topics: ["Risk Management", "Cryptography (PKI)", "IAM (Identity & Access Management)", "Security protocols"]
      },
      {
        title: "Ethical Hacking & VAPT",
        topics: ["Footprinting & Reconnaissance", "Scanning & Enumeration", "System Hacking", "Malware, Sniffing, Social Engineering", "SQL Injection, IoT Hacking"]
      },
      {
        title: "Security & Risk Management (Advanced)",
        topics: ["Security engineering", "Network security", "Assessment & testing", "Compliance & Audit", "CISSP domain alignment"]
      },
      {
        title: "Cloud Security",
        topics: ["Cloud Architecture", "Data Security in Cloud", "IaaS/PaaS/SaaS security", "Disaster recovery"]
      },
      {
        title: "Capstone & Certification Prep",
        topics: ["Secure infrastructure architecture", "VAPT execution", "Incident response planning", "CompTIA Security+, CEH prep"]
      },
    ],
    recruiters: ["Cisco", "IBM", "HP", "DXC", "Wipro", "Deloitte"],
    reviews: [
      { rating: 5, text: "Transitioned from IT support to Security Analyst.", author: "Sandeep Mehta", role: "Security Analyst" },
      { rating: 5, text: "Hands-on exposure to ethical hacking was worth it.", author: "Priya Singh", role: "BCA Graduate" },
    ],
  },
  {
    name: "Data Engineering Program",
    slug: "data-engineering",
    category: "Data Engineering",
    tagline: "Build scalable data pipelines with Spark, Airflow, and cloud technologies.",
    enrolledStudents: 2850,
    duration: "4-5 Months",
    learningHours: "160+ Hours",
    rating: 4.9,
    imageId: 'course-data-engineering',
    videoPreview: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    brochureUrl: "/downloads/data-engineering-brochure.pdf",
    syllabusUrl: "/downloads/data-engineering-syllabus.pdf",
    fees: "₹48,000",
    earlyBirdOffer: "10% Off for next 5 enrollments",
    highlights: [
      "Learn from Top Industry Engineers.",
      "End-to-End Data Engineering Curriculum.",
      "Hands-on Cloud Labs (AWS/Azure).",
      "Real-World Projects.",
    ],
    batchDetails: [
      { name: "Batch 01 (Weekday)", startDate: "Nov 30, 2025", timings: "7 PM – 9 PM (IST)" },
      { name: "Batch 02 (Weekend)", startDate: "Dec 10, 2025", timings: "10 AM – 1 PM (IST)" },
    ],
    tools: ["Python", "SQL", "Spark", "Hadoop", "Kafka", "Airflow", "AWS", "Azure", "Snowflake", "Docker"],
    learningPath: [
      {
        title: "Foundations of Data Engineering",
        topics: ["Data engineering ecosystem", "Python & SQL basics", "Data modelling (Star/Snowflake)", "Linux/Unix basics"]
      },
      {
        title: "Data Warehouse & ETL/ELT",
        topics: ["OLAP vs OLTP", "ETL pipelines with Python", "Batch workflows", "Orchestration basics"]
      },
      {
        title: "Big Data Processing (Spark & Hadoop)",
        topics: ["Distributed processing concepts", "Apache Spark (RDDs, DataFrames)", "Batch processing architectures"]
      },
      {
        title: "Real-Time Streaming & Orchestration",
        topics: ["Kafka & Spark Streaming", "Apache Airflow (scheduling, monitoring)", "Building streaming pipelines"]
      },
      {
        title: "Cloud Data Engineering",
        topics: ["AWS data services (Redshift, Glue, Kinesis)", "Azure data services (Synapse, Data Lake)", "Lakehouse architecture"]
      },
      {
        title: "Data Storage & Optimization",
        topics: ["Formats (Parquet, Avro)", "Partitioning & Bucketing", "Query optimization & Indexing"]
      },
      {
        title: "Engineering for Analytics & ML",
        topics: ["Feature stores", "ML pipelines support", "MLOps basics"]
      },
      {
        title: "Capstone & Career Prep",
        topics: ["End-to-end pipeline project", "Architecture defense", "Resume & Interview prep"]
      },
    ],
    recruiters: ["IBM", "Oracle", "Cisco", "Deloitte", "Wipro", "Mphasis"],
    reviews: [
      { rating: 5, text: "Confidence to work on end-to-end pipelines.", author: "Meera Nair", role: "Data Engineer" },
      { rating: 5, text: "Excellent coverage of Spark and Cloud.", author: "Kunal Joshi", role: "Cloud Data Analyst" },
    ],
  },
  {
    name: "Corporate Training Program",
    slug: "corporate-training",
    category: "Corporate",
    tagline: "Tailored skill-building programs for IT teams and professionals.",
    enrolledStudents: 240,
    duration: "2-12 Weeks",
    learningHours: "40-200+ Hours",
    rating: 5.0,
    imageId: 'course-corporate',
    videoPreview: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    brochureUrl: "/downloads/corporate-training-brochure.pdf",
    syllabusUrl: "/downloads/corporate-training-syllabus.pdf",
    fees: "Custom",
    highlights: [
      "Customized Curriculum: Tools and tools tailored to your needs.",
      "Industry Trainers: Experts with real-world IT experience.",
      "Hands-on, Project-Based Training.",
      "Team Deployment Ready from day one.",
      "Flexible Delivery: Online or Onsite.",
      "Continuous Dedicated Support."
    ],
    batchDetails: [
      { name: "Batch A", startDate: "Custom Date", timings: "Availability Based" },
      { name: "Batch B", startDate: "Custom Date", timings: "Flexible Hours" },
    ],
    tools: ["Python", "Data Engineering", "Prompt Engineering", "Cybersecurity", "AI/ML", "SQL", "Power BI", "Tableau", "Agentic AI", "GitHub"],
    learningPath: [
      { title: "Requirement Analysis", topics: ["Understand tech stack", "Identify skill gaps", "Define project goals"] },
      { title: "Curriculum Design", topics: ["Custom modules", "Select tools", "Design practical labs"] },
      { title: "Training Execution", topics: ["Hands-on learning", "Real datasets", "Custom environments"] },
      { title: "Project Implementation", topics: ["Domain-specific Capstone", "Finance, Healthcare, E-commerce, etc."] },
      { title: "Ready Assessment", topics: ["Tests & Evaluations", "Deployment feedback"] },
      { title: "Ongoing Support", topics: ["Advanced modules", "Upskilling sessions", "Refresher modules"] },
    ],
    recruiters: ["Amazon", "Google", "Deloitte", "Accenture", "TCS", "PwC", "IBM", "Wipro", "Flipkart", "Zoho", "Infosys", "Capgemini", "HCL"],
    reviews: [
      { rating: 5, text: "Exceptional custom program! Our cloud team was deployment-ready in just 6 weeks.", author: "Rohit Nair", role: "Engineering Manager", company: "Infosys" },
      { rating: 4, text: "The tailored curriculum aligned perfectly with our project needs.", author: "Shalini Verma", role: "HR Lead", company: "Wipro" },
    ],
  },
];
