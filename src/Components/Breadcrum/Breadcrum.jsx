import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="Breadcrum">
      <span>HOME</span> <img className="arrow-icon" src={arrow_icon} alt="" />
      <span>Shop</span> <img className="arrow-icon" src={arrow_icon} alt="" />
      <span>{product.category}</span>{" "}
      <img className="arrow-icon" src={arrow_icon} alt="" />
      <span>{product.name}</span>
    </div>
  );
};

export default Breadcrum;
