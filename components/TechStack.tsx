"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiAngular,
  SiMui,
  SiShadcnui,
  SiSocketdotio,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFramer,
  SiRedux,
  SiZod,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiTypeorm,
  SiSupabase,
  SiClerk,
  SiStripe,
  SiStrapi,
  SiGit,
  SiDocker,
  SiVercel,
  SiJest,
  SiWebpack,
  SiVite,
  SiFigma,
  SiTurborepo,
  SiNx,
} from "react-icons/si";
import { Cloud, Workflow, Database, Users, Network, CheckCircle, Box } from "lucide-react";

interface TechSkill {
  name: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  color: string;
}

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Angular", icon: SiAngular, color: "#DD0031" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Material UI", icon: SiMui, color: "#007FFF" },
        { name: "Angular Material", icon: SiAngular, color: "#E91E63" },
        { name: "PrimeNG", icon: SiAngular, color: "#FFD54F" },
        { name: "shadcn/ui", icon: SiShadcnui, color: "#FFFFFF" },
        { name: "Socket.IO", icon: SiSocketdotio, color: "#010101" },
        { name: "Zod", icon: SiZod, color: "#3E67B1" },
        { name: "Yup", icon: CheckCircle, color: "#E74C3C" },
        { name: "Zustand", icon: Box, color: "#443E38" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
        { name: "Redux", icon: SiRedux, color: "#764ABC" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
        { name: "Express", icon: SiExpress, color: "#000000" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
        { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
        { name: "TypeORM", icon: SiTypeorm, color: "#FE0902" },
        { name: "Convex", icon: Database, color: "#F5A623" },
        { name: "Clerk", icon: SiClerk, color: "#6C47FF" },
        { name: "Stripe", icon: SiStripe, color: "#635BFF" },
        { name: "Strapi", icon: SiStrapi, color: "#4945FF" },
        { name: "Liveblocks", icon: Users, color: "#E5484D" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "AWS", icon: Cloud, color: "#FF9900" },
        { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
        { name: "CI/CD", icon: Workflow, color: "#2088FF" },
        { name: "Jest", icon: SiJest, color: "#C21325" },
        { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" },
        { name: "Vite", icon: SiVite, color: "#646CFF" },
        { name: "Turborepo", icon: SiTurborepo, color: "#EF4444" },
        { name: "Nx", icon: SiNx, color: "#143055" },
        { name: "Single-SPA", icon: Network, color: "#00A1E0" },
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="tech-stack" className="py-20 md:py-32 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {techCategories.map((category, categoryIndex) => (
              <motion.div key={categoryIndex} variants={itemVariants}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-6 text-center">
                      {category.title}
                    </h3>
                    <motion.div
                      className="grid grid-cols-3 gap-4"
                      variants={containerVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          variants={iconVariants}
                          whileHover={{
                            scale: 1.1,
                            rotate: [0, -5, 5, -5, 0],
                            transition: { duration: 0.3 },
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-accent transition-colors cursor-default group"
                        >
                          <skill.icon
                            className={`w-10 h-10 transition-all duration-300 group-hover:drop-shadow-lg ${
                              skill.name === "shadcn/ui" ||
                              skill.name === "Vercel"
                                ? "bg-black dark:bg-white p-1.5 rounded text-white dark:text-black"
                                : ""
                            }`}
                            style={
                              skill.name === "shadcn/ui" ||
                              skill.name === "Vercel"
                                ? {}
                                : { color: skill.color }
                            }
                          />
                          <span className="text-xs text-center font-medium">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
