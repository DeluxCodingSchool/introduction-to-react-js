import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Delux Coding School</h1>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Courses</li>
        <li>Contact</li>
      </ul>
      <div className="nav-btn">
        <Button text="Login" number={1} />
        <Button text="Register" number={2} />
      </div>
    </nav>
  );
};

export default Navbar;
