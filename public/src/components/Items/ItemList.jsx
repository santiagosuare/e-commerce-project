import React from "react";
import Item from "./Item";

const ItemList = (Items) => {
  return (
    <>
      <div className="container d-flex justify-content-center aling-items-center h-180">
        <div className="row">
          {Items.items.map((item) => (
            <div className="col-md-3" key={item._id}>
              <Item producto={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemList;
