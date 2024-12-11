import Image from "next/image";
import React from "react";

const WebProject = () => {
  return (
    <div className="h-full relative overflow-hidden group rounded-lg max-h-[400px] w-full bg-gradient-to-br from-[#ff6432] via-[#ff1958] to-[#7b2eff]">
      <div className="text p-8">
        <h1 className="text-4xl font-bold text-white mb-4">Lodaify</h1>
        <p className="text-lg text-white/80">
          it&apos;s a project for touching popele and loader mangmenr syteams
        </p>
      </div>
      <div className="image p-8">
        <Image
          src="/images/p1.avif"
          alt="Desktop Screenshot"
          width={800}
          height={450}
          className="rounded-lg bottom-[-20%] right-2%] scale-75 absolute shadow-lg group-hover:scale-105 transition-all duration-300 ease-in-out object-contain"
        />
      </div>
    </div>
  );
};

export default WebProject;
