function Nav() {
  return (
    <nav className="flex justify-between w-full bg-primary p-5 mb-5">
      <h1 className="text-xl">
        <a href="#">Portfolio</a>
      </h1>
      <ul className="flex gap-5">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
