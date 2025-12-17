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
    description: string;
  }[];
  recruiters: string[];
  reviews: {
    rating: number;
    text: string;
    author: string;
    role: string;
  }[];
  imageId: string;
};

export const courses: Course[] = [
  {
    name: "Data Science Program",
    slug: "data-science",
    category: "Data Science",
    tagline: "Become a job-ready Data Scientist with hands-on projects and mentorship.",
    enrolledStudents: 3200,
    duration: "16–20 Weeks",
    learningHours: "150+ Hours",
    rating: 4.8,
    imageId: 'course-data-science',
    highlights: [
      "Top Faculty & Mentors: Learn from experienced data scientists and analytics professionals.",
      "Curriculum with Practical Exposure: Work on datasets from finance, healthcare, and e-commerce.",
      "Real-Life Projects: Build and deploy end-to-end data pipelines and predictive models.",
      "Job Readiness Training: Resume workshops, mock interviews, and placement assistance.",
      "24/7 Support: Round-the-clock help from mentors and learning community.",
    ],
    batchDetails: [
      { name: "Batch 01 (Weekday)", startDate: "Nov 25, 2025", timings: "7 PM – 9 PM (IST)" },
      { name: "Batch 02 (Weekend)", startDate: "Dec 8, 2025", timings: "10 AM – 1 PM (IST)" },
    ],
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "SQL", "Power BI", "Tableau", "Jupyter Notebook", "TensorFlow (Intro)", "GitHub", "Excel"],
    learningPath: [
      { title: "Data Foundations", description: "Statistics, Python basics, and data manipulation" },
      { title: "Exploratory Data Analysis (EDA)", description: "Data cleaning, visualization, feature engineering" },
      { title: "Machine Learning", description: "Regression, classification, clustering" },
      { title: "Model Evaluation & Deployment", description: "MLOps basics and deployment pipelines" },
      { title: "Capstone Project", description: "Real-world predictive analysis on open datasets" },
      { title: "Career Readiness", description: "Resume building, interview prep, and hiring guidance" },
    ],
    recruiters: ["Amazon", "Google", "Deloitte", "Accenture", "TCS", "PwC", "IBM", "Wipro", "Flipkart", "Zoho"],
    reviews: [
      { rating: 5, text: "The Data Science course helped me land a role as a Data Analyst at Infosys! The projects and mentor support were excellent.", author: "Aditya Sharma", role: "Career Switcher" },
      { rating: 4, text: "Curriculum is very practical. You actually build models and dashboards instead of just learning theory.", author: "Vikram Iyer", role: "MBA Graduate" },
    ],
  },
  {
    name: "Data Analysis Program",
    slug: "data-analysis",
    category: "Data Analysis",
    tagline: "Master Excel, SQL, and Power BI to derive actionable business insights.",
    enrolledStudents: 2700,
    duration: "10–12 Weeks",
    learningHours: "100+ Hours",
    rating: 4.9,
    imageId: 'course-data-analysis',
    highlights: [
      "Industry Experts as Trainers: Learn from data analysts working at leading MNCs.",
      "Curriculum with Practical Exposure: Hands-on Excel, SQL, and Power BI training.",
      "Real-Life Projects: Analyze business data to create actionable insights.",
      "Job Readiness Focus: Resume building, case studies, and mock interviews.",
      "24/7 Support: Always-on chat and mentor support.",
    ],
    batchDetails: [
        { name: "Batch 01 (Evening)", startDate: "Nov 20, 2025", timings: "6:30 PM – 8:30 PM (IST)" },
        { name: "Batch 02 (Weekend)", startDate: "Dec 6, 2025", timings: "10 AM – 12:30 PM (IST)" },
    ],
    tools: ["Microsoft Excel", "SQL", "Power BI", "Tableau", "Google Sheets", "Python (Intro)", "Data Studio"],
    learningPath: [
        { title: "Data Fundamentals", description: "Understanding data types, collection, and cleaning" },
        { title: "Excel for Data Analysis", description: "Functions, charts, pivot tables" },
        { title: "SQL for Data Management", description: "Queries, joins, aggregations" },
        { title: "Visualization Tools", description: "Power BI and Tableau dashboards" },
        { title: "Project Work", description: "Business performance analysis case study" },
        { title: "Career Preparation", description: "Soft skills, portfolio development, and placement assistance" },
    ],
    recruiters: ["PwC", "Deloitte", "KPMG", "Infosys", "TCS", "Capgemini", "Zoho", "IBM", "HCL Technologies"],
    reviews: [
        { rating: 5, text: "From zero experience to building dashboards — the course gave me confidence to work with real data.", author: "Karan Malhotra", role: "College Student" },
        { rating: 4, text: "The mentors are amazing, and the Power BI projects were directly useful in my internship.", author: "Ananya Sethi", role: "Data Intern" },
    ],
  },
  {
    name: "AI/ML Program",
    slug: "ai-ml",
    category: "AI/ML",
    tagline: "Build and deploy advanced AI and Machine Learning models.",
    enrolledStudents: 2450,
    duration: "12–16 Weeks",
    learningHours: "120+ Hours",
    rating: 4.9,
    imageId: 'course-ai-ml',
    highlights: [
      "Top Industry Faculty & Trainers: Learn directly from AI engineers, data scientists, and research professionals.",
      "Curriculum with Practical Exposure: Every concept is paired with hands-on exercises.",
      "Real-Life Projects: Apply what you learn by building and deploying live AI/ML projects.",
      "Job Readiness: Includes resume preparation, interview coaching, and placement assistance.",
      "24/7 Support: Get round-the-clock mentor and community help.",
    ],
    batchDetails: [
        { name: "Batch 01 (Weekday)", startDate: "Dec 1, 2025", timings: "7 PM – 9 PM (IST)" },
        { name: "Batch 02 (Weekend)", startDate: "Dec 7, 2025", timings: "10 AM – 1 PM (IST)" },
    ],
    tools: ["Python", "TensorFlow", "Keras", "PyTorch", "Scikit-learn", "NumPy", "Pandas", "Matplotlib", "Jupyter Notebooks", "OpenCV"],
    learningPath: [
        { title: "Foundations of AI & ML", description: "Understand core algorithms, logic, and system design." },
        { title: "Applied Programming & Data Handling", description: "Learn Python, data preprocessing, and modeling." },
        { title: "Model Building & Deployment", description: "Train, test, and deploy models in real-world use cases." },
        { title: "Advanced Topics", description: "Deep Learning, NLP, and Computer Vision." },
        { title: "Capstone Project", description: "Build a complete, production-level AI system." },
        { title: "Career Acceleration", description: "Portfolio review, mock interviews, and job referrals." },
    ],
    recruiters: ["Google", "Microsoft", "NVIDIA", "Accenture", "TCS", "Infosys", "Zoho", "OpenAI", "Amazon Web Services (AWS)"],
    reviews: [
        { rating: 5, text: "Quantum Pod Tech’s AI/ML course gave me real project experience. The mentors were outstanding and helped me land my first AI internship.", author: "Ritika Verma", role: "B.Tech Student" },
        { rating: 5, text: "The Agentic AI program opened my eyes to how autonomous systems work. I now lead an AI automation team!", author: "Amit Shah", role: "AI Developer" },
        { rating: 4, text: "Affordable, structured, and mentor-led — highly recommended for anyone serious about AI.", author: "Sonia Gupta", role: "Career Switcher" },
    ],
  },
   {
    name: "Agentic AI Program",
    slug: "agentic-ai",
    category: "AI/ML",
    tagline: "Build autonomous AI agents with LangChain, OpenAI, and more.",
    enrolledStudents: 2450,
    duration: "12–16 Weeks",
    learningHours: "120+ Hours",
    rating: 5,
    imageId: 'course-agentic-ai',
    highlights: [
      "Learn from AI engineers and researchers from top tech companies.",
      "Curriculum is paired with hands-on exercises and real-world case studies.",
      "Build and deploy live Agentic AI projects.",
      "Job readiness training: resume prep, interview coaching, and placement assistance.",
      "24/7 Support: Get round-the-clock mentor and community help.",
    ],
    batchDetails: [
        { name: "Batch 01 (Weekday)", startDate: "Dec 1, 2025", timings: "7 PM – 9 PM (IST)" },
        { name: "Batch 02 (Weekend)", startDate: "Dec 7, 2025", timings: "10 AM – 1 PM (IST)" },
    ],
    tools: ["LangChain", "OpenAI API", "AutoGPT", "Hugging Face Transformers", "Pinecone", "Vector Databases", "Streamlit", "FastAPI"],
    learningPath: [
        { title: "Foundations of Agentic AI", description: "Understand core logic and system design." },
        { title: "Applied Programming & Data Handling", description: "Learn Python, data preprocessing, and modeling." },
        { title: "Model Building & Deployment", description: "Train, test, and deploy AI agents in real-world use cases." },
        { title: "Advanced Agentic Topics", description: "NLP, and Agentic AI automation." },
        { title: "Capstone Project", description: "Build a complete, production-level AI agent." },
        { title: "Career Acceleration", description: "Portfolio review, mock interviews, and job referrals." },
    ],
    recruiters: ["Google", "Microsoft", "NVIDIA", "Accenture", "TCS", "Infosys", "Zoho", "OpenAI", "Amazon Web Services (AWS)"],
    reviews: [
        { rating: 5, text: "The Agentic AI program opened my eyes to how autonomous systems work. I now lead an AI automation team!", author: "Amit Shah", role: "AI Developer" },
        { rating: 4, text: "Affordable, structured, and mentor-led — highly recommended for anyone serious about AI.", author: "Sonia Gupta", role: "Career Switcher" },
    ],
  },
  {
    name: "Quantum Computing Program",
    slug: "quantum-computing",
    category: "Emerging Tech",
    tagline: "Dive into the future of computation with Qiskit and IBM Quantum.",
    enrolledStudents: 1800,
    duration: "16–20 Weeks",
    learningHours: "140+ Hours",
    rating: 4.9,
    imageId: 'course-quantum-computing',
    highlights: [
      "Learn from Quantum Computing Experts: Sessions led by researchers and practitioners.",
      "Hands-on Qiskit Projects: Work directly with IBM Quantum tools and simulators.",
      "Real-World Applications: Explore quantum's impact on cryptography, AI, and finance.",
      "Career Readiness: Resume-building, mock interviews, and placement guidance.",
      "24×7 Support: Always-on mentor access and peer discussion channels.",
    ],
    batchDetails: [
      { name: "Batch 01 (Weekday)", startDate: "Dec 10, 2025", timings: "7 PM – 9 PM (IST)" },
      { name: "Batch 02 (Weekend)", startDate: "Dec 20, 2025", timings: "10 AM – 1 PM (IST)" },
    ],
    tools: ["Qiskit", "Python", "IBM Quantum Experience", "NumPy", "Matplotlib", "Jupyter Notebook", "OpenQASM", "Q#", "Quantum SDKs", "TensorFlow Quantum"],
    learningPath: [
      { title: "Quantum Foundations", description: "Quantum mechanics for computing: superposition, entanglement, measurement" },
      { title: "Programming for Quantum Systems", description: "Python and Qiskit fundamentals" },
      { title: "Quantum Circuits & Algorithms", description: "Grover’s, Deutsch-Jozsa, Shor’s algorithms" },
      { title: "Quantum Information & Operators", description: "Quantum states, gates, and measurement fidelity" },
      { title: "Quantum Simulation & Hardware Execution", description: "Run real circuits on IBM Quantum hardware" },
      { title: "Capstone Project", description: "Design and simulate a full quantum algorithm" },
      { title: "Career Preparation", description: "Certification training, resume building, and job assistance" },
    ],
    recruiters: ["IBM", "Microsoft Quantum", "Amazon Braket", "Google Quantum AI", "TCS", "Deloitte", "Infosys", "Accenture", "Capgemini", "PwC"],
    reviews: [
      { rating: 5, text: "Quantum Pod’s Quantum Computing course gave me the foundation I needed to transition from data science into quantum algorithm development.", author: "Riya Mehta", role: "Data Scientist (Career Switcher)" },
      { rating: 5, text: "The capstone project helped me understand how to implement quantum algorithms practically — and I even ran my code on real IBM Quantum hardware!", author: "Anirudh Bansal", role: "M.Tech Student" },
      { rating: 4, text: "Excellent mentorship and hands-on sessions. The Qiskit labs are the highlight of the program.", author: "Tanvi Agarwal", role: "Physics Graduate" },
    ],
  },
  {
    name: "Cyber Security Program",
    slug: "cyber-security",
    category: "Security",
    tagline: "Become an ethical hacker and cybersecurity expert with hands-on labs.",
    enrolledStudents: 2100,
    duration: "20–24 Weeks",
    learningHours: "160+ Hours",
    rating: 4.8,
    imageId: 'course-cyber-security',
    highlights: [
      "Master End-to-End Cyber Security: From fundamentals to advanced enterprise security.",
      "Hands-on Labs & Real-World Projects: Work with ethical hacking, VAPT, SIEM, and cloud security simulations.",
      "Industry-Ready Curriculum: Aligned with CompTIA Security+, CEH, and CISSP standards.",
      "Job Readiness Training: Resume building, mock interviews, certification prep, and placement support.",
      "24×7 Support: Get round-the-clock guidance from security experts and mentors.",
    ],
    batchDetails: [
      { name: "Batch 01 (Weekday)", startDate: "Nov 28, 2025", timings: "7 PM – 9 PM (IST)" },
      { name: "Batch 02 (Weekend)", startDate: "Dec 7, 2025", timings: "10 AM – 1 PM (IST)" },
    ],
    tools: ["Kali Linux", "Metasploit", "Wireshark", "Burp Suite", "Nmap", "Splunk", "Nessus", "IBM QRadar", "Snort", "AWS Cloud Security", "Microsoft Azure Security", "Python for Security"],
    learningPath: [
      { title: "Cyber Security Foundations", description: "Threat landscape, governance, compliance, and risk management" },
      { title: "Network & System Security", description: "Firewalls, IDS/IPS, VPNs, and network hardening" },
      { title: "Ethical Hacking & Penetration Testing", description: "VAPT, scanning, exploitation, and reporting" },
      { title: "Identity & Access Management", description: "Authentication, privilege models, directory services" },
      { title: "Cloud & Application Security", description: "AWS, Azure, and DevSecOps fundamentals" },
      { title: "Incident Response & Forensics", description: "Threat analysis, malware investigation, digital forensics" },
      { title: "Capstone Project", description: "Design and defend a secure enterprise infrastructure" },
      { title: "Career Readiness & Certifications", description: "Security+, CEH, CISSP, CCSP exam preparation" },
    ],
    recruiters: ["IBM", "Accenture", "Deloitte", "PwC", "TCS", "EY", "Capgemini", "Infosys", "Wipro", "Cisco", "Microsoft", "Palo Alto Networks", "Check Point"],
    reviews: [
      { rating: 5, text: "The Cyber Security course helped me transition from IT support to a full-time Security Analyst role. The labs and mentors were top-notch!", author: "Sandeep Mehta", role: "Security Analyst at Deloitte" },
      { rating: 5, text: "Hands-on exposure to ethical hacking and SIEM tools made this course worth every minute.", author: "Priya Singh", role: "BCA Graduate" },
      { rating: 4, text: "Excellent certification alignment and practical coverage. Highly recommended for career switchers.", author: "Nikhil Reddy", role: "Network Engineer" },
    ],
  },
  {
    name: "Data Engineering Program",
    slug: "data-engineering",
    category: "Data Engineering",
    tagline: "Build scalable data pipelines with Spark, Airflow, and cloud technologies.",
    enrolledStudents: 2850,
    duration: "20–24 Weeks",
    learningHours: "160+ Hours",
    rating: 4.9,
    imageId: 'course-data-engineering',
    highlights: [
      "Learn from Top Industry Engineers and Cloud Architects.",
      "End-to-End Data Engineering Curriculum: from Python, SQL, and ETL to Big Data and Cloud.",
      "Hands-on Cloud Labs: Work directly on AWS, Azure, or Google Cloud environments.",
      "Real-World Projects: Build and deploy full-scale data pipelines and analytical systems.",
      "Career-Ready Focus: Resume building, mock interviews, and placement assistance.",
      "24×7 Support: Get access to expert mentors and a learner community.",
    ],
    batchDetails: [
      { name: "Batch 01 (Weekday)", startDate: "Nov 30, 2025", timings: "7 PM – 9 PM (IST)" },
      { name: "Batch 02 (Weekend)", startDate: "Dec 10, 2025", timings: "10 AM – 1 PM (IST)" },
    ],
    tools: ["Python", "SQL", "Apache Spark", "Hadoop", "Kafka", "Airflow", "AWS (S3, Redshift, Glue)", "Azure Data Lake", "Power BI", "Snowflake", "Google BigQuery", "Docker", "GitHub"],
    learningPath: [
      { title: "Data Foundations", description: "Python, SQL, and data modelling essentials" },
      { title: "ETL & Data Warehousing", description: "Data pipelines, orchestration, and transformation logic" },
      { title: "Big Data Systems", description: "Apache Spark, Hadoop, and scalable processing" },
      { title: "Streaming & Orchestration", description: "Kafka, Airflow, and real-time data workflows" },
      { title: "Cloud Data Engineering", description: "AWS, Azure, and GCP data ecosystems" },
      { title: "Data Optimization & Storage", description: "Parquet, ORC, partitioning, indexing" },
      { title: "ML & Analytics Integration", description: "Enabling ML pipelines and business intelligence dashboards" },
      { title: "Capstone Project", description: "Build an end-to-end enterprise-grade data pipeline" },
      { title: "Career Readiness", description: "Resume workshops, mock interviews, and hiring preparation" },
    ],
    recruiters: ["Google", "Microsoft", "AWS", "Deloitte", "TCS", "Accenture", "PwC", "Infosys", "Zoho", "IBM", "Snowflake", "Databricks"],
    reviews: [
      { rating: 5, text: "The Data Engineering course gave me the confidence to work on end-to-end pipelines. The mentors were fantastic!", author: "Meera Nair", role: "Data Engineer at Accenture" },
      { rating: 5, text: "Excellent coverage of Spark, Airflow, and Cloud integration — the projects were industry-relevant.", author: "Kunal Joshi", role: "Cloud Data Analyst" },
      { rating: 4, text: "Quantum Pod’s mentorship made my transition from developer to data engineer seamless.", author: "Priyanka Sharma", role: "Career Switcher" },
    ],
  },
];
