import { useState } from "react";
import {
  Form,
  Row,
  Col,
  Button,
  Container,
  Card,
  Image,
} from "react-bootstrap";
import axios from "axios";

const Register = () => {
  const [validated, setValidate] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    age: "",
    address: "",
    phone: "",
    imageUrl: "",
  });

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidate(true);
  };

  const onChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const onDisable = () => {
    if (
      formData.email === "" ||
      formData.password === "" ||
      formData.name === "" ||
      formData.age === "" ||
      formData.address === "" ||
      formData.phone === ""
    ) {
      return setDisabled(true);
    }
    return setDisabled(false);
  };

  const onClick = () => {
    console.log(formData);

    const data = {
      email: formData.email,
      password: formData.password,
      name: formData.name,
      address: formData.address,
      age: formData.age,
      phone: formData.phone,
      imageUrl: formData.imageUrl,
    };
    console.log(data);

    axios
      .post("http://localhost:8080/api/user", data)
      .then((res) => {
        console.log(res);
        alert("Register Success");
        window.location.href = "/Login";
      })
      .catch((err) => {
        console.log(err);
        alert("Register Failed");
      });
  };

  const onRedirect = () => {
    window.location.href = "/Login";
  };
  return (
    <div>
      <Container>
        <br />
        <br />
        <br />
        <h2>Register</h2>
        <Row className="justify-content-md-center">
          <Card>
            <br />
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={onChange}
                    name="email"
                  />
                  <Form.Control.Feedback> Validado! </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={onChange}
                    name="password"
                  />
                  <Form.Control.Feedback> Validado! </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="nameUser">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    required
                    placeholder="User Name"
                    value={formData.name}
                    onChange={onChange}
                    name="name"
                  />
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="formGridAge">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="Age"
                    value={formData.age}
                    onChange={onChange}
                    name="age"
                  />
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="formGridAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    required
                    placeholder="Apartment, studio, or floor"
                    value={formData.address}
                    onChange={onChange}
                    name="address"
                  />
                </Form.Group>
              </Row>

              <Row className="mb-">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Country</Form.Label>
                  <Form.Control required />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Cordoba</option>
                    <option>Buenos Aires</option>
                    <option>Rosario</option>
                    <option>San Juan</option>
                    <option>San Luis</option>
                    <option>San Rafael</option>
                    <option>Santa Fe</option>
                    <option>Tucuman</option>
                    <option>Ushuaia</option>
                    <option>Viedma</option>
                    <option>Villa Maria</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control required type="number" />
                </Form.Group>
              </Row>
              <br />
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formePhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={onChange}
                    name="phone"
                  />
                </Form.Group>
              </Row>
              <br />
              <Card className="mb-3">
                <br />
                <Row className="mb-3">
                  <Col>
                    <Image
                      src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                      width="100"
                      height="100"
                      roundedCircle
                    />
                    <h3>1</h3>
                  </Col>
                  <Col>
                    <Image
                      src="https://cdn-icons.flaticon.com/png/512/4140/premium/4140061.png?token=exp=1658717515~hmac=39565d4633466e56f8144222ac083f2f"
                      width="100"
                      height="100"
                      spellCheck="false"
                      roundedCircle
                    />
                    <h3>2</h3>
                  </Col>
                  <Col>
                    <Image
                      src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                      width="100"
                      height="100"
                      roundedCircle
                    />
                    <h3>3</h3>
                  </Col>
                  <Col>
                    <Image
                      src="https://cdn-icons-png.flaticon.com/512/147/147136.png"
                      width="100"
                      height="100"
                      roundedCircle
                    />
                    <h3>4</h3>
                  </Col>

                  <Row>
                    <Col></Col>
                    <Col>
                      <br />
                      <Form.Select
                        aria-label="Default select example"
                        value={formData.imageUrl}
                        onChange={onChange}
                        name="imageUrl"
                      >
                        <option>Imagen Seleccionada</option>
                        <option value="https://cdn-icons-png.flaticon.com/512/147/147144.png">
                          1
                        </option>
                        <option value="https://cdn-icons.flaticon.com/png/512/4140/premium/4140061.png?token=exp=1658717515~hmac=39565d4633466e56f8144222ac083f2f">
                          2
                        </option>
                        <option value="https://cdn-icons-png.flaticon.com/512/3135/3135715.png">
                          3
                        </option>
                        <option value="https://cdn-icons-png.flaticon.com/512/147/147136.png">
                          4
                        </option>
                      </Form.Select>
                    </Col>
                    <Col></Col>
                  </Row>
                </Row>
              </Card>
              <Row className="mb-3">
                <Col></Col>
                <Col>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Check
                      type="checkbox"
                      label="Aceptar Terminos y Condiciones"
                      onClick={onDisable}
                    />
                  </Form.Group>
                </Col>
                <Col></Col>
              </Row>

              <br />
              <Row>
                <Col>
                  <Button variant="danger" onClick={onRedirect}>
                    Cancelar
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="primary"
                    onClick={onClick}
                    disabled={disabled}
                  >
                    Registrar
                  </Button>
                </Col>
              </Row>
              <br />
              <br />
            </Form>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
