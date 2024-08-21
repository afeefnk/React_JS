import React from "react";
import Product from "./Product";
import image1 from "./Product Images/image1.webp";
import image2 from "./Product Images/image2.jpg";
import image3 from "./Product Images/image3.webp";
import "./Product.css";

function ProductData() {
  const productData = [
    {
      image: image1,
      name: "Cyxus",
      type: "Non-Slip Fitness Leisure Running Sneakers",
      price: "$29",
    },
    {
      image: image2,
      name: "Vitike",
      type: "Latest Men Sneakers-Black",
      price: "$100",
    },
    {
      image: image3,
      name: "Aomei",
      type: "Men's Trend Casual Sports Shoe",
      price: "$40",
    },
  ];

  return (
    <div className="product-list">
      <h1>PRODUCTS</h1>
      <div className="products">
        {productData.map((item, index) => (
          <Product
            key={index}
            image={item.image}
            name={item.name}
            type={item.type}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductData;
