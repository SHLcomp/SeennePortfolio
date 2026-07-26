import img1 from "../assets/consulting.png";
import img1sh from "../assets/1sh.png";
import img2 from "../assets/Modern Restaurant Website Design.png";
import img2sh from "../assets/2.png";
import img3 from "../assets/3.jpg";
import img3sh from "../assets/3sh.jpg";
import img4 from "../assets/4.png";
import img4sh from "../assets/4sh.png";
import img5 from "../assets/SAS website image.jpg";
import img5sh from "../assets/SAS image.png";

const projects = [
  {
    id: 1,
    title: "Consulting Website",
    shortDesc:
      "Universe inspired website design for a consulting company that is fully responsive and functional.",
    desc: [
      "Universe inspired website design for a consulting company that is fully responsive and functional.",
    ],
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

    // Business niche
    industry: ["Consulting"],

    // Type of website
    type: "Business",

    // Design style
    style: ["Luxury", "Minimal", "Modern"],

    workflow:
      "Started with UI research and wireframing, then developed responsive layout using React and SCSS, followed by performance optimization and animation using GSAP.",
    featured: true,
  },

  {
    id: 2,
    title: "Cuisine Website",
    shortDesc:
      "Modern responsive cuisine website with menu preview and animated features.",
    desc: [
      "Modern responsive cuisine website with menu preview and animated features.",
    ],
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
    // Business niche
    industry: ["Restaurant"],

    // Type of website
    type: "Restaurant",

    // Design style
    style: ["Luxury", "Minimal", "Modern"],

    workflow: [
      "Started with UI research and wireframing, then developed responsive layout using React and SCSS, followed by performance optimization and animation using GSAP.",
    ],
    featured: true,
  },

  {
    id: 3,
    title: "Contracting Website",
    shortDesc:
      "Modern responsive website for a contracting company with services preview and animated features, made in the Arabic language.",
    desc: [
      "Modern responsive website for a contracting company with services preview and animated features, made in the Arabic language.",
    ],
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
    // Business niche
    industry: ["Construction"],

    // Type of website
    type: "Business",

    // Design style
    style: ["Luxury", "Minimal", "Modern"],

    workflow: [
      "Started with UI research and wireframing, then developed responsive layout using React and SCSS, followed by performance optimization and animation using css keyframes.",
    ],
    featured: true,
  },

  {
    id: 4,
    title: "Seenne care",
    shortDesc:
      "An e-commerce website that is dedicated to show skin care and makeup products in an attractive way.",
    desc: [
      "An e-commerce website that is dedicated to show skin care and makeup products in an attractive way.",
    ],
    img: img4,
    showcaseImg: img4sh,
    tech: ["React / vite", "SCSS", "MERN | Fullsatck", "GSAP"],

    demo: "https://seenne-care.vercel.app/",
    github: "https://github.com/SHLcomp/SeenneCare",

    features: [
      // "Fully responsive design",
      "Animated UI section",
      "Attention to details",
      // "SEO optimized",
      // "Authentication system",
      // "MongoDB database connections",
      // "User specific cart/checkout functionality",
      // "User reviews/rating options",
      // "Real time stock tracking/inventory management"
    ],

    // Business niche
    industry: ["Beauty", "Skincare", "Cosmetics"],

    // Type of website
    type: "E-commerce",

    // Design style
    style: ["Luxury", "Minimal", "Modern"],

    workflow: [
      "Started with UI research and wireframing, then developed responsive layout using React and SaSS, followed by performance optimization and animation using GSAP.",
    ],
  },
  {
    id: 5,
    title: "Seenne Architecture Studio",

    shortDesc:
      "A luxury business/company website for architecture and interior design, made for a team that transforms their client's vision into a luxury building.",
    desc: [
      "Seenne Architecture Studio is a concept website created for a luxury architecture and interior design practice. The goal was to present the studio as a trusted partner for clients investing in high-end residential and commercial projects, where credibility and attention to detail are just as important as visual appeal.",

      "Rather than relying on excessive animations or aggressive calls to action, the website focuses on building confidence through a calm, refined experience. Clean layouts, generous spacing, carefully chosen typography, and restrained interactions allow the projects and the studio's expertise to take centre stage.",

      "To strengthen trust, I highlighted the studio's experience, design philosophy, and values alongside curated project showcases. These sections answer the questions potential clients naturally have before making contact: What does this studio stand for? How do they approach design? Can they be trusted with a significant investment? The result is a website that positions the studio as experienced, thoughtful, and premium.",
    ],
    img: img5,
    showcaseImg: img5sh,
    tech: ["React / vite", "SCSS", "GSAP", "Figma"],

    demo: "https://seenne-architecture-studio.vercel.app/",
    github: "https://github.com/SHLcomp/SeenneArchitectureStudio",

    features: [
      "Fully responsive design",
      "Animated UI sections",
      "Video showcase of the projects",
      "Filtering option",
    ],

    // Business niche
    industry: ["Architecture", "Interior Design"],

    // Type of website
    type: "Corporate",

    // Design style
    style: ["Minimal", "Confident"],

    workflow: [
      "The project began with researching luxury architecture studios to understand how successful firms communicate expertise, quality, and trust. I analysed common user expectations, industry trends, and the information prospective clients look for before reaching out to an architecture practice.",

      "Using these insights, I planned the site's structure and produced wireframes that prioritised clarity over complexity. Every section was intentionally placed to guide visitors through the studio's story, portfolio, philosophy, and services in a logical sequence that gradually builds confidence.",

      "The visual design focused on a minimal, sophisticated aesthetic inspired by high-end architecture brands. A restrained colour palette, elegant typography, subtle GSAP animations, and spacious layouts create a premium browsing experience without distracting from the work itself.",

      "Finally, the website was developed with React, SCSS, and GSAP, ensuring smooth performance, responsive layouts across all devices, and reusable components that make future updates and expansion straightforward.",
    ],
    featured: true,
  },
];

export default projects;
