import React from "react";
import { Card, Button } from "react-bootstrap";

const Item = (producto) => {
  const onSubmit = () => {
    window.location.href = "/detalle/" + producto.producto._id;
  };

  return (
    <div>
      <br />
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={producto.producto.url} />
        <Card.Body>
          <Card.Title>{producto.producto.name}</Card.Title>
          <Card.Text>{producto.producto.description}</Card.Text>
          <Card.Text>$ {producto.producto.price}</Card.Text>
          <Button variant="primary" onClick={onSubmit}>
            Detalles
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
