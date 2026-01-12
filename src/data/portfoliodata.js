// src/data/portfolioData.js

export const personalInfo = {
  name: "Govinda Bhandari",
  title: "Electronics, Communication and Information Engineer",
  avatar: "./src/assets/images/profile.jpg",
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
    "I’m Govinda — a passionate Embedded Systems and IoT developer from Nepal, currently in my final semester of Electronics, Communication, and IT engineering. I enjoy building smart connected systems, optimizing hardware-software integration, and exploring real-world applications of embedded technologies.",
    "I have hands-on experience with microcontrollers (ESP32, STM32), sensors, motor drivers, and wireless communication protocols. My goal is to design meaningful solutions that bridge physical hardware with intelligent software — whether it’s robotics, automation, or IoT systems.",
    "In my free time, I love learning new tech, working on projects that challenge me, and collaborating with like-minded makers."
  ],
  services: [
    {
      icon: "💻",
      title: "Web Development",
      description: "Building modern, responsive websites with the latest technologies and best practices."
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description: "Creating cross-platform mobile applications with React Native and Flutter."
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
   { name: "Embedded C / C++", level: 85 },
  { name: "ESP32 / Arduino", level: 90 },
  { name: "IoT & Wi-Fi Communication", level: 85 },
  { name: "HTML / CSS / JavaScript", level: 75 },
  { name: "MATLAB", level: 70 },
  { name: "Git & GitHub", level: 75 }
];

export const projects = [
   {
    title: "Smart Agriculture Bot",
    category: "Robotics & Embedded Systems",
    image: "./src/assets/images/AGB.jpeg",
    description: "An autonomous and manually controlled agricultural robot designed to automate farming tasks like ploughing, seed sowing, flattening, and irrigation using real-time sensor integration and embedded control. :contentReference[oaicite:2]{index=2}",
   fullDescription: "The Smart Agriculture Bot is an innovative solution aimed at revolutionizing traditional farming practices. Equipped with a range of sensors including soil moisture, temperature, and humidity sensors, the bot can monitor field conditions in real-time. It features both autonomous and manual control modes, allowing farmers to choose between automated operations or direct control via a remote interface. The bot is capable of performing essential agricultural tasks such as ploughing, seed sowing, flattening, and irrigation, thereby increasing efficiency and reducing labor costs. Its embedded control system ensures precise operation, while its robust design allows it to navigate various terrains commonly found in agricultural settings.",
     githubUrl: "https://github.com/gobinda789/Smart-Agriculture-Bot"
  },
  {
    title: "Object Navigation App for Blind Persons",
    category: "Mobile App & Computer Vision",
    image: "./src/assets/images/ODFB.png",
    description: "Android-based assistive application using object detection and depth estimation to help visually impaired users navigate safely with audio feedback and obstacle awareness. :contentReference[oaicite:3]{index=3}",
   fullDescription: "The Object Navigation App for Blind Persons is designed to enhance the mobility and independence of visually impaired individuals. The app leverages advanced computer vision techniques, including object detection and depth estimation, to identify obstacles in the user's environment. By utilizing the smartphone's camera, the app continuously scans the surroundings and provides real-time audio feedback to alert users of nearby objects and potential hazards. The intuitive interface allows users to easily interact with the app, making navigation safer and more efficient. This project aims to empower visually impaired users by providing them with a reliable tool for everyday navigation.",
   githubUrl: "https://github.com/gobinda789/object_navigation_for_blind_person_app"
  },
  {
    title: "Line Following Robot",
    category: "Embedded Robotics",
    image: "./src/assets/images/LFR.png",
    description: "A sensor-based line following robot demonstrating foundational robotics skills including sensor integration, motor control, and algorithmic path following. :contentReference[oaicite:4]{index=4}",
    fullDescription: "The Line Following Robot is a fundamental robotics project that showcases essential skills in sensor integration, motor control, and algorithmic path following. The robot is equipped with infrared sensors that detect the contrast between the line and the surface, allowing it to follow a predefined path accurately. The embedded control system processes sensor data in real-time to adjust the robot's movement, ensuring it stays on course. This project serves as an excellent introduction to robotics, providing hands-on experience with hardware components and programming logic required for autonomous navigation.",
   githubUrl: "https://github.com/gobinda789/Line-following-Bot"
  }
];