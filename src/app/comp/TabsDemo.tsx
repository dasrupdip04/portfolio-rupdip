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
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10   text-white bg-gradient-to-br from-purple-700 to-violet-900">
         <div className="flex flex-row gap-10 ">
            <div className="font-bold text-xl md:text-4xl">To-Do App </div>
            <button className="bg-gradient-to-r from-blue-700 to-black text-white rounded-md px-3 font-semibold hover:scale-105 transition-all duration-300"><a target="_blank" href="https://github.com/dasrupdip04/ToDoList">Github</a></button>
            <button className="bg-gradient-to-r  from-blue-700 to-black text-white  rounded-md px-3 font-medium hover:scale-105 transition-all duration-300">
            <a target="_blank" href="https://todolistrupdip.netlify.app/">Live</a>
            </button>
         </div>
          
          <VideoContainer src="https://videos.pexels.com/video-files/31090993/13285243_2030_1080_60fps.mp4" />
        </div>
      ),
    },
    {
        title: "Currency Exchange",
        value: "product",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10  text-white bg-gradient-to-br from-purple-700 to-violet-900">
           <div className="flex flex-row gap-10">
              <div className="font-bold text-xl md:text-4xl" >Currency Exchange App </div>
   
              <button className="bg-gradient-to-r from-blue-700 to-black text-white rounded-md px-3 font-semibold hover:scale-105 transition-all duration-300"><a target="_blank" href="https://github.com/dasrupdip04/CurrencyExchange/tree/main">Github</a></button>
            <button className="bg-gradient-to-r  from-blue-700 to-black text-white  rounded-md px-3 font-medium hover:scale-105 transition-all duration-300">
            <a target="_blank" href="https://currencyexchange2.vercel.app/">Live</a>
            </button>
           </div>
            
            <VideoContainer src="https://videos.pexels.com/video-files/31090895/13285239_2260_1080_60fps.mp4" />
          </div>
        ),
      },
      {
        title: "Password Generator",
        value: "playground",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10  text-white bg-gradient-to-br from-purple-700 to-violet-900">
           <div className="flex flex-row gap-10">
              <div className="font-bold text-xl md:text-4xl">Password Generator App </div>
              <button className="bg-gradient-to-r  from-blue-700 to-black text-white  rounded-md px-3 font-medium hover:scale-105 transition-all duration-300"><a target="_blank" href="https://github.com/dasrupdip04/PasswordGenerator">Github</a></button>
           </div>
            
            <VideoContainer src="https://videos.pexels.com/video-files/31093427/13285878_2382_1080_60fps.mp4" />
          </div>
          
        ),
      },
    
    {
      title: "Weather App",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl  p-10  text-white bg-gradient-to-br from-purple-700 to-violet-900">
         <div className="flex flex-row gap-10">
            <div className=" text-xl md:text-4xl font-bold">Weather App </div>
 
            <button className="bg-gradient-to-r from-blue-700 to-black text-white rounded-md px-3 font-semibold hover:scale-105 transition-all duration-300"><a target="_blank" href="https://github.com/dasrupdip04/WeatherAPI">Github</a></button>
            <button className="bg-gradient-to-r  from-blue-700 to-black text-white  rounded-md px-3 font-medium hover:scale-105 transition-all duration-300">
            <a target="_blank" href="https://weatherapprupdip.netlify.app/">Live</a>
            </button>
         </div>
          
          <VideoContainer src="https://videos.pexels.com/video-files/31091006/13285293_2030_1080_60fps.mp4" />
        </div>
      ),
    },
    {
      title: "Background Changer",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl  p-10 text-white bg-gradient-to-br from-purple-700 to-violet-900">
         <div className="flex flex-row gap-10">
            <div className="text-xl md:text-4xl font-bold">Background Changer </div>
            <button className="bg-gradient-to-r from-blue-700 to-black text-white  rounded-md px-3 font-medium hover:scale-105 transition-all duration-300"><a target="_blank" href="https://github.com/dasrupdip04/backgroundchanger">Github</a></button>
         </div>
          
          <VideoContainer src="https://videos.pexels.com/video-files/31091034/13285309_2258_1080_60fps.mp4" />
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
        className="flex items-center justify-centerobject-cover object-left-top h-[80%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }