"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";

export default function UserIPs() {
  const pathname = usePathname();

  useEffect(() => {
    if (
      !pathname.startsWith("/api") &&
      !pathname.startsWith("/_next") &&
      !pathname.includes(".")
    ) {
      axios.post("/api/admin/dashboard/monitor", {
        pageUrl: pathname,
        createdAt: Date.now(),
      });
    }
  }, [pathname]);
}
