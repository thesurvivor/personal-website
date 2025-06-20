import type { Metadata } from "next";
import { ThemeProvider } from "@/lib/theme-provider"
import { ReactNode } from "react"
import "@/app/globals.css"
import Sidebar from "@/components/Sidebar"

export const metadata: Metadata = {
  title: "Personel Portfolio",
  description: "A personal portfolio showcasing my skills and experiences.",
};

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
          >
            <div className="flex flex-col md:grid md:grid-cols-[1fr_108px]">
              <div className="flex flex-col">
                {children}
              </div>
              <Sidebar />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}