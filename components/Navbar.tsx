"use client";

import { NavItem } from "./NavItem";
import { HousePlug, Binary, BrickWall, Cpu, Route, ReceiptText } from "lucide-react";

const menuItems = [
  { key: 'home', onlyIcon: true, name: 'Home', href: '/', icon: <HousePlug /> },
  { key: 'about', onlyIcon: true, name: 'About', href: '/about', icon: <Binary /> },
  { key: 'skills', onlyIcon: true, name: 'My Skills', href: '/skills', icon: <BrickWall /> },
  { key: 'techstack', onlyIcon: true, name: 'Tech Stack', href: '/techstack', icon: <Cpu /> },
  { key: 'experiences', onlyIcon: true, name: 'Experiences', href: '/experiences',  icon: <Route /> },
  { key: 'contact', onlyIcon: true, name: 'Contact', href: '/contact', icon: <ReceiptText /> },
  ];

  export default function Navbar() {
    return (
        <nav className="flex flex-col gap-4 pt-6">
            {menuItems.map((item) => (
                <NavItem key={item.key} onlyIcon={item.onlyIcon} icon={item.icon} href={item.href}>{item.name}</NavItem>
            ))}
        </nav>
    );
  }