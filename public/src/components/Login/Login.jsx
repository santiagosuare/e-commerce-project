import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Login = () => {
  const [formData, setFormData] = useState({
    user: "",
    password: "",
  });

  const onChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const onSubmit = () => {
    console.log(formData);
  };

  return (
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
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicUser">
              <Form.Label>User</Form.Label>
              <Form.Control
                type="user"
                placeholder="Enter user"
                value={formData.user}
                onChange={onChange}
                name="user"
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
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" onClick={onSubmit}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
