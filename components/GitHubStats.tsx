"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import CountUp from "react-countup";
import { GitFork, Star, GitPullRequest, Code } from "lucide-react";

export default function GitHubStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { isIntersecting, ref: counterRef } = useIntersectionObserver({
    threshold: 0.3,
  });

  // Replace with your actual GitHub username
  const githubUsername = "yourusername";

  const stats = [
    {
      icon: Star,
      label: "Stars Earned",
      value: 245,
      suffix: "+",
      color: "text-yellow-500",
    },
    {
      icon: GitFork,
      label: "Forks",
      value: 89,
      suffix: "+",
      color: "text-blue-500",
    },
    {
      icon: GitPullRequest,
      label: "Pull Requests",
      value: 156,
      suffix: "+",
      color: "text-green-500",
    },
    {
      icon: Code,
      label: "Repositories",
      value: 42,
      suffix: "",
      color: "text-purple-500",
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

  return (
    <section
      id="github-stats"
      className="py-20 md:py-32 bg-muted/50"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              GitHub Activity
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My open-source contributions and project statistics
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            ref={counterRef}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`mb-4 p-3 bg-background rounded-lg w-fit mx-auto ${stat.color}`}
                    >
                      <stat.icon className="w-8 h-8" />
                    </div>
                    <div className="text-3xl font-bold mb-2">
                      {isIntersecting ? (
                        <>
                          <CountUp
                            end={stat.value}
                            duration={2.5}
                            separator=","
                          />
                          {stat.suffix}
                        </>
                      ) : (
                        "0"
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* GitHub Contribution Graph - Using GitHub's built-in graph */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-center">
                  Contribution Activity
                </h3>
                <div className="flex justify-center">
                  <img
                    src={`https://ghchart.rshah.org/${githubUsername}`}
                    alt="GitHub Contribution Graph"
                    className="w-full max-w-3xl rounded-lg"
                    loading="lazy"
                  />
                </div>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Contributions in the last year
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* GitHub Stats Cards */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6"
          >
            <Card className="overflow-hidden">
              <CardContent className="p-4">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=transparent&hide_border=true`}
                  alt="GitHub Stats"
                  className="w-full"
                  loading="lazy"
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-4">
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=transparent&hide_border=true`}
                  alt="Top Languages"
                  className="w-full"
                  loading="lazy"
                />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mt-8">
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <span>View Full Profile on GitHub</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

