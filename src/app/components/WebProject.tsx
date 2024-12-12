import Image from "next/image";
import React, { useState } from "react";
import { IoEyeOutline, IoClose } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
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
  image: "/images/p1.avif",
  technologies: ["React", "Node.js", "MongoDB", "Express"],
  githubUrl: "https://github.com/yourusername/lodaify",
  liveUrl: "https://lodaify-demo.com",
};

const WebProject = () => {
  const [showModal, setShowModal] = useState(false);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
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
        className="h-full relative overflow-hidden group rounded-lg max-h-[400px] w-full bg-gradient-to-br from-[#ff6432] via-[#ff1958] to-[#7b2eff] cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all z-10 duration-300 flex items-center justify-center">
          <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}>
            <IoEyeOutline className="text-white text-4xl" />
          </motion.div>
        </div>

        <div className="text p-4 md:p-8">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">
            {projectData.title}
          </h1>
          <p className="text-base md:text-lg text-white/80">
            {projectData.description}
          </p>
        </div>

        <div className="image p-4 md:p-8">
          <Image
            src={projectData.image}
            alt="Desktop Screenshot"
            width={800}
            height={450}
            className="rounded-lg bottom-[-30%] right-[-25%] scale-75 absolute shadow-lg transition-all duration-300 ease-in-out object-contain group-hover:blur-sm"
          />
        </div>
      </motion.div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
            className="fixed inset-0 backdrop-blur-md bg-black/60 z-50 flex items-center justify-center p-2 md:p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-gray-900/95 backdrop-blur-xl rounded-xl w-full max-w-[95%] md:max-w-4xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <motion.button
                  onClick={() => setShowModal(false)}
                  className="absolute right-2 md:right-4 top-2 md:top-4 text-white hover:text-white/80 z-10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IoClose size={24} />
                </motion.button>

                <div className="h-[200px] md:h-[300px] relative overflow-hidden">
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

              <div className="p-4 md:p-8 -mt-16 relative">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4"
                >
                  {projectData.title}
                </motion.h2>

                <div className="space-y-3 md:space-y-4">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm md:text-lg text-white/90 leading-relaxed"
                  >
                    {projectData.longDescription}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="pt-3 md:pt-4"
                  >
                    <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {projectData.technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className="px-2 md:px-3 py-1 bg-white/10 rounded-full text-xs md:text-sm text-white"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <div className="flex flex-col md:flex-row gap-2 md:gap-4 pt-4 md:pt-6">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={projectData.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-white/20 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-white/30 transition-colors text-sm md:text-base"
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
                      className="flex items-center justify-center gap-2 bg-white/20 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-white/30 transition-colors text-sm md:text-base"
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

export default WebProject;
