"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import "./ServicesNav.css";

function ServicesNav() {
  const [lastTab, setLastTab] = useState(0);
  const indicatorServicesRef = useRef(null);
  const pathname = usePathname();

  const moveIndicator = (element) => {
    const indicator = indicatorServicesRef.current;
    if (element && indicator) {
      indicator.style.width = `${element.offsetWidth}px`;
      indicator.style.height = `${element.offsetHeight}px`;
      indicator.style.left = `${element.offsetLeft}px`;
      indicator.style.top = `${element.offsetTop}px`;
    }
  };

  const handleMouseEnter = (e) => {
    moveIndicator(e.target);
    indicatorServicesRef.current.style.opacity = "1";
    setLastTab(e.target);
  };

  const handleMouseLeave = (e) => {
    moveIndicator(document.querySelector(".tab.active"));
    indicatorServicesRef.current.style.opacity = "0";
    indicatorServicesRef.current.style.width = "0";
    indicatorServicesRef.current.style.height = "0";
    indicatorServicesRef.current.style.left = `${lastTab.offsetLeft}px`;
  };

  return (
    <nav
      className='services-nav row aic gap5'
      onMouseLeave={handleMouseLeave}
      onWheel={(e) => {
        if (e.deltaY === 0) return;
        e.currentTarget.scrollLeft += e.deltaY;
        e.preventDefault();
      }}
      aria-label='Services'
    >
      <div className='indicator-services' ref={indicatorServicesRef} />
      <Link
        className={`tab row aic jcc ${
          pathname === "/services/carpentry-services" ? "active" : ""
        }`}
        href='/services/carpentry-services'
        onMouseEnter={handleMouseEnter}
        aria-label='General Carpentry Services'
      >
        General Carpentry
      </Link>
      <Link
        className={`tab row aic jcc ${
          pathname === "/services/structural-erections" ? "active" : ""
        }`}
        href='/services/structural-erections'
        onMouseEnter={handleMouseEnter}
        aria-label='Structural Erections'
      >
        Structural Erections
      </Link>
      <Link
        className={`tab row aic jcc ${
          pathname === "/services/back-framing" ? "active" : ""
        }`}
        href='/services/back-framing'
        onMouseEnter={handleMouseEnter}
        aria-label='Back Framing'
      >
        Back Framing
      </Link>
      <Link
        className={`tab row aic jcc ${
          pathname === "/services/specialty-carpentry" ? "active" : ""
        }`}
        href='/services/specialty-carpentry'
        onMouseEnter={handleMouseEnter}
        aria-label='Specialty Carpentry'
      >
        Specialty Carpentry
      </Link>
    </nav>
  );
}

export default ServicesNav;
