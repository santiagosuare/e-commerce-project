import React from "react";
import Item from "./Item";

const ItemList = (Items) => {
  return (
    <div className="row">
      {Items.items.map((item) => (
        <Item key={item._id} producto={item} />
      ))}
    </div>
  );
};

export default ItemList;
