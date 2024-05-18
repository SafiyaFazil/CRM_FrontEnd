import React, { useState } from "react";
import Base from "../Base/Base";
import { TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const AdminLogin = () => {
  const navigate = useNavigate();
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [err, setErr] = useState("");

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        adminEmail,
        adminPassword,
      };
      const res = await fetch(
        "https://crm-backend-code-1.onrender.com/api/admin/adminLogin",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      if (!res.ok) {
        throw new Error("Failed to log in");
      }
      const data = await res.json();
      if (data.token) {
        setErr("");
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        setErr(data.error);
      }
    } catch (error) {
      setErr("Failed to log in");
      console.error("Login failed:", error);
    }
  };

  return (
    <Base title={"Login"}>
      <br />
      <div className="login_page">
        <form>
          <TextField
            // id="outlined-basic"
            label="AdminEmail"
            variant="outlined"
            value={adminEmail}
            type="email"
            onChange={(e) => setAdminEmail(e.target.value)}
          />
          <br />
          <br />

          <TextField
            // id="outlined-basic"
            label="AdminPassword"
            variant="outlined"
            value={adminPassword}
            type="password"
            onChange={(e) => setAdminPassword(e.target.value)}
          />
          <br />
          <br />
          <Button variant="contained" type="submit" onClick={handleAdminLogin}>
            Login
          </Button>
          {err && <Typography color="error">{err}</Typography>}
        </form>
      </div>
    </Base>
  );
};
