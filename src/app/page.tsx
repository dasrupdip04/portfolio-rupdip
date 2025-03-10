import Image from "next/image";
import { AuroraBackgroundDemo } from "./comp/AuroraBackgroundDemo";
import Skills from "./comp/Skills";
import { LampDemo } from "./comp/LampDemo";
import { TabsDemo } from "./comp/TabsDemo";
import { GoogleGeminiEffectDemo } from "./comp/GoogleGeminiEffectDemo";

export default function Home() {
  return (
    <div>
      <AuroraBackgroundDemo />
      <Skills />
      <LampDemo />
      <TabsDemo />
      <GoogleGeminiEffectDemo />
    </div>
  );
}
