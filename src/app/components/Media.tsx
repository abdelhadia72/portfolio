import React from "react";

import SocialLink from "./social-link";
import {
  Linkedin,
  Instagram,
  Twitter,
  Github,
  ExternalLink,
} from "lucide-react";

const Media = () => {
  return (
    <div className="w-full h-full bg-[#37393e] flex flex-col gap-2 p-3 relative overflow-hidden">
      <SocialLink
        icon={Twitter}
        username="@AbdelhadiBou2"
        href="https://twitter.com/AbdelhadiBou2"
        rightIcon={ExternalLink}
        className="hover:bg-[#1DA1F2] transition-colors duration-200 bg-[#1a8cd8] rounded-lg p-2"
      />
      <SocialLink
        icon={Linkedin}
        username="@AbdelhadiBou2"
        href="https://linkedin.com/in/AbdelhadiBou2"
        rightIcon={ExternalLink}
        className="hover:bg-[#0077B5] transition-colors duration-200 bg-[#0a66c2] rounded-lg p-2"
      />
      <SocialLink
        icon={Github}
        username="@AbdelhadiBou2"
        href="https://github.com/AbdelhadiBou2"
        rightIcon={ExternalLink}
        className="hover:bg-[#6e5494] transition-colors duration-200 bg-[#4c2d7b] rounded-lg p-2"
      />
    </div>
  );
};

export default Media;
