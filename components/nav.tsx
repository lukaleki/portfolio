import React from "react";

function Nav() {
  return (
    <nav className="flex justify-between w-full bg-primary p-5">
      <h1 className="text-xl">
        <a href="#">RTS-Roguelite</a>
      </h1>
      <ul className="flex gap-5">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Game</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
