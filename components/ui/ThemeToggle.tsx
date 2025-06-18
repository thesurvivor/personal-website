"use client"

import { useTheme } from "next-themes"

import { Button } from "@/components/ui/Button"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button variant="link" className="pt-10 [&_svg:not([class*='size-'])]:size-5" onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")}>
      <Sun className="h-4 w-4 text-foreground scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-4 w-4 text-foreground scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
