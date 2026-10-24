export const profile = {
  name: "Abhishek Kumar",
  role: "Software Developer",
  location: "Bengaluru, India",
  email: "itstheabhiii@gmail.com",
  phone: "+91 8002748760",
  linkedin: "https://www.linkedin.com/in/abhishek-kumar-1546ba265/",
  github: "https://github.com/itstheabhiiigmailcom",
  resume: "/resume.pdf",
  resumeName: "Abhishek-Kumar-Resume.pdf",
};

export const headlines = [
  "Managing many robots and bots across fleets, and updating them securely.",
  "Architecting end-to-end data pipelines that transform complex device telemetry into intuitive visual diagnostics.",
  "Engineering seamless full-stack web applications from backend APIs to responsive user interfaces.",
];

export const about = {
  lead: "I develop secure full-stack web applications, specializing in scalable data pipelines, visual diagnostic tools, and connected fleet management systems.",
  body: "I am a software developer with 1.5+ years on production systems for robotics and enterprise teams. One part of the work is taking what a vehicle or bot is doing, moving that data to a server, and making it easy to inspect. The other is running many robots and bots under different fleets and pushing a secure update when a system needs to change. I also design APIs, authentication, and the web and mobile clients in front of them.",
  closer:
    "On my own time I ship full-stack products. Learnova is a course platform with a web app, a mobile app, and one API behind both. I care about clear interfaces, access control, and systems that stay understandable after they are deployed.",
};

export const stats = [
  { value: "1.5+ yrs", label: "building production software" },
  { value: "Web + mobile", label: "full-stack products" },
  { value: "Fleets & data", label: "updates and device data" },
  { value: "9.4", label: "CGPA, B.Tech CSE" },
];

export const education = {
  school: "Ramaiah University of Applied Sciences",
  degree: "B.Tech in Computer Science and Engineering",
  meta: "Dec 2021 – Jun 2025 · Bengaluru · CGPA 9.4/10",
};

export const focus = [
  {
    title: "Data platforms",
    text: "Collect signals from devices, move them to a server, and turn them into something an operator can search and debug.",
  },
  {
    title: "Fleets and updates",
    text: "Manage many robots and bots under different fleets, and update a system securely when a machine needs a change.",
  },
  {
    title: "Product engineering",
    text: "Web and mobile clients, REST APIs, auth, and storage — from customer-facing apps to internal tools.",
  },
];

export const jobs = [
  {
    id: "newspace",
    company: "NewSpace Research & Technologies",
    title: "Software Developer",
    dates: "Sep 2025 – Present",
    place: "Bengaluru",
    summary:
      "Software for vehicles and connected devices, from data on the hardware through to a web application operators can use. Deployed on-premise.",
    groups: [
      {
        title: "Logging",
        points: [
          "Built the onboard logger that pulls data from every subsystem on a UGV or bot: compute, GNSS, motor, radio, IMU, and ROS, written into one time-synchronized log.",
          "Designed pluggable source adapters (SocketCAN, serial, UDP, and ROS subscribers) with timestamping and buffered asynchronous writes, so a new subsystem can be logged without changing the core pipeline.",
          "Implemented an SFTP tunnel and an rclone sync so those logs transfer securely to the remote server, with no manual copy off the vehicle.",
          "Built the visualization application on 10+ services. After a log arrives, the pipeline auto-ingests it, parses it, stores it, and publishes it to Grafana, so an engineer can see vehicle data and debug from the browser.",
          "Used RabbitMQ between ingestion, parsing, and storage, and built the Grafana views with the Scenes plugin.",
        ],
      },
      {
        title: "Iris updates",
        points: [
          "Led architecture and development of Project Iris, a remote firmware update system in FastAPI and React. It is built to push updates to 100+ bots at a time, across fleets, so a change does not need an on-site visit.",
          "Built the PKI server that Iris uses to transfer updates securely. It issues and manages a certificate for each bot. A certificate can be rotated, or revoked when a device is compromised or should no longer be trusted.",
          "Firmware is signed and encrypted under that PKI, and each bot authenticates with mTLS before it accepts an update.",
          "Implemented the real-time control layer over MQTT, with QoS-based delivery, and WebSockets that stream live deployment logs from each bot.",
          "People using Iris are split into Admin, Technician, and Viewer, with JWT authentication.",
          "Containerized FastAPI, React, the PKI service, Mosquitto, and PostgreSQL with Docker Compose, and set up CI/CD that builds images and deploys them on in-office servers on every merge. The same pipeline ships the logger and the visualization stack.",
        ],
      },
    ],
  },
  {
    id: "redant",
    company: "RedAnt Technologies",
    title: "Software Developer",
    dates: "Jan 2025 – Sep 2025",
    place: "Bengaluru",
    summary:
      "Internal platforms and workflow automation for HR and admin teams.",
    points: [
      "Automated 5+ HR and admin workflows — attendance, leave, reimbursement, and travel — with Power Automate, cutting processing time by about 70% and saving 15+ hours a week.",
      "Built a dynamic job-description generator that brought JD writing down from about 2 hours to 5 minutes.",
      "Shipped a SharePoint intranet used by 200+ employees as the single place for policies and forms.",
    ],
  },
];

