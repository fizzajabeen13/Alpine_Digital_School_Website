/* ===========================================
   HERO
=========================================== */

export const facultyHero = {
  badge: "Our Faculty",
  title: "Meet Our Educators & Academic Leaders",
  description:
    "Our experienced faculty members are committed to academic excellence, innovation, student development, and preparing learners for the future.",
  image: "/images/hero/faculty_hero.png",
};

/* ===========================================
   PRINCIPAL
=========================================== */

export const principalData = {
  name: "M Imran Younas",
  designation: "Principal & Director",
  badge: "Executive Principal",
  image: "/images/faculty/Principal.png",

  qualification: "M.Sc. (Mathematics), MBA (HRM)",
  experience: "24+ Years",
  email: "principal@alpineschool.edu.pk",

  quote:
    "Education is not merely the pursuit of knowledge—it is the journey of shaping character, inspiring confidence, encouraging curiosity, and empowering every learner to become a responsible and compassionate leader.",

  message: [
    "Dear Students, Parents, and Visitors,",
    
    "Welcome to The Alpine Digital School, where academic excellence, innovation, and character come together to prepare students for the future.",
    
    "Our goal is to provide a dynamic learning environment that combines strong academics with digital literacy, STEM, coding, robotics, artificial intelligence awareness, and critical thinking. We inspire students to become confident, creative, and responsible lifelong learners.",
    
    "We believe every child has unique potential, and our dedicated educators are committed to nurturing both academic achievement and values such as integrity, leadership, discipline, and respect. Together with our parents, we strive to help every student discover their strengths and achieve excellence.",
    
    "Thank you for visiting our website. We invite you to explore our programs and join us in shaping the leaders of tomorrow.",
  ],
  
    achievements: [
    "24+ Years Educational Leadership",
    "Academic Excellence Award",
    "Modern Education Advocate",
    "Student Development Specialist",
  ],
};

/* ===========================================
   COORDINATORS
=========================================== */

export const coordinators = [
  {
    name: "Saba Almas",
    designation: "Pre-School Coordinator",
    image: "/images/faculty/Saba.png",

    qualification: "M.A. (Urdu)",
    experience: "5 Years",
    email: "farhansaba308@gmail.com",

    description:
      "As the Pre-School Coordinator, I am dedicated to creating a safe, nurturing, and joyful learning environment. I work closely with teachers and families to ensure every child receives a strong foundation for lifelong learning and development.",
  },

  {
    name: "Maria Liaqat",
    designation: "Core Junior School Coordinator",
    image: "/images/faculty/Maria.png",

    qualification: "M.Sc. (Mathematics), B.Ed",
    experience: "6 Years",
    email: "mariach4888@gmail.com",

    description:
      "As the Core Junior School Coordinator, I oversee academic excellence and student development while supporting teachers in delivering high-quality education. I am committed to creating a positive, collaborative, and nurturing learning environment.",
  },

  {
    name: "Parveen Kousar",
    designation: "Plus Junior School Coordinator",
    image: "/images/faculty/Parveen.png",

    qualification: "M.A. (Islamiat), B.Ed",
    experience: "18 Years",
    email: "sajjadanwar6161@gmail.com",

    description:
      "I am Parveen Kousar from Haroonabad. My teaching philosophy focuses on creating an engaging classroom where students feel comfortable.  With 18 years of teaching experience, my goal is to build trust while fostering a positive and supportive learning environment.",
  },

  {
    name: "Iqra Munawar",
    designation: "High School Coordinator",
    image: "/images/faculty/Iqra.png",

    qualification: "M.Phil. (Analytical Chemistry)",
    experience: "2 Years",
    email: "iqramunawar562@gmail.com",

    description:
      "As a Science Teacher, I simplify scientific concepts through interactive and hands-on learning. My goal is to develop students' curiosity, analytical thinking, and confidence while fostering a passion for scientific discovery.",
  },
];

