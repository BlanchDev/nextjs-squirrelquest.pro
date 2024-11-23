"use client";

import Link from "next/link";
import "./HomeSection3.css";
import { useRef, useEffect, useState } from "react";

function HomeSection3() {
  const [activeNavItem, setActiveNavItem] = useState(null);
  const [itemIndex, setItemIndex] = useState(0);
  const indicatorHomeSection3Ref = useRef(null);

  useEffect(() => {
    if (activeNavItem) return;

    const navItems = document.querySelectorAll(
      "#nav-homesection3 .nav-homesection3",
    );

    const navLoop = setInterval(() => {
      moveIndicator(navItems[itemIndex]);
      setItemIndex((itemIndex + 1) % navItems.length);
    }, 750);

    return () => clearInterval(navLoop);
  }, [activeNavItem, itemIndex]);

  const moveIndicator = (element) => {
    const indicator = indicatorHomeSection3Ref.current;
    if (element && indicator) {
      indicator.style.display = "block";
      indicator.style.width = `${element.offsetWidth}px`;
      indicator.style.height = `${element.offsetHeight}px`;
      indicator.style.top = `${element.offsetTop}px`;
    }
  };

  const handleMouseEnter = (e) => {
    moveIndicator(e.target);
    setActiveNavItem(e.target);
    setItemIndex(Number(e.target.dataset.index));
  };

  const handleMouseLeave = () => {
    setActiveNavItem(null);
  };

  return (
    <section className='home-section3 column jcc gap100'>
      <div className='content column gap50'>
        <h3>
          Lean <span style={{ color: "#808080" }}>back</span>,
        </h3>
        <div className='unique-services column'>
          <div className='column aife gap10' style={{ paddingBottom: "25px" }}>
            <p>and more...</p>
            <h4 className='row aic gap10'>
              <span style={{ fontWeight: "600" }}>Unique</span>
              <span>Services</span>
            </h4>
          </div>
          <div className='container column aic jcc'>
            <nav
              className='column aic gap15'
              onMouseLeave={handleMouseLeave}
              id='nav-homesection3'
              aria-label='Services'
            >
              <div
                className='indicator-homesection3'
                ref={indicatorHomeSection3Ref}
              />
              <Link
                className='nav-homesection3'
                href='/services/carpentry-services'
                onMouseEnter={(e) => handleMouseEnter(e)}
                data-index='0'
                aria-label='General Carpentry Services'
              >
                General Carpentry Services
              </Link>
              <Link
                className='nav-homesection3'
                href='/services/structural-erections'
                onMouseEnter={(e) => handleMouseEnter(e)}
                data-index='1'
                aria-label='Structural Erections'
              >
                Structural Erections
              </Link>
              <Link
                className='nav-homesection3'
                href='/services/back-framing'
                onMouseEnter={(e) => handleMouseEnter(e)}
                data-index='2'
                aria-label='Back Framing'
              >
                Back Framing
              </Link>
              <Link
                className='nav-homesection3'
                href='/services/specialty-carpentry'
                onMouseEnter={(e) => handleMouseEnter(e)}
                data-index='3'
                aria-label='Specialty Carpentry'
              >
                Specialty Carpentry
              </Link>
            </nav>
          </div>
          <div className='column aifs gap5' style={{ paddingTop: "25px" }}>
            <h3>
              <span style={{ color: "#808080" }}>This is</span> what we do!
            </h3>
            <h4 style={{ fontWeight: "100" }}>
              <span style={{ color: "#fff" }}>Building</span> Dreams,{" "}
              <span style={{ color: "#999999" }}>Delivering</span> Excellence...
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection3;
