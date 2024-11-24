"use client";

import Image from "next/image";
import "./HomeSection2.css";
import { useEffect, useState } from "react";
import Link from "next/link";

function HomeSection2() {
  const [selectedService, setSelectedService] = useState("residential");
  const [hoverSelectedService, setHoverSelectedService] = useState(null);
  const [clickedService, setClickedService] = useState(null);

  useEffect(() => {
    const details = {
      residential: "Residential Framing Services",
      commercial: "Commercial Framing Services",
      back: "Back Framing Specialist",
    };

    if (hoverSelectedService || clickedService) return;
    const interval = setInterval(() => {
      setSelectedService((prev) =>
        prev === Object.keys(details)[Object.keys(details).length - 1]
          ? Object.keys(details)[0]
          : Object.keys(details)[Object.keys(details).indexOf(prev) + 1],
      );
    }, 750);

    return () => clearInterval(interval);
  }, [hoverSelectedService, clickedService]);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setClickedService(service);
  };

  return (
    <section className='home-section2 column aic jcc gap100'>
      <h1>
        It&apos;s{" "}
        <span
          style={{
            color: "gold",
            fontWeight: "bold",
            fontFamily: "var(--font-itim)",
          }}
        >
          special
        </span>{" "}
        for you. 🐿️
      </h1>
      <div className='services column aifs'>
        <div className='titles row aic'>
          <Link
            href='/services/carpentry-services'
            className={`service row aic jcc gap50 ${
              selectedService === "residential" && "loop"
            } ${clickedService === "residential" && "clicked"}`}
            onClick={() => handleServiceClick("residential")}
            onMouseEnter={() => setHoverSelectedService("residential")}
            onMouseLeave={() => setHoverSelectedService(null)}
            aria-label='Residential Framing Services'
          >
            <div className='image row aic jcc'>
              <Image
                src='/images/house.webp'
                alt='Residential Framing Services'
                width={80}
                height={80}
                quality={75}
              />
            </div>
            <h2>
              Residential Framing <br /> Services
            </h2>
          </Link>

          <Link
            href='/services/carpentry-services'
            className={`service row aic jcc gap50 ${
              selectedService === "commercial" && "loop"
            } ${clickedService === "commercial" && "clicked"}`}
            onClick={() => handleServiceClick("commercial")}
            onMouseEnter={() => setHoverSelectedService("commercial")}
            onMouseLeave={() => setHoverSelectedService(null)}
            aria-label='Commercial Framing Services'
          >
            <div className='image row aic jcc'>
              <Image
                src='/images/shop.webp'
                alt='Commercial Framing Services'
                width={90}
                height={90}
                quality={75}
              />
            </div>
            <h2>
              Commercial Framing <br /> Services
            </h2>
          </Link>

          <Link
            href='/services/carpentry-services'
            className={`service row aic jcc gap50 ${
              selectedService === "back" && "loop"
            } ${clickedService === "back" && "clicked"}`}
            onClick={() => handleServiceClick("back")}
            onMouseEnter={() => setHoverSelectedService("back")}
            onMouseLeave={() => setHoverSelectedService(null)}
            aria-label='Back Framing Specialist'
          >
            <div className='image row aic jcc'>
              <Image
                src='/images/homeplan.webp'
                alt='Back Framing Specialist'
                width={90}
                height={90}
                quality={75}
              />
            </div>
            <h2>
              Back Framing <br /> Specialist
            </h2>
          </Link>
        </div>
      </div>
      <div className='details column aifs gap15'>
        <h2>
          The <span style={{ color: "#feca98" }}>SquirrelQuest</span> Way
        </h2>
        <p>
          We are a team of experienced professionals who specialize in
          residential and commercial framing services. Our team is dedicated to
          providing high-quality workmanship and exceptional customer service to
          ensure your project is completed on time and within budget.
        </p>

        <nav className='contact row aic jcc gap50' aria-label='Contact Buttons'>
          <Link
            className='button viaform'
            href='/contact'
            aria-label='Contact via Form'
          >
            Send Message via Form
          </Link>{" "}
          <pre>or</pre>
          <Link
            className='button call'
            href='tel:+15872299345'
            aria-label='Call'
          >
            Call 1-(587)-229-9345
          </Link>
        </nav>
      </div>
    </section>
  );
}

export default HomeSection2;
