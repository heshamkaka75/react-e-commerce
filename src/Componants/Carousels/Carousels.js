import Carousel from 'react-bootstrap/Carousel';
import hap from '../../assets/WhatMakesYouHappy_v1_0.webp'
import piz from '../../assets/ppp.jpg'
import './Carousels.css'

function Carousels() {
  return (
    <section className='car'>
    <Carousel>
      <Carousel.Item>
        <img
          src={hap}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={piz}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={hap}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
  );
}

export default Carousels;