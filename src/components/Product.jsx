import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Product = () => {
  const params = useParams();
  // console.log(params);
  const navigate = useNavigate();
  console.log(navigate);

  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 3000);
  }, [navigate]);
  return <h1>I am Product #{params.id}</h1>;
};

export default Product;
