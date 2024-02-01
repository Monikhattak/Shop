import React from "react";
import "./NewCollection.css";
import new_collcetion from "../Assets/new_collections";
import Item from "../Item/Item";

const NewCollection = () => {
  return (
    <div className="new-collection">
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="collections">
        {new_collcetion.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default NewCollection;
