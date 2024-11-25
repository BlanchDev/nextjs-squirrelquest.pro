"use client";

import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function AdminLogin() {
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/admin/login", { password });
      if (response.data.success) {
        toast.success("Admin login successful");
        localStorage.setItem("sessionKey", response.data.sessionKey);
        router.push("/admin/dashboard");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <form className='column gap20' onSubmit={handleSubmit}>
      <div className='form-group column gap10'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='form-group row aic jcc'>
        <button type='submit'>Login</button>
      </div>
    </form>
  );
}

export default AdminLogin;
