"use client";
import About from "./components/About";
import Media from "./components/Media";
import Now from "./components/Now";
import QuoteComponent from "./components/Quotes";
import { motion, AnimatePresence } from "framer-motion";
import WebProject from "./components/WebProject";
import PhoneProject from "./components/PhoneProject";
import LocationMap from "./components/Map";
import Empty from "./components/Empty";

const data = [
  {
    id: 1,
    name: "About",
    grid: "md:col-span-2 md:row-span-1",
    component: <About />,
    tag: ["about", "all"],
  },
  {
    id: 2,
    name: "Now",
    grid: "md:h-full md:row-span-1",
    component: <Now />,
    tag: ["about", "all"],
  },
  {
    id: 11,
    name: "Project 2",
    grid: "md:row-span-2 md:h-full",
    component: <PhoneProject />,
    tag: ["project", "all"],
  },
  {
    id: 4,
    name: "Empty",
    grid: "md:h-full bg-green-400 md:row-span-1",
    component: <Empty />,
    tag: ["about", "contact", "all"],
  },
  {
    id: 9,
    name: "Location",
    grid: "",
    component: <LocationMap />,
    tag: ["contact", "all"],
  },
  {
    id: 6,
    name: "Media",
    grid: "md:col-span-1",
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
  {
    id: 10,
    name: "Project 1",
    grid: "md:w-full lg:col-span-2 bg-red-400",
    component: <WebProject />,
    tag: ["project", "all"],
  },
  {
    id: 12,
    name: "Project 3",
    grid: "md:w-full",
    component: <WebProject />,
    tag: ["project", "all"],
  },
];

const Cards = ({ filterTag }: { filterTag: string }) => {
  console.log("filter x", filterTag);

  const filteredData = data.filter((c) => c.tag.includes(filterTag));
  const otherData = data.filter((c) => !c.tag.includes(filterTag));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-row gap-4 h-min-screen [&>*]:min-h-[150px] max-w-[1200px] mx-auto px-4 py-6 pb-10">
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
