"use client";
import { NavItem } from "./NavItem";
import {
  HousePlug,
  Binary,
  BrickWall,
  Cpu,
  Route,
  ReceiptText,
  Menu,
} from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/Drawer";
import { Button } from "./ui/Button";

const menuItems = [
  { key: "home", onlyIcon: true, name: "Home", icon: <HousePlug /> },
  { key: "about", onlyIcon: true, name: "About", icon: <Binary /> },
  { key: "skills", onlyIcon: true, name: "My Skills", icon: <BrickWall /> },
  { key: "techstack", onlyIcon: true, name: "Tech Stack", icon: <Cpu /> },
  { key: "experiences", onlyIcon: true, name: "Experiences", icon: <Route /> },
  { key: "contact", onlyIcon: true, name: "Contact", icon: <ReceiptText /> },
];

export default function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return isDesktop ? (
    <nav className="flex flex-col gap-4 pt-6">
      {menuItems.map((item) => (
        <NavItem
          key={item.key}
          href={`#${item.key}`}
          onlyIcon={item.onlyIcon}
          icon={item.icon}        >
          {item.name}
        </NavItem>
      ))}
    </nav>
  ) : (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline">
          <span className="sr-only">Toggle Menu</span>
          <Menu className="h-5 w-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <nav className="flex flex-col gap-4 pt-6">
          {menuItems.map((item) => (
            <NavItem
              key={item.key}
              icon={item.icon}
              href={`#${item.key}`}
              >
              {item.name}
            </NavItem>
          ))}
        </nav>
      </DrawerContent>
    </Drawer>
  );
}
