/* eslint-disable */
import React from "react";
import { ExternalLink, Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function StarrySocialLinks() {
  return (
    <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-950">
      <div className="container mx-auto px-4 backdrop-blur-sm">
        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
          <div className="rounded-lg bg-emerald-800/50 hover:bg-emerald-700/50 transition-colors shadow-lg shadow-emerald-500/20 backdrop-blur-md">
            <a
              href="https://twitter.com/yourusername"
              className="flex items-center justify-between p-2 group"
            >
              <div className="flex items-center gap-2">
                <Twitter className="w-4 h-4 text-emerald-100 group-hover:glow-emerald-400" />
                <span className="text-xs text-emerald-100">@yourusername</span>
              </div>
              <ExternalLink className="w-3 h-3 text-emerald-100 opacity-60" />
            </a>
          </div>

          <div className="rounded-lg bg-emerald-800/50 hover:bg-emerald-700/50 transition-colors shadow-lg shadow-emerald-500/20 backdrop-blur-md">
            <a
              href="https://github.com/yourusername"
              className="flex items-center justify-between p-2 group"
            >
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4 text-emerald-100 group-hover:glow-emerald-400" />
                <span className="text-xs text-emerald-100">@yourusername</span>
              </div>
              <ExternalLink className="w-3 h-3 text-emerald-100 opacity-60" />
            </a>
          </div>

          <div className="rounded-lg bg-emerald-800/50 hover:bg-emerald-700/50 transition-colors shadow-lg shadow-emerald-500/20 backdrop-blur-md">
            <a
              href="https://linkedin.com/in/yourusername"
              className="flex items-center justify-between p-2 group"
            >
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-emerald-100 group-hover:glow-emerald-400" />
                <span className="text-xs text-emerald-100">@yourusername</span>
              </div>
              <ExternalLink className="w-3 h-3 text-emerald-100 opacity-60" />
            </a>
          </div>

          <div className="rounded-lg bg-emerald-800/50 hover:bg-emerald-700/50 transition-colors shadow-lg shadow-emerald-500/20 backdrop-blur-md">
            <a
              href="mailto:you@example.com"
              className="flex items-center justify-between p-2 group"
            >
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-100 group-hover:glow-emerald-400" />
                <span className="text-xs text-emerald-100">
                  you@example.com
                </span>
              </div>
              <ExternalLink className="w-3 h-3 text-emerald-100 opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
