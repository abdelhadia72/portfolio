import React from "react";
import {
  FileText,
  GraduationCap,
  Paperclip,
  Braces,
  Asterisk,
  Command,
  ChevronDown,
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
        <FileText className="w-12 h-12 top-[-30px] left-[20px] group-hover:left-[35px] group-hover:top-[5px] group-hover:rotate-[-25deg] rotate-[15deg] text-white absolute duration-300 ease-in-out transition-all transform hover:scale-110" />
        <Braces className="w-12 h-12 top-[155px] right-[120px] rotate-[-65deg] text-white absolute group-hover:right-[120px] group-hover:top-[135px] group-hover:rotate-[-80deg] duration-300 ease-in-out transition-all transform hover:scale-110" />
        <Paperclip className="w-12 h-12 absolute top-[160px] left-[40px] border-opacity-55 rotate-[85deg] group-hover:left-[45px] group-hover:top-[120px] group-hover:rotate-[90deg] text-white duration-300 ease-in-out transition-all transform hover:scale-110" />
        <GraduationCap className="w-12 h-12 top-[20px] right-[-25px] rotate-[-25deg] text-white absolute group-hover:right-[0px] group-hover:rotate-[25deg] duration-300 ease-in-out transition-all transform hover:scale-110" />
        <Command className="w-12 h-12 top-[-35px] right-[150px] rotate-[-25deg] text-white absolute group-hover:rotate-[5deg] group-hover:right-[120px] group-hover:top-[-20px] duration-300 ease-in-out transition-all transform hover:scale-110" />
        <Asterisk className="w-12 h-12 top-[120px] right-[-30px] rotate-[-25deg] text-white absolute group-hover:right-[15px] group-hover:top-[110px] group-hover:rotate-[-10deg] duration-300 ease-in-out transition-all transform hover:scale-110" />
        <button className="bg-white px-6 py-2 relative2 rounded-full hover:bg-opacity-70 transition-all">
          <p className="font-medium flex gap-2 items-center w-fit">
            Resume
            <ChevronDown className="relative" />
          </p>
        </button>
      </div>
    </div>
  );
};

export default Resume;