export const administration = [
  {
    name: "Naila Aslam",
    featured: false,
    designation: "Administrator",
    image: "/images/faculty/Naila.png",
    qualification: "M.Sc. Mathematics, B.Ed",
    experience: "6 Years",
    email: "nailach805@gmail.com",
    description:
      "As an Administrative Officer, I ensure the smooth and efficient operation of school activities through effective organization, coordination, and communication. I am committed to supporting students, staff, and parents with professionalism and care.",
  },

  {
    name: "Moiza Khan",
    featured: false,
    designation: "Administrator",
    image: "/images/faculty/Moiza.png",
    qualification: "MCS",
    experience: "3 Years",
    email: "khanmoiza364@gmail.com",
    description:
      "As the first point of contact, I warmly welcome students, parents, and visitors while ensuring efficient communication and administrative support. I am dedicated to creating a friendly, organized, and professional school environment.",
  },
];

/* ===========================================
   LEADERSHIP VALUES
=========================================== */

export const leadershipValues = [
  "Excellence",
  "Integrity",
  "Innovation",
  "Compassion",
  "Leadership",
];

/* ===========================================
   FEATURED DEVELOPER
=========================================== */

export const featuredDeveloper = {
  featured: true,

  name: "Fizza Jabeen",

  designation:
    "Website Developer • AI & Full Stack Web Developer • IT Teacher & Trainer",

  department: "IT Department",

  image: "/images/faculty/faculty-gallery/fizza-1.png",

  qualification: [
    "BS Computer Science",
    "BS Software Engineering",
  ],

  experience: [
    "AI Solutions Development",
    "Full Stack Web Development",
    "Website Development",
    "Course Instructor",
  ],

  introduction:
    "Fizza Jabeen is the developer of the Alpine Digital School website and leads the school's digital initiatives. She specializes in AI-powered solutions, modern web development, automation, and practical technology education. Alongside teaching IT and AI concepts, she works on building innovative digital systems that enhance learning and improve the school's online presence.",

  roles: [
    "Website Developer",
    "AI Solutions Developer",
    "Full Stack Web Developer",
    "IT Teacher",
    "AI Instructor",
    "Course Trainer",
  ],

  expertise: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Prisma",
    "PostgreSQL",
    "AI Integration",
    "Prompt Engineering",
    "Tailwind CSS",
    "REST APIs",
  ],

  achievements: [
    "Developer of Alpine Digital School Website",
    "AI & Full Stack Web Developer",
    "Built multiple AI-powered applications",
    "Designed modern academic management systems",
    "Technology Trainer",
    "Website & Automation Specialist",
  ],

  social: {
    github: "https://github.com/fizzajabeen13",
    linkedin: "https://linkedin.com/in/fizza-jabeen-13ch",
    portfolio: "https://fizzaos.vercel.app/",
  },
};

/* ===========================================
   FACULTY DIRECTORY
=========================================== */

export type FacultyMember = {
  id: number;
  name: string;
  designation: string;
  department: string;
  image: string;
  qualification: string;
  experience: string;
  subjects: string[];
  achievements: string[];
  email: string;
  description: string;
  featured?: boolean;
};

