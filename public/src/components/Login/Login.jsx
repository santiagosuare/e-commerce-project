import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [disabled, setDisabled] = useState(true);

  const onChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = () => {
    console.log(formData);
    const data = {
      email: formData.email,
      password: formData.password,
    };

    const url =
      "http://localhost:8080/api/user/login?email=" +
      data.email +
      "&password=" +
      data.password;

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          // localStorage.setItem("token", data.token);
          window.location.href = "/home";
        } else {
          alert("Invalid email or password");
        }
      })
      .catch((err) => console.log(err));
  };

  const onDisable = () => {
    if (formData.user === "" || formData.password === "") {
      return setDisabled(true);
    }
    return setDisabled(false);
  };

  const onRedirect = () => {
    window.location.href = "/Register";
  };

  return (
    <div>
      <Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>Login</h2>
        <Row className="justify-content-md-center">
          <Card style={{ width: "60rem" }}>
            <Col md={{ span: 4, offset: 4 }}>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicUser">
                  <br />
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={onChange}
                    name="email"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your user with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={onChange}
                    name="password"
                  />
                </Form.Group>
                <Row>
                  <Col></Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Validar"
                        onClick={onDisable}
                      />
                    </Form.Group>
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col>
                    <Button variant="primary" onClick={onRedirect}>
                      Registrar
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      variant="primary"
                      onClick={onSubmit}
                      disabled={disabled}
                    >
                      Login
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
            <br />
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
