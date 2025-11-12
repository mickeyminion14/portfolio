"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, ChevronDown, ChevronUp } from "lucide-react";

interface TimelineItem {
  id: number;
  type: "work" | "education";
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies?: string[];
}

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const timelineData: TimelineItem[] = [
    {
      id: 1,
      type: "work",
      title: "Senior Full Stack Developer",
      organization: "Tech Company Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description:
        "Leading development of scalable web applications and mentoring junior developers.",
      achievements: [
        "Architected microservices infrastructure reducing load time by 40%",
        "Led team of 5 developers on flagship product",
        "Implemented CI/CD pipeline improving deployment efficiency by 60%",
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
    },
    {
      id: 2,
      type: "work",
      title: "Full Stack Developer",
      organization: "Startup Solutions",
      location: "Remote",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client projects using modern web technologies.",
      achievements: [
        "Built 10+ production applications from scratch",
        "Reduced API response time by 50% through optimization",
        "Mentored 3 junior developers",
      ],
      technologies: ["Next.js", "TypeScript", "MongoDB", "GraphQL"],
    },
    {
      id: 3,
      type: "education",
      title: "Bachelor of Science in Computer Science",
      organization: "University of Technology",
      location: "Boston, MA",
      period: "2016 - 2020",
      description:
        "Focused on software engineering and web development. Dean's List all semesters.",
      achievements: [
        "GPA: 3.8/4.0",
        "President of Computer Science Club",
        "Winner of Annual Hackathon 2019",
      ],
      technologies: ["Java", "Python", "C++", "Algorithms", "Data Structures"],
    },
    {
      id: 4,
      type: "work",
      title: "Frontend Developer Intern",
      organization: "Digital Agency",
      location: "New York, NY",
      period: "Summer 2019",
      description:
        "Assisted in developing responsive web applications for various clients.",
      achievements: [
        "Developed 5 client websites",
        "Improved mobile responsiveness across all projects",
        "Contributed to company's component library",
      ],
      technologies: ["React", "JavaScript", "CSS", "Figma"],
    },
  ];

  const toggleExpand = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="timeline" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Career Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My professional experience and educational background
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {timelineData.map((item, index) => {
                  const isExpanded = expandedItems.includes(item.id);
                  const isLeft = index % 2 === 0;

                  return (
                    <motion.div
                      key={item.id}
                      variants={itemVariants}
                      className="relative"
                    >
                      {/* Timeline Icon */}
                      <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full border-2 bg-background border-primary flex items-center justify-center transform -translate-x-1/2 z-10">
                        {item.type === "work" ? (
                          <Briefcase className="w-6 h-6 text-primary" />
                        ) : (
                          <GraduationCap className="w-6 h-6 text-primary" />
                        )}
                      </div>

                      {/* Content Card */}
                      <Card
                        className={`ml-20 md:ml-0 md:w-[calc(50%-2.5rem)] cursor-pointer hover:shadow-lg transition-shadow ${
                          isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                        }`}
                        onClick={() => toggleExpand(item.id)}
                      >
                        <CardContent
                          className={`p-6 ${
                            isLeft ? "md:text-right" : "md:text-left"
                          }`}
                        >
                          <div
                            className={`flex items-start mb-2 ${
                              isLeft ? "md:flex-row-reverse" : "md:flex-row"
                            } gap-4`}
                          >
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold mb-1">
                                {item.title}
                              </h3>
                              <p className="text-primary font-medium mb-1">
                                {item.organization}
                              </p>
                              <p className="text-sm text-muted-foreground mb-1">
                                {item.location}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {item.period}
                              </p>
                            </div>
                            <motion.div
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="shrink-0"
                            >
                              {isExpanded ? (
                                <ChevronUp className="w-5 h-5" />
                              ) : (
                                <ChevronDown className="w-5 h-5" />
                              )}
                            </motion.div>
                          </div>

                          <p className="text-muted-foreground mb-4">
                            {item.description}
                          </p>

                          {/* Expanded Content */}
                          <motion.div
                            initial={false}
                            animate={{
                              height: isExpanded ? "auto" : 0,
                              opacity: isExpanded ? 1 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mb-4">
                              <h4 className="font-semibold mb-2">
                                Key Achievements:
                              </h4>
                              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                {item.achievements.map((achievement, idx) => (
                                  <li key={idx}>{achievement}</li>
                                ))}
                              </ul>
                            </div>

                            {item.technologies && (
                              <div>
                                <h4 className="font-semibold mb-2">
                                  Technologies:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {item.technologies.map((tech, idx) => (
                                    <Badge key={idx} variant="secondary">
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
