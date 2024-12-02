"use client";
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
    // grid: "md:col-span-2 md:col-start-1",
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
    id: 4,
    name: "Media",
    grid: "",
    component: <Media />,
    tag: ["contact", "all"],
  },
  {
    id: 5,
    name: "Quites",
    grid: "md:col-span-2 md:col-start-1",
    component: <QuoteComponent />,
    tag: ["about", "all"],
  },
  {
    id: 6,
    name: "Map",
    grid: "bg-red-400",
    component: <Empty />,
    tag: ["about", "all"],
  },
  {
    id: 7,
    name: "P1",
    grid: "lg:col-start-1 lg:row-span-2 bg-orange-400",
    component: <Empty />,
    tag: ["project", "all"],
  },
  {
    id: 8,
    name: "P2",
    grid: "bg-teal-400",
    component: <Empty />,
    tag: ["project", "all"],
  },
  {
    id: 9,
    name: "P3",
    grid: "bg-teal-700",
    component: <Empty />,
    tag: ["project", "all"],
  },
  {
    id: 10,
    name: "P4",
    grid: "md:col-span-2 md:col-start-2 bg-teal-900",
    component: <Empty />,
    tag: ["contact", "all"],
  },
];

const Cards = ({ filterTag }) => {
  console.log("filter x", filterTag);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 h-min-screen [&>*]:min-h-[150px] max-w-[1200px] mx-auto px-4 py-6 pb-10">
      {/* {data.map((g) => (
        <div key={g.id} className={`${g.grid}`}>
          {g.component}
        </div>
      ))} */}

      {data
        .filter((c) => c.tag.includes(filterTag))
        .map((g) => (
          <div key={g.id} className={`${g.grid}`}>
            {g.component}
          </div>
        ))}
    </div>
  );
};

export default Cards;
