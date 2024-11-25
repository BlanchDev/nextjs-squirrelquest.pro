"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import "./dashboard-contacts.css";
import { formatTimeAgo } from "../utils/formatTime";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const res = await axios.get("/api/admin/dashboard/contacts", {
        headers: {
          sessionKey: localStorage.getItem("sessionKey"),
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Expires: "0",
        },
      });
      const data = res.data;
      setContacts(data.contacts);
      console.log(data.contacts);
    };

    fetchContacts();
  }, []);

  return (
    <div className='content column gap20'>
      <h1>Contacts</h1>
      <div className='dashboard-contacts-container column gap50'>
        {contacts.map((contact) => (
          <div key={contact.id} className='contact-item'>
            <div className='contact-item-header row jcsb gap5'>
              <div className='column aifs gap5'>
                <div className='contact-item-name'>
                  Name: {contact.fullname}
                </div>
                <div className='contact-item-email'>
                  Email/Phone: {contact.mailorphone}
                </div>
              </div>
              <div className='column aife gap5'>
                <div className='contact-item-id'>ID: {contact.id}</div>
                <div className='contact-item-createdat'>
                  {formatTimeAgo(contact.createdAt)}
                </div>
              </div>
            </div>
            <div className='contact-item-message'>
              {contact.fullname}&apos;s message:
              <br /> {contact.msg}
            </div>
            <div className='contact-item-ip'>IP {contact.ip}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contacts;
