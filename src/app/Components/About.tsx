"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import WavesurferPlayer from "@wavesurfer/react";
import { CirclePlay, CirclePause } from "lucide-react";

const About = () => {
  const [wavesurfer, setWavesurfer] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onReady = (ws: any) => {
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
    <div className="about w-full h-full bg-[#37393e] p-3 rounded-lg">
      <div className="info flex gap-2 items-center">
        <Image
          src="/images/avtar.jpg"
          className="rounded-xl"
          height={120}
          width={120}
          alt="Avatar"
        />
        <div className="about text-white">
          <span className="text-gray-400 bg-gray-800 px-2 rounded-full flex items-center gap-2 w-fit mb-1">
            <span className="h-2 block w-2 bg-green-500 rounded-full relative">
              <span className="h-2 block w-2 bg-green-500 rounded-full absolute animate-ping"></span>
            </span>
            available for work
          </span>
          <span className="block font-serif text-xl mb-1">Abdelhadi</span>
          <span className="block text-gray-300">
            I{"'"}m a React.js developer
          </span>
        </div>
      </div>
      <div className="audio p-2 rounded-md mt-2 w-full bg-gray-800">
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
      <div className="bills"></div>
    </div>
  );
};

export default About;

// next
// add a CC to your audio
