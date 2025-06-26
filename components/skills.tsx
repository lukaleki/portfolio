import React from "react";
import Image, { StaticImageData } from "next/image";
import js from "@/public/js.png";
import react from "@/public/react.png";
import css from "@/public/css.png";
import html from "@/public/html.png";
import next from "@/public/nextjs.svg";
import node from "@/public/nodejs.png";

// hover image animation urls
const urls = [next, node, html, css, react, js];

function Skills() {
  return (
    <div id="skills" className="w-full flex flex-col items-center">
      <h1 className="text-4xl">My skills</h1>
      <br />
      <div className="w-full flex justify-evenly items-center">
        <div className="relative h-[20vmin] w-[20vmin] aspect-[5/7] group">
          {urls.map((url: StaticImageData, i: number) => (
            <div
              key={i}
              className={`grid place-items-center absolute rounded-[1vmin] transition-transform duration-600 ease-in-out ${getHoverTransformClass(
                i
              )} z-[${i}]`}
            >
              <Image
                src={urls[i]}
                width={200}
                height={200}
                alt="Luka Lekishvili"
              />
            </div>
          ))}
        </div>
        <ul className="text-xl text-center grid grid-flow-col grid-rows-3">
          <li className="border-2 border-highliter p-5">HTML</li>
          <li className="border-2 border-highliter p-5">CSS</li>
          <li className="border-2 border-highliter p-5">SCSS</li>
          <li className="border-2 border-highliter p-5">JavaScript</li>
          <li className="border-2 border-highliter p-5">React</li>
          <li className="border-2 border-highliter p-5">React-Native</li>
          <li className="border-2 border-highliter p-5">NextJS</li>
          <li className="border-2 border-highliter p-5">MongoDB</li>
          <li className="border-2 border-highliter p-5">Node.js</li>
        </ul>
        <ul className="text-xl text-center flex">
          <div className="flex flex-col">
            <li className="border-2 border-highliter p-5 text-2xl">
              Languages
            </li>
            <li className="border-2 border-highliter p-5">Georgian</li>
            <li className="border-2 border-highliter p-5">English</li>
            <li className="border-2 border-highliter p-5">Russian</li>
          </div>
          <div className="flex flex-col">
            <li className="border-2 border-highliter p-5 text-2xl">
              Soft Skills
            </li>
            <li className="border-2 border-highliter p-5">Teamwork</li>
            <li className="border-2 border-highliter p-5">Communication</li>
            <li className="border-2 border-highliter p-5">Problem Solving</li>
          </div>
        </ul>
      </div>
    </div>
  );
}

// hover image animation classes
function getHoverTransformClass(i: number): string {
  const baseTransforms = [
    "group-hover:translate-x-[275%] group-hover:-translate-y-[110%] group-hover:-rotate-[10deg] w-4/5",
    "group-hover:-translate-x-[115%] group-hover:-translate-y-[110%] group-hover:rotate-[10deg] w-4/5",
    "group-hover:-translate-x-[90%] group-hover:translate-y-[20%] group-hover:-rotate-[15deg] w-full",
    "group-hover:-translate-x-[20%] group-hover:translate-y-[3%] group-hover:-rotate-[5deg] w-full",
    "group-hover:translate-x-[65%] group-hover:rotate-[2deg] w-full",
    "group-hover:translate-x-[170%] group-hover:translate-y-[5%] group-hover:rotate-[10deg] w-full",
  ];
  return baseTransforms[i % baseTransforms.length];
}

export default Skills;
