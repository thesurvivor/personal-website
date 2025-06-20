"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const SmoothScrollHandler = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const id = target.getAttribute("href")!.replace("#", "");
        const targetEl = document.getElementById(id);
        if (targetEl) {
          const y = targetEl.getBoundingClientRect().top + window.scrollY;
          gsap.to(window, {
            duration: 1,
            scrollTo: { y, autoKill: true },
            ease: "power2.out",
          });
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
};

export default SmoothScrollHandler;
