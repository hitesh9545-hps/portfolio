/**
 * Shimp Hitesh Pravin / Hitesh Pravin Shimpi - Portfolio Data Configuration
 * 
 * Sourced directly from official verified resume document:
 * Name on Resume: Hitesh Pravin Shimpi
 * College: RC Patel Institute of Technology, Shirpur
 * Program: B.Tech (Artificial Intelligence and Data Science)
 * Year: 2nd Year (3rd Semester)
 */

export interface SkillItem {
  name: string;
  category: 'Programming' | 'AI & Computer Vision' | 'Computer Science & OOP' | 'Web & Tools';
  status: 'Proficient' | 'Learning / Practicing' | 'Certified';
  notes?: string;
  level?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'AI & Computer Vision' | 'Automation & IoT' | 'Data Science' | 'Machine Learning';
  description: string;
  techUsed: string[];
  status: 'Completed' | 'Planned Idea' | 'In Progress';
  githubUrl: string | null;
  liveDemoUrl: string | null;
  howItWorks?: string;
  highlights: string[];
}

export interface EducationItem {
  qualification: string;
  institution: string;
  year: string;
  score: string;
  details?: string;
  statusBadge?: string;
}

export interface CertificationItem {
  id: number;
  title: string;
  issuerOrCategory: string;
  verified: boolean;
}

export interface AchievementItem {
  title: string;
  category: string;
  scoreOrAward: string;
  description: string;
}

export interface JourneyMilestone {
  step: number;
  title: string;
  status: string;
  description: string;
  tags: string[];
}

