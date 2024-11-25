"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { formatTimeAgo } from "../utils/formatTime";

function Sessions() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      const res = await axios.get("/api/admin/dashboard/sessions", {
        headers: {
          sessionKey: localStorage.getItem("sessionKey"),
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Expires: "0",
        },
      });
      const data = res.data;
      setSessions(data.sessions);
      console.log(data.sessions);
    };

    fetchSessions();
  }, []);

  return (
    <div className='content column gap20'>
      <h1>Sessions</h1>
      <div className='dashboard-sessions-container'>
        {sessions.map((session) => (
          <div key={session.id}>
            {session.id} - {session.ip} - {session.reqevent} -
            {formatTimeAgo(session.createdAt)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sessions;
