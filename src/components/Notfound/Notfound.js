import React from 'react';
import { Col, Container, Image, Row,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className="mb-5">
            <Container>
  <Row>
    <Col>
    
    <Image src="https://cdn.dribbble.com/users/1408464/screenshots/6377404/404_illustration_4x.png" rounded />
    
    </Col>
    
  </Row>
  <Row>
    <Col sm> <h3 className="fs-1 text-uppercase">PAGE NOT <span className="fw-bold text-warning">FOUND</span></h3></Col>
    <Col sm>


<Button variant="warning">

<NavLink
  to="/Home"
  className="pb-2 text-uppercase fs-4 fw-normal text-decoration-none .text-white border-warning border-bottom"
>
please return the home page
</NavLink>



</Button>
    </Col>
   
  </Row>
</Container>
        </div>
    );
};

export default Notfound;