export const skillGroups = [
  {
    id: "languages",
    label: "Languages",
    items: ["Python", "JavaScript (ES6+)", "TypeScript", "C++", "SQL", "Bash"],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      "FastAPI",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Prisma ORM",
      "Pydantic",
      "AsyncIO",
      "Microservices",
      "RabbitMQ",
      "OpenAI API",
    ],
  },
  {
    id: "frontend",
    label: "Frontend & mobile",
    items: [
      "React.js",
      "React Native",
      "Expo",
      "Vite",
      "React Router",
      "Redux Toolkit",
      "Zustand",
      "TanStack Query",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "HTML5",
      "CSS3",
    ],
  },
  {
    id: "robotics",
    label: "Robotics & IoT",
    items: [
      "ROS",
      "CAN / SocketCAN",
      "GNSS / NMEA",
      "Serial",
      "UDP",
      "MQTT",
      "WebSockets",
      "Edge computing",
      "rclone",
    ],
  },
  {
    id: "security",
    label: "Security",
    items: ["PKI", "mTLS", "OpenSSL", "JWT", "OAuth2", "RBAC"],
  },
  {
    id: "devops",
    label: "DevOps & cloud",
    items: [
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "Linux",
      "Grafana",
      "On-premise deploy",
      "Azure",
      "Vercel",
      "Cloudflare R2",
      "AWS S3",
      "Git",
    ],
  },
  {
    id: "data",
    label: "Data & testing",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Alembic",
      "Pytest",
      "Jest",
      "Postman",
    ],
  },
  {
    id: "automation",
    label: "Automation",
    items: ["Power Automate", "SharePoint", "Power Apps"],
  },
];

export const projects = [
  {
    id: "learnova",
    title: "Learnova",
    kicker: "E-learning platform",
    year: "2026",
    summary:
      "A course platform I designed and deployed end to end: a React web app, a React Native mobile app, and one REST API for both.",
    points: [
      "Student, educator, and admin roles with JWT and RBAC, plus a moderation flow from draft to published.",
      "Drag-and-drop course builder for video, audio, PDF, TipTap articles, and links, with uploads to Cloudflare R2 through presigned URLs.",
      "Email OTP, password reset, per-lesson progress, and 15 Prisma migrations as the schema grew.",
    ],
    stack: [
      "React",
      "React Native",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
    ],
    code: "https://github.com/itstheabhiiigmailcom/Edu-Platform",
    demo: "https://edu-platform-one-tau.vercel.app/",
  },
  {
    id: "textsmith",
    title: "TextSmith",
    kicker: "Browser toolkit",
    year: "2026",
    summary:
      "A single-page workspace with 80+ text and developer tools that chain into a pipeline, with a live preview. Nothing the user pastes is uploaded.",
    points: [
      "Regex find and replace, JSON, XML, HTML, and SQL formatting, encoding, case tools, and any-to-any number base conversion.",
      "Parsers and formatters written from scratch, covered by 60+ Jest tests, with searchable docs and saved sessions.",
    ],
    stack: ["React", "React Router", "Bootstrap", "Jest"],
    code: "https://github.com/itstheabhiiigmailcom/Text-manipulator",
    demo: "https://textsmanipulator.netlify.app/",
  },
  {
    id: "chat",
    title: "AI Chat Assistant",
    kicker: "Full-stack chat",
    year: "2024",
    summary:
      "A TypeScript MERN chat app. Each person’s history is stored in MongoDB and sent as context to the OpenAI API.",
    points: [
      "Sessions use JWT in signed HTTP-only cookies, with express-validator on input.",
      "Context is limited to the last 10 messages to control token cost, with an automatic retry when the API returns 429.",
    ],
    stack: ["TypeScript", "React", "Material UI", "Node.js", "MongoDB", "OpenAI"],
    code: "https://github.com/itstheabhiiigmailcom/TS_chatbot",
    demo: "",
  },
  {
    id: "gameshelf",
    title: "Game Shelf",
    kicker: "Six browser games",
    year: "2024",
    summary:
      "A small browser arcade. One shelf holds Word Scramble, Tic-Tac-Toe, Memory Match, Snake, Hangman, and 2048.",
    points: [
      "Each game is its own module, with a card, the rules, and a play view. A new game is added by registering it in the catalog.",
      "Best scores stay in the browser. Tic-Tac-Toe can be a perfect computer or two people on one screen. Snake wraps at the walls and speeds up as the score climbs.",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/itstheabhiiigmailcom/scrumble-word",
    demo: "https://scrumblewords.netlify.app/",
  },
];
