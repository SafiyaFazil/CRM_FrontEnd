import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home.jsx";

export const CustomerDetails = () => {
  const [customer, setCustomer] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login", { replace: true });
    }
    let token = localStorage.getItem("token");
    const fetchData = async () => {
      console.log(token);
      const res = await fetch(
        "https://crm-backend-code-1.onrender.com/api/user/cusAll/",
        {
          method: "GET",
          headers: {
            "x-auth-token": token,
          },
        }
      );
      console.log(res);

      const data = await res.json();
      console.log(data);
      if (!data.data) console.log("error", data.error);
      else {
        setCustomer(data.data);
      }
    };

    fetchData();
  }, []);
  return (
    <Home title={"CustomerDetails"}>
      {customer && (
        <div className="productDetails">
          {customer?.map((data) => {
            return (
              <>
                <div className="productDetailsDiv">
                  <b>Name:</b> {data.userName}
                  <br />
                  <b>City : </b>
                  {data.city}
                  <br />
                  <b>Phone : </b> {data.phone}
                  <br />
                  <b>Email :</b> {data.email}
                  <br />
                  
                </div>
              </>
            );
          })}
        </div>
      )}
    </Home>
  );
};
