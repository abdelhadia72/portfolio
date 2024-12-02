"use client";

import {
  SiHtml5,
  SiCss3,
  SiGithub,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiLinux,
  SiC,
  SiPython,
  SiDocker,
  SiMongodb,
  SiNginx,
} from "@icons-pack/react-simple-icons";

export default function Skills() {
  return (
    <div className="w-full h-full bg-[#37393e] p-3 rounded-lg relative overflow-hidden">
      <div className="relative h-[300px]">
        {[
          {
            icon: SiHtml5,
            name: "HTML5",
            color: "text-orange-500",
            position: "top-4 left-8",
          },
          {
            icon: SiCss3,
            name: "CSS3",
            color: "text-blue-500",
            position: "top-16 right-12",
          },
          {
            icon: SiGithub,
            name: "GitHub",
            color: "text-purple-500",
            position: "bottom-8 left-24",
          },
          {
            icon: SiJavascript,
            name: "JavaScript",
            color: "text-yellow-400",
            position: "top-32 left-48",
          },
          {
            icon: SiNodedotjs,
            name: "Node.js",
            color: "text-green-500",
            position: "bottom-16 right-36",
          },
          {
            icon: SiReact,
            name: "React",
            color: "text-blue-400",
            position: "top-8 right-48",
          },
          {
            icon: SiLinux,
            name: "Linux",
            color: "text-gray-200",
            position: "bottom-24 left-12",
          },
          {
            icon: SiC,
            name: "C",
            color: "text-blue-600",
            position: "top-24 left-32",
          },
          {
            icon: SiPython,
            name: "Python",
            color: "text-yellow-500",
            position: "bottom-12 right-16",
          },
          {
            icon: SiDocker,
            name: "Docker",
            color: "text-blue-500",
            position: "top-12 right-24",
          },
          {
            icon: SiMongodb,
            name: "MongoDB",
            color: "text-green-500",
            position: "bottom-32 right-48",
          },
          {
            icon: SiNginx,
            name: "Nginx",
            color: "text-green-400",
            position: "top-48 left-16",
          },
        ].map((Item, index) => (
          <div key={index} className={`absolute ${Item.position} group`}>
            <Item.icon
              className={`w-8 h-8 transition-all duration-300 ${Item.color} opacity-100 group-hover:scale-110`}
            />
            <div
              className={`absolute inset-0 blur-xl transition-opacity duration-300 opacity-0 opacity-50 ${Item.color}`}
            >
              <Item.icon className="w-8 h-8" />
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {Item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
