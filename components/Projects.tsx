"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useCallback, useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Briefcase,
  Sparkles,
  FileText,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const professionalProjects = [
    {
      title: "E-Commerce Platform",
      company: "Appinventiv", // Replace with your company name
      description:
        "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
      image: "🛍️",
    },
    {
      title: "AI-Powered Analytics Dashboard",
      company: "Appinventiv",
      description:
        "Analytics dashboard with AI-driven insights, interactive data visualizations, and customizable reporting features.",
      tech: ["Next.js", "Python", "FastAPI", "PostgreSQL", "Chart.js"],
      image: "📊",
    },
    {
      title: "Social Media Platform",
      company: "Appinventiv",
      description:
        "Modern social networking platform with real-time messaging, media sharing, and advanced privacy controls.",
      tech: ["React", "Express", "MongoDB", "AWS S3", "Redis"],
      image: "💬",
    },
  ];

  const personalProjects = [
    {
      title: "Sketch and Collab",
      description:
        "A modern, real-time collaborative whiteboard application built to Sketch ideas, collaborate with your team, and bring your concepts to life seamlessly.",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Liveblocks",
        "Shadcn/UI",
        "Clerk",
        "Convex",
      ],
      demo: "https://sketch-and-collab.vercel.app",
      image: "📋",
    },
    {
      title: "Taskify",
      description:
        "Taskify makes it easier for teams to manage projects and tasks. Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s doing what and what needs to get done.",
      tech: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "Prisma",
        "Stripe",
        "Clerk",
        "Tailwind CSS",
        "Server Actions",
        "Shadcn/UI",
        "PostgreSQL",
      ],
      demo: "https://demo.com",
      image: "✨",
    },
    {
      title: "Weather Forecast App",
      description:
        "Beautiful weather application with 7-day forecasts, interactive maps, and location-based alerts.",
      tech: ["React", "TypeScript", "OpenWeather API", "Mapbox", "PWA"],
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

  interface Project {
    title: string;
    company?: string;
    description: string;
    tech: string[];
    github?: string;
    demo?: string;
    image: string;
  }

  const ProjectCard = ({
    project,
    isProfessional = false,
  }: {
    project: Project;
    isProfessional?: boolean;
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <div className="text-5xl mb-3 text-center">{project.image}</div>
            <CardTitle className="text-xl line-clamp-2">
              {project.title}
            </CardTitle>
            {isProfessional && project.company && (
              <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                <Briefcase className="w-3 h-3" />
                {project.company}
              </p>
            )}
          </CardHeader>
          <CardContent className="flex-1 flex flex-col pt-0">
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech
                .slice(0, 5)
                .map((tech: string, techIndex: number) => (
                  <Badge
                    key={techIndex}
                    variant="outline"
                    className="text-xs px-2 py-0.5"
                  >
                    {tech}
                  </Badge>
                ))}
              {project.tech.length > 5 && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge
                      variant="outline"
                      className="text-xs px-2 py-0.5 cursor-pointer"
                    >
                      +{project.tech.length - 5} more
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="flex flex-col gap-1">
                      {project.tech
                        .slice(5)
                        .map((tech: string, idx: number) => (
                          <span key={idx}>{tech}</span>
                        ))}
                    </div>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
            <div className="mt-auto space-y-2">
              <Button
                size="sm"
                variant="outline"
                className="w-full cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                <FileText className="w-4 h-4 mr-2" />
                Read More
              </Button>
              {(project.github || project.demo) && (
                <div className="flex gap-2">
                  {project.github && isProfessional && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      size="sm"
                      className={isProfessional ? "flex-1" : "w-full"}
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Project Details Modal */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
            {/* Header Section with Gradient Background */}
            <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8 pb-6">
              <DialogHeader className="space-y-4">
                <div className="text-8xl mb-2 text-center animate-in zoom-in duration-300">
                  {project.image}
                </div>
                <DialogTitle className="text-3xl md:text-4xl text-center font-bold">
                  {project.title}
                </DialogTitle>
                {isProfessional && project.company && (
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {project.company}
                    </span>
                  </div>
                )}
              </DialogHeader>
            </div>

            {/* Content Section */}
            <div className="p-8 pt-6 space-y-8">
              {/* Description */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-primary"></div>
                  <h4 className="font-semibold text-xl">About This Project</h4>
                </div>
                <DialogDescription className="text-base leading-relaxed text-foreground/80 pl-3">
                  {project.description}
                </DialogDescription>
              </div>

              {/* Technologies */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-primary"></div>
                  <h4 className="font-semibold text-xl">Tech Stack</h4>
                </div>
                <div className="flex flex-wrap gap-2.5 pl-3">
                  {project.tech.map((tech: string, idx: number) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="text-sm px-3 py-1.5 font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              {(project.github || project.demo) && (
                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-2"></div>
                  <div className="flex flex-col sm:flex-row gap-3 pl-3">
                    {project.demo && (
                      <Button size="lg" className="flex-1 group" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </>
    );
  };

  const ProjectCarousel = ({
    projects,
    isProfessional,
  }: {
    projects: Project[];
    isProfessional: boolean;
  }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
      {
        loop: true,
        align: "start",
        slidesToScroll: 1,
      },
      [Autoplay({ delay: 5000, stopOnInteraction: false })]
    );
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const onSelect = useCallback(() => {
      if (!emblaApi) return;
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
      if (!emblaApi) return;
      setScrollSnaps(emblaApi.scrollSnapList());
      emblaApi.on("select", onSelect);
      onSelect();
    }, [emblaApi, onSelect]);

    const scrollTo = useCallback(
      (index: number) => emblaApi?.scrollTo(index),
      [emblaApi]
    );

    return (
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {projects.map((project, index) => (
              <div className="embla__slide" key={index}>
                <ProjectCard
                  project={project}
                  isProfessional={isProfessional}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="embla__dots">
          {scrollSnaps.map((_: number, index: number) => (
            <button
              key={index}
              className={`embla__dot ${
                index === selectedIndex ? "embla__dot--selected" : ""
              }`}
              type="button"
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 md:py-32" ref={ref}>
      <style jsx global>{`
        .embla {
          position: relative;
          padding-bottom: 50px;
        }

        .embla__viewport {
          overflow: hidden;
          cursor: grab;
        }

        .embla__viewport:active {
          cursor: grabbing;
        }

        .embla__container {
          display: flex;
          gap: 24px;
        }

        .embla__slide {
          flex: 0 0 100%;
          min-width: 0;
          display: flex;
        }

        .embla__slide > * {
          width: 100%;
        }

        @media (min-width: 768px) {
          .embla__slide {
            flex: 0 0 calc(50% - 12px);
          }
        }

        @media (min-width: 1024px) {
          .embla__slide {
            flex: 0 0 calc(33.333% - 16px);
          }
        }

        .embla__dots {
          position: absolute;
          bottom: 12px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }

        .embla__dot {
          background: hsl(var(--primary));
          opacity: 0.3;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .embla__dot:hover {
          opacity: 0.6;
        }

        .embla__dot--selected {
          opacity: 1;
          width: 32px;
          border-radius: 5px;
        }
      `}</style>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Main Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of projects I&apos;ve worked on, showcasing my skills
              and passion for development
            </p>
          </motion.div>

          {/* Professional Projects Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="w-6 h-6" />
              <h3 className="text-3xl font-bold">Professional Work</h3>
            </div>
            <ProjectCarousel
              projects={professionalProjects}
              isProfessional={true}
            />
          </motion.div>

          {/* Personal Projects Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-8">
              <Sparkles className="w-6 h-6" />
              <h3 className="text-3xl font-bold">Personal Projects</h3>
            </div>
            <ProjectCarousel
              projects={personalProjects}
              isProfessional={false}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
