import React from "react";
import About from "./components/About";
import Empty from "./components/Empty";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Media from "./components/Media";
import Now from "./components/Now";
import QuoteComponent from "./components/Quotes";

const data = [
  {
    id: 1,
    name: "About",
    // grid: "col-span-2 md:col-span-2 md:col-start-1",
    grid: "",
    component: <About />,
  },
  {
    id: 2,
    name: "Skills",
    grid: "",
    component: <Resume />,
  },
  {
    id: 3,
    name: "pro",
    grid: "md:col-start-3 md:row-span-2 row-span-2",
    component: <Skills />,
  },
  { id: 3, name: "Now", grid: "h-full", component: <Now /> },
  { id: 4, name: "Media", grid: "", component: <Media /> },
  {
    id: 5,
    name: "Quites",
    grid: "col-span-2 md:col-span-2 md:col-start-1",
    component: <QuoteComponent />,
  },
  { id: 6, name: "Map", grid: "bg-red-400", component: <Empty /> },
  {
    id: 7,
    name: "P1",
    grid: "md:col-start-1 md:row-span-2 bg-orange-400",
    component: <Empty />,
  },
  { id: 8, name: "P2", grid: "bg-teal-400", component: <Empty /> },
  { id: 9, name: "P3", grid: "bg-teal-700", component: <Empty /> },

  {
    id: 10,
    name: "P4",
    grid: "col-span-2 md:col-span-2 md:col-start-2 bg-teal-900",
    component: <Empty />,
  },
];

const Cards = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-min-screen [&>*]:min-h-[150px] max-w-[1200px] mx-auto px-4 py-6 pb-10">
      {data.map((g) => (
        <div key={g.id} className={`${g.grid}`}>
          {g.component}
        </div>
      ))}
    </div>
  );
};

export default Cards;
