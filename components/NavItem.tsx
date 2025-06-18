"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavItemProps } from "@/lib/types";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/Tooltip";

export function NavItem({ href, icon, onlyIcon, children }: NavItemProps) {
  const pathname = usePathname();

  return onlyIcon ? (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className={cn(
            "flex p-3 text-sm font-medium rounded-full bg-background hover:bg-amber-400 text-background hover:text-background",
            pathname === href ? "text-foreground bg-amber-400" : "text-foreground/60"
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
      href={href}
      className={cn(
        "flex p-3 text-sm font-medium transition-colors rounded-sm text-foreground dark:text-background hover:bg-amber-400 hover:text-background",
        pathname === href ? "text-foreground" : "text-foreground/60"
      )}
    >
      <span className="flex items-center gap-2">{icon}</span>
      <span className="">{children}</span>
    </Link>
  );
}
