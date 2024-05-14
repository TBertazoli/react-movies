import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function LoginPage({ setUser }) {
  let newUser = "";
  const handleChange = (e) => {
    newUser = e.target.value;
  };

  const handleSubmit = (e) => {
    setUser(newUser);
  };

  return (
    <div
      style={{
        backgroundImage: "url(images/Designer.jpeg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Row className="justify-content-md-center">
          <Col md={4}>
            <h3>Please enter your desired username bellow</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" onChange={handleChange} />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-5">
                Sign In
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
