import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style.css"
import Nav from "react-bootstrap/Nav";


const Base = ({ title, children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="home">
      <div>
        <header>
          
          <Nav className="justify-content-end nav" activeKey="/home">
            <Nav.Item className="navItem">
              <Nav.Link className="navLink" href="/register">Register</Nav.Link>
            </Nav.Item>
            <Nav.Item className="navItem">
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item className="navItem">
              <Nav.Link href="/">Logout</Nav.Link>
            </Nav.Item>
          </Nav>
          
        </header>
      </div>
      <div className="main">
        <main>
          <h1>{title}</h1>
          <div>{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Base;
