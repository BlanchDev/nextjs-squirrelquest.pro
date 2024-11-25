"use client";
import { useRouter } from "next/navigation";
import { useEffect, useCallback } from "react";

const ROUTES = {
  main: ["/", "/services", "/gallery", "/contact"],
  services: [
    "/services/carpentry-services",
    "/services/structural-erections",
    "/services/back-framing",
    "/services/specialty-carpentry",
  ],
};

export default function PrefetchPages() {
  const router = useRouter();

  const prefetchRoute = useCallback(
    (route, delay = 0) => {
      setTimeout(() => router.prefetch(route), delay);
    },
    [router],
  );

  const prefetchWithDelay = useCallback(
    (route, index) => {
      const delay = index * 100;
      if ("requestIdleCallback" in window) {
        requestIdleCallback(() => prefetchRoute(route, delay));
      } else {
        prefetchRoute(route, 1000 + delay);
      }
    },
    [prefetchRoute],
  );

  const prefetchWithPriority = useCallback(
    (routes, priority = "high") => {
      routes.forEach((route, index) => {
        if (priority === "high") {
          prefetchRoute(route);
        } else {
          prefetchWithDelay(route, index);
        }
      });
    },
    [prefetchRoute, prefetchWithDelay],
  );

  useEffect(() => {
    if (!("connection" in navigator)) {
      prefetchWithPriority(ROUTES.main, "high");
      prefetchWithPriority(ROUTES.services, "low");
      return;
    }

    const connection = navigator.connection;
    if (connection.saveData) {
      return;
    }

    if (connection.effectiveType === "4g") {
      prefetchWithPriority(ROUTES.main, "high");
      prefetchWithPriority(ROUTES.services, "low");
    } else {
      prefetchWithPriority(ROUTES.main, "low");
    }
  }, [prefetchWithPriority]);

  return null;
}
