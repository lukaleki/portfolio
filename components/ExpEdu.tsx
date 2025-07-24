import React from "react";

function ExpEdu() {
  return (
    <div className="flex flex-col items-center px-4 py-10 w-full">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">Education</h1>

      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-3 sm:grid-cols-3 text-center font-medium text-lg">
          <div className="border-2 border-highliter p-3 bg-primary text-background">
            Name
          </div>
          <div className="border-2 border-highliter p-3 bg-primary text-background">
            Speciality
          </div>
          <div className="border-2 border-highliter p-3 bg-primary text-background">
            Date
          </div>
        </div>

        {/* Entry 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 text-center text-base">
          <div className="border-2 border-highliter p-3">
            <a
              href="https://www.tsu.ge/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ivane Javakhishvili Tbilisi State University
            </a>
          </div>
          <div className="border-2 border-highliter p-3">Computer Science</div>
          <div className="border-2 border-highliter p-3">2024–2028</div>
        </div>

        {/* Entry 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 text-center text-base">
          <div className="border-2 border-highliter p-3">
            Information Technologies Center Mziuri
          </div>
          <div className="border-2 border-highliter p-3">Web Development</div>
          <div className="border-2 border-highliter p-3">2022–2023</div>
        </div>
      </div>
    </div>
  );
}

export default ExpEdu;
