"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import "./DashboardNav.css";
import { toast } from "react-toastify";

function DashboardNav() {
  const [lastTab, setLastTab] = useState(0);
  const [loading, setLoading] = useState(true);
  const indicatorDashboardRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const sessionKey = localStorage.getItem("sessionKey");
    if (sessionKey) {
      setLoading(false);
    } else {
      router.push("/admin");
      toast.error("Please login first");
    }
  }, [router]);

  if (loading) {
    return "";
  }

  const moveIndicator = (element) => {
    const indicator = indicatorDashboardRef.current;
    if (element && indicator) {
      indicator.style.width = `${element.offsetWidth}px`;
      indicator.style.height = `${element.offsetHeight}px`;
      indicator.style.left = `${element.offsetLeft}px`;
      indicator.style.top = `${element.offsetTop}px`;
    }
  };

  const handleMouseEnter = (e) => {
    moveIndicator(e.target);
    indicatorDashboardRef.current.style.opacity = "1";
    setLastTab(e.target);
  };

  const handleMouseLeave = (e) => {
    moveIndicator(document.querySelector(".tab.active"));
    indicatorDashboardRef.current.style.opacity = "0";
    indicatorDashboardRef.current.style.width = "0";
    indicatorDashboardRef.current.style.height = "0";
    indicatorDashboardRef.current.style.left = `${lastTab.offsetLeft}px`;
  };

  return (
    <nav
      className='dashboard-nav row aic'
      onMouseLeave={handleMouseLeave}
      onWheel={(e) => {
        if (e.deltaY === 0) return;
        e.currentTarget.scrollLeft += e.deltaY;
        e.preventDefault();
      }}
      aria-label='Dashboard'
    >
      <div className='indicator-dashboard' ref={indicatorDashboardRef} />
      <Link
        className={`tab row aic jcc ${
          pathname === "/admin/dashboard" ? "active" : ""
        }`}
        href='/admin/dashboard'
        onMouseEnter={handleMouseEnter}
        aria-label='Dashboard'
      >
        Dashboard
      </Link>
      <Link
        className={`tab row aic jcc ${
          pathname === "/admin/dashboard/contacts" ? "active" : ""
        }`}
        href='/admin/dashboard/contacts'
        onMouseEnter={handleMouseEnter}
        aria-label='Contacts'
      >
        Contacts
      </Link>
      <Link
        className={`tab row aic jcc ${
          pathname === "/admin/dashboard/monitor" ? "active" : ""
        }`}
        href='/admin/dashboard/monitor'
        onMouseEnter={handleMouseEnter}
        aria-label='Monitor'
      >
        Monitor
      </Link>
      <Link
        className={`tab row aic jcc ${
          pathname === "/admin/dashboard/logs" ? "active" : ""
        }`}
        href='/admin/dashboard/logs'
        onMouseEnter={handleMouseEnter}
        aria-label='Logs'
      >
        Logs
      </Link>
      <Link
        className={`tab row aic jcc ${
          pathname === "/admin/dashboard/sessions" ? "active" : ""
        }`}
        href='/admin/dashboard/sessions'
        onMouseEnter={handleMouseEnter}
        aria-label='Sessions'
      >
        Sessions
      </Link>
    </nav>
  );
}

export default DashboardNav;