export const facultyDirectory: FacultyMember[] = [
  {
    id: 1,
    name: "Fizza Jabeen",
    featured: true,
    designation: "IT Teacher & AI Instructor",
    department: "IT, STEM and Robotics",
    image: "/images/faculty/Fizza.png",
    qualification: "BS Computer Science",
    experience: "3 Years",
    subjects: [
      "Computer Science",
      "Artificial Intelligence",
      "Web Development",
    ],
    achievements: [
      "AI Integration and Full Stack Developer",
    ],
    email: "fizzajabeen13@gmail.com",
    description:
      "Fizza Jabeen is an IT Teacher, AI Instructor, and Full Stack Web Developer passionate about technology, practical learning, and digital innovation. She specializes in computer science, artificial intelligence, and web development, inspiring students to develop problem-solving skills, creativity, and confidence in technology.",
  },

  {
    id: 2,
    name: "Saira Aslam",
    featured: false,

    designation: "IT Developer & Teacher",
    department: "IT, STEM and Robotics",
    image: "/images/faculty/SairaAslam.png",
    qualification: "BS Information Technology, B.Ed",
    experience: "4 Years",
    subjects: ["Computer", "Robotics, STEM"],
    achievements: ["Technical Excellence"],
    email: "sairaaslam970@gmail.com",
    description:
      "I am Saira Aslam, a BS Information Technology graduate and a passionate STEM Robotics & IT Teacher. I enjoy teaching Robotics, Coding, Artificial Intelligence, and Computer Science through practical and interactive learning. My goal is to inspire students with future-ready digital skills, creativity, and confidence, preparing them to succeed in the modern world.",
  },

  {
    id: 3,
    name: "Saira Zahid",
    featured: false,
    designation: "IT Developer and Teacher",
    department: "IT, STEM and Robotics",
    image: "/images/faculty/SairaZahid.png",
    qualification: "ADP(CS), BS Information Technology",
    experience: "1.5 Years",
    subjects: ["STEM, Robotics, Digital Literacy"],
    achievements: ["Digital Innovation"],
    email: "shabanazahid97@gmail.com",
    description:
      "I am Saira Zahid, a BS Information Technology graduate and a dedicated STEM Robotics & IT Teacher. I am passionate about teaching Robotics, Coding, Artificial Intelligence, and Computer Science through engaging and practical learning experiences. My mission is to empower students with future-ready digital skills, critical thinking, and creativity, helping them become confident learners and innovators.",
  },

  {
    id: 4,
    name: "Mahpara",
    featured: false,
    designation: "Science Teacher",
    department: "Science",
    image: "/images/faculty/Mahpara.png",
    qualification: "BS Biotechnology",
    experience: "3 Years",
    subjects: ["Chemistry", "Biology"],
    achievements: [
      "Laboratory expert",
      "Research mindset"
    ],
    email: "jabeenmahpara08@gmail.com",
    description:
      "I am a passionate Science Teacher with a background in Biotechnology and three years of teaching experience. I focus on interactive, practical learning to inspire curiosity, critical thinking, and academic excellence in every student.",
  },

  {
    id: 5,
    name: "Maryam Fatima",
    featured: false,
    designation: "Science Teacher",
    department: "Science",
    image: "/images/faculty/Maryam.png",
    qualification: "M.Sc Botany",
    experience: "1 Year",
    subjects: ["Science"],
    achievements: ["Science Educator"],
    email: "bintehussain039@gmail.com",
    description:
      "I am a dedicated Science Teacher committed to making learning engaging, interactive, and meaningful. Through practical activities and concept-based teaching, I inspire curiosity, critical thinking, and a lifelong passion for science.",
  },

  {
    id: 6,
    name: "Kaleem Amin",
    featured: false,
    designation: "Spoken English Trainer",
    department: "English",
    image: "/images/faculty/Kaleem.png",
    qualification: "M.A English, B.Edu",
    experience: "10 Years",
    subjects: ["Spoken English"],
    achievements: ["Communication Coach"],
    email: "kaleemamin5227@gmail.com",
    description:
      "With 10+ years of teaching and 2 years of management experience, I have empowered numerous students to achieve successful careers across diverse fields. My commitment to excellence and student-focused approach has earned consistent satisfaction from both learners and institutions, establishing a proven record of impactful, results-driven education and leadership.",
  },

  {
    id: 7,
    name: "Asma Khawar",
    featured: false,
    designation: "English Teacher",
    department: "English",
    image: "/images/faculty/Asima.png",
    qualification: "BS English",
    experience: "3 Years",
    subjects: ["English"],
    achievements: ["English Proficiency"],
    email: "sheraz333@gmail.com",
    description:
      "I am passionate about helping students develop strong communication, reading, and writing skills. Through engaging lessons, I foster creativity, critical thinking, and a lifelong appreciation for the English language.",
  },

  
  {
    id: 8,
    name: "Mehwish Khalid",
    featured: false,
    designation: "Spoken English Trainer",
    department: "English",
    image: "/images/faculty/Mehwish.png",
    qualification: "BS English Literature",
    experience: "2 Years",
    subjects: ["Spoken English", "English"],
    achievements: ["Literary Appreciation"],
    email: "Meshiimehwish178@gmail.com ",
    description:
      "I am Mehwish Khalid, a dedicated Spoken English Trainer with a BS in English Literature and two years of teaching experience. I am passionate about helping students develop confidence in speaking English through interactive and student-centered learning. My teaching approach emphasizes communication, critical thinking, and practical language use.",
  },

    {
    id: 9,
    name: "Yasir Ali",
    featured: false,
    designation: "Mathematics Teacher",
    department: "Mathematics",
    image: "/images/faculty/Yasir.png",
    qualification: "M.Sc Statistics, B.Ed",
    experience: "12 Years",
    subjects: ["Mathematics"],
    achievements: ["Mathematical Excellence"],
    email: "yasir9488@gmail.com",
    description:
      "As a Mathematics Teacher, I inspire students to think critically and approach challenges with confidence. Through interactive learning, I help build a strong foundation in mathematics and analytical reasoning.",
  },

  {
    id: 10,
    name: "Rashida Bashir",
    featured: false,
    designation: "Mathematics Teacher",
    department: "Mathematics",
    image: "/images/faculty/Rashida.png",
    qualification: "M.Phill Mathematics",
    experience: "2 Years",
    subjects: ["Mathematics"],
    achievements: ["Practical Mathematics"],
    email: "bashirrashida597@gmail.com",
    description:
      "I am a dedicated Mathematics Teacher committed to making mathematical concepts simple, engaging, and practical. My goal is to develop logical thinking, problem-solving skills, and confidence in every student.",
  },
  {
    id: 11,
    name: "Faiza Muneer",
    featured: false,
    designation: "Islamic Studies Teacher",
    department: "Islamic Studies",
    image: "/images/faculty/Faiza.png",
    qualification: "M.Sc. Mathematics",
    experience: "4 Years",
    subjects: ["Islamic Studies", "Quran"],
    achievements: ["Values Excellence"],
    email: "faizamuneer48@gmail.com",
    description:
      "I am Faiza Muneer, a dedicated and passionate educator with four years of teaching experience. I hold an M.Sc. in Mathematics and currently teach Islamiyat at Alpine School. I strive to create a positive and engaging learning environment where students develop both academic knowledge and strong ethical values.",
  },

  {
    id: 12,
    name: "Aqsa Mehboob",
    featured: false,
    designation: "Urdu Teacher",
    department: "Urdu",
    image: "/images/faculty/Aqsa.png",
    qualification: "M.A Urdu, B.Ed",
    experience: "7 Years",
    subjects: ["Urdu"],
    achievements: ["Language Mastery"],
    email: "zeshanch2@gmail.com",
    description:
      "I am Ms. Aqsa Mehboob, an Urdu Teacher with 6-7 years of teaching experience. I hold an M.A in Urdu and a http://B.Ed degree, which allows me to combine subject expertise with effective classroom practices. My area of specialization is Urdu writing, and I focus on helping students develop strong language skills, comprehension, and creative expression.",
  },

  {
    id: 13,
    name: "Samina Umar Din",
    featured: false,
    designation: "Sports Trainer",
    department: "Physical Education",
    image: "/images/faculty/Samina.png",
    qualification: "M.A (Physical Education), B.Ed",
    experience: "8 Years",
    subjects: ["Sports"],
    achievements: ["Performance Coaching"],
    email: "hareempari643@gmail.com",
    description:
      "I am committed to promoting physical fitness, teamwork, and healthy lifestyles through engaging sports and physical activities. My goal is to inspire students to build confidence, discipline, and sportsmanship.",
  },

  {
    id: 14,
    name: "Nazish Khalid",
    featured: false,
    designation: "Pre-School Teacher",
    department: "Pre-School",
    image: "/images/faculty/Nazish.png",
    qualification: "BSCS",
    experience: "2 Years",
    subjects: ["Science Exploration"],
    achievements: ["Child Development"],
    email: "nazishkhalid274@gmail.com",
    description:
      "As a Preschool Teacher, I nurture curiosity and early learning through creative, child-centered teaching. My goal is to support every child's social, emotional, and academic growth in a caring and inspiring classroom.",
  },

  {
    id: 15,
    name: "Memoona Hussain",
    featured: false,
    designation: "Pre-School Teacher",
    department: "Pre-School",
    image: "/images/faculty/Memoona.png",
    qualification: "Doctor of Optometry",
    experience: "1 Year",
    subjects: ["English"],
    achievements: ["Creative Learning"],
    email: "ghulamhussain76764@gmail.com",
    description:
      "I create a safe, caring, and joyful environment where young learners can explore, play, and grow. My focus is on building confidence, creativity, and a strong foundation for lifelong learning.",
  },

  {
    id: 16,
    name: "Uzma Amin",
    featured: false,
    designation: "Pre-School Teacher",
    department: "Pre-School",
    image: "/images/faculty/Uzma.png",
    qualification: "F.A",
    experience: "1 Year",
    subjects: ["Phonics"],
    achievements: ["Foundational Skills"],
    email: "kaleemamin5227@gmail.com",
    description:
      "As a Preschool Teacher, I nurture curiosity through play-based and interactive learning. I encourage every child to develop socially, emotionally, and academically in a supportive classroom.",
  },

  {
    id: 17,
    name: "Tehmeena Naz",
    featured: false,
    designation: "Pre-School Teacher",
    department: "Pre-School",
    image: "/images/faculty/Tehmeena.png",
    qualification: "M.A Education",
    experience: "5 Years",
    subjects: ["Mathematics"],
    achievements: ["Nurturing Care"],
    email: "tehmeenanaz392@gmail.com",
    description:
      "I am Tehmeena Naz, a dedicated Primary Teacher with five years of teaching experience. I hold an M.A. in Education and am passionate about creating a positive, engaging, and supportive learning environment for young learners. I believe every child has unique potential and deserves encouragement to grow academically and personally.",
  },

  {
    id: 18,
    name: "Shazia Yousaf",
    featured: false,
    designation: "Pre-School Teacher",
    department: "Pre-School",
    image: "/images/faculty/Shazia.png",
    qualification: "F.A",
    experience: "1 Year",
    subjects: ["Pre-Writing Skills"],
    achievements: ["Cognitive Growth"],
    email: "raomuneebraomuneeb75@gmail.com",
    description:
      "I am Shazia, a dedicated Pre-School Teacher with ten years of teaching experience. I hold an M.A. in Education and am passionate about creating a positive, engaging, and supportive learning environment for young learners. I believe every child has unique potential and deserves encouragement to grow academically and personally.",
  },

  {
    id: 19,
    name: "Ayesha Sarwar",
    featured: false,
    designation: "Pre-School Teacher",
    department: "Pre-School",
    image: "/images/faculty/Ayesha.png",
    qualification: "BS Computer Science",
    experience: "3 Years",
    subjects: ["Computer Science"],
    achievements: ["Creative Exploration"],
    email: "ayeshasarwer23@gmail.com",
    description:
      "My name is Ayesha. I have completed my Bachelor’s degree in Computer Science (BSCS). For the past two years, I have been a proud member of the Alpine Digital School family, where I am working as a Pre-School Teacher. I truly enjoy teaching young children and helping them learn and grow in a fun and engaging environment.",
  },

  {
    id: 20,
    name: "Eman Fatima",
    featured: false,
    designation: "Pre-School Teacher",
    department: "Pre-School",
    image: "/images/faculty/Eman.png",
    qualification: "BS Cyber Security",
    experience: "1 Year",
    subjects: ["General Knowledge"],
    achievements: ["Foundational Literacy"],
    email: "Uzmasharif71@gmail.com",
    description:
      "Dedicated Pre-School Teacher currently pursuing a BS in Banking and Finance. Passionate about creating a safe, engaging, and child-centered learning environment through creative teaching methods. Committed to nurturing young learners' academic, social, and emotional development while inspiring a lifelong love for learning.",
  },

  {
    id: 21,
    name: "Ume Habiba",
    featured: false,
    designation: "Pre-School Teacher",
    department: "Pre-School",
    image: "/images/faculty/Habiba.png",
    qualification: "BS English",
    experience: "1 Year",
    subjects: ["Handwriting Skills"],
    achievements: ["Skill Building"],
    email: "rashid22md@gmail.com",
    description:
      "I help young learners build essential skills through engaging activities that promote confidence, communication, and creativity. Every child is encouraged to learn, discover, and thrive.",
  },

  {
    id: 22,
    name: "Laiba Bibi",
    featured: false,
    designation: "Pre-School Teacher",
    department: "Pre-School",
    image: "/images/faculty/Laiba.png",
    qualification: "ADP",
    experience: "1 Year",
    subjects: ["Urdu"],
    achievements: ["Curious Minds"],
    email: "laibashehzadi096@gmail.com",
    description:
      "I strive to create a warm and inspiring classroom where children feel valued, curious, and excited to learn. Through hands-on experiences, I support each child's holistic growth and development.",
  },

  {
    id: 23,
    name: "Rimsha Khalid",
    featured: false,
    designation: "Pre-School Teacher",
    department: "Pre-School",
    image: "/images/faculty/Rimsha.png",
    qualification: "Bachelor of Arts",
    experience: "5 Years",
    subjects: ["Urdu"],
    achievements: ["Discovery Learning"],
    email: "Khalidsumia289@gmail.com",
    description:
      "I am a passionate Preschool Teacher dedicated to creating a safe, joyful, and engaging learning environment. Through play-based and interactive activities, I help young learners build confidence, creativity, and a strong foundation for lifelong learning",
  },
];

