"use client";
import About from "@/components/about-me";
import ExpEdu from "@/components/ExpEdu";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="selection:bg-primary selection:text-background h-screen w-full flex flex-col justify-evenly items-center gap-10">
      <About />
      <br />
      <Skills />
      <br />
      <ExpEdu />
    </div>
  );
}
