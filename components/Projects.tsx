"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "🛍️",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "Redux"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "📋",
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description:
        "Analytics dashboard with AI-driven insights, interactive data visualizations, and customizable reporting features.",
      tech: ["Next.js", "Python", "FastAPI", "PostgreSQL", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "📊",
    },
    {
      title: "Social Media Platform",
      description:
        "Modern social networking platform with real-time messaging, media sharing, and advanced privacy controls.",
      tech: ["React", "Express", "MongoDB", "AWS S3", "Redis"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "💬",
    },
    {
      title: "Portfolio CMS",
      description:
        "Headless CMS designed specifically for portfolios and personal websites with an intuitive content editor.",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "tRPC"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "✨",
    },
    {
      title: "Weather Forecast App",
      description:
        "Beautiful weather application with 7-day forecasts, interactive maps, and location-based alerts.",
      tech: ["React", "TypeScript", "OpenWeather API", "Mapbox", "PWA"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "🌤️",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <section id="projects" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of projects I've worked on, showcasing my skills and
              passion for development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-6xl mb-4 text-center">
                      {project.image}
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" className="flex-1" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
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

