import React from "react";
import Image, { StaticImageData } from "next/image";
import js from "@/public/js.png";
import react from "@/public/react.png";
import css from "@/public/css.png";
import html from "@/public/html.png";
import next from "@/public/nextjs.svg";
import node from "@/public/nodejs.png";

const urls = [next, node, html, css, react, js];

function Experience() {
  return (
    <div className="bg-red-500 w-full flex flex-col justify-between items-center">
      <h1 className="text-4xl">My skills</h1>
      <div className="w-full flex justify-around items-center">
        <div className="relative w-[20vmin] aspect-[5/7] group">
          {urls.map((url: StaticImageData, i: number) => (
            <div
              key={i}
              className={`grid place-items-center absolute rounded-[1vmin] aspect-[5/7] transition-transform duration-600 ease-in-out ${getHoverTransformClass(
                i
              )} z-[${i}]`}
            >
              <Image
                src={imgUrls(i)}
                width={200}
                height={200}
                alt="Luka Lekishvili"
              />
            </div>
          ))}
        </div>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SCSS</li>
          <li>Next</li>
          <li>React-Native</li>
          <li>MongoDB</li>
          <li>Node.js</li>
          <li>Express</li>
        </ul>
      </div>
    </div>
  );
}

function getHoverTransformClass(i: number): string {
  const baseTransforms = [
    "group-hover:translate-x-[275%] group-hover:-translate-y-[110%] group-hover:-rotate-[10deg] w-4/5",
    "group-hover:-translate-x-[120%] group-hover:-translate-y-[110%] group-hover:rotate-[10deg] w-4/5",
    "group-hover:-translate-x-[90%] group-hover:translate-y-[10%] group-hover:-rotate-[10deg] w-full",
    "group-hover:-translate-x-[20%] group-hover:translate-y-[3%] group-hover:-rotate-[5deg] w-full",
    "group-hover:translate-x-[65%] group-hover:rotate-[2deg] w-full",
    "group-hover:translate-x-[170%] group-hover:translate-y-[5%] group-hover:rotate-[10deg] w-full",
  ];
  return baseTransforms[i % baseTransforms.length];
}

function imgUrls(i: number) {
  return urls[i % urls.length];
}

export default Experience;
