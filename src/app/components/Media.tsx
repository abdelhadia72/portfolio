/* eslint-disable */
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import SocialLink from "./social-link";
import { TbBrandMysql } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { PiFileJsBold } from "react-icons/pi";
import { PiFileHtmlBold } from "react-icons/pi";
import { SiExpress } from "react-icons/si";
import {
  SiReact,
  SiMongodb,
  SiCsswizardry,
  SiNodedotjs,
  SiGit,
  SiNextdotjs,
  SiDocker,
  SiLinux,
} from "react-icons/si";
const ShadcnIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    {...props}
  >
    <path d="M22.219 11.784 11.784 22.219c-.407.407-.407 1.068 0 1.476.407.407 1.068.407 1.476 0L23.695 13.26c.407-.408.407-1.069 0-1.476-.408-.407-1.069-.407-1.476 0ZM20.132.305.305 20.132c-.407.407-.407 1.068 0 1.476.408.407 1.069.407 1.476 0L21.608 1.781c.407-.407.407-1.068 0-1.476-.408-.407-1.069-.407-1.476 0Z" />
  </svg>
);

const skillLinks = [
  {
    icon: PiFileJsBold,
    username: "JavaScript",
    className: "hover:bg-[#F7DF1E] transition-colors duration-200 bg-[#e6cf1c]",
    href: "#",
  },
  {
    icon: PiFileHtmlBold,
    username: "HTML",
    className: "hover:bg-[#E34F26] transition-colors duration-200 bg-[#d14921]",
    href: "#",
  },
  {
    icon: SiCsswizardry,
    username: "CSS",
    className: "hover:bg-[#1572B6] transition-colors duration-200 bg-[#1266a3]",
    href: "#",
  },
  {
    icon: SiReact,
    username: "React.js",
    className: "hover:bg-[#61DAFB] transition-colors duration-200 bg-[#50c9ea]",
    href: "#",
  },
  {
    icon: SiMongodb,
    username: "MongoDB",
    className: "hover:bg-[#47A248] transition-colors duration-200 bg-[#3d8b3e]",
    href: "#",
  },
  {
    icon: SiNodedotjs,
    username: "Node.js",
    className: "hover:bg-[#339933] transition-colors duration-200 bg-[#2d862d]",
    href: "#",
  },
  {
    icon: SiGit,
    username: "Git",
    className: "hover:bg-[#F05032] transition-colors duration-200 bg-[#e0472d]",
    href: "#",
  },
  {
    icon: SiNextdotjs,
    username: "Next.js",
    className: "hover:bg-[#F05032] transition-colors duration-200 bg-[#e0472d]",
    href: "#",
  },
  {
    icon: SiDocker,
    username: "Docker",
    className: "hover:bg-[#2496ED] transition-colors duration-200 bg-[#1f85d8]",
    href: "#",
  },
  {
    icon: SiLinux,
    username: "Linux",
    className: "hover:bg-[#2496ED] transition-colors duration-200 bg-[#1f85d8]",
    href: "#",
  },
  {
    icon: TbBrandMysql,
    username: "SQL",
    className: "hover:bg-[#2496ED] transition-colors duration-200 bg-[#1f85d8]",
    href: "#",
  },
  {
    icon: RiTailwindCssFill,
    username: "Tailwindcss",
    className: "hover:bg-[#2496ED] transition-colors duration-200 bg-[#1f85d8]",
    href: "#",
  },
  {
    icon: SiExpress,
    username: "express.js",
    className: "hover:bg-[#2496ED] transition-colors duration-200 bg-[#1f85d8]",
    href: "#",
  },
  {
    icon: ShadcnIcon,
    username: "Shadcn",
    className: "hover:bg-[#2496ED] transition-colors duration-200 bg-[#1f85d8]",
    href: "#",
  },
];

const firstRow = skillLinks.slice(0, skillLinks.length / 2);
const secondRow = skillLinks.slice(skillLinks.length / 2);

const Media = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-black bg-[#1e1e1e] md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:15s] rotate-[-15deg]">
        {firstRow.map((link) => (
          <SocialLink
            key={link.username}
            icon={link.icon}
            username={link.username}
            href={link.href}
            className={cn("rounded-lg p-2 mx-2", link.className)}
          />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        className="[--duration:15s]  rotate-[-15deg]"
      >
        {secondRow.map((link) => (
          <SocialLink
            key={link.username}
            icon={link.icon}
            username={link.username}
            href={link.href}
            className={cn("rounded-lg p-2 mx-2", link.className)}
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#1e1e1e]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#1e1e1e]"></div>
    </div>
  );
};

export default Media;
