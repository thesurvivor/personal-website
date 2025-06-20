"use client";

import Section from "@/components/ui/Section";
import SmoothScrollHandler from "@/components/SmoothScrollHandler";

export default function Home() {


  return (
    <> 
      <SmoothScrollHandler />
      <main className="flex flex-col">
        <div className="w-full flex flex-col">
          <Section
            id="home"
            className="h-[calc(100vh-3rem)] bg-content"
            title="Home"
          >
            <p className="text-lg text-center">
              I am a passionate software developer with a keen interest in
              building scalable web applications. My journey in tech has been
              driven by a love for problem-solving and continuous learning.
            </p>
          </Section>
          <Section
            id="about"
            className="h-[calc(100vh-3rem)] bg-content"
            title="About"
          >
            <p className="text-lg text-center">
              I am a passionate software developer with a keen interest in
              building scalable web applications. My journey in tech has been
              driven by a love for problem-solving and continuous learning.
            </p>
          </Section>
          <Section
            id="skills"
            className="h-[calc(100vh-3rem)] bg-content"
            title="My Skills"
          >
            <p className="text-lg text-center">
              I am a passionate software developer with a keen interest in
              building scalable web applications. My journey in tech has been
              driven by a love for problem-solving and continuous learning.
            </p>
          </Section>
          <Section
            id="techstack"
            className="h-[calc(100vh-3rem)] bg-content"
            title="Tech Stack"
          >
            <p className="text-lg text-center">
              I am a passionate software developer with a keen interest in
              building scalable web applications. My journey in tech has been
              driven by a love for problem-solving and continuous learning.
            </p>
          </Section>
          <Section
            id="experiences"
            className="h-[calc(100vh-3rem)] bg-content"
            title="Experiences"
          >
            <p className="text-lg text-center">
              I am a passionate software developer with a keen interest in
              building scalable web applications. My journey in tech has been
              driven by a love for problem-solving and continuous learning.
            </p>
          </Section>
          <Section
            className="h-[calc(100vh-3rem)] bg-content"
            id="contact"
            title="Contact"
          >
            <p className="text-lg text-center">
              I am a passionate software developer with a keen interest in
              building scalable web applications. My journey in tech has been
              driven by a love for problem-solving and continuous learning.
            </p>
          </Section>
        </div>
      </main>
    </>
  );
}
