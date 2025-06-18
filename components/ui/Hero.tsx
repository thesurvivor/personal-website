"use client";

import React from "react";
import { cn } from "@/lib/utils";

type HeroProps = React.HTMLAttributes<HTMLElement>;

const Hero: React.FC<HeroProps> = ({ className = "", ...rest }) =>{

  return (
    <div 
      className={cn("flex flex-col grow items-center justify-center min-h-96 h-full bg-gradient-to-b from-gray-900 to-gray-800 text-white", className)}
      {...rest}
    >
      <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg mb-8">Explore my projects and skills</p>
      <a
        href="#projects"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition-colors"
      >
        View Projects
      </a>
    </div>
  );
}

export default Hero