// ProjectShowcase.tsx

import expenseTracker from "../../assets/projects/expense-tracker.png";
import vaultMind from "../../assets/projects/vault-mind.png";
import pointOfSale from "../../assets/projects/point-of-sale.png";
import thriveGrid from "../../assets/projects/thrive-grid.png";
import careerQuest from "../../assets/projects/careerquest.png";
import freelancerReplyAI from "../../assets/projects/freelancer-reply-ai.png";

/* TECH LOGOS */
import reactLogo from "../../assets/logos/react.png";
import nextLogo from "../../assets/logos/next.png";

import nodeLogo from "../../assets/logos/node.png";

import mongoLogo from "../../assets/logos/mongodb.png";
import postmanLogo from "../../assets/logos/postman.png";
import expressLogo from "../../assets/logos/express.png";
import tailwindLogo from "../../assets/logos/tailwind.png";
import tsLogo from "../../assets/logos/typescript.png";
import jsLogo from "../../assets/logos/javascript.png";

import githubLogo from "../../assets/logos/github.png";
import cssLogo from "../../assets/logos/css.png";

export const projects = [
  {
    id: 1,
    image: vaultMind,
    category: "MERN STACK",
    title: "VaultMind",
    description:
      "Secure digital vault platform for passwords, files, reminders and private information with OTP authentication.",
    live: "https://vaultmindx.netlify.app/",
    github: "#",
    technologies: [
      reactLogo,
      nextLogo,
      nodeLogo,
      mongoLogo,
      expressLogo,
      tailwindLogo,
      tsLogo,
      githubLogo,
      postmanLogo,
    ],
  },
  {
    id: 2,
    image: pointOfSale,
    category: ".NET",
    title: "Point Of Sale",
    description:
      "Production-ready retail POS system with inventory management, sales processing and reporting dashboards.",
    live: "http://sufyanalii.somee.com/POSONLINE/frmLogin",
    github: "#",
    technologies: [jsLogo, cssLogo, githubLogo],
  },
  {
    id: 3,
    image: expenseTracker,
    category: "MERN STACK",
    title: "ExpenseTracker",
    description:
      "Smart group expense tracking application with balance management, settlements, authentication and admin controls.",
    live: "https://expense-tracker-mernx.netlify.app",
    github: "#",
    technologies: [
      reactLogo,
      nextLogo,
      nodeLogo,
      mongoLogo,
      expressLogo,
      postmanLogo,
      githubLogo,
      jsLogo,
      cssLogo,
    ],
  },

  {
    id: 4,
    image: thriveGrid,
    category: "MERN STACK",
    title: "Thrive Grit",
    description:
      "Premium business solution website focused on branding, development, SEO and high-converting UI/UX.",
    live: "https://thrivegrit.netlify.app/",
    github: "#",
    technologies: [
      reactLogo,
      nextLogo,
      nodeLogo,
      mongoLogo,
      expressLogo,
      tailwindLogo,
      githubLogo,
      postmanLogo,
    ],
  },

  {
    id: 5,
    image: careerQuest,
    category: "FINAL YEAR PROJECT",
    title: "CareerQuest",
    description:
      "AI-based career guidance platform with assessments, dashboards, mentorship and personalized recommendations.",
    live: "https://careerquestx.vercel.app/",
    github: "#",
    technologies: [
      reactLogo,
      nextLogo,
      nodeLogo,
      mongoLogo,
      expressLogo,
      tailwindLogo,
      githubLogo,
      postmanLogo,
    ],
  },

  {
    id: 6,
    image: freelancerReplyAI,
    category: "FRONTEND PROJECT",
    title: "FreelancerReply AI",
    description:
      "AI-powered freelancer communication tool for generating professional client replies instantly.",
    live: "https://freelanceraireply.netlify.app/",
    github: "#",
    technologies: [reactLogo, jsLogo, tailwindLogo, githubLogo],
  },
];
export default projects;