/* ===========================================
   DEPARTMENT FILTERS
=========================================== */

export const departmentFilters = [
  "All",
  "IT, STEM and Robotics",
  "Science",
  "Mathematics",
  "English",
  "Urdu",
  "Islamic Studies", 
  "Physical Education",
  "Pre-School",
];

export const developerStats = [
  {
    label: "Years Teaching",
    value: 2,
    suffix: "+",
  },
  {
    label: "Years Development",
    value: 3,
    suffix: "+",
  },
  {
    label: "Websites Developed",
    value: 10,
    suffix: "+",
  },
  {
    label: "AI Projects",
    value: 5,
    suffix: "+",
  },
  {
    label: "Students Mentored",
    value: 100,
    suffix: "+",
  },
  {
    label: "Technologies Mastered",
    value: 25,
    suffix: "+",
  },
  {
    label: "Courses Taught",
    value: 8,
    suffix: "+",
  },
  {
    label: "Certifications",
    value: 1,
    suffix: "+",
  },
];

export const developerSkills = [
  {
    category: "Frontend Development",
    color: "blue",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 90 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },

  {
    category: "Backend Development",
    color: "emerald",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "Authentication", level: 84 },
      { name: "Firebase", level: 80 },
    ],
  },

  {
    category: "Database",
    color: "amber",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 86 },
      { name: "MongoDB", level: 82 },
      { name: "Prisma ORM", level: 88 },
    ],
  },

  {
    category: "Artificial Intelligence",
    color: "purple",
    skills: [
      { name: "Prompt Engineering", level: 95 },
      { name: "AI Integration", level: 92 },
      { name: "Chatbot Development", level: 90 },
      { name: "Gemini API", level: 90 },
      { name: "AI Automation", level: 88 },
      { name: "AI Workflows", level: 86 },
    ],
  },

  {
    category: "Programming Languages",
    color: "rose",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "C++", level: 84 },
      { name: "SQL", level: 90 },
    ],
  },
];

