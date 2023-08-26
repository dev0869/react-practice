import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();

  // to get item we use data=location.state
  // but if we want data wwill not reload then this is code

  const [SingleProductData, setSingleProductData] = useState(
    location.state || localStorage.getItem("SingleProductData")
  );

  useEffect(() => {
    if (SingleProductData) {
      localStorage.setItem(
        "SingleProductData",
        JSON.stringify(SingleProductData)
      );
    }
  }, [SingleProductData]);

  return (
    <div>
      {SingleProductData ? (
        <>
          <h2>{SingleProductData.name}</h2>
          <p>Price: {SingleProductData.price}</p>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ProductDetail;
