"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import "./Nav.css";

function Nav() {
  const navRef = useRef(null);
  const indicatorRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    moveIndicator(document.querySelector(".nav-item.active"));
    const activeElement = document.querySelector(".nav-item.active");
    if (activeElement) {
      activeElement.style.color = "#f7f7f7";
    }
  }, [pathname]);

  const moveIndicator = (element) => {
    const indicator = indicatorRef.current;
    if (element && indicator) {
      indicator.style.display = "block";
      indicator.style.width = `${element.offsetWidth}px`;
      indicator.style.left = `${element.offsetLeft}px`;
    }
  };

  const handleMouseEnter = (e) => {
    moveIndicator(e.target);
    const activeElement = document.querySelector(".nav-item.active");
    if (activeElement) {
      activeElement.style.color = "#a0a0a0";
      activeElement.style.background = "transparent";
    }
  };

  const handleMouseLeave = () => {
    moveIndicator(document.querySelector(".nav-item.active"));
    const activeElement = document.querySelector(".nav-item.active");
    if (activeElement) {
      activeElement.style.color = "#f7f7f7";
      activeElement.style.background = "#1f1f1f";
    }
  };

  return (
    <nav
      className='header-nav row aic gap5'
      ref={navRef}
      onMouseLeave={handleMouseLeave}
      aria-label='Navigation'
    >
      <div className='indicator' ref={indicatorRef} />
      <Link
        href='/'
        className={`nav-item row aic jcc ${pathname === "/" ? "active" : ""}`}
        onMouseEnter={handleMouseEnter}
        aria-label='Home'
      >
        Home
      </Link>
      <Link
        href='/services'
        className={`nav-item row aic jcc ${
          pathname.includes("/services") ? "active" : ""
        }`}
        onMouseEnter={handleMouseEnter}
        aria-label='Services'
      >
        Services
      </Link>
      <Link
        href='/gallery'
        className={`nav-item row aic jcc ${
          pathname.includes("/gallery") ? "active" : ""
        }`}
        onMouseEnter={handleMouseEnter}
        aria-label='Gallery'
      >
        Gallery
      </Link>
      <Link
        href='/contact'
        className={`nav-item row aic jcc ${
          pathname.includes("/contact") ? "active" : ""
        }`}
        onMouseEnter={handleMouseEnter}
        aria-label='Contact'
      >
        Contact
      </Link>
    </nav>
  );
}

export default Nav;
