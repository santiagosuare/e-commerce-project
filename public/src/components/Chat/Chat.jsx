import { useEffect, useState } from "react";
import { Card, Container, Row, Col, Spinner } from "react-bootstrap";
import io from "socket.io-client";

const socket = io("http://localhost:8080");

const Chat = () => {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([
    {
      body: "Welcome to the chat",
      from: "System",
    },
  ]);

  const date = new Date();

  const url =
    "http://localhost:8080/api/login/infoUserLog?token=" +
    localStorage.getItem("token");

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("messageClient", message);
    const newMessage = {
      body: message,
      from: "Me",
    };
    setMessages([...messages, newMessage]);
    setMessage("");
  };

  useEffect(() => {
    const reciveMessage = (data) => {
      setMessage([...messages, data]);
    };

    socket.on("messageClient", reciveMessage);

    return () => {
      socket.off("messageClient", reciveMessage);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div>
          <br />
          <br />
          <br />
          <Container>
            <Row>
              <Col></Col>
              <Col xs={10}>
                <Card className="container d-flex justify-content-center aling-items-center h-180">
                  <Card.Header as="h5">Centro de Consultas</Card.Header>
                  <Card.Body>
                    <div>
                      <form onSubmit={handleSubmit}>
                        <input
                          type="text"
                          onChange={(e) => setMessage(e.target.value)}
                          value={message}
                        />
                        <button>send</button>
                      </form>

                      {messages.map((message, index) => (
                        <div key={index}>
                          <p className="parrafo">
                            <b>{user.data.email}</b>,{" "}
                            <b style={{ color: "blue" }}>
                              {date.toLocaleString()}
                            </b>{" "}
                            : {message.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

export default Chat;
