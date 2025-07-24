import React from "react";
import Image, { StaticImageData } from "next/image";
import js from "@/public/js.png";
import react from "@/public/react.png";
import css from "@/public/css.png";
import html from "@/public/html.png";
import next from "@/public/nextjs.svg";
import node from "@/public/nodejs.png";

function Skills() {
  return (
    <div id="skills" className="w-full flex flex-col items-center px-4 py-10">
      <h1 className="text-3xl xl:text-4xl font-semibold">My Skills</h1>
      <br />
      <div className="flex flex-col items-center justify-center xl:gap-10 w-full max-w-6xl">
        {/* Animated Icons */}
        <div
          tabIndex={0}
          className="relative h-[100px] w-[75px] sm:w-[150px] xl:h-[100px] xl:w-[100px] group"
        >
          {urls.map((url: StaticImageData, i: number) => (
            <div
              key={i}
              className={`grid place-items-center absolute rounded-lg transition-transform duration-500 ease-in-out z-${
                i + 10
              } ${getHoverTransformClass(i)}`}
            >
              <Image
                src={url}
                width={150}
                height={150}
                alt={`Skill logo ${url}`}
                className="object-contain w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] lg:w-[150px] lg:h-[150px]"
              />
            </div>
          ))}
        </div>

        {/* Skills List */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Technical Skills */}
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center text-lg">
            {[
              "HTML",
              "CSS",
              "SCSS",
              "JavaScript",
              "React",
              "React-Native",
              "NextJS",
              "MongoDB",
              "Node.js",
            ].map((skill) => (
              <li
                key={skill}
                className="border-2 border-highliter p-3 rounded-md"
              >
                {skill}
              </li>
            ))}
          </ul>

          {/* Languages & Soft Skills */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ul className="text-center text-lg space-y-2">
              <li className="font-semibold border-2 border-highliter p-3 text-xl rounded-md">
                Languages
              </li>
              <li className="border-2 border-highliter p-3 rounded-md">
                Georgian
              </li>
              <li className="border-2 border-highliter p-3 rounded-md">
                English
              </li>
              <li className="border-2 border-highliter p-3 rounded-md">
                Russian
              </li>
            </ul>
            <ul className="text-center text-lg space-y-2">
              <li className="font-semibold border-2 border-highliter p-3 text-xl rounded-md">
                Soft Skills
              </li>
              <li className="border-2 border-highliter p-3 rounded-md">
                Teamwork
              </li>
              <li className="border-2 border-highliter p-3 rounded-md">
                Communication
              </li>
              <li className="border-2 border-highliter p-3 rounded-md">
                Problem Solving
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const urls = [next, node, html, css, react, js];

// Animations on hover/focus
function getHoverTransformClass(i: number): string {
  const transforms = [
    "group-hover:translate-x-[265%] group-hover:-translate-y-[110%] group-hover:-rotate-[10deg] group-focus:translate-x-[145%] group-focus:-translate-y-[110%] group-focus:-rotate-[10deg]",
    "group-hover:-translate-x-[105%] group-hover:-translate-y-[110%] group-hover:rotate-[10deg] group-focus:-translate-x-[145%] group-focus:-translate-y-[110%] group-focus:rotate-[10deg]",
    "group-hover:-translate-x-[80%] group-hover:translate-y-[20%] group-hover:-rotate-[15deg] group-focus:-translate-x-[140%] group-focus:translate-y-[20%] group-focus:-rotate-[15deg]",
    "group-hover:-translate-x-[10%] group-hover:translate-y-[3%] group-hover:-rotate-[5deg] group-focus:-translate-x-[60%] group-focus:translate-y-[3%] group-focus:-rotate-[5deg]",
    "group-hover:translate-x-[55%] group-hover:rotate-[2deg] group-focus:translate-x-[30%] group-focus:rotate-[2deg]",
    "group-hover:translate-x-[160%] group-hover:translate-y-[5%] group-hover:rotate-[10deg] group-focus:translate-x-[140%] group-focus:translate-y-[5%] group-focus:rotate-[10deg]",
  ];
  return transforms[i % transforms.length];
}

export default Skills;
