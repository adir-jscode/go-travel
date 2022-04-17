import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.worldtravelguide.net/wp-content/uploads/2017/03/shu-UK-England-London-TowerBridge_295742825-1440x823.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
              <h1>City Guides</h1>
              <p>Quirky. Inspiring. Engaging. Informative.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.worldtravelguide.net/wp-content/uploads/2018/11/shu-Croatia-Dubrovnik-OldTown-508809049-1440x823.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1>City Guides</h1>
              <p>Quirky. Inspiring. Engaging. Informative.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.worldtravelguide.net/wp-content/uploads/2017/01/shu-Vietnam-Culture-457946020-1440x823.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1>City Guides</h1>
              <p>Quirky. Inspiring. Engaging. Informative.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
       
    );
};

export default Banner;