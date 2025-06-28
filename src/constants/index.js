import {
  mobile,
  workshop,
  iot,
  design,
  photo,
  music,
  backend,
  creator,
  web,
  javascript,
  php,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  jobit,
  tripguide,
  threejs,
  weatherplan,
  gdrive,
  github,
  diary,
  flutter,
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

const skillCategories = [
  {
    category: "Software Development",
    skills: [
      {
        title: "Web Developer",
        icon: web,
      },
      {
        title: "Mobile Developer",
        icon: mobile,
      },
      {
        title: "IoT Enthusiast",
        icon: iot,
      },
    ],
  },
  {
    category: "Design & Creativity",
    skills: [
      {
        title: "UI/UX Designer",
        icon: design,
      },
      {
        title: "Photographer",
        icon: photo,
      },
      {
        title: "Musician",
        icon: music,
      },
    ],
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
    name: "PHP",
    icon: php,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "EfkaWokrshop",
    description:
      "Sebuah ekosistem digital lengkap yang dirancang untuk menjembatani antara bengkel motor modern dengan para pelanggannya. Dibangun dengan cinta, kopi, dan begadang ala anak TI, sistem ini mengintegrasikan alur booking servis yang dinamis dengan platform e-commerce untuk penjualan sparepart, dibungkus dalam antarmuka yang intuitif baik untuk customer maupun admin.",
    tags: [
      {
        name: "phpvanila",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: workshop,
    project_link: "https://github.com/mikepakpahan/EfkaWorkshop.git",
    link_icon: github,
  },
  {
    name: "WeatherPlan",
    description:
      "WeatherPlan adalah aplikasi smart home berbasis IoT yang dapat mengatur jadwal aktivitas dan mengontrol jemuran otomatis sesuai kondisi cuaca. Sistem ini menggunakan ESP32, sensor kelembapan DHT-11, dan sensor hujan untuk mendeteksi lingkungan sekitar, lalu menyimpan data secara real-time ke Firebase dan menampilkannya melalui aplikasi Flutter.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "flutter",
        color: "green-text-gradient",
      },
      {
        name: "openweatherapi",
        color: "pink-text-gradient",
      },
      {
        name: "arduinoide",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
    ],
    image: weatherplan,
    project_link: "https://github.com/mikepakpahan/WeatherPlan.git",
    link_icon: github,
  },
  {
    name: "A Photographer's Diary",
    description:
      "Developer mode: OFF, photographer mode: ON. This is my visual playground, where I swap debugging code for debugging life through a camera lens. It's a mixed gallery where the high-energy of events, the calculated drama of cinematic shots, and the beautiful randomness of the street all collide. Consider this collection my evidence: definitive proof that I'm programmed to capture more than just bugs.",
    tags: [
      {
        name: "photography",
        color: "blue-text-gradient",
      },
      {
        name: "sony",
        color: "green-text-gradient",
      },
      {
        name: "canon",
        color: "pink-text-gradient",
      },
    ],
    image: diary,
    project_link: "../../error.html",
    link_icon: gdrive,
  },
];

export { skillCategories, technologies, experiences, testimonials, projects };
