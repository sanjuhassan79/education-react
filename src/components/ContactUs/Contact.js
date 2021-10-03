import React from 'react';
import { Col, Container, Form, Image, Row,Button, Card } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <div style={{height:'700px'}}>
            <Container fluid>
                    <Row>
                        <Col> <Image className="w-100 h-50"src="https://img.freepik.com/free-photo/pink-blue-pushpins-showing-marking-location-map_23-2147837134.jpg?size=626&ext=jpg" rounded /></Col>
                    </Row>
                </Container>
        </div>


<div className="mb-5">
<Container>
  <Row>
    <Col sm={8}>
    <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="warning" type="submit">
    Submit
  </Button>
</Form>

    </Col>
    <Col sm={4}>
    <Card className="shadow" style={{ width: '18rem',textAlign: 'center' }}>
  <Card.Body >
  <i className="fas fa-phone-volume text-cente fs-2 text-warning py-2"></i>
    <Card.Title>+021 - 123 1012 1211</Card.Title>
    </Card.Body>
</Card>
    <Card className="shadow my-4" style={{ width: '18rem',textAlign: 'center' }}>
  <Card.Body >
  <i className="fas fa-envelope-open text-cente fs-2 text-warning py-2"></i>
    <Card.Title>yourmail@gamil.com</Card.Title>
    </Card.Body>
</Card>
    <Card className="shadow" style={{ width: '18rem',textAlign: 'center' }}>
  <Card.Body >
  <i className="fas fa-map-marker-alt text-cente fs-2 text-warning py-2"></i>
    <Card.Title>678 Zoomtowr, Main road, Canada</Card.Title>
    </Card.Body>
</Card>



    </Col>
  </Row>
  
</Container>
</div>




        </div>
    );
};

export default Contact;