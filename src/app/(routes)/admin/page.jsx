"use client";

import { useRouter } from "next/navigation";
import "./admin.css";
import AdminLogin from "./components/AdminLogin/AdminLogin";

function Admin() {
  const router = useRouter();

  let sessionKey;
  if (typeof window !== "undefined") {
    sessionKey = localStorage.getItem("sessionKey");
  }

  if (sessionKey) {
    router.push("/admin/dashboard");
  }

  return (
    <div className='content column gap20'>
      <AdminLogin />
    </div>
  );
}

export default Admin;
