"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { formatTimeAgo } from "../utils/formatTime";
import { useRouter } from "next/navigation";

function Monitor() {
  const [userIps, setUserIps] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/admin/dashboard/monitor", {
          headers: {
            sessionKey: localStorage.getItem("sessionKey"),
          },
        });

        if (response.data.success) {
          setUserIps(response.data.data);
        } else {
          if (typeof localStorage !== "undefined") {
            localStorage.removeItem("sessionKey");
          }
          router.push("/admin");
        }
      } catch (error) {
        if (typeof localStorage !== "undefined") {
          localStorage.removeItem("sessionKey");
        }
        router.push("/admin");
      }
    };

    fetchData();
  }, [router]);

  return (
    <div className='content column gap20'>
      <h1>Monitor</h1>
      <div className='monitor-container column aifs gap20'>
        {userIps.map((monitor) => (
          <div key={monitor.id} className='monitor-item row aic'>
            {monitor.id} - {monitor.ip} - {monitor.pageUrl} -
            {formatTimeAgo(monitor.createdAt)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Monitor;
