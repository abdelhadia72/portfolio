/* eslint-disable */

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Send } from "lucide-react";

interface NavProps {
  setTag: (tag: string) => void;
}

const tabs = [
  { id: 1, name: "All" },
  { id: 2, name: "About" },
  { id: 3, name: "Project" },
  { id: 4, name: "Contact" },
];

const Nav: React.FC<NavProps> = ({ setTag }) => {
  const [active, setActive] = useState(1);
  const [mailHover, setMailHover] = useState(false);

  return (
    <div className="pt-4">
      <div className="flex justify-center items-center h-10 p-1 rounded-full gap- text-white bg-gray-900 bg-opacity-70 w-fit mx-auto backdrop-blur-xl overflow-hidden">
        {tabs.map((tab) => (
          <motion.div
            layoutId="active-bill"
            onClick={() => {
              setActive(tab.id);
              setTag(tab.name.toLowerCase());
            }}
            className={`p-2 relative px-4 rounded-full cursor-pointer ${active === tab.id ? "" : "hover:text-gray-400"}`}
            key={tab.id}
          >
            {active === tab.id && (
              <motion.div
                layoutId="tab-id"
                className="absolute w-full bg-green-400 inset-0 my-1"
                style={{ borderRadius: "9999px" }}
                transition={{ duration: 0.5, type: "spring" }}
              ></motion.div>
            )}
            <span className="relative z-10 mix-blend-screen text-[14px]">
              {tab.name}
            </span>
          </motion.div>
        ))}
        <motion.span
          onClick={() => setActive(4)}
          onHoverStart={() => setMailHover(true)}
          onHoverEnd={() => setMailHover(false)}
          className="relative z-10 ml-2 p-1 px-4 my-1 rounded-full cursor-pointer bg-gray-900 bg-opacity-25 hover:bg-opacity-70 transition-all flex gap-2 items-center text-green-400"
        >
          <motion.div>
            {mailHover ? (
              <Send className="size-4" />
            ) : (
              <Mail className="size-4" />
            )}
          </motion.div>
        </motion.span>
      </div>
    </div>
  );
};

export default Nav;
