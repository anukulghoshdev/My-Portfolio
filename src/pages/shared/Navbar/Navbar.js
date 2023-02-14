import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
// React Scroll X

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const links = [
    {
      id: 1,
      link: "/#home",
      route: "Home",
    },
    {
      id: 2,
      link: "/#about",
      route: "About",
    },
    {
      id: 3,
      link: "/#services",
      route: "Services",
    },
    {
      id: 4,
      link: "/#skills",
      route: "Skills",
    },
    {
      id: 5,
      link: "/#projects",
      route: "Projects",
    },
    {
      id: 6,
      link: "/#contact",
      route: "Contact",
    },
  ];

  const handleClick = () => {
    navigate("/blogs");
  };

  return (
    <div
      className={
        navbar
          ? "nav flex justify-between items-center w-full h-20 px-4 text-slate-50  fixed navBlur"
          : "nav flex justify-between items-center w-full h-20 px-4 text-slate-50  fixed "
      }
    >
      <div>
        <HashLink smooth to="/#home">
          <h1 className="text-5xl font-signature ml-2 ">Anukul.</h1>
        </HashLink>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link, route }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-slate-50 gray-200 hover:scale-105 duration-200"
          >
            <HashLink smooth to={link}>
              {route}
            </HashLink>
          </li>
        ))}
        <li className="px-4 cursor-pointer capitalize font-medium text-slate-50 hover:scale-105 duration-200">
          <button onClick={() => handleClick()}>Blogs</button>
        </li>
      </ul>

      <HashLink smooth to="/#contact">
        <div className="cursor-pointer hireme px-5 py-2 rounded-md hidden lg:block">
          <ul>Hire Me</ul>
        </div>
      </HashLink>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="md:hidden opacity-95 flex flex-col justify-center items-center absolute top-0 left-0 w-full  bg-gradient-to-b from-black to-gray-800 text-gray-300">
          {links.map(({ id, link, route }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-3xl"
            >
              <HashLink smooth to={link}>
                {route}
              </HashLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
