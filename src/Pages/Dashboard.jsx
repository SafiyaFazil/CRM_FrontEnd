import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home.jsx";
import AdminHome from "./AdminHome.jsx";

export const Dashboard = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login", { replace: true });
    }
    let token = localStorage.getItem("token");
    const fetchData = async () => {
      console.log(token);
      const res = await fetch(
        "https://crm-backend-code-1.onrender.com/api/admin/all/",
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
        setProduct(data.data);
      }
    };

    fetchData();
  }, []);
  return (
    <AdminHome title={"Dashboard"}>
      {product && (
        <div className="productDetails">
          {product?.map((data) => {
            return (
              <>
                <div className="productDetailsDiv">
                  <b>Product Name:</b> {data.productName}
                  <br />
                  <b>Product Code : </b>
                  {data.productCode}
                  <br />
                  <b>Quantity : </b> {data.quantity}
                  <br />
                  <b>Purchase Date :</b> {data.date}
                  <br />
                  <b>Comments : </b>
                  {data.comments}
                  <br />
                  <b>Purchased By :</b> {data.user.userName}
                </div>
              </>
            );
          })}
        </div>
      )}
    </AdminHome>
  );
};
