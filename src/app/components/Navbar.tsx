"use client"
import Link from "next/link";
import { FaCarAlt, FaHome, FaInfoCircle, FaHandsHelping, FaCarSide, FaEnvelope, FaBars } from "react-icons/fa";
import { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <FaCarAlt className="logo-icon" />
          <span className="logo-title">
            <span className="logo-primary">F</span>leet
            <span className="logo-secondary">F</span>orge
          </span>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="navbar-hamburger" onClick={toggleMenu}>
          <FaBars />
        </div>

        {/* Menu Links */}
        <ul className={`navbar-links ${isOpen ? "navbar-mobile-open" : ""}`}>
          <li>
            <Link href="/">
              <FaHome className="menu-icon" /> Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              <FaInfoCircle className="menu-icon" /> About Us
            </Link>
          </li>
          <li>
            <Link href="/carcollection">
              <FaCarSide className="menu-icon" /> Collection
            </Link>
          </li>
          <li>
            <Link href="/services">
              <FaHandsHelping className="menu-icon" /> Services
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <FaEnvelope className="menu-icon" /> Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

