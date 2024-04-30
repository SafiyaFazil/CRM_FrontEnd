import React, { useState } from "react";
import Base from "../Base/Base";
import { TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleRegister = async () => {
    const payload = {
        userName,
        city,
        phone,
      email,
      password,
    };
    const res = await fetch(
      "https://crm-backend-code.onrender.com/api/user/register",
      {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    if (data.token) {
      setErr("");
      localStorage.setItem("token", data.token);
      navigate("/login");
    } else {
      setErr(data.error);
    }
  };

  return (
    <Base title={"Register"}>
      <div className="main">
        <div className="register">
          {/* <form> */}
            <TextField
              // id="outlined-basic"
              label="UserName"
              variant="outlined"
              value={userName}
              type="text"
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            <br />

            <TextField
              // id="outlined-basic"
              label="City"
              variant="outlined"
              value={city}
              type="text"
              onChange={(e) => setCity(e.target.value)}
            />
            <br />
            <br />
            <TextField
              // id="outlined-basic"
              label="Phone"
              variant="outlined"
              value={phone}
              type="number"
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            <br />

            <TextField
              // id="outlined-basic"
              label="Email"
              variant="outlined"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />

            <TextField
              // id="outlined-basic"
              label="Password"
              variant="outlined"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />

            <Button variant="contained" type="submit" onClick={handleRegister}>
              Register
            </Button>
            <br />
            <br />
          {/* </form> */}
        </div>
        {err ? <Typography color={"danger"}>{err} </Typography> : ""}
      </div>
    </Base>
  );
};
