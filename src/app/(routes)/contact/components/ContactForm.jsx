"use client";

import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    mailorphone: "",
    msg: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post("/api/contact", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (resp.data.success) {
        toast.success("Message sent successfully");
        setFormData({
          fullname: "",
          mailorphone: "",
          msg: "",
        });
      } else {
        toast.error(resp.data.message);
      }
    } catch (error) {
      toast.error(`${error.response.data.message}`);
    }
  };

  return (
    <form className='column gap20'>
      <div className='form-group column gap10'>
        <label htmlFor='name'>*Full Name</label>
        <input
          type='text'
          id='name'
          placeholder='John Doe'
          value={formData.fullname}
          required
          maxLength={50}
          onChange={(e) =>
            setFormData({ ...formData, fullname: e.target.value })
          }
        />
      </div>
      <div className='form-group column gap10'>
        <label htmlFor='email'>*Email or Phone Number</label>
        <input
          type='text'
          id='email'
          placeholder='john.doe@example.com OR 123-456-7890'
          value={formData.mailorphone}
          required
          maxLength={50}
          onChange={(e) =>
            setFormData({ ...formData, mailorphone: e.target.value })
          }
        />
      </div>
      <div className='form-group column gap10'>
        <label htmlFor='message'>*Message</label>
        <textarea
          id='message'
          placeholder='Your message here...'
          rows={4}
          enterKeyHint='send'
          value={formData.msg}
          required
          maxLength={500}
          onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
        />
      </div>
      <div className='form-group row aic jcc'>
        <button
          type='submit'
          onClick={handleSubmit}
          disabled={
            !formData.fullname || !formData.mailorphone || !formData.msg
          }
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
