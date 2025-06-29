import React from "react";

function ExpEdu() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl">Education</h1>
      <br />
      <ul className="text-xl text-center grid grid-cols-3">
        <li className="border-2 border-highliter p-3">Name</li>
        <li className="border-2 border-highliter p-3">speciality</li>
        <li className="border-2 border-highliter p-3">Date</li>
        <li className="border-2 border-highliter p-3">
          <a href="https://www.tsu.ge/">
            Ivane Javakhishvili Tbilisi State University
          </a>
        </li>
        <li className="border-2 border-highliter p-3">Computer Science</li>
        <li className="border-2 border-highliter p-3">2024-2028</li>
        <li className="border-2 border-highliter p-3">
          Information Technologies Center Mziuri
        </li>
        <li className="border-2 border-highliter p-3">Web Development</li>
        <li className="border-2 border-highliter p-3">2022-2023</li>
      </ul>
    </div>
  );
}

export default ExpEdu;
