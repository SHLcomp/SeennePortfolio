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
      "A luxury consulting website designed to establish trust, communicate expertise, and create a refined digital presence for a professional consultancy.",

    desc: [
      "This concept website was created for a consulting company that wanted to communicate professionalism, credibility, and a premium brand identity from the first interaction. The goal was to create an experience that feels trustworthy and sophisticated while still making the company's services easy to understand and explore.",

      "The visual direction was inspired by the idea of the universe, using deep atmospheric backgrounds, golden accents, and subtle lighting effects to create a distinctive identity without sacrificing usability. The layout combines generous spacing, clear typography, and carefully controlled visual effects to maintain a balance between luxury and readability.",

      "The website was structured around the information potential clients need before deciding to make contact. Services, company information, and calls to action were organised into a clear flow so visitors can understand the company's offering while gradually building confidence in the brand.",

      "The final interface was developed with React and SCSS, with GSAP used to create smooth, purposeful animations and transitions. The result is a responsive consulting website that combines a distinctive visual identity with reusable components and an experience designed to feel polished across different screen sizes.",
    ],

    img: img1,
    showcaseImg: img1sh,
    tech: ["React / Vite", "SCSS", "GSAP"],

    demo: "https://lou-2.vercel.app/",
    github: "https://github.com/SHLcomp/LOU2",

    features: [
      "Fully responsive design",
      "Animated UI sections",
      "Interactive visual effects",
      "Contact form",
    ],

    industry: ["Consulting"],
    type: "Business",
    style: ["Luxury", "Minimal", "Modern"],

    workflow: [
      "The project began with researching consulting websites and premium service-based brands to understand how they communicate professionalism, expertise, and trust. I focused on identifying the information users need before contacting a consultancy and how visual hierarchy can support that decision-making process.",

      "I then developed the site's structure and wireframes around a clear user journey, making sure important information and calls to action could be discovered naturally without overwhelming the visitor.",

      "The visual direction was built around a universe-inspired concept, combining dark atmospheric backgrounds, golden accents, typography, and subtle lighting effects. GSAP animations were introduced selectively to reinforce the visual identity while keeping the interface usable and responsive.",

      "Finally, the design was implemented with React and SCSS using reusable components and responsive layouts. GSAP was integrated for the final animation layer, followed by responsive testing and refinement across different screen sizes.",
    ],

    featured: true,
  },

  // ID 2
  {
    id: 2,
    title: "Cuisine Website",

    shortDesc:
      "A modern restaurant website designed to showcase the brand, menu, and dining experience through an elegant and highly visual interface.",

    desc: [
      "This concept website was designed for a modern restaurant that needed a digital presence capable of communicating the atmosphere and quality of its dining experience before a customer ever visits. The primary goal was to combine strong visual presentation with straightforward access to essential restaurant information.",

      "The design uses a refined and minimal visual language to keep attention on the food and the restaurant's identity. Large imagery, carefully structured sections, elegant typography, and subtle movement create a premium experience while maintaining a clear information hierarchy.",

      "The page structure was planned around the questions a potential customer is likely to have: What does the restaurant offer? What does the food look like? What is the atmosphere? And how can I find out more or make contact? This creates a natural progression from visual discovery to useful information.",

      "The interface was developed using React and SCSS, with GSAP animations adding movement and visual depth throughout the experience. Responsive layouts ensure that the same visual identity and usability are maintained across desktop, tablet, and mobile screens.",
    ],

    img: img2,
    showcaseImg: img2sh,
    tech: ["React", "SCSS", "GSAP"],

    demo: "https://seenne-cuisine.vercel.app/",
    github: "https://github.com/SHLcomp/SeenneCuisine",

    features: [
      "Fully responsive design",
      "Animated UI sections",
      "Menu preview",
      "Interactive visual elements",
    ],

    industry: ["Restaurant"],
    type: "Restaurant",
    style: ["Luxury", "Minimal", "Modern"],

    workflow: [
      "The project began with researching modern restaurant websites to understand how successful brands present their food, atmosphere, and identity online. I focused on creating a structure that allows visitors to discover the restaurant visually while still reaching important information quickly.",

      "The layout and wireframes were planned around a visual-first browsing experience, giving photography and key restaurant content enough space to make an immediate impression without creating unnecessary complexity.",

      "The visual design was developed around a modern, refined aesthetic using spacious layouts, strong imagery, typography, and subtle animations. GSAP was used to introduce movement between sections while keeping the experience smooth and purposeful.",

      "The final website was implemented with React and SCSS, with GSAP handling the animation layer. The interface was then refined for different screen sizes to maintain consistent spacing, hierarchy, and usability across devices.",
    ],

    featured: true,
  },

  // ID 3
  {
    id: 3,
    title: "Contracting Website",

    shortDesc:
      "A modern Arabic-language website for a contracting company, designed to communicate expertise, showcase services, and make it easier for potential clients to request advice or quotes.",

    desc: [
      "This concept website was created for a contracting and construction company that needed a professional online presence capable of communicating reliability, expertise, and the quality of its work. Since the target audience is Arabic-speaking, the experience was designed around Arabic content and a clear, accessible information structure.",

      "The website focuses on presenting the company's services and capabilities in a straightforward way while maintaining a strong visual identity. Clean layouts, structured content, and subtle motion help the company appear established and professional without relying on excessive visual effects.",

      "The content structure was designed around the needs of potential clients researching a contractor. Visitors can quickly understand the company's services, learn more about its work, and reach out for advice or project quotations without having to navigate through unnecessary steps.",

      "The website was developed with React and SCSS, with CSS keyframe animations used to add lightweight motion to the interface. Responsive layouts and Arabic-language content were carefully considered to ensure the experience remains practical and visually consistent across different devices.",
    ],

    img: img3,
    showcaseImg: img3sh,
    tech: ["React / Vite", "SCSS", "CSS Animations"],

    demo: "https://reval-world.vercel.app/",
    github: "https://github.com/SHLcomp/reval-world",

    features: [
      "Fully responsive design",
      "Arabic-language interface",
      "Animated UI sections",
      "Contact form for advice and quotes",
    ],

    industry: ["Construction"],
    type: "Business",
    style: ["Luxury", "Minimal", "Modern"],

    workflow: [
      "The project began with researching construction and contracting websites to understand how companies in the industry communicate reliability, expertise, and their range of services. I also considered the needs of an Arabic-speaking audience when planning the content structure and overall browsing experience.",

      "I created the initial structure and wireframes around the information potential clients need when evaluating a contractor, prioritising services, company information, and clear opportunities to request advice or a quotation.",

      "The visual direction focused on creating a modern and professional impression through structured layouts, typography, imagery, and restrained animations. CSS keyframes were used to introduce movement without adding unnecessary complexity or performance overhead.",

      "The final interface was developed with React and SCSS using reusable components and responsive styling. The layouts were then refined across screen sizes to ensure that the Arabic content, navigation, spacing, and visual hierarchy remained consistent.",
    ],

    featured: true,
  },

  // ID 4
  {
    id: 4,
    title: "Seenne Care",

    shortDesc:
      "A luxury skincare and cosmetics e-commerce concept designed to present beauty products through an attractive, polished, and interactive shopping experience.",

    desc: [
      "Seenne Care is an e-commerce concept created for a skincare and cosmetics brand that wanted to present its products through a visually rich and premium digital experience. The goal was to make the products feel desirable while creating a clean interface that allows customers to browse and discover products naturally.",

      "The design combines a warm luxury aesthetic with clear product presentation. Rather than treating the website as a simple product catalogue, the interface uses visual hierarchy, spacing, typography, and animation to create a stronger sense of brand identity around the products.",

      "Product discovery was a central part of the experience. Categories, product information, and filtering concepts were structured to help users narrow down what they are looking for while maintaining an engaging browsing experience. Small visual details and interactions were used to make the interface feel more polished and responsive.",

      "The project was developed with React and SCSS, with GSAP used for animation and interaction. The architecture was structured around reusable components and product data so the interface could be expanded into a larger e-commerce application as additional functionality is introduced.",
    ],

    img: img4,
    showcaseImg: img4sh,
    tech: ["React / Vite", "SCSS", "GSAP", "MERN / Full Stack"],

    demo: "https://seenne-care.vercel.app/",
    github: "https://github.com/SHLcomp/SeenneCare",

    features: [
      "Responsive e-commerce interface",
      "Animated UI sections",
      "Product filtering",
      "Interactive product presentation",
      "Attention to visual details",
    ],

    industry: ["Beauty", "Skincare", "Cosmetics"],
    type: "E-commerce",
    style: ["Luxury", "Minimal", "Modern"],

    workflow: [
      "The project began with researching modern skincare and cosmetics brands to understand how premium beauty companies present products and establish a strong visual identity online. I focused particularly on product discovery, visual hierarchy, and the elements that contribute to a luxury shopping experience.",

      "The site's structure and wireframes were then planned around the shopping journey, from discovering the brand and browsing products to narrowing down products through categories and filters. The goal was to keep product discovery simple while giving the brand enough visual space to establish its identity.",

      "The visual design combines warm tones, elegant typography, spacious layouts, product-focused imagery, and subtle interactions to create a refined beauty aesthetic. GSAP was used to enhance key sections and transitions without allowing animation to overpower the products themselves.",

      "The interface was developed with React and SCSS using reusable product and UI components. Product data and filtering logic were structured with future e-commerce expansion in mind, while GSAP was integrated for the final interaction and animation layer.",
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
