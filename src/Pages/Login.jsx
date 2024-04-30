// import React, { useState } from "react";
// import Base from "../Base/Base";
// import { TextField, Button, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// export const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [err, setErr] = useState("");

//   const handleLogin = async () => {
//     const payload = {
//       email,
//       password,
//     };
//     const res = await fetch(
//       "https://crm-backend-34zd.onrender.com/api/user/login",
//       {
//         method: "POST",
//         body: JSON.stringify(payload),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     const data = await res.json();
//     if (data.token) {
//       setErr("");
//       localStorage.setItem("token", data.token);
//       navigate("/dashboard");
//     } else {
//       setErr(data.error);
//     }
//   };

//   return (
//     <Base title={"Login"}>
//       <br />
//       <div className="login_page">
//         <TextField
//           id="outlined-basic"
//           label="Email"
//           variant="outlined"
//           value={email}
//           type="email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br />
//         <br />

//         <TextField
//           id="outlined-basic"
//           label="Password"
//           variant="outlined"
//           value={password}
//           type="password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br />
//         <br />
//         <Button variant="contained" type="submit" onClick={handleLogin}>
//           Login
//         </Button>
//         {err ? <Typography color={"danger"}>{err} </Typography> : ""}
//       </div>
//     </Base>
//   );
// };



import React, { useState } from "react";
import Base from "../Base/Base";
import { TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        email,
        password,
      };
      const res = await fetch(
        "https://crm-backend-code-1.onrender.com/api/user/login",
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
          <Button variant="contained" type="submit" onClick={handleLogin}>
            Login
          </Button>
          {err && <Typography color="error">{err}</Typography>}
        </form>
      </div>
    </Base>
  );
};
