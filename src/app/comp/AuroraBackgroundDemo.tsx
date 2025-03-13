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
          Frontend Developer
        </div>
        <p className="text-center text-sm md:text-base text-neutral-300 max-w-2xl">
        I thrive in building fast, interractive high performance web experiences with <span className="font-bold text-blue-500">React, Next.js, and modern UI frameworks</span>. Skilled in responsive design, state management, and performance optimization. Experienced with AI tools to <span className="font-bold text-blue-500">(ChatGPT, Copilot)</span> and component libraries <span className="font-bold text-blue-500">(Tailwind, Shadcn, MUI, Aceternity, Bootstrap)</span> to build scalable and efficient UIs. Always learning, Always optimising!
        </p>
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-md">
          <a target="_blank" href="https://rupdip-resume-overleaf.tiiny.site/">Resume</a>
        </button>
      </div>
    </AuroraBackground>
  );
}
