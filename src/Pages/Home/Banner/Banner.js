import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import car1 from '../../../Images/Services/car-1.jpg'
import car2 from '../../../Images/Services/car-2.jpg'
import car3 from '../../../Images/Services/car-3.jpg'

const Banner = () => {
    return (
        <>
            <Carousel>
  <Carousel.Item>
    <img
      className=" banner d-block w-100"
      src={car1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" banner d-block w-100"
      src={car2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" banner d-block w-100"
      src={car3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;