import React from "react";
import { Card, Button } from "react-bootstrap";

const Item = (producto) => {
  console.log(producto);
  return (
    <div>
      <br />
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={producto.producto.url} />
        <Card.Body>
          <Card.Title>{producto.producto.name}</Card.Title>
          <Card.Text>{producto.producto.descripcion}</Card.Text>
          <Card.Text>$ {producto.producto.precio}</Card.Text>
          <Button variant="primary">Detalles</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
