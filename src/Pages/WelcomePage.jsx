import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const WelcomePage = () => {
  const navigate = useNavigate();

    return (
      <div className="welcome ">
        <div>
          <h1 className="title ">WELCOME TO ABC SHOP CRM</h1>
        </div>
        <div>
          <h3 className="title1">Buy What You Need Here..</h3>
        </div>
        <div>
          <Button size='lg' className='titleBtn' onClick={() => navigate("/base")}>Go Inside</Button>
        </div>
      </div>
    );
};

export default WelcomePage;