import React from "react";
import "./Slider.css";
import image from "../../assets/pngwing.com.png";
import { BsArrowRight } from "react-icons/bs";

import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <Carousel variant="dark">
      <Carousel.Item key={1}>
        <div className="carousel-text">
          <h1 className="brandname">Brand</h1>
          <h4>Mens Collection</h4>
          <p>first carousel</p>
          <button className="carousel-button">
            Shop Now <BsArrowRight />
          </button>
        </div>
        <div className="carousel-image">
          <img className="d-block w-100" src={image} alt="First slide" />
        </div>
      </Carousel.Item>
      <Carousel.Item key={2}>
        <div className="carousel-text">
          <h1 className="brandname">Brand</h1>
          <h4>Mens Collection</h4>
          <p>Nullsecond carousel</p>
          <button className="carousel-button">
            Shop Now <BsArrowRight />
          </button>
        </div>
        <div className="carousel-image">
          <img className="d-block w-100" src={image} alt="First slide" />
        </div>
      </Carousel.Item>
      <Carousel.Item key={3}>
        <div className="carousel-text">
          <h1 className="brandname">Brand</h1>
          <h4>Mens Collection</h4>
          <p>third carousel</p>
          <button className="carousel-button">
            Shop Now <BsArrowRight />
          </button>
        </div>
        <div className="carousel-image">
          <img className="d-block w-100" src={image} alt="First slide" />
        </div>
      </Carousel.Item>
      <Carousel.Item key={4}>
        <div className="carousel-text">
          <h1 className="brandname">Brand</h1>
          <h4>Mens Collection</h4>
          <p>fourth carousel</p>
          <button className="carousel-button">
            Shop Now <BsArrowRight />
          </button>
        </div>
        <div className="carousel-image">
          <img className="d-block w-100" src={image} alt="First slide" />
        </div>
      </Carousel.Item>
      <Carousel.Item key={5}>
        <div className="carousel-text">
          <h1 className="brandname">Brand</h1>
          <h4>Mens Collection</h4>
          <p>fifth carousel</p>
          <button className="carousel-button">
            Shop Now <BsArrowRight />
          </button>
        </div>
        <div className="carousel-image">
          <img className="d-block w-100" src={image} alt="First slide" />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
