import React, { useEffect, useRef, useState } from "react";
import { logo1 } from "../assets/images";
import { navLinks } from "../constants";
import { Menu } from "../components";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);
  const headerRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);

  const handleActive = (label) => {
    setActive(label);
  };

  const handToggle = () => {
    setToggle(!toggle);
  };

  return (
      <header
          ref={headerRef}
          className="flex justify-between items-center w-full lg:px-[80px] md:px-[40px] px-[30px] py-[30px] bg-background"
      >
        <div className="lg:w-[220px] md:w-[180px] w-[160px] h-auto">
          <a href="/">
            <img src={logo1} alt="logo" className="w-full" />
          </a>
        </div>

        <nav
            className={`${
                toggle ? "flex" : "hidden"
            } lg:flex fixed lg:static top-[100px] left-0 w-full lg:w-auto h-[100vh] lg:h-auto bg-light lg:bg-transparent z-50 flex-col lg:flex-row items-center justify-center lg:justify-end`}
        >
          <ul className="flex flex-col lg:flex-row items-center gap-8">
            {navLinks.map((item) => (
                <li
                    key={item.label}
                    className={`${
                        active === item.label
                            ? "text-secondary font-bold"
                            : "text-text-dark hover:text-secondary"
                    } text-xl capitalize cursor-pointer duration-300`}
                    onClick={() => {
                      handleActive(item.label);
                      setToggle(false);
                    }}
                >
                  <a href={item.href}>{item.label}</a>
                </li>
            ))}
          </ul>
        </nav>

        <div
            className="lg:hidden block cursor-pointer z-50"
            onClick={handToggle}
        >
          <Menu toggle={toggle} />
        </div>
      </header>
  );
};

export default Navbar;