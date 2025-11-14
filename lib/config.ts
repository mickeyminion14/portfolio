// Personal Information Configuration
// Update these values to customize your portfolio

export const personalInfo = {
  name: "Sarthak Agrawal",
  title: "Full Stack Developer",
  email: "dev.sarthak.agrawal@gmail.com",
  phone: "+918010771067",
  location: "San Francisco, CA",

  // Social Links
  social: {
    github: "https://github.com/mickeyminion14",
    linkedin: "https://linkedin.com/in/sarthakagrawal14",
    email: "mailto:dev.sarthak.agrawal@gmail.com",
  },

  // SEO & Meta
  domain:
    process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000",
  description:
    "Full Stack Developer specializing in React, Next.js, and TypeScript. Building exceptional digital experiences with modern web technologies.",
  keywords: [
    "Sarthak Agrawal",
    "portfolio",
    "full stack developer",
    "react developer",
    "nextjs developer",
    "typescript",
    "web development",
    "frontend developer",
    "software engineer",
  ],
};
