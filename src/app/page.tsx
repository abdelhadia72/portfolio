"use client";
import Cards from "./Cards";
import Nav from "./Nav";
import { useState } from "react";

import {
  MapPin,
  Briefcase,
  FileText,
  Code,
  User,
  Quote,
  Folder,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [filterTag, setFilterTag] = useState("all");

  return (
    <div className="min-h-screen w-screen bg-[#201d20]">
      {/* <div className="w-screen min-h-screen absolute opacity-[50%] top-0 left-0 z-0 bg-black" /> */}
      {/* <div className="bg-red-400 h-[70vh] w-[70vw] absolute left-[50%] -translate-x-[50%] rounded-full blur-[100px]" /> */}
      <div className="contant relative z-10">
        <Nav setTag={setFilterTag} />
        <Cards filterTag={filterTag} />
      </div>
    </div>
  );
}
