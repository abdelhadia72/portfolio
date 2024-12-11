import React from "react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import SocialLink from "./social-link";
import { Linkedin, Twitter, Github, Mail, ExternalLink } from "lucide-react";

const socialLinks = [
  {
    icon: Twitter,
    username: "@AbdelhadiB",
    href: "https://twitter.com/AbdelhadiBou2",
    className: "hover:bg-[#1DA1F2] transition-colors duration-200 bg-[#1a8cd8]",
  },
  {
    icon: Linkedin,
    username: "Abdelhadi",
    href: "https://linkedin.com/in/AbdelhadiBou2",
    className: "hover:bg-[#0077B5] transition-colors duration-200 bg-[#0a66c2]",
  },
  {
    icon: Github,
    username: "AbdelhadiBou2",
    href: "https://github.com/AbdelhadiBou2",
    className: "hover:bg-[#6e5494] transition-colors duration-200 bg-[#4c2d7b]",
  },
  {
    icon: Mail,
    username: "Contact me",
    href: "mailto:Abdelhadi.bousaadah@gmail.com",
    className: "hover:bg-[#6e5494] transition-colors duration-200 bg-[#4c2d7b]",
  },
];

const firstRow = socialLinks.slice(0, socialLinks.length / 2);
const secondRow = socialLinks.slice(socialLinks.length / 2);

const Media = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-black bg-[#1e1e1e] md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:6s] rotate-[-15deg]">
        {firstRow.map((link) => (
          <SocialLink
            key={link.href}
            icon={link.icon}
            username={link.username}
            href={link.href}
            rightIcon={ExternalLink}
            className={cn("rounded-lg p-2 mx-2", link.className)}
          />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        className="[--duration:6s]  rotate-[-15deg]"
      >
        {secondRow.map((link) => (
          <SocialLink
            key={link.href}
            icon={link.icon}
            username={link.username}
            href={link.href}
            rightIcon={ExternalLink}
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
