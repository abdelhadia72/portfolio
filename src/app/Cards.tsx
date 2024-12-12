"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import About from "./components/About";
import Media from "./components/Media";
import Now from "./components/Now";
import QuoteComponent from "./components/Quotes";
import WebProject from "./components/WebProject";
import WebProjectTwo from "./components/WebProjectTwo";
import PhoneProject from "./components/PhoneProject";
import LocationMap from "./components/Map";
import Form from "./components/Form";
// import Empty from "./components/Empty";

const componentMap = {
  About: <About />,
  Media: <Media />,
  Now: <Now />,
  Quotes: <QuoteComponent />,
  WebProject: <WebProject />,
  WebProjectTwo: <WebProjectTwo />,
  PhoneProject: <PhoneProject />,
  LocationMap: <LocationMap />,
  Form: <Form />,
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
    grid: "md:h-full md:row-span-1 w-full",
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
    name: "Form",
    grid: "md:h-full  md:row-span-1 skills",
    component: "Form",
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
    grid: "md:w-full lg:col-span-2",
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
    component: "WebProjectTwo",
    tag: ["project", "all"],
  },
];

interface CardsProps {
  filterTag: string;
}

const Cards: React.FC<CardsProps> = ({ filterTag }) => {
  const [data, setData] = useState(createCardData(filterTag));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setData(createCardData(filterTag));
  }, [filterTag]);

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-min-screen [&>*]:min-h-[150px] max-w-[1200px] mx-auto px-4 py-6 pb-10`}
    >
      <AnimatePresence mode="wait">
        {mounted && (
          <>
            {data
              .filter((c) => c.tag.includes(filterTag))
              .map((card) => (
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
            {data
              .filter((c) => !c.tag.includes(filterTag))
              .map((card) => (
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
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cards;
