"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and well-documented code following best practices.",
    },
    {
      icon: Palette,
      title: "Modern Design",
      description:
        "Creating beautiful, intuitive interfaces with attention to detail and user experience.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimizing applications for speed, efficiency, and excellent performance.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate developer focused on building modern web
              applications that make a difference
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto mb-16"
          >
            <Card>
              <CardContent className="p-6 md:p-8">
                <p className="text-lg leading-relaxed mb-4">
                  With a strong foundation in both frontend and backend
                  development, I specialize in creating seamless, high-performance
                  web applications. My journey in software development has been
                  driven by curiosity and a constant desire to learn new
                  technologies.
                </p>
                <p className="text-lg leading-relaxed">
                  I believe in writing clean, maintainable code and creating
                  intuitive user experiences. When I'm not coding, you can find
                  me exploring new technologies, contributing to open-source
                  projects, or sharing knowledge with the developer community.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
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

