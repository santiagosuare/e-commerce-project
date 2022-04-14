import React from "react";
import { Card, Button } from "react-bootstrap";

const Item = (producto) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={producto.producto.foto} />
        <Card.Body>
          <Card.Title>{producto.producto.nombre}</Card.Title>
          <Card.Text>{producto.producto.descripcion}</Card.Text>
          <Button variant="primary">Detalles</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
