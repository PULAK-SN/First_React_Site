import React from "react";
import image from "../image/react.png";

export default function Navbar() {
  return (
    <nav>
      <img src={image} className="nav--logo" alt="react-logo" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}
