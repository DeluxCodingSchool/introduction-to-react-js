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
      <div>
        <button>Login</button>
        <button>Register</button>
        
      </div>
    </nav>
  );
};

export default Navbar;