export const teachingExpertise = [
  {
    title: "Programming",
    description:
      "Teaching programming fundamentals through logic building, syntax practice, problem-solving, and hands-on coding tasks.",
  },
  {
    title: "Computer Science",
    description:
      "Explaining core computer concepts, systems, software, algorithms, digital literacy, and practical technology usage.",
  },
  {
    title: "Web Development",
    description:
      "Guiding students in HTML, CSS, JavaScript, responsive design, frontend development, and modern website creation.",
  },
  {
    title: "AI Fundamentals",
    description:
      "Introducing students to artificial intelligence, AI tools, responsible usage, automation, and real-world applications.",
  },
  {
    title: "Robotics Basics",
    description:
      "Teaching robotics components, sensors, motors, Arduino basics, logic building, and beginner-level engineering activities.",
  },
  {
    title: "Prompt Engineering",
    description:
      "Training students to write effective prompts, use AI tools productively, and understand AI-assisted learning.",
  },
  {
    title: "Office Applications",
    description:
      "Teaching Microsoft Word, Excel, PowerPoint, typing, file management, and basic office productivity skills.",
  },
  {
    title: "Digital Literacy",
    description:
      "Helping students understand safe internet use, digital tools, online learning, research, and responsible technology behavior.",
  },
  {
    title: "Student Mentoring",
    description:
      "Supporting students through guidance, motivation, project support, skill development, and confidence building.",
  },
  {
    title: "Career Guidance",
    description:
      "Helping students understand future careers in technology, freelancing, software development, AI, and digital skills.",
  },
];

