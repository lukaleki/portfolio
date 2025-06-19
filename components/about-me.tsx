import React from "react";
import Image from "next/image";
import me from "@/public/me.jpeg";

function About() {
  return (
    <div className="flex h-1/2 justify-between w-1/2">
      <div className="">
        <h1 className="text-4xl ">
          Hey 👋, <br /> I&apos;m
          <a href="#">
            {" "}
            {/* replace with contact section */}
            <strong className="text-secondary">luka lekishvili</strong>
          </a>
        </h1>
        <br />
        <ul className="text-xs w-xs">
          <li>City: Tbilisi</li>
          <li>Phone number: 599158424</li>
          <li>email: lekishvililuka76@gmail.com</li>
          <li>
            GitHub:{" "}
            <a className="text-secondary" href="https://github.com/lukaleki">
              lukaleki
            </a>{" "}
          </li>
          <li>
            LinkedIn:{" "}
            <a
              className="text-secondary "
              href="https://www.linkedin.com/in/luka-lekishvili-752b48279/"
            >
              luka lekishvili
            </a>
          </li>
        </ul>
        <br />
        <p className="text-xl w-xs">
          Motivated Software Developer with a strong interest in Web
          Development. Eager to contribute and grow in a dynamic work
          environment while developing technical and professional skills.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Image
          className="rounded-sm"
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
