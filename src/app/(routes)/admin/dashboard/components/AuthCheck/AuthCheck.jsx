"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function AuthCheck({ children }) {
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const key = localStorage.getItem("sessionKey");
    if (key) {
      setLoading(false);
    } else {
      router.push("/");
    }

    console.log(key);
  }, [router]);

  if (loading) {
    return "";
  }

  return children;
}

export default AuthCheck;
