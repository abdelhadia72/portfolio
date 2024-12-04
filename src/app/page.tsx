"use client";
import Cards from "./Cards";
import Nav from "./Nav";
import { useState } from "react";

export default function Home() {
  const [filterTag, setFilterTag] = useState("all");

  return (
    <div className="min-h-screen w-screen bg-[#201d20]">
      <Nav setTag={setFilterTag} />
      <Cards filterTag={filterTag} />
    </div>
  );
}
