"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { personalInfo } from "@/lib/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center text-muted-foreground"
        >
          <p className="flex items-center justify-center gap-2">
            Made with{" "}
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-4 h-4 fill-red-500 text-red-500" />
            </motion.span>{" "}
            using Next.js, TypeScript, and Framer Motion
          </p>
          <p className="mt-2">© {currentYear} {personalInfo.name}. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}

