import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import "../Style.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminHome = ({ title, children }) => {
  const navigate = useNavigate();

  return (
    <div className="navHome">
      <Nav className="justify-content-center " activeKey="/home">
        <Nav.Item className="navLinkHome">
          <Nav.Link href="/dashboard">Product Details</Nav.Link>
        </Nav.Item>
        
        <Nav.Item className="navLinkHome">
          <Nav.Link href="/cusDetails">Customer Details</Nav.Link>
        </Nav.Item>
        
        <Nav.Item className="navLinkHome">
          <Nav.Link href="/">Logout</Nav.Link>
        </Nav.Item>
      </Nav>

      <div className="main">
        <main>
          <h1>{title}</h1>
          <div>{children}</div>
        </main>
      </div>
    </div>
  );
};

export default AdminHome;
