"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

import "./menu.css";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { FaBars } from 'react-icons/fa'

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/flavors", label: "Flavors" },
  { path: "/products", label: "Products" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const Menu = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container" ref={container}>
      {/* menu-bar */}
      <div className="menu-bar">
        <div className="menu-logo">
          <Link href="/" className="text-2xl">BLANKERS</Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <FaBars className="text-white text-2xl cursor-pointer hover:text-gray-400 transition duration-200" />
        </div>
      </div>

      {/* menu-overlay */}
      <div className="menu-overlay">
        {/* menu-overlay-bar */}
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <Link href="/" className="text-2xl">BLANKERS</Link>
          </div>
          <div className="menu-close">
            <p onClick={toggleMenu} className="hover:text-gray-400 transition duration-200">Close</p>
          </div>
        </div>

        {/* menu overlay items */}
        <div className="menu-close-icon" onClick={toggleMenu}>
          <p>&#x2715;</p>
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div key={index} className="menu-link-item">
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link className="menu-link" href={link.path}>
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info">
            <div className="menu-info-col">
              <a href="#">Instagram &#8599;</a>
              <a href="#">Twitter &#8599;</a>
              <a href="#">Facebook &#8599;</a>
            </div>
            <div className="menu-info-col">
              <p>www.Blankers.com</p>
              <p>213 598 8845</p>
            </div>
          </div>
        </div>
        <div className="menu-preview">
          <p>Hacienda Heights, CA</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
