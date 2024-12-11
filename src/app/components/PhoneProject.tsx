import Image from "next/image";
import React from "react";
import { ExternalLink, Github } from "lucide-react";

const PhoneProject = () => {
  return (
    <div className="h-full overflow-hidden group rounded-lg max-h-[400px] w-full bg-gradient-to-br from-[#0f1729] via-[#1a237e] to-[#000033] relative before:absolute before:inset-0 before:bg-[url('/stars.png')] before:bg-repeat before:opacity-50 before:animate-twinkle">
      <div className="absolute top-4 right-4 flex gap-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="border border-white rounded-full p-1.5 hover:bg-blue-400/20 transition-all group/icon">
          <Github className="h-6 w-6 text-white hover:text-blue-400 transition-colors cursor-pointer" />
          <span className="absolute invisible group-hover/icon:visible -bottom-8 right-0 bg-white text-black text-sm px-2 py-1 rounded">
            See Code
          </span>
        </div>
        <div className="border border-white rounded-full p-1.5 hover:bg-purple-400/20 transition-all group/icon">
          <ExternalLink className="h-6 w-6 text-white hover:text-purple-400 transition-colors cursor-pointer" />
          <span className="absolute invisible group-hover/icon:visible -bottom-8 right-0 bg-white text-black text-sm px-2 py-1 rounded">
            Go Live
          </span>
        </div>
      </div>
      <div className="text p-8">
        <h1 className="text-4xl font-bold text-white mb-4">Lodaify</h1>
        <p className="text-lg text-white/80">
          it's a project for touching popele and loader mangmenr syteams
        </p>
      </div>
      <div className="image p-8">
        <Image
          src="/images/p2.png"
          alt="Phone UI"
          width={300}
          height={200}
          className="rounded-lg shadow-lg group-hover:scale-105 transition-all relative hover:translate-y-[-70px] duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default PhoneProject;
