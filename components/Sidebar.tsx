
import Navbar from "@/components/Navbar";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Sidebar() {
  return (
    <div
        className="sidebar bg-content sticky top-0 right-0 overflow-hidden dark:bg-sidebar-dark md:h-screen flex flex-col items-center justify-start">
        <div className="sidebar-content flex flex-col items-center h-full gap-4 pt-6">
          <ThemeToggle />
          <Navbar />
        </div>
      </div>
);
}