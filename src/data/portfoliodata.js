// src/data/portfolioData.js
import profileImg from "../assets/images/profile.jpg";
import agriculture from "../assets/images/AGB.jpeg";
import analyzer from "../assets/images/System_image.png"; // TODO: Replace with actual project image
import linefollowing from "../assets/images/LFR.png";
import object from "../assets/images/ODFB.png";

export const personalInfo = {
  name: "Govinda Bhandari",
  title: "Electronics, Communication and Information Engineer",
  avatar: profileImg,
  contacts: {
    email: "gobindabhandari789@gmail.com",
    phone: "+977 9869143227",
    birthday: "Nov 3, 2003",
    location: "Kathmandu, Nepal"
  },
  social: {
    github: "https://github.com/gobinda789",
    linkedin: "https://www.linkedin.com/in/govinda-bhandari-4426142a1/",
    instagram: "https://www.instagram.com/gobinda_bh789/"
  }
};

export const aboutMe = {
  description: [
    "I am a final-year Electronics, Communication and Information Engineering student with a strong interest in Machine Learning, Embedded Systems, and practical engineering applications.",
    "I enjoy building systems that combine hardware and software — especially using platforms like ESP32 and Arduino along with Python-based data processing. I am currently learning and improving my understanding of machine learning concepts, signal analysis basics, and real-time system development.",
    "My focus is on learning by building real projects. I prefer practical implementation over theory and continuously work on improving my technical depth step by step."
  ],
  interests: [
    "Machine Learning fundamentals and applied ML projects",
    "Embedded systems development",
    "Hardware-software integration",
    "Automation and intelligent systems"
  ],
  services: [
    {
      icon: "🤖",
      title: "Machine Learning (Beginner to Intermediate)",
      description: "Supervised learning concepts (Regression, Classification), Feature extraction basics, Model training workflow research, and working with structured datasets (CSV, tabular data)."
    },
    {
      icon: "🐍",
      title: "Programming",
      description: "Python for data processing and ML experiments, Basic C/C++ for embedded systems, and SQL fundamentals."
    },
    {
      icon: "📟",
      title: "Embedded Systems",
      description: "Working with Arduino and ESP32, Sensor integration, Basic motor and servo control, and Web-based device control."
    },
    {
      icon: "📊",
      title: "Data & Tools",
      description: "NumPy and Pandas, Jupyter Notebook, Git and GitHub, and VS Code."
    },
    {
      icon: "🌐",
      title: "Web Basics",
      description: "HTML, CSS, JavaScript, and Basic React understanding."
    }
  ]
};

export const education = [
  {
    institution: "Advanced College of Engineering and Management",
    degree: "Bachelor's Degree in Electronics, Communication and Information Engineering",
    period: "2022 - Present",
    details: "Final Year | Focus on Embedded Systems, Communication & IoT"
  },

];

export const experience = [
  {
    position: "Project Manager",
    company: "Advanced Robotic Club, ACEM",
    period: "2024 — Present",
    description:
      "Led and managed robotics and embedded system projects, coordinated team members, handled task planning, and ensured successful project completion within deadlines."
  },

];

export const skills = [
  { name: "Python & Machine Learning", level: 80 },
  { name: "Embedded C / C++ (Arduino/ESP32)", level: 85 },
  { name: "Data Analysis (NumPy/Pandas)", level: 75 },
  { name: "Web Development (React/JS)", level: 70 },
  { name: "Git & GitHub", level: 80 }
];

export const projects = [
  {
    title: "Smart Agriculture Bot",
    category: "Robotics & Embedded Systems",
    image: agriculture,
    description: "An autonomous and manually controlled agricultural robot designed to automate farming tasks like ploughing, seed sowing, flattening, and irrigation using real-time sensor integration and embedded control. :contentReference[oaicite:2]{index=2}",
    fullDescription: "The Smart Agriculture Bot is an innovative solution aimed at revolutionizing traditional farming practices. Equipped with a range of sensors including soil moisture, temperature, and humidity sensors, the bot can monitor field conditions in real-time. It features both autonomous and manual control modes, allowing farmers to choose between automated operations or direct control via a remote interface. The bot is capable of performing essential agricultural tasks such as ploughing, seed sowing, flattening, and irrigation, thereby increasing efficiency and reducing labor costs. Its embedded control system ensures precise operation, while its robust design allows it to navigate various terrains commonly found in agricultural settings.",
    githubUrl: "https://github.com/gobinda789/Smart-Agriculture-Bot"
  },
  {
    title: "Object Navigation App for Blind Persons",
    category: "Mobile App & Computer Vision",
    image: object,
    description: "Android-based assistive application using object detection and depth estimation to help visually impaired users navigate safely with audio feedback and obstacle awareness. :contentReference[oaicite:3]{index=3}",
    fullDescription: "The Object Navigation App for Blind Persons is designed to enhance the mobility and independence of visually impaired individuals. The app leverages advanced computer vision techniques, including object detection and depth estimation, to identify obstacles in the user's environment. By utilizing the smartphone's camera, the app continuously scans the surroundings and provides real-time audio feedback to alert users of nearby objects and potential hazards. The intuitive interface allows users to easily interact with the app, making navigation safer and more efficient. This project aims to empower visually impaired users by providing them with a reliable tool for everyday navigation.",
    githubUrl: "https://github.com/gobinda789/object_navigation_for_blind_person_app"
  },
  {
    title: "Line Following Robot",
    category: "Embedded Robotics",
    image: linefollowing,
    description: "A sensor-based line following robot demonstrating foundational robotics skills including sensor integration, motor control, and algorithmic path following. :contentReference[oaicite:4]{index=4}",
    fullDescription: "The Line Following Robot is a fundamental robotics project that showcases essential skills in sensor integration, motor control, and algorithmic path following. The robot is equipped with infrared sensors that detect the contrast between the line and the surface, allowing it to follow a predefined path accurately. The embedded control system processes sensor data in real-time to adjust the robot's movement, ensuring it stays on course. This project serves as an excellent introduction to robotics, providing hands-on experience with hardware components and programming logic required for autonomous navigation.",
    githubUrl: "https://github.com/gobinda789/Line-following-Bot"
  },
  {
    title: "Smart Power Quality Analyzer - AI Load Classification",
    category: "AI & Machine Learning",
    image: analyzer,
    description: "An AI-driven system for real-time power quality monitoring and classification of electrical loads using machine learning models.",
    fullDescription: "This project leverages AI and Signal Processing to analyze electrical data and classify load behaviors. It identifies specific devices (e.g., HVAC, heaters, fans) and detects abnormalities such as inrush currents or voltage sags. Built with Python and Streamlit, it provides engineering insights for predictive maintenance and grid efficiency.",
    githubUrl: "https://github.com/gobinda789/Smart-Power-Quality-Analyzer-AI-Load-Classification"
  }
];