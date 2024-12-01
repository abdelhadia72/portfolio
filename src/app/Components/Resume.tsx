import React from "react";
import {
  FileText,
  GraduationCap,
  Paperclip,
  Braces,
  Asterisk,
  Command,
} from "lucide-react";

const Resume = () => {
  return (
    <div className="w-full h-full bg-[#37393e] p-3 rounded-lg relative overflow-hidden">
      <div className="colors">
        <div className="bg-[#047fc1] absolute w-[80%] h-28 rounded-full blur-[30px] right-[10%] top-1 bg-opacity-80"></div>
        <div className="bg-[#5ec05d] absolute h-36 w-36 rounded-full blur-[50px] right-[-10%] top-[-10%] rotate-3 bg-opacity-80"></div>
        <div className="bg-[#5ec05d] absolute h-36 w-36 rounded-full blur-[50px] left-[-10%] top-[-10%] -rotate-3 bg-opacity-80"></div>
      </div>
      <div className="group relative z-10 h-full w-full flex items-center justify-center flex-col gap-4">
        <FileText className="w-12 h-12 top-[-30px] left-[20px] group-hover:left-[35px] duration-450 group-hover:top-[5px] group-hover:rotate-[-25deg] rotate-[15deg] [transition-timing-function:cubic-bezier(0.83,0,0.17,1)] text-white absolute transition-all" />
        <Braces className="w-12 h-12 top-[135px] right-[120px] rotate-[-65deg]  text-white absolute" />
        <Paperclip className="w-12 h-12 top-[140px] left-[40px] border-opacity-55 rotate-[85deg] text-white absolute" />
        <GraduationCap className="w-12 h-12 top-[20px] right-[-25px] rotate-[-25deg] text-white absolute" />
        <Command className="w-12 h-12 top-[-35px] right-[150px] rotate-[-25deg] text-white absolute" />
        <Asterisk className="w-12 h-12 top-[120px] right-[-30px] rotate-[-25deg] text-white absolute" />
        <button className="bg-white px-10 py-2 relative2 rounded-full hover:bg-opacity-70 transition-all">
          <p className="font-medium">Resume V</p>
        </button>
      </div>
    </div>
  );
};

export default Resume;
