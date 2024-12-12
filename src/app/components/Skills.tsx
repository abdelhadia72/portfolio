/* eslint-disable */

import React from "react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiCss3,
  SiSass,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiJavascript,
  SiPython,
  SiC,
  SiDocker,
  SiLinux,
} from "react-icons/si";

interface Icon {
  name: string;
  href: string;
  icon: React.ReactNode;
  className: string;
}

const icons: Icon[] = [
  {
    name: "Next.js",
    href: "#",
    icon: (
      <>
        <SiNextdotjs />
        <span className="ml-2 font-bold">Next.js</span>
      </>
    ),
    className: "text-white ",
  },
  {
    name: "React",
    href: "#",
    icon: (
      <>
        <SiReact />
        <span className="ml-2 font-bold">React</span>
      </>
    ),
    className: "text-[#61DAFB] ",
  },
  {
    name: "Tailwind",
    href: "#",
    icon: (
      <>
        <SiTailwindcss />
        <span className="ml-2 font-bold">Tailwind</span>
      </>
    ),
    className: "text-[#38B2AC] ",
  },
  {
    name: "CSS",
    href: "#",
    icon: (
      <>
        <SiCss3 />
        <span className="ml-2 font-bold">CSS</span>
      </>
    ),
    className: "text-[#1572B6] ",
  },
  {
    name: "Sass",
    href: "#",
    icon: (
      <>
        <SiSass />
        <span className="ml-2 font-bold">Sass</span>
      </>
    ),
    className: "text-[#CC6699] ",
  },
  {
    name: "MongoDB",
    href: "#",
    icon: (
      <>
        <SiMongodb />
        <span className="ml-2 font-bold">MongoDB</span>
      </>
    ),
    className: "text-[#47A248] ",
  },
  {
    name: "Express",
    href: "#",
    icon: (
      <>
        <SiPostman />
        <span className="ml-2 font-bold">Express</span>
      </>
    ),
    className: "text-white ",
  },
  {
    name: "MySQL",
    href: "#",
    icon: (
      <>
        <SiMysql />
        <span className="ml-2 font-bold">MySQL</span>
      </>
    ),
    className: "text-[#4479A1] ",
  },
  {
    name: "API",
    href: "#",
    icon: (
      <>
        <SiPostman />
        <span className="ml-2 font-bold">API</span>
      </>
    ),
    className: "text-[#FF6C37] ",
  },
  {
    name: "JavaScript",
    href: "#",
    icon: (
      <>
        <SiJavascript />
        <span className="ml-2 font-bold">JavaScript</span>
      </>
    ),
    className: "text-[#F7DF1E] ",
  },
  {
    name: "Python",
    href: "#",
    icon: (
      <>
        <SiPython />
        <span className="ml-2 font-bold">Python</span>
      </>
    ),
    className: "text-[#3776AB] ",
  },
  {
    name: "C",
    href: "#",
    icon: (
      <>
        <SiC />
        <span className="ml-2 font-bold">C</span>
      </>
    ),
    className: "text-[#A8B9CC] ",
  },
  {
    name: "Docker",
    href: "#",
    icon: (
      <>
        <SiDocker />
        <span className="ml-2 font-bold">Docker</span>
      </>
    ),
    className: "text-[#2496ED]",
  },
  {
    name: "Linux",
    href: "#",
    icon: (
      <>
        <SiLinux />
        <span className="ml-2 font-bold">Linux</span>
      </>
    ),
    className: "text-[#FCC624] ",
  },
];

const firstRow = icons.slice(0, Math.ceil(icons.length / 2));

export default function FloatingIcons() {
  return (
    <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-[#1e1e1e] md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:15s]">
        {firstRow.map((icon) => (
          <div
            key={icon.name}
            className={cn(
              "flex items-center justify-between gap-3 rounded-lg border border-zinc-800 px-5 py-3 text-sm font-medium shadow-sm transition-all hover:bg-zinc-900/50 hover:border-zinc-700 hover:scale-[1.02] active:scale-[0.98]",
              "group",
              icon.className,
            )}
          >
            <div className="text-[inherit] transition-colors duration-300 flex items-center">
              {icon.icon}
            </div>
          </div>
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:15s]">
        {firstRow.map((icon) => (
          <div
            key={icon.name}
            className={cn(
              "flex items-center justify-between gap-3 rounded-lg border border-zinc-800 px-5 py-3 text-sm font-medium shadow-sm transition-all hover:bg-zinc-900/50 border-zinc-700 hover:scale-[1.02] active:scale-[0.98]",
              "group",
              icon.className,
            )}
          >
            <div className="text-[inherit] transition-colors duration-300 flex items-center">
              {icon.icon}
            </div>
          </div>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#1e1e1e]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#1e1e1e]"></div>
    </div>
  );
}
