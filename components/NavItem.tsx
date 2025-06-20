"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { NavItemProps } from "@/lib/types";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/Tooltip";

export function NavItem({ icon, onlyIcon, href, children }: NavItemProps) {
  return onlyIcon ? (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href || `#`}
          className={cn(
            "flex p-3 text-sm font-medium rounded-full bg-background hover:bg-amber-400 text-foreground hover:text-background"
          )}
        >
          <span className="flex items-center gap-2 ">{icon}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="left">
        <span className="text-xs">{children}</span>
      </TooltipContent>
    </Tooltip>
  ) : (
    <Link
      href={href || `#`}
      className={cn(
        "flex p-3 text-sm font-medium transition-colors rounded-sm text-foreground dark:text-background hover:bg-amber-400 hover:text-background"
      )}
    >
      <span className="flex items-center gap-2">{icon}</span>
      <span className="">{children}</span>
    </Link>
  );
}
