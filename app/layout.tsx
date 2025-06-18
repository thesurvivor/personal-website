import { ThemeProvider } from "@/lib/theme-provider"
import { ReactNode } from "react"
import "@/app/globals.css"

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
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}