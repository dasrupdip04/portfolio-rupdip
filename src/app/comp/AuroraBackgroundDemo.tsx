"use client";

import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <div className="relative flex flex-col gap-4 items-center justify-center px-4">
        <div className="text-3xl md:text-7xl font-bold text-white text-center">
          RUPDIP DAS
        </div>
        <div className="font-extralight text-base md:text-4xl text-neutral-200 py-4 font-sans">
          Frontend Development Enthusiast
        </div>
        <p className="text-center text-sm md:text-base text-neutral-300 max-w-2xl">
          A <span className="font-bold text-blue-500">frontend developer</span>{" "}
          with a passion for creating seamless and engaging user experiences, I
          excel in crafting elegant code and exploring complex algorithms.
          Skilled in{" "}
          <span className="font-bold text-blue-500">
            HTML5, CSS, JavaScript, React.js, React Router, Next.js, Node.js,
            responsive design
          </span>{" "}
          with hands-on experience in building interactive web apps. Passionate
          about UI/UX optimization and leveraging{" "}
          <span className="font-bold text-blue-500">
            AI tools like ChatGPT, Grok, Copilot
          </span>{" "}
          & component libraries like{" "}
          <span className="font-bold text-blue-500">
            Tailwind CSS, Shadcn UI, Aceternity, Bootstrap, Material UI
          </span>{" "}
          & more to code smarter and faster. Eager to contribute and learn in a
          dynamic internship environment.
        </p>
      </div>
    </AuroraBackground>
  );
}
