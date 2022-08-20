import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handlerAdd = () => {
    if (count <= stock - 1) setCount(count + 1);
  };

  const handlerRm = () => {
    if (count > initial) setCount(count - 1);
  };

  const handlerOnAdd = () => {
    onAdd(count);
    setCount(initial);
  };

  return (
    <div className="w-50">
      <p></p>
      <button className="btn btn-primary" onClick={handlerRm}>
        -
      </button>
      <label>
        {" "}
        &nbsp;<b> {count} </b>&nbsp;
      </label>
      <button className="btn btn-primary" onClick={handlerAdd}>
        +
      </button>
      <p></p>
      <button
        className="btn btn-outline-primary btn-block"
        onClick={handlerOnAdd}
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ItemCount;