export const portfolioData = {
  personal: {
    fullName: "Shimpi Hitesh Pravin",
    alternateSpelling: "Hitesh Pravin Shimpi",
    shortName: "Hitesh Shimpi",
    initials: "SHP",
    title: "AI & Data Science Student",
    academicLevel: "Second-Year Undergraduate Student (3rd Semester)",
    collegeName: "RC Patel Institute of Technology, Shirpur",
    location: "Shirpur / Jalgaon, Maharashtra, India",
    headline: "AI & Data Science Undergrad. Computer Vision & Systems Builder.",
    heroSubtitle: "Second-year Artificial Intelligence and Data Science student at RC Patel Institute of Technology, Shirpur (CGPA: 8.12). Passionate about Python, Computer Vision, C programming, and building real-world automated solutions.",
    
    // Official summary directly from resume
    resumeSummary: "Motivated and passionate learner with a strong interest in programming, problem-solving, and building real-world solutions. Eager to learn, collaborate, and contribute to innovative projects while improving technical and leadership skills.",
    
    careerObjective: "To apply foundational AI, machine learning, and computer vision skills to solve practical problems, while continuously refining technical craftsmanship, competitive coding, and collaborative leadership.",
    
    // Official Verified Contact Coordinates from Resume
    email: "hitu9545@gmail.com",
    phone: "+91 9545953020",
    codeChefUsername: "rcpit251108042",
    codeChefUrl: "https://www.codechef.com/users/rcpit251108042",
    
    // Editable placeholders for profiles not included on resume:
    linkedIn: "",
    linkedInPlaceholder: "[Add LinkedIn Profile]",
    github: "",
    githubPlaceholder: "[Add GitHub Profile]",
    
    // Verified Local Resume File
    resumeFileName: "Hitesh_Pravin_Shimpi_Resume.png",
    resumeFileType: "image/png",

    // Personal Details from Resume
    dateOfBirth: "01 November 2007",
    gender: "Male",
    languagesKnown: ["Marathi", "Hindi", "English"],

    // Hobbies from Resume
    hobbies: ["Management", "Sports", "Making Projects", "Innovating New Ideas"],

    // Strengths from Resume
    strengths: [
      "Quick Learner",
      "Good Communication",
      "Leadership & Teamwork",
      "Problem Solving",
      "Time Management"
    ]
  },

  aboutCards: [
    {
      title: "Current Focus",
      value: "B.Tech in AI & DS",
      description: "2nd Year (3rd Sem) at RC Patel Institute of Technology, Shirpur. Consistent academic performer with 8.12 CGPA.",
      icon: "Cpu"
    },
    {
      title: "Core Expertise",
      value: "C, Python & Computer Vision",
      description: "Hands-on projects with OpenCV, TensorFlow, Keras, Data Structures, OOP, and hardware control circuits.",
      icon: "Brain"
    },
    {
      title: "Leadership & Goals",
      value: "Event Organizer & Builder",
      description: "Active coordinator in college academic initiatives, district sports player, and certified in prompt engineering & AI tools.",
      icon: "Target"
    }
  ],

  // Verified Technical Skills from Resume
  skills: [
    // Programming
    {
      name: "C Programming",
      category: "Programming",
      status: "Proficient",
      notes: "Core academic programming, memory concepts, pointer arithmetic, and procedural problem-solving.",
      level: "Core Language"
    },
    {
      name: "Python (Learning)",
      category: "Programming",
      status: "Learning / Practicing",
      notes: "Applied scripting, computer vision pipelines, and deep learning libraries (OpenCV, TensorFlow, Keras).",
      level: "Active Focus"
    },

    // Computer Science & OOP
    {
      name: "Data Structures & Algorithms",
      category: "Computer Science & OOP",
      status: "Learning / Practicing",
      notes: "Arrays, linked lists, stacks, queues, searching/sorting algorithms, and CodeChef competitive practice.",
      level: "Foundations"
    },
    {
      name: "OOP Concepts",
      category: "Computer Science & OOP",
      status: "Learning / Practicing",
      notes: "Classes, encapsulation, inheritance, polymorphism, and modular software architecture.",
      level: "Foundations"
    },

    // AI & Computer Vision
    {
      name: "Computer Vision & OpenCV",
      category: "AI & Computer Vision",
      status: "Proficient",
      notes: "Real-time video stream processing, face detection cascades, image matrix transformations.",
      level: "Applied in Projects"
    },
    {
      name: "TensorFlow & Keras",
      category: "AI & Computer Vision",
      status: "Learning / Practicing",
      notes: "Convolutional neural networks for image classification (applied in Face Mask Detection).",
      level: "Applied in Projects"
    },
    {
      name: "Prompt Engineering & Generative AI",
      category: "AI & Computer Vision",
      status: "Certified",
      notes: "Certified in Prompt Engineering and Fetch AI technologies.",
      level: "Certified"
    },

    // Web & Tools
    {
      name: "HTML & CSS (Basics)",
      category: "Web & Tools",
      status: "Proficient",
      notes: "Web page structure, semantic layout tags, and foundational CSS styling.",
      level: "Foundations"
    },
    {
      name: "CodeChef Competitive Coding",
      category: "Web & Tools",
      status: "Proficient",
      notes: "Active competitive coder on CodeChef (Handle: rcpit251108042) with Main & Matrices certifications.",
      level: "Active Practice"
    },
    {
      name: "GitHub Copilot Engineering",
      category: "Web & Tools",
      status: "Certified",
      notes: "Certified in AI-assisted developer workflows and GitHub Copilot tooling.",
      level: "Certified"
    },
    {
      name: "MS Office & MSCIT",
      category: "Web & Tools",
      status: "Certified",
      notes: "Certified in MSCIT, documentation, Excel analysis, and presentation delivery.",
      level: "Certified"
    }
  ] as SkillItem[],

  // Verified Projects from Resume + Forward-Looking Ideas
  projects: [
    {
      id: "face-mask-detection",
      title: "Face Mask Detection System",
      category: "AI & Computer Vision",
      description: "A real-time computer vision system that detects whether a person is wearing a mask or not using deep learning models and webcam streams.",
      techUsed: ["Python", "OpenCV", "TensorFlow", "Keras"],
      status: "Completed",
      githubUrl: null, // Editable placeholder
      liveDemoUrl: null,
      howItWorks: "Processes live video frames, extracts facial regions of interest using OpenCV, and runs classification through a trained TensorFlow/Keras neural network to classify 'Mask' vs 'No Mask' in real-time.",
      highlights: [
        "Real-time video stream detection with bounding box color coding",
        "Trained image classification model using TensorFlow and Keras",
        "Demonstrated practical computer vision application during pandemic safety requirements"
      ]
    },
    {
      id: "automatic-water-system",
      title: "Automatic Water System",
      category: "Automation & IoT",
      description: "An automatic water dispensing system designed for hygienic human use that dispenses water automatically upon glass proximity.",
      techUsed: ["IR Sensor", "Water Pump", "Power Supply", "Control Circuit"],
      status: "Completed",
      githubUrl: null,
      liveDemoUrl: null,
      howItWorks: "An IR sensor detects the presence of a glass under the dispenser. Once detected, the control circuit triggers the water pump to dispense water automatically, and shuts off immediately when the glass is removed.",
      highlights: [
        "Touchless, hygienic water dispensing mechanism",
        "Integrated infrared proximity sensing with electro-mechanical pump control",
        "Reliable circuit design ensuring energy conservation and zero water overflow"
      ]
    },
    {
      id: "student-performance",
      title: "Student Performance Analysis",
      category: "Data Science",
      description: "Analyze academic metrics, attendance, and study factors to uncover predictive correlations in student results.",
      techUsed: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
      status: "Planned Idea",
      githubUrl: null,
      liveDemoUrl: null,
      highlights: [
        "Statistical profiling of study habits vs exam performance",
        "Data cleaning and correlation heatmaps with Matplotlib",
        "Actionable educational insights for academic coaching"
      ]
    },
    {
      id: "ml-prediction-model",
      title: "Machine Learning Prediction Model",
      category: "Machine Learning",
      description: "A structured machine learning pipeline built on public datasets to evaluate regression and classification algorithms.",
      techUsed: ["Python", "scikit-learn", "Pandas", "NumPy"],
      status: "Planned Idea",
      githubUrl: null,
      liveDemoUrl: null,
      highlights: [
        "Feature scaling, normalization, and train/test splits",
        "Performance evaluation using MAE, RMSE, and confusion matrices",
        "End-to-end model inference script"
      ]
    }
  ] as ProjectItem[],

  // Educational History Directly from Resume
  education: [
    {
      qualification: "B.Tech in Artificial Intelligence & Data Science",
      institution: "RC Patel Institute of Technology, Shirpur",
      year: "2026 (Currently 2nd Year, 3rd Sem)",
      score: "CGPA: 8.12",
      details: "Sem 1 SGPA: 8.10 | Sem 2 SGPA: 8.14 | Consistently strong academic performance in core technical curriculum.",
      statusBadge: "Currently Pursuing"
    },
    {
      qualification: "12th (HSC - Science)",
      institution: "Swami Samarth Junior College, Jalgaon",
      year: "2025",
      score: "92.60%",
      details: "High distinction in physics, chemistry, and mathematics foundational coursework.",
      statusBadge: "Completed"
    },
    {
      qualification: "10th (SSC)",
      institution: "Jalgaon",
      year: "2023",
      score: "92.80%",
      details: "Outstanding performance with distinction in state board secondary education.",
      statusBadge: "Completed"
    }
  ] as EducationItem[],

  // Leadership & Extracurricular Experience from Resume
  leadership: {
    title: "Leadership & College Initiatives",
    organization: "RC Patel Institute of Technology, Shirpur",
    description: "Actively involved in organizing academic events, group activities, and college initiatives.",
    responsibilities: [
      "Demonstrated leadership by coordinating with team members and ensuring smooth execution of technical and academic tasks.",
      "Skilled in handling different situations calmly, solving problems effectively, and making prompt decisions.",
      "Good communicator and motivator with the ability to manage time, resources, and people efficiently.",
      "Always ready to take responsibility and contribute towards team success."
    ]
  },

  // 11 Verified Certifications from Resume
  certifications: [
    { id: 1, title: "GDG COE Certificate", issuerOrCategory: "Google Developer Groups Center of Excellence", verified: true },
    { id: 2, title: "GitHub Copilot Engineering", issuerOrCategory: "GitHub / Developer Engineering", verified: true },
    { id: 3, title: "CodeChef - Main", issuerOrCategory: "CodeChef Competitive Programming", verified: true },
    { id: 4, title: "CodeChef - Matrices", issuerOrCategory: "CodeChef Matrix Algorithms", verified: true },
    { id: 5, title: "Dataverse Certificate", issuerOrCategory: "Data Science & Cloud", verified: true },
    { id: 6, title: "Fetch AI Certificate", issuerOrCategory: "Autonomous Agents & AI", verified: true },
    { id: 7, title: "Prompt Engineering Certificate", issuerOrCategory: "Generative AI & LLM Prompting", verified: true },
    { id: 8, title: "Convergeous Certificate", issuerOrCategory: "Technical Symposium / Innovation", verified: true },
    { id: 9, title: "MSCIT Certificate", issuerOrCategory: "Maharashtra State Info Tech", verified: true },
    { id: 10, title: "Skill India Certificate", issuerOrCategory: "Govt. of India Skill Development", verified: true },
    { id: 11, title: "Poster Making Certificate", issuerOrCategory: "Creative Communication & Presentation", verified: true }
  ] as CertificationItem[],

  // Verified Achievements from Resume
  achievements: [
    {
      title: "Consistent Academic Performer",
      category: "Academics",
      scoreOrAward: "8.12 CGPA",
      description: "Sem 1: 8.10 SGPA | Sem 2: 8.14 SGPA in B.Tech AI & Data Science at RCPIT Shirpur."
    },
    {
      title: "12th (HSC) Distinction",
      category: "Academics",
      scoreOrAward: "92.60%",
      description: "Awarded high distinction at Swami Samarth Junior College, Jalgaon."
    },
    {
      title: "10th (SSC) Distinction",
      category: "Academics",
      scoreOrAward: "92.80%",
      description: "Secured top academic tier in secondary school board examinations."
    },
    {
      title: "District Level Player in Sports",
      category: "Sports & Fitness",
      scoreOrAward: "District Level",
      description: "Represented at the district level, demonstrating discipline, competitive stamina, and team spirit."
    }
  ] as AchievementItem[],

  // Learning Journey Milestones
  learningJourney: [
    {
      step: 1,
      title: "Programming Foundations & C Language",
      status: "Completed",
      description: "Mastered procedural programming in C, algorithmic logic, pointers, and memory manipulation.",
      tags: ["C Programming", "Logic", "Algorithms"]
    },
    {
      step: 2,
      title: "Object-Oriented Programming & Data Structures",
      status: "In Progress",
      description: "Practicing DSA and OOP principles, solving coding challenges on CodeChef (Handle: rcpit251108042).",
      tags: ["CodeChef", "DSA", "OOP", "Competitive Coding"]
    },
    {
      step: 3,
      title: "Computer Vision & AI Applications",
      status: "Completed Project",
      description: "Built and deployed a real-time Face Mask Detection System with OpenCV, TensorFlow, and Keras.",
      tags: ["OpenCV", "TensorFlow", "Keras", "Deep Learning"]
    },
    {
      step: 4,
      title: "Hardware Automation & Embedded Systems",
      status: "Completed Project",
      description: "Designed and implemented an Automatic Water Dispensing System using IR sensor circuits and relays.",
      tags: ["Sensors", "Automation", "IoT", "Circuits"]
    },
    {
      step: 5,
      title: "Advanced AI, Machine Learning & Internships",
      status: "Active Focus",
      description: "Pursuing certifications in Generative AI, Prompt Engineering, Fetch AI, and preparing for technical internships.",
      tags: ["Fetch AI", "Prompt Engineering", "Industry Readiness"]
    }
  ]
};
