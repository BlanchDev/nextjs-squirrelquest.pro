"use client";

import Image from "next/image";
import "./Header.css";
import Link from "next/link";
import Nav from "./components/Nav";

function Header() {
  return (
    <header className='header row aic jcc'>
      <div className='content row aic jcsb gap25'>
        <Link href='/' className='logo row aic gap10' aria-label='Home'>
          <Image src='/images/logo.webp' alt='logo' width={30} height={30} />
          <span className='logo-text row aic'>
            <span style={{ color: "#feca98" }}>Squirrel</span>
            <span style={{ color: "#fff" }}>Quest</span>
            <span style={{ color: "#8cd5ff" }}>.pro</span>
          </span>
        </Link>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
