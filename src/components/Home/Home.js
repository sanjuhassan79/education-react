import React from 'react';
import { Carousel } from 'react-bootstrap';

import HomeServices from '../HomeServices/HomeServices';




const Home = () => {
    return (
        <div>
           <div>
           <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://www.corporatevision-news.com/wp-content/uploads/2020/07/online-learning-1.jpg"
      alt="First slide"
    />
    <Carousel.Caption style={{top: '50%'}}>
        
        <p className="fs-4 lh-sm text-uppercase">LEARN AND BUILD YOUR LIFE</p>
      <h3 className="fs-1 text-uppercase">GAIN KNOWLEDGE <span className="fw-bold text-warning">FROM EDUCATION PARK</span></h3>
     
        
    
    </Carousel.Caption>
  </Carousel.Item>
 
</Carousel>
           </div>
<div>
<HomeServices></HomeServices>
    
</div>
        </div>



    );
};

export default Home;