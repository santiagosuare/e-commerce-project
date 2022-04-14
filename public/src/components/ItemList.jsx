import React from "react";
import Item from "./Item";
import { useState } from "react";

const ItemList = (Items) => {
  const [items, setItems] = useState(Items.items);
  return (
    <>
      <div className="container d-flex justify-content-center aling-items-center h-180">
        <div className="row">
          {items.map((item) => (
            <div className="col-md-3" key={item.id}>
              <Item producto={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemList;
