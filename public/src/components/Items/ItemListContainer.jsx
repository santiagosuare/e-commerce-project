import React from "react";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/productos", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json().then((data) => {
          setItems(data.productos);
          setLoading(false);
        });
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [0]);

  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        // console.log(items)
        <ItemList items={items} />
      )}
    </div>
  );
}

export default ItemListContainer;
