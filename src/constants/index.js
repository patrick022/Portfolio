import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  bcs,
  ubihive,
  carhub,
  jobforte,
  linkup,
  mcl,
  firebase,
  flutter,
  ascendion,
  mobile,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "MERN stack Developer",
    icon: backend,
  },
  {
    title: "Full-stack Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "Front End Developer",
    company_name: "Ascendion Digital Solutions Philippines Incorporated",
    icon: ascendion,
    iconBg: "#383E56",
    date: "November 2023 — September 2026",
    points: [
      "Developed and maintained an insurance monitoring mobile app for AXA customers.",
      "Enhanced application code using React Native, Kotlin, and Swift while adhering to best coding practices and AXA Group security guidelines.",
      "Initiated updating/migrating the whole app codebase to the latest React native versions in compliance with Google.",
      "Created API endpoints with Node.js and deployed through OpenShift and Prismic CMS.",
      "Validated deployment requirements for production releases on Android and iOS app stores.",
      "Conceived security features for detecting jailbroken and simulator environments, preventing Man-in-the-middle-attacks.",
      "Streamlined deployment processes, reducing release times by implementing efficient workflows, maintaining 98% crash free sessions for both Google playstore and Apple Appstore.",
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "BCS Technology International PTY LTD-Philippines.",
    icon: bcs,
    iconBg: "#383E56",
    date: "September 2021 — September 2023",
    points: [
      "Developed web applications for Intellicare's HMO platform using React/Next.js and Typescript.",
      "Collaborated with front-end and back-end teams leveraging SDLC, Agile, and Scrum methodologies.",
      "Created API endpoints with Node.js, ensuring functionality through testing with Postman and MongoDB.",
      "Engineered responsive user interfaces that improved user engagement.",
      "Streamlined API development processes, enhancing system performance.",
      "Implemented unit tests to ensure code quality and reliability.",
    ],
  },
  {
    title: "Junior JavaScript Developer",
    company_name: "Ubihive Systems Inc,",
    icon: ubihive,
    iconBg: "#383E56",
    date: "June 2021 — August 2021",
    points: [
      "Assisted CTO in developing new features and modules using React.",
      "Engaged in bug fixing and feature enhancements for dental, restaurant, and hospital applications.",
      "Followed Agile methodologies and participated in Scrum with front-end and back-end teams.",
      "Utilized MongoDB and GraphQL in the backend with microservices for dental applications.",
      "Collaborated on feature development, enhancing user experience.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Mapua Malayan Colleges Laguna",
    icon: mcl,
    iconBg: "#383E56",
    date: "Oct 2017 - May 2018",
    points: [
      "Developed C# applications by integrating XML interfaces with MS SQL databases, enhancing data exchange and reporting efficiency.",
      "Upgraded Tap ID hardware and software across campus, improving access control reliability.",
      "Implemented C# enhancements for the Tap ID system, which reduced errors and decreased maintenance overhead.",
      "Integrated XML and MS SQL for efficient data exchange.",
      "Upgraded Tap ID systems to enhance access control reliability.",
      "Reduced errors and maintenance through C# system enhancements.",
    ],
  },
];

const projects = [
  {
    name: "Car Hub",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "orange-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carhub,
    source_code_link: "https://github.com/patrick022/Next-CarHub",
    demo_link: "https://next-car-hub-patrick022.vercel.app/",
  },
  {
    name: "JobForte",
    description:
      "Web application for personal tracking of jobs and their statuses, provides charts and account system for users",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Mongoose",
        color: "pink-text-gradient",
      },
    ],
    image: jobforte,
    source_code_link: "https://github.com/patrick022/JobForte-MERN-production",
    demo_link: "https://jobforte.onrender.com/",
  },
  {
    name: "Link Up",
    description:
      "A Video call meeting app that uses clerk for account handling and stream io for video call handling with meeting room, device selection, previous call recordings and private room link features.",
    tags: [
      {
        name: "nextjs",
        color: "text-lime-400",
      },
      {
        name: "clerk",
        color: "text-purple-500",
      },
    ],
    image: linkup,
    source_code_link: "https://github.com/patrick022/LinkUp-Video-chat",
    demo_link: "https://link-up-video-chat.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
