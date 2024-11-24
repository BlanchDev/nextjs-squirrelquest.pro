import "./HomeSection1.css";
import Link from "next/link";

function HomeSection1() {
  return (
    <section className='home-section1 column aic jcc gap15'>
      <div className='content column aic jcc gap40'>
        <div className='text column aic jcc gap20'>
          <h1 className=''>
            Welcome to{" "}
            <span
              style={{
                fontWeight: "bold",
                fontSize: "1.2em",
                fontFamily: "var(--font-itim)",
              }}
            >
              <span style={{ color: "#feca98" }}>Squirrel</span>
              <span style={{ color: "#fff" }}>Quest</span>
              <span style={{ color: "#8cd5ff" }}>.pro</span>
            </span>
          </h1>
          <h2>
            <span style={{ color: "#999999" }}>Building</span> Dreams,{" "}
            <span style={{ color: "#999999" }}>Delivering</span> Excellence...
          </h2>
          <h3>
            <span style={{ color: "#999999" }}>for</span>{" "}
            <span style={{ color: "#d32a26" }}>Canada,</span>{" "}
            <span
              style={{
                color: "#fff",
                borderRight: "1px solid #d32a26",
                paddingRight: "4px",
              }}
            >
              Calgary Alberta
            </span>
          </h3>
        </div>
        <div className='logo-and-buttons row aic jcc gap50'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src='/images/real-logo.webp'
            alt='Logo'
            width={150}
            height={150}
          />
          <nav
            className='contact column aic jcc gap15'
            aria-label='Contact Buttons'
          >
            <Link
              className='button call'
              href='tel:+15872299345'
              aria-label='Call'
            >
              Call 1-(587)-229-9345
            </Link>
            <pre>or</pre>
            <Link
              className='button viaform'
              href='/contact'
              aria-label='Contact via Form'
            >
              Send Message via Form
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default HomeSection1;
