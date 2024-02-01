import React from "react";
import "./Newslatter.css";

const Newslatter = () => {
  return (
    <div className="newslatter">
      <h1> Get Exclusive Offer on Your Email</h1>
      <p>Subscribe to our newlatter and stay update</p>
      <div>
        <input type="Email" placeholder="Your email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newslatter;
