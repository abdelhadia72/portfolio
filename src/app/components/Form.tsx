import {
  ArrowUpRight,
  Twitter,
  Linkedin,
  X,
  Mail,
  Mic,
  Send,
  StopCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const socialLinkStyles = {
  emerald: {
    container: "hover:bg-emerald-300/30",
    text: "group-hover:text-emerald-500",
  },
  blue: {
    container: "hover:bg-blue-300/30",
    text: "group-hover:text-blue-500",
  },
  red: {
    container: "hover:bg-red-300/30",
    text: "group-hover:text-red-500",
  },
};

type SocialLinkProps = {
  href: string;
  icon: React.ComponentType<any>;
  label: string;
  hoverColor: keyof typeof socialLinkStyles;
  onClick?: () => void;
};

const SocialLink = ({
  href,
  icon: Icon,
  label,
  hoverColor,
  onClick,
}: SocialLinkProps) => (
  <div
    onClick={onClick}
    className={cn(
      "group flex items-center justify-between w-full p-4 rounded-xl bg-zinc-900/50 transition-all duration-300 ease-in-out transform hover:scale-[101%] cursor-pointer bg-grid-small-dark/25",
      socialLinkStyles[hoverColor].container,
    )}
  >
    <div className="flex items-center gap-3">
      <Icon
        className={cn(
          "w-5 h-5 text-zinc-500 transition-colors duration-300",
          socialLinkStyles[hoverColor].text,
        )}
      />
      <span
        className={cn(
          "text-sm font-medium text-zinc-300 transition-colors duration-300",
          socialLinkStyles[hoverColor].text,
        )}
      >
        {label}
      </span>
    </div>
    <ArrowUpRight
      className={cn(
        "w-5 h-5 text-zinc-500 transition-colors duration-300",
        socialLinkStyles[hoverColor].text,
      )}
    />
  </div>
);

const Form = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null,
  );
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks: Blob[] = [];

      recorder.ondataavailable = (e) => chunks.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
        setAudioBlob(blob);
      };

      setMediaRecorder(recorder);
      recorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Error accessing microphone:", err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const handleSendAudio = () => {
    if (audioBlob) {
      console.log("Sending audio blob:", audioBlob);
    }
    setShowModal(false);
    setAudioBlob(null);
  };

  const handleCancel = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      mediaRecorder.stream.getTracks().forEach((track) => track.stop());
    }
    setIsRecording(false);
    setShowModal(false);
    setAudioBlob(null);
  };

  return (
    <>
      <div className="w-full max-w-sm p-4 bg-[#b9a750] h-full bg-opacity-5 space-y-2 border border-gray-900 rounded-xl">
        <SocialLink
          href="#"
          icon={Mic}
          label="Send voice message"
          hoverColor="red"
          onClick={() => setShowModal(true)}
        />
        <SocialLink
          href="mailto:your.email@example.com"
          icon={Mail}
          label="Email me"
          hoverColor="emerald"
        />

        <SocialLink
          href="https://linkedin.com/in/yourprofile"
          icon={Linkedin}
          label="LinkedIn"
          hoverColor="blue"
        />

        <SocialLink
          href="https://twitter.com/yourhandle"
          icon={Twitter}
          label="Twitter (X)"
          hoverColor="blue"
        />
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-[999]">
          <div className="bg-zinc-900 p-8 rounded-full flex flex-col items-center gap-4">
            {!isRecording && !audioBlob && (
              <div className="flex gap-4">
                <button
                  onClick={startRecording}
                  className="p-4 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                >
                  <Mic className="w-8 h-8 text-white" />
                </button>
                <button
                  onClick={handleCancel}
                  className="p-4 rounded-full bg-zinc-500 hover:bg-zinc-600 transition-colors"
                >
                  <X className="w-8 h-8 text-white" />
                </button>
              </div>
            )}

            {isRecording && (
              <div className="flex gap-4">
                <button
                  onClick={stopRecording}
                  className="p-4 rounded-full bg-red-500 hover:bg-red-600 transition-colors animate-pulse"
                >
                  <StopCircle className="w-8 h-8 text-white" />
                </button>
                <button
                  onClick={handleCancel}
                  className="p-4 rounded-full bg-zinc-500 hover:bg-zinc-600 transition-colors"
                >
                  <X className="w-8 h-8 text-white" />
                </button>
              </div>
            )}

            {audioBlob && !isRecording && (
              <div className="flex gap-4">
                <button
                  onClick={handleSendAudio}
                  className="p-4 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors"
                >
                  <Send className="w-8 h-8 text-white" />
                </button>
                <button
                  onClick={() => setAudioBlob(null)}
                  className="p-4 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                >
                  <X className="w-8 h-8 text-white" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
