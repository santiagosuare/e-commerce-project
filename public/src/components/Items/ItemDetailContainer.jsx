import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { Spinner } from "react-bootstrap";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/productos/" + id, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json().then((data) => {
          setItem(data.producto);
        });
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  console.log(item);

  return (
    <>
      <br />
      <br />
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <ItemDetail item={item} />
      )}
    </>
  );
};

export default ItemDetailContainer;
