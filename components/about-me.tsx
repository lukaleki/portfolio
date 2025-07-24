import React from "react";
import Image from "next/image";
import me from "@/public/me.jpeg";

function About() {
  return (
    <div
      id="about"
      className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 py-8 max-w-5xl mx-auto gap-8"
    >
      {/* Text Section */}
      <div className="text-center lg:text-left w-full lg:w-1/2">
        <h1 className="text-3xl sm:text-4xl font-semibold">
          Hey 👋, <br />
          I&apos;m{" "}
          <a href="#contact">
            <strong className="text-secondary">luka lekishvili</strong>
          </a>
        </h1>

        <ul className="text-sm mt-4 space-y-1">
          <li>City: Tbilisi</li>
          <li>Phone number: 599158424</li>
          <li>Email: lekishvililuka76@gmail.com</li>
          <li>
            GitHub:{" "}
            <a
              className="text-secondary"
              href="https://github.com/lukaleki"
              target="_blank"
              rel="noopener noreferrer"
            >
              lukaleki
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              className="text-secondary"
              href="https://www.linkedin.com/in/luka-lekishvili-752b48279/"
              target="_blank"
              rel="noopener noreferrer"
            >
              luka lekishvili
            </a>
          </li>
        </ul>

        <p className="text-base sm:text-lg mt-4">
          Motivated Software Developer with a strong interest in Web
          Development. Eager to contribute and grow in a dynamic work
          environment while developing technical and professional skills.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full flex justify-center lg:justify-end lg:w-1/2">
        <Image
          className="rounded-md shadow-md"
          src={me}
          width={200}
          height={200}
          alt="Luka Lekishvili"
        />
      </div>
    </div>
  );
}

export default About;
