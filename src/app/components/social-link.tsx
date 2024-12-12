/* eslint-disable */

import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinkProps {
  icon: LucideIcon;
  username: string;
  href: string;
  rightIcon?: LucideIcon;
  variant?: "default" | "outline" | "ghost";
  className?: string;
}

export default function SocialLink({
  icon: Icon,
  username,
  rightIcon: RightIcon,
  variant = "default",
}: SocialLinkProps) {
  const variants = {
    default:
      "flex items-center justify-between gap-3 rounded-lg bg-zinc-900/90 px-5 py-3 text-sm font-medium text-zinc-100 shadow-sm ring-1 ring-zinc-800 transition-all hover:bg-zinc-800 hover:ring-zinc-700 hover:scale-[1.02] active:scale-[0.98]",
    outline:
      "flex items-center justify-between gap-3 rounded-lg border border-zinc-800 px-5 py-3 text-sm font-medium text-zinc-100 shadow-sm transition-all hover:bg-zinc-900/50 hover:border-zinc-700 hover:scale-[1.02] active:scale-[0.98]",
    ghost:
      "flex items-center justify-between gap-3 rounded-lg px-5 py-3 text-sm font-medium text-zinc-300 transition-all hover:bg-zinc-900/50 hover:text-zinc-100 hover:scale-[1.02] active:scale-[0.98]",
  };

  return (
    <span className={`${cn(variants[variant])}`}>
      <div className={`flex items-center gap-3`}>
        <Icon className="h-5 w-5" />
        <span className="font-medium">{username}</span>
      </div>
      {RightIcon && (
        <RightIcon className="h-5 w-5 text-zinc-400 group-hover:text-zinc-300" />
      )}
    </span>
  );
}
