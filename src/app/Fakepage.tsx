"use client";
import { useState } from "react";
import { motion } from "motion/react";

const bens = [
  { id: 1, name: "Inception", tags: ["sci-fi", "thriller"] },
  { id: 2, name: "The Godfather", tags: ["drama", "crime"] },
  { id: 3, name: "The Dark Knight", tags: ["action", "crime"] },
  { id: 4, name: "Pulp Fiction", tags: ["drama", "crime"] },
  { id: 5, name: "Forrest Gump", tags: ["drama", "romance"] },
  { id: 6, name: "The Matrix", tags: ["sci-fi", "action"] },
  { id: 7, name: "The Shawshank Redemption", tags: ["drama", "crime"] },
  { id: 8, name: "Interstellar", tags: ["sci-fi", "drama"] },
  { id: 9, name: "Gladiator", tags: ["action", "drama"] },
  { id: 10, name: "Fight Club", tags: ["drama", "thriller"] },
  { id: 11, name: "Titanic", tags: ["drama", "romance"] },
  { id: 12, name: "Avatar", tags: ["sci-fi", "action"] },
  { id: 13, name: "The Avengers", tags: ["action", "sci-fi"] },
  { id: 14, name: "Jurassic Park", tags: ["sci-fi", "thriller"] },
];

const tags = ["sci-fi", "thriller", "drama", "crime", "action", "romance"];

const Fakepage: React.FC = () => {
  const [data, setData] = useState(bens);

  return (
    <>
      <div>
        {tags.map((tag) => (
          <button
            className="p-2 m-2 bg-blue-500 text-white rounded-md"
            key={tag}
            onClick={() =>
              setData(bens.filter((ben) => ben.tags.includes(tag)))
            }
          >
            {tag}
          </button>
        ))}
      </div>

      <motion.div
        layoutId="jo"
        className="flex justify-center flex-row gap-4 max-w-[450px]"
      >
        {data.map((ben) => (
          <motion.div
            layoutId="vo"
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="h-[150px] w-full text-white bg-blue-900 rounded-md flex justify-center items-center"
            key={ben.id}
          >
            {ben.name}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Fakepage;
