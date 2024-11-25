"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { formatTimeAgo } from "../utils/formatTime";

function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const res = await axios.get("/api/admin/dashboard/logs", {
        headers: {
          sessionKey: localStorage.getItem("sessionKey"),
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Expires: "0",
        },
      });
      const data = res.data;
      setLogs(data.logs);
      console.log(data.logs);
    };

    fetchLogs();
  }, []);

  return (
    <div className='content column gap20'>
      <h1>Logs</h1>
      <div className='dashboard-logs-container'>
        {logs.map((log) => (
          <div key={log.id}>
            {log.id} - {log.ip} - {log.reqevent} -{" "}
            {formatTimeAgo(log.createdAt)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Logs;
