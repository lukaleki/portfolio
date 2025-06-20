import About from "@/components/about-me";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center gap-3">
      <About />
      <br />
      <Skills />
    </div>
  );
}
