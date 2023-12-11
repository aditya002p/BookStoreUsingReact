import "./Nav.css";

// import Router Link............

import { Link, NavLink } from "react-router-dom";

//import logo...........................
import Logo from "../../assets/logo.png";

// import NavData........................

import { navLinks, navRight } from "../../Data/data";

//import Menu Icons........................
import { VscMenu } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";

//import  useState........................

import { useState } from "react";

export default function Nav() {
  // Use state for NavLinks show and hide-----------------
  const [isNavLinksShowing, setIsNavLinksShowing] = useState(false);

  //--------Windows Scroll Nav-Links Effect--------------------
  if (innerWidth > 1024) {
    window.addEventListener("scroll", () => {
      document.querySelector(".nav-links").classList.add("navLinksHide");
      setIsNavLinksShowing(false);
    });
    window.addEventListener("scroll", () => {
      document
        .querySelector("nav")
        .classList.toggle("navShadow", window.scrollY > 0);
      setIsNavLinksShowing(false);
    });
  }
  return (
    <nav>
      <div className="container nav-container">
        {/* .............Logo...............*/}
        <Link to={"/"} className="Logo">
          <img src={Logo} alt="Logo" />
        </Link>

        {/* .............Nav-Links............. */}
        <ul
          className={`nav-links ${
            isNavLinksShowing ? "navLinksShow" : "navLinksHide"
          }`}
        >
          {navLinks.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* .............Nav-Right............. */}
        <div className="nav-right">
          {navRight.managements.map((item, index) => {
            return (
              <Link
                key={index}
                // target="_blank"
                className="management-icons"
                to={item.link}
              >
                <item.icon />
              </Link>
            );
          })}

          <button
            className="menu-button btn btn-border"
            onClick={() => setIsNavLinksShowing(!isNavLinksShowing)}
          >
            {!isNavLinksShowing ? <VscMenu /> : <GrClose />}
          </button>
        </div>
      </div>
    </nav>
  );
}
