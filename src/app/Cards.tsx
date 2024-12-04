"use client";
import About from "./components/About";
import Empty from "./components/Empty";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Media from "./components/Media";
import Now from "./components/Now";
import QuoteComponent from "./components/Quotes";
import { motion, AnimatePresence } from "framer-motion";
import WebProject from "./components/WebProject";
import PhoneProject from "./components/PhoneProject";
import Links from "./components/Links";
import LocationMap from "./components/Map";

const data = [
  {
    id: 1,
    name: "About",
    component: <About />,
    tag: ["about", "all"],
  },
  {
    id: 2,
    name: "Skills",
    grid: "",
    component: <Resume />,
    tag: ["about", "all"],
  },
  {
    id: 3,
    name: "Now",
    grid: "h-full",
    component: <Now />,
    tag: ["about", "all"],
  },
  {
    id: 6,
    name: "Media",
    grid: "",
    component: <Media />,
    tag: ["contact", "all"],
  },
  {
    id: 7,
    name: "Quotes",
    grid: "",
    component: <QuoteComponent />,
    tag: ["about", "all"],
  },
  // {
  //   id: 8,
  //   name: "Map",
  //   grid: "bg-red-400",
  //   component: <Skills />,
  //   tag: ["about", "all"],
  // },
  {
    id: 9,
    name: "P1",
    grid: "",
    component: <LocationMap />,
    tag: ["project", "all"],
  },
  {
    id: 10,
    name: "P2",
    grid: "",
    component: <WebProject />,
    tag: ["project", "all"],
  },
  {
    id: 11,
    name: "P3",
    grid: "",
    component: <PhoneProject />,
    tag: ["project", "all"],
  },
  {
    id: 12,
    name: "P4",
    grid: " row-span-2",
    component: <WebProject />,
    tag: ["contact", "all"],
  },
];

const Cards = ({ filterTag }: { filterTag: string }) => {
  console.log("filter x", filterTag);

  const filteredData = data.filter((c) => c.tag.includes(filterTag));
  const otherData = data.filter((c) => !c.tag.includes(filterTag));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 h-min-screen [&>*]:min-h-[150px] max-w-[1200px] mx-auto px-4 py-6 pb-10">
      <AnimatePresence mode="wait">
        {filteredData.map((g) => (
          <motion.div
            key={g.id}
            className={`${g.grid} opacity-100 hover:rotate-x-[10deg]`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            layout
          >
            {g.component}
          </motion.div>
        ))}
        {otherData.map((g) => (
          <motion.div
            key={g.id}
            className={`${g.grid} opacity-25`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.25 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            layout
          >
            {g.component}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Cards;
