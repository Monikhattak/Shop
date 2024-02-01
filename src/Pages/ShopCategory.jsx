import React, { useContext } from "react";
import "./Css/Shopcatagory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-catagory">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcatagory-indaxsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcatagory-sort">
          Sort By <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcatagory-products">
        {all_product.map((item, i) => {
          try {
            if (props.category === item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_prices={item.new_price}
                  old_prices={item.old_price}
                />
              );
            } else {
              return null;
            }
          } catch (error) {
            console.error("Error rendering item:", error);
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
