"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import About from "./components/About";
import Media from "./components/Media";
import Now from "./components/Now";
import QuoteComponent from "./components/Quotes";
import WebProject from "./components/WebProject";
import PhoneProject from "./components/PhoneProject";
import LocationMap from "./components/Map";
import Empty from "./components/Empty";

const componentMap = {
  About: <About />,
  Media: <Media />,
  Now: <Now />,
  Quotes: <QuoteComponent />,
  WebProject: <WebProject />,
  PhoneProject: <PhoneProject />,
  LocationMap: <LocationMap />,
  Empty: <Empty />,
};

const createCardData = (filterTag: string) => [
  {
    id: 1,
    name: "About",
    grid: "md:col-span-2 md:row-span-1",
    component: "About",
    tag: ["about", "all"],
  },
  {
    id: 2,
    name: "Now",
    grid: "md:h-full md:row-span-1",
    component: "Now",
    tag: ["about", "all"],
  },
  {
    id: 11,
    name: "Project 2",
    grid: "md:row-span-2 md:h-full bg-gradient-to-br from-[#0f1729] via-[#1a237e] to-[#000033] overflow-hidden",
    component: "PhoneProject",
    tag: ["project", "all"],
  },
  {
    id: 4,
    name: "Empty",
    grid: "md:h-full bg-green-400 md:row-span-1 skills",
    component: "Empty",
    tag: ["about", "contact", "all"],
  },
  {
    id: 9,
    name: "Location",
    grid: "",
    component: "LocationMap",
    tag: ["contact", "all"],
  },
  {
    id: 6,
    name: "Media",
    grid: "md:col-span-1",
    component: "Media",
    tag: ["contact", "all"],
  },
  {
    id: 7,
    name: "Quotes",
    grid: "",
    component: "Quotes",
    tag: ["about", "all"],
  },
  {
    id: 10,
    name: "Project 1",
    grid: "md:w-full lg:col-span-2 bg-red-400",
    component: "WebProject",
    tag: ["project", "all"],
  },
  {
    id: 12,
    name: "Project 3",
    grid: `md:w-full ${
      filterTag === "contact"
        ? "md:col-start-4 md:row-start-1"
        : filterTag === "about"
          ? "md:col-start-1 md:row-start-3"
          : ""
    }`,
    component: "WebProject",
    tag: ["project", "all"],
  },
];

interface CardsProps {
  filterTag: string;
}

const Cards: React.FC<CardsProps> = ({ filterTag }) => {
  const [data, setData] = useState(createCardData(filterTag));
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setData(createCardData(filterTag));
  }, [filterTag]);

  const filteredData = data.filter((c) => c.tag.includes(filterTag));
  const otherData = data.filter((c) => !c.tag.includes(filterTag));

  const getGridClasses = () => {
    if (windowWidth < 640) return "grid-cols-1";
    if (windowWidth < 768) return "grid-cols-2";
    if (windowWidth < 1024) return "grid-cols-3";
    return "grid-cols-4";
  };

  return (
    <div
      className={`grid ${getGridClasses()} gap-4 h-min-screen [&>*]:min-h-[150px] max-w-[1200px] mx-auto px-4 py-6 pb-10`}
    >
      <AnimatePresence mode="wait">
        {filteredData.map((card) => (
          <motion.div
            key={card.id}
            className={`${card.grid} opacity-100 hover:rotate-x-[10deg]`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            layout
          >
            {componentMap[card.component as keyof typeof componentMap]}
          </motion.div>
        ))}
        {otherData.map((card) => (
          <motion.div
            key={card.id}
            className={`${card.grid} opacity-25`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.25 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            layout
          >
            {componentMap[card.component as keyof typeof componentMap]}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Cards;
