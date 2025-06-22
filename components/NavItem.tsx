"use client";

import { cn } from "@/lib/utils";
import { NavItemProps } from "@/lib/types";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { Button } from "./ui/Button";

export function NavItem({ icon, onlyIcon, children, onClick, isActive }: NavItemProps) {
  const activeClass = isActive ? "bg-amber-400 text-background" : "text-foreground";
  return onlyIcon ? (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          className={cn(
            "flex p-3 text-sm font-medium rounded-full bg-background hover:bg-amber-400 text-foreground hover:text-background", activeClass
          )}
          variant={"link"}
          onClick={onClick}
        >
          <span className="flex items-center gap-2 ">{icon}</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="left">
        <span className="text-xs">{children}</span>
      </TooltipContent>
    </Tooltip>
  ) : (
    <Button
      className={cn(
        "flex p-3 text-sm font-medium transition-colors rounded-sm text-foreground dark:text-background hover:bg-amber-400 hover:text-background", activeClass
      )}
      variant={"link"}
      onClick={onClick}
    >
      <span className="flex items-center gap-2">{icon}</span>
      <span className="">{children}</span>
    </Button>
  );
}
