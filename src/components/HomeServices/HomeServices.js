import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const HomeServices = () => {

const [Services,setServices]=useState([])
useEffect(() => {
    fetch('./Services.JSON')
        .then(res => res.json())
        .then(data => {
            setServices(data);
            
        });
}, []);

console.log(Services);
    return (
        <div className="mb-5">
            <div className="text-center my-5 ">
            <h3 className="fs-1 text-uppercase pb-3">OUR <span className="fw-bold text-warning">SRRVICE</span></h3>
            <p>Education refers to the discipline that is concerned <br /> with methods of teaching  and learning in <br />schools or school-like br
             environments, </p>
            </div>
            <div>

            <Container>
            <Row xs={1} md={4} className="g-4">
  {

Services.slice(0,4).map(Services=>(
    
    <Col key={Services.id} className="text-center shadow ">
    <Card className="border-0" style={{height:'230px',padding:'10px'}}>
      <Card.Img variant="top" src={Services.image} style={{marginLeft:'119px',padding:'10px'}} rounded className="w-25" />
      <Card.Body>
        <Card.Title className="text-warning">{Services.name.toUpperCase()}</Card.Title>
        <Card.Text>{Services.description.slice(0,70)}
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
))

  }
</Row>
</Container>
         
            </div>
        </div>
    );
};

export default HomeServices;