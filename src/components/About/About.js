import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import HomeServices from '../HomeServices/HomeServices';

const About = () => {
    return (
        <div className="my-5">
           <Container>
  <Row>
    <Col> <Card>
        <Card.Body>
        <h3 className="fs-1 text-uppercase">WE ARE <span className="fw-bold text-warning">VERY HELPFUL</span></h3>
          
          <Card.Text>
          as school and classes, and many or all adults act as teachers. As societies grow more complex, however, the quantity of knowledge to be passed on from one generation to the next becomes more than any one person can know, and, hence, there must evolve more selective and efficient means of cultural transmission. The outcome is formal education—the school and the specialist called the.
          </Card.Text>
        </Card.Body>
      </Card></Col>
    <Col> <Card className="shadow" style={{ width: '18rem',textAlign: 'center' }}>
  <Card.Body >
  <i className="fas fa-phone-volume text-cente fs-2 text-warning py-2"></i>
    <Card.Title>+021 - 123 1012 1211</Card.Title>
    </Card.Body>
</Card></Col>
  </Row>
 
</Container>

<HomeServices></HomeServices>
        </div>
    );
};

export default About;