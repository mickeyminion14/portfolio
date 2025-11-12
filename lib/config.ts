// Personal Information Configuration
// Update these values to customize your portfolio

export const personalInfo = {
  name: "Sarthak Agrawal",
  title: "Full Stack Developer",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",

  // Social Links
  social: {
    github: "https://github.com/sarthakagrawal",
    linkedin: "https://linkedin.com/in/sarthakagrawal",
    twitter: "@sarthakagrawal",
    email: "mailto:your.email@example.com",
  },

  // SEO & Meta
  domain: process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL 
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
    "backend developer",
    "software engineer",
  ],
};
