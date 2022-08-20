import React from "react";
import ItemCount from "./ItemCount";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const [inputType, setInputType] = useState(true);

  //   const { addItem } = useCartContext();

  const onAdd = (cant) => {
    setInputType(false);
    // addItem({ item, cant });
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <Card style={{ width: "18rem" }}>
          <Image src={item.url} roundedCircle />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Title>$ {item.price}</Card.Title>
            <br />
            <Card.Title>STOCK: {item.stock}</Card.Title>
            <div className="d-flex justify-content-center">
              {inputType ? (
                <ItemCount stock={12} initial={1} onAdd={onAdd} />
              ) : (
                <Link to={"/Cart/" + item._id}>
                  <button className="btn btn-outline-primary btn-block">
                    Terminar Compra
                  </button>
                </Link>
              )}
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ItemDetail;
