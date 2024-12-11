import React from "react";
import { Quote } from "lucide-react";

export default function QuoteComponent() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white p-8 rounded-xl shadow-2xl border border-indigo-700 transition-all duration-300 ease-in-out hover:shadow-3xl hover:border-indigo-500 overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-full bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
      <Quote className="absolute -top-4 -left-4 w-20 h-20 text-indigo-400 opacity-20 transform rotate-12 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-30" />
      <div className="relative z-10 w-full space-y-6">
        <p className="font-serif text-lg leading-relaxed tracking-wide text-indigo-100">
          <span className="text-3xl font-bold text-indigo-300">"</span>
          When the sun sets and seasons shift, I stay grinding, Focused,
          unshaken—my fate's mine for defining
          <span className="text-3xl font-bold text-indigo-300">"</span>
        </p>
        <div className="flex items-center space-x-4 pt-4">
          <div className="w-16 h-0.5 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full"></div>
          <span className="text-sm font-bold text-indigo-300 tracking-widest uppercase">
            MADD
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-500 to-indigo-500 opacity-20 rounded-tl-full"></div>
    </div>
  );
}
