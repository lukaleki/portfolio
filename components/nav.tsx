function Nav() {
  return (
    <nav className="flex justify-between bg-primary p-5 mb-5">
      <h1 className="xl:text-xl text-sm">
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
        <li className="lg:hidden">
          <div className="w-5 h-0.5 bg-background"></div>
          <div className="w-5 h-0.5 bg-background"></div>
          <div className="w-5 h-0.5 bg-background"></div>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
