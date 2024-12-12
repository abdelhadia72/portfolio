import React from "react";
import { useState } from "react";
import Image from "next/image";
import WavesurferPlayer, { WaveSurfer } from "@wavesurfer/react";
import {
  CirclePlay,
  CirclePause,
  TwitterIcon,
  LinkedinIcon,
  Mail,
  GithubIcon,
  FileDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const About = () => {
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const onReady = (ws: WaveSurfer) => {
    setWavesurfer(ws);
    setIsPlaying(false);
  };

  const onPlayPause = () => {
    if (wavesurfer) {
      wavesurfer.playPause();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="about group w-full h-full bg-[#37393e] p-3 rounded-lg relative overflow-hidden">
      <div className="info flex gap-2 items-center relative z-10">
        <Image
          src="/images/ab.jpg"
          className="rounded-xl"
          height={120}
          width={120}
          alt="Avatar"
        />
        <div className="about text-white">
          <div className="headText flex justify-between flex-col">
            <div className="name">
              <div className="row flex gap-2">
                <span className="text-gray-400 hidden md:flex bg-gray-800 px-2 rounded-full items-center gap-2 w-fit mb-1">
                  <span className="h-2 block w-2 bg-green-500 rounded-full relative">
                    <span className="h-2 block w-2 bg-green-500 rounded-full absolute animate-ping"></span>
                  </span>
                  open to freelance
                </span>
                <div className="name">
                  <Link
                    href="https://drive.google.com/file/d/1EHa8JS2VuToiVAgUDSHNy1Ycx4br7AVz/view?usp=sharing"
                    target="_blank"
                    className="text-gray-400 cursor-pointer bg-gray-800 px-2 rounded-full flex items-center gap-2 w-fit mb-1"
                  >
                    <FileDown className="w-4 h-4 " />
                    Resume
                  </Link>
                </div>
              </div>
              <span className="block font-serif text-xl mb-1">Abdelhadi</span>
            </div>

            {/* <div className="downland">
              <Link
                href="https://drive.google.com/file/d/1EHa8JS2VuToiVAgUDSHNy1Ycx4br7AVz/view?usp=sharing"
                target="_blank"
              >
                <button className="border-2 px-3 py-1 rounded-lg hover:bg-opacity-70 transition-all hover:scale-105 group">
                  <p className="font-medium flex gap-2 items-center w-fit">
                    Download Resume
                    <FileDown className="w-4 h-4 group-hover:translate-y-0.5 transition-all duration-300 ease-in-out transform hover:scale-110" />
                  </p>
                </button>
              </Link>
            </div> */}
          </div>
          <span className="block text-gray-300">
            I&apos;m a React.js developer passionate about building beautiful
            user interfaces
          </span>
        </div>
      </div>
      <div className="audio p-2 rounded-md mt-2 w-full bg-gray-800 relative z-10">
        <div className="flex gap-2 items-center">
          <button onClick={onPlayPause} className="text-white">
            {isPlaying ? <CirclePause /> : <CirclePlay />}
          </button>
          <div style={{ width: "100%" }}>
            <WavesurferPlayer
              height={30}
              width="100%"
              normalize={true}
              waveColor="#77767b"
              progressColor="#57e389"
              cursorColor="#57e389"
              cursorWidth={0}
              barWidth={2}
              barGap={2}
              barRadius={10}
              minPxPerSec={1}
              fillParent={true}
              autoplay={false}
              interact={true}
              dragToSeek={false}
              hideScrollbar={false}
              audioRate={1}
              autoScroll={true}
              autoCenter={true}
              sampleRate={8000}
              url="/audio/au.mp3"
              onReady={onReady}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
          </div>
        </div>
      </div>
      <div className="color">
        <span className="absolute bg-[#57e389] h-[100px] w-[150px] top-0 -right-10 blur-[140px]"></span>
      </div>
      <div className="flex gap-2 mt-2">
        <Link href="https://twitter.com/your-handle" target="_blank">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-blue-500/10 text-white hover:text-blue-500 transition-colors"
          >
            <TwitterIcon className="h-4 w-4" />
          </Button>
        </Link>
        <Link href="mailto:your@email.com">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-red-500/10 text-white hover:text-red-500 transition-colors"
          >
            <Mail className="h-4 w-4" />
          </Button>
        </Link>
        <Link href="https://linkedin.com/in/your-profile" target="_blank">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-blue-600/10 text-white hover:text-blue-600 transition-colors"
          >
            <LinkedinIcon className="h-4 w-4" />
          </Button>
        </Link>
        <Link href="https://github.com/your-username" target="_blank">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-gray-500/10 text-white hover:text-gray-500 transition-colors"
          >
            <GithubIcon className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default About;

// next
// add a CC to your audio
