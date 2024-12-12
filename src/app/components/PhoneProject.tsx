/* eslint-disable */

import Image from "next/image";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { SquareArrowOutUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectData {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const projectData: ProjectData = {
  title: "Lodaify",
  description: "A project for managing loader and management systems",
  longDescription:
    "Detailed description of the Lodaify project. This is a loader management system that helps teams streamline their workflow and improve productivity through intuitive interfaces and powerful features.",
  image: "/images/p2.png",
  technologies: ["React", "Node.js", "MongoDB", "Express"],
  githubUrl: "https://github.com/yourusername/lodaify",
  liveUrl: "https://lodaify-demo.com",
};

const PhoneProject = () => {
  const [showModal, setShowModal] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.75,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.75,
      y: 20,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  return (
    <>
      <motion.div
        onClick={() => setShowModal(true)}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="h-full group rounded-lg max-h-[400px] w-full relative before:absolute before:inset-0 before:bg-[url('/stars.png')] before:bg-repeat before:opacity-50 before:animate-twinkle"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        style={{ cursor: "none" }}
      >
        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="pointer-events-none absolute z-50"
              style={{
                left: mousePosition.x - 20,
                top: mousePosition.y - 20,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="bg-white rounded-full p-2">
                <SquareArrowOutUpRight className="w-5 h-5 text-black" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="text p-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            {projectData.title}
          </h1>
          <p className="text-lg text-white/80">{projectData.description}</p>
        </div>

        <div className="image p-8">
          <Image
            src={projectData.image}
            alt="Phone UI"
            width={300}
            height={200}
            className="rounded-lg shadow-lg group-hover:scale-105 transition-all relative hover:translate-y-[-70px] duration-300 ease-in-out group-hover:blur-sm"
          />
        </div>
      </motion.div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 backdrop-blur-md bg-black/60 z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-gray-900/95 backdrop-blur-xl rounded-xl w-full max-w-4xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <motion.button
                  onClick={() => setShowModal(false)}
                  className="absolute right-4 top-4 text-white hover:text-white/80 z-10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IoClose size={24} />
                </motion.button>

                <div className="h-[300px] relative overflow-hidden">
                  <Image
                    src={projectData.image}
                    alt="Project Preview"
                    layout="fill"
                    objectFit="cover"
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/95" />
                </div>
              </div>

              <div className="p-8 -mt-16 relative">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold text-white mb-4"
                >
                  {projectData.title}
                </motion.h2>

                <div className="space-y-4">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-white/90 leading-relaxed"
                  >
                    {projectData.longDescription}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="pt-4"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {projectData.technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm text-white"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <div className="flex gap-4 pt-6">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={projectData.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      <FaGithub size={18} />
                      <span>View Source</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={projectData.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      <HiExternalLink size={18} />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PhoneProject;
