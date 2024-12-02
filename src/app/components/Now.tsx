import { Code2, CastleIcon as ChessKnight, Palette } from "lucide-react";

export default function Now() {
  return (
    <div className="w-full max-w-md bg-[#197594] text-zinc-100 p-4 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <div className="relative mr-2">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <div className="w-2 h-2 bg-red-500 rounded-full absolute top-0 left-0 animate-ping"></div>
        </div>
        <h2 className="text-lg font-semibold">Now</h2>
      </div>
      <div className="space-y-3">
        <div className="flex items-center">
          <Code2 className="w-5 h-5 mr-2 text-zinc-400" />
          <p>
            Working on <span className="font-medium">Shari project</span>
          </p>
        </div>
        <div className="flex items-center">
          <ChessKnight className="w-5 h-5 mr-2 text-zinc-400" />
          <p>
            Learning <span className="font-medium">chess game</span>
          </p>
        </div>
        <div className="flex items-center">
          <Palette className="w-5 h-5 mr-2 text-zinc-400" />
          <p>
            Learning <span className="font-medium">UI/UX design</span>
          </p>
        </div>
      </div>
    </div>
  );
}
