import React, { useEffect, useState } from "react";
import "./Nav.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://www.nicepng.com/png/full/786-7867763_these-are-the-6-best-things-you-need.png"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://www.nicepng.com/png/full/49-490595_patch-eyepatch-clipart.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Navbar;
