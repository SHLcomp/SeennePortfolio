import img1 from "../assets/consulting.png";
import img1sh from "../assets/1sh.png";
import img2 from "../assets/Modern Restaurant Website Design.png";
import img2sh from "../assets/2.png";
import img3 from "../assets/3.jpg";
import img3sh from "../assets/3sh.jpg";
import img4 from "../assets/4.png";
import img4sh from "../assets/4.png";
import img5 from "../assets/SAS website image.jpg"
import img5sh from "../assets/SAS image.png"
const projects = [
  {
    id: 1,
    title: "Consulting Website",
    desc: "Universe inspired website design for a consulting company that is fully responsive and functional.",
    img: img1,
    showcaseImg: img1sh,
    tech: ["React / vite", "SCSS", "GSAP"],

    demo: "https://lou-2.vercel.app/",
    github: "https://github.com/SHLcomp/LOU2",

    features: [
      "Fully responsive design",
      "Animated UI sections",
      "SEO optimized",
      "Contact form for reservations",
    ],

    workflow:
      "Started with UI research and wireframing, then developed responsive layout using React and SCSS, followed by performance optimization and animation using GSAP.",
  },

  {
    id: 2,
    title: "Cuisine Website",
    desc: "Modern responsive cuisine website with menu preview and animated features.",
    img: img2,
    showcaseImg: img2sh,
    tech: ["React", "SCSS", "GSAP"],

    demo: "https://seenne-cuisine.vercel.app/",
    github: "https://github.com/SHLcomp/SeenneCuisine",

    features: [
      "Fully responsive design",
      "Animated UI sections",
      "SEO optimized",
    ],

    workflow:
      "Started with UI research and wireframing, then developed responsive layout using React and SCSS, followed by performance optimization and animation using GSAP.",
  },

  {
    id: 3,
    title: "Contracting Website",
    desc: "Modern responsive website for a contracting company with services preview and animated features, made in the Arabic language.",
    img: img3,
    showcaseImg: img3sh,
    tech: ["React / vite", "SCSS"],

    demo: "https://reval-world.vercel.app/",
    github: "https://github.com/SHLcomp/reval-world",

    features: [
      "Fully responsive design",
      "Animated UI sections",
      "SEO optimized",
      "Contact form for advices and quotes",
    ],

    workflow:
      "Started with UI research and wireframing, then developed responsive layout using React and SCSS, followed by performance optimization and animation using css keyframes.",
  },

  {
    id: 6,
    title: "Seenne care",
    desc: "An e-commerce website that is dedicated to show skin care and makeup products in an attractive way.",
    img: img4,
    showcaseImg: img4sh,
    tech: ["React / vite", "SCSS", "MERN | Fullsatck", "GSAP"],

    demo: "https://seenne-care.vercel.app/",
    github: "https://github.com/SHLcomp/SeenneCare",

    features: [
      "Fully responsive design",
      "Animated UI sections",
      "SEO optimized",
      "Authentication system",
      "MongoDB database connections",
      "User specific cart/checkout functionality",
      "User reviews/rating options",
      "Real time stock tracking/inventory management"
    ],

    workflow:
      "Started with UI research and wireframing, then developed responsive layout using React and SaSS, followed by performance optimization and animation using GSAP.",
  },
  {
    id: 7,
    title: "Seenne Architecture Studio",
    desc: "A luxury business/company website for architecture and interior design, made for a team that transforms their client's vision into a luxury building. The clients are usually people with significant budget.",
    img: img5,
    showcaseImg: img5sh,
    tech: ["React / vite", "SCSS", "GSAP"],

    demo: "https://seenne-architecture-studio.vercel.app/",
    github: "https://github.com/SHLcomp/SeenneArchitectureStudio",

    features: [
      "Fully responsive design",
      "Animated UI sections",
      "SEO optimized",
      "Video showcase of the projects",
    ],

    workflow:
      "Started with complete research about the business, then wireframing and rough sketching the design, finally developing responsive layout using React and SASS, followed by performance optimization and animating the hero page's layout using GSAP.",
  },
];

export default projects;
