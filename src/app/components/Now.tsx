import { Code2, Atom, Palette } from "lucide-react";

export default function Now() {
  return (
    <div className="w-full h-full max-w-md bg-zinc-900 text-zinc-100 p-4 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <div className="relative mr-2">
          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full absolute top-0 left-0 animate-ping"></div>
        </div>
        <h2 className="text-lg font-semibold">Now</h2>
      </div>
      <div className="space-y-3">
        <div className="flex items-center">
          <Code2 className="w-5 h-5 mr-2 text-green-500" />
          <p>
            Working on <span className="font-medium">Placeholder </span>
          </p>
        </div>
        <div className="flex items-center">
          <Atom className="w-5 h-5 mr-2 text-[#5dd3f4]" />
          <p>
            Learning <span className="font-medium">React Native</span>
          </p>
        </div>
        <div className="flex items-center">
          <Palette className="w-5 h-5 mr-2 text-purple-500" />
          <p>
            Learning <span className="font-medium"> something else</span>
          </p>
        </div>
      </div>
    </div>
  );
}