export const developerGallery = [
  {
    title: "Teaching Classroom",
    description:
      "Interactive classroom teaching focused on IT concepts, programming fundamentals, and digital learning.",
    image: "/images/faculty/faculty-gallery/fizza-1.png",
  },
  {
    title: "Computer Lab",
    description:
      "Hands-on computer lab sessions where students practice coding, office tools, typing, and digital skills.",
    image: "/images/faculty/faculty-gallery/fizza-2.png",
  },
  {
    title: "AI Workshop",
    description:
      "AI learning sessions introducing students to prompt engineering, AI tools, automation, and responsible AI use.",
    image: "/images/faculty/faculty-gallery/fizza-3.png",
  },
  {
    title: "Robotics Session",
    description:
      "Robotics basics including sensors, motors, Arduino, logic building, and beginner engineering activities.",
    image: "/images/faculty/faculty-gallery/fizza-4.png",
  },
  {
    title: "Student Mentoring",
    description:
      "Guiding students in projects, confidence building, career direction, and practical technology skills.",
    image: "/images/faculty/faculty-gallery/fizza-5.png",
  },
  {
    title: "Coding Session",
    description:
      "Programming practice with logic building, problem-solving tasks, web development, and real coding exercises.",
    image: "/images/faculty/faculty-gallery/fizza-6.png",
  },
  {
    title: "Seminar",
    description:
      "Technology awareness seminars covering digital skills, AI, career guidance, and modern learning opportunities.",
    image: "/images/faculty/faculty-gallery/fizza-7.png",
  },
  {
    title: "Project Demonstrations",
    description:
      "Students present practical projects, websites, AI tasks, robotics models, and creative technology solutions.",
    image: "/images/faculty/faculty-gallery/fizza-8.png",
  },
];

export const developerCTA = {
  badge: "Let's Connect",

  title: "Let's Build the Future of Digital Education Together",

  description:
    "Whether you're interested in educational technology, AI integration, modern web development, student mentoring, or collaborative projects, I'd be happy to connect and share ideas.",

  buttons: [
    {
      label: "Explore Projects",
      href: "/projects",
      variant: "primary",
    },
    {
      label: "View Portfolio",
      href: "https://portfolio-link.com",
      variant: "secondary",
    },
    {
      label: "Connect on LinkedIn",
      href: "https://linkedin.com/in/fizza-jabeen-13ch",
      variant: "linkedin",
    },
    {
      label: "Visit GitHub",
      href: "https://github.com/fizzajabeen13",
      variant: "github",
    },
    {
      label: "Download Resume",
      href: "/downloads/fizza-jabeen-resume.pdf",
      variant: "resume",
    },
  ],
};