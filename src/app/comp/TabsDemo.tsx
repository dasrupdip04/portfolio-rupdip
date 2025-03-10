"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import { div } from "motion/react-m";
import Link from "next/link";
export function TabsDemo() {
  const tabs = [
    
    {
      title: "To-Do App",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
         <div className="flex flex-row gap-10">
            <div>To-Do App </div>
            <button className="bg-slate-900 text-gray-300 px-4 rounded-md"><a target="_blank" href="https://github.com/dasrupdip04/ToDoList">Github</a></button>
         </div>
          
          <VideoContainer src="https://videos.pexels.com/video-files/31090993/13285243_2030_1080_60fps.mp4" />
        </div>
      ),
    },
    {
        title: "Currency Exchange",
        value: "product",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
           <div className="flex flex-row gap-10">
              <div>Currency Exchange App </div>
              <button className="bg-slate-900 text-gray-300 px-4 rounded-md"><a target="_blank" href="https://github.com/dasrupdip04/CurrencyExchange/tree/main">Github</a></button>
           </div>
            
            <VideoContainer src="https://videos.pexels.com/video-files/31090895/13285239_2260_1080_60fps.mp4" />
          </div>
        ),
      },
    
    {
      title: "Weather App",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
         <div className="flex flex-row gap-10">
            <div>Weather App </div>
            <button className="bg-slate-900 text-gray-300 px-4 rounded-md"><a target="_blank" href="https://github.com/dasrupdip04/WeatherAPI">Github</a></button>
         </div>
          
          <VideoContainer src="https://videos.pexels.com/video-files/31091006/13285293_2030_1080_60fps.mp4" />
        </div>
      ),
    },
    {
      title: "Background Changer",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
         <div className="flex flex-row gap-10">
            <div>Weather App </div>
            <button className="bg-slate-900 text-gray-300 px-4 rounded-md"><a target="_blank" href="https://github.com/dasrupdip04/backgroundchanger">Github</a></button>
         </div>
          
          <VideoContainer src="https://videos.pexels.com/video-files/31091034/13285309_2258_1080_60fps.mp4" />
        </div>
      ),
    },
    {
        title: "Password Generator",
        value: "playground",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
           <div className="flex flex-row gap-10">
              <div>Password Generator App </div>
              <button className="bg-slate-900 text-gray-300 px-4 rounded-md"><a target="_blank" href="https://github.com/dasrupdip04/ToDoList">Github</a></button>
           </div>
            
            <VideoContainer src="../../pwgenvid.mov" />
          </div>
          
        ),
      },
  ];

  return (
    <div className="bg-slate-950 dark p-4 ">
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40  ">
             <Tabs tabs={tabs} />
        </div>
    </div>
  );
}

type VideoContainerProps = {
    src: string;
  };
  
  export default function VideoContainer({ src }: VideoContainerProps) {
    return (
      <video
      autoPlay
        controls
        width={1000}
        height={1000}
        className="object-cover object-left-top h-[80%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }