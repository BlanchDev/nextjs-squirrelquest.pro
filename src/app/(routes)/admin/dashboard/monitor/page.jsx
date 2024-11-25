"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { formatTimeAgo } from "../utils/formatTime";

function Monitor() {
  const [userIps, setUserIps] = useState([]);

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
        }
      } catch (error) {
        console.error("Failed to fetch IP data:", error);
      }
    };

    fetchData();
  }, []);

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
