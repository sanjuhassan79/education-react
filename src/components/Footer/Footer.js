import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="px-5 bg-dark">
            <Container fluid >
  
  <Row>
    <Col sm>
        
<div className="py-5">
<Image src="http://irsfoundation.com/tf/templates/EducationPark/images/logo-2.png"  />
<div id="example-collapse-text" className="text-light py-3">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
</div>




    </Col>
    <Col sm>
<div className="py-5 px-4 d-print-grid">
<p className="fw-bolder fs-3 Uppercased text-white">USEFUL LINKS</p>
<NavLink
  to="/Home"
  className="pb-2 text-uppercase fs-6 fw-normal text-decoration-none text-warning border-warning border-bottom"
>
Home
</NavLink>
<br />
<br />
<NavLink
  to="/ABOUT"
  className="pb-2 text-uppercase fs-6 fw-normal text-decoration-none text-warning border-warning border-bottom"
>
ABOUT
</NavLink>
<br />
<br />
<NavLink
  to="/SERVICES"
  className="pb-2 text-uppercase fs-6 fw-normal text-decoration-none text-warning border-warning border-bottom"
>
SERVICES
</NavLink>
<br />
<br />
<NavLink
  to="/CONTACT"
  className="pb-2 text-uppercase fs-6 fw-normal text-decoration-none text-warning border-warning border-bottom"
>
CONTACT
</NavLink>
</div>


    </Col>
    <Col sm>
<div className="py-5 px-4">
<p className="fw-bolder fs-3 Uppercased text-white">CONTACT US</p>

<div>
<Image src="http://irsfoundation.com/tf/templates/EducationPark/images/footer.jpg" thumbnail  /> 
<p className="text-lowercase text-light pt-4"> Mail: yourmail@gmail.com</p>
<p className="text-lowercase text-light"> 678 Zoomtowr, Main road, Canada</p>

</div>

</div>


    </Col>
  </Row>
</Container>
        </div>
    );
};

export default Footer;