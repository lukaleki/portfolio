import About from "@/components/about-me";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center gap-3">
      <About />
      <Experience />
    </div>
  );
}
