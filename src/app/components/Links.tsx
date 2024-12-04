"use client";

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github, Linkedin, Mail, Twitter } from "lucide-react";

function generateStars(
  count: number,
): { x: number; y: number; opacity: number }[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.7 + 0.3,
  }));
}

export default function StarrySocialLinks() {
  const [stars, setStars] = useState<
    { x: number; y: number; opacity: number }[]
  >([]);

  useEffect(() => {
    setStars(generateStars(100));
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#1e1e1e] to-[#2a2a2a] text-white">
      <div className="absolute inset-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {stars.map((star, index) => (
            <circle
              key={index}
              cx={`${star.x}%`}
              cy={`${star.y}%`}
              r="1"
              fill="#fff"
              opacity={star.opacity}
            >
              <animate
                attributeName="opacity"
                values={`${star.opacity};${star.opacity / 2};${star.opacity}`}
                dur={`${Math.random() * 3 + 2}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </svg>
      </div>
      <div className="relative z-10 flex items-center justify-center">
        <div className="w-full max-w-sm p-4 space-y-4">
          <Card className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/25 to-purple-600/25 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300 opacity-70 group-hover:opacity-100" />
            <a
              href="https://twitter.com/yourusername"
              className="relative flex items-center justify-between p-4 bg-gray-900/90 rounded-lg backdrop-blur-sm transition-colors hover:bg-gray-800/90"
            >
              <div className="flex items-center gap-2">
                <Twitter className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-medium text-gray-300">
                  @yourusername
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-500" />
            </a>
          </Card>

          <Card className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600/25 to-blue-600/25 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300 opacity-70 group-hover:opacity-100" />
            <a
              href="https://github.com/yourusername"
              className="relative flex items-center justify-between p-4 bg-gray-900/90 rounded-lg backdrop-blur-sm transition-colors hover:bg-gray-800/90"
            >
              <div className="flex items-center gap-2">
                <Github className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-medium text-gray-300">
                  @yourusername
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-500" />
            </a>
          </Card>

          <Card className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/25 to-pink-600/25 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300 opacity-70 group-hover:opacity-100" />
            <a
              href="https://linkedin.com/in/yourusername"
              className="relative flex items-center justify-between p-4 bg-gray-900/90 rounded-lg backdrop-blur-sm transition-colors hover:bg-gray-800/90"
            >
              <div className="flex items-center gap-2">
                <Linkedin className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-medium text-gray-300">
                  @yourusername
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-500" />
            </a>
          </Card>

          <Card className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600/25 to-orange-600/25 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300 opacity-70 group-hover:opacity-100" />
            <a
              href="mailto:you@example.com"
              className="relative flex items-center justify-between p-4 bg-gray-900/90 rounded-lg backdrop-blur-sm transition-colors hover:bg-gray-800/90"
            >
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-medium text-gray-300">
                  you@example.com
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-500" />
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
}
