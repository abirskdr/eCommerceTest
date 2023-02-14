import React from "react";
import "./SmallSlider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SmallSlider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      className="mt-5"
      centerMode={true}
      infinite={true}
    >
      <div className="card">
        <div className="card-img">
          <img
            className="d-block w-100"
            src="https://media.wired.com/photos/62f597aa6896acbb4eb3394f/3:2/w_1280%2Cc_limit/Hoka-Kawana-SOURCE-Hoka-Gear.jpg"
            alt="First slide"
          />
        </div>
        <div className="card-text">
          <h5 className="brand-name">Brand</h5>
          <p>Shoe name</p>
          <h4 className="shoe-price">₹ Price</h4>
        </div>
      </div>
      <div className="card">
        <div className="card-img">
          <img
            className="d-block w-100"
            src="https://media.wired.com/photos/62f597aa6896acbb4eb3394f/3:2/w_1280%2Cc_limit/Hoka-Kawana-SOURCE-Hoka-Gear.jpg"
            alt="First slide"
          />
        </div>
        <div className="card-text">
          <h5 className="brand-name">Brand</h5>
          <p>Shoe name</p>
          <h4 className="shoe-price">₹ Price</h4>
        </div>
      </div>
      <div className="card">
        <div className="card-img">
          <img
            className="d-block w-100"
            src="https://media.wired.com/photos/62f597aa6896acbb4eb3394f/3:2/w_1280%2Cc_limit/Hoka-Kawana-SOURCE-Hoka-Gear.jpg"
            alt="First slide"
          />
        </div>
        <div className="card-text">
          <h5 className="brand-name">Brand</h5>
          <p>Shoe name</p>
          <h4 className="shoe-price">₹ Price</h4>
        </div>
      </div>
      <div className="card">
        <div className="card-img">
          <img
            className="d-block w-100"
            src="https://media.wired.com/photos/62f597aa6896acbb4eb3394f/3:2/w_1280%2Cc_limit/Hoka-Kawana-SOURCE-Hoka-Gear.jpg"
            alt="First slide"
          />
        </div>
        <div className="card-text">
          <h5 className="brand-name">Brand</h5>
          <p>Shoe name</p>
          <h4 className="shoe-price">₹ Price</h4>
        </div>
      </div>
      <div className="card">
        <div className="card-img">
          <img
            className="d-block w-100"
            src="https://media.wired.com/photos/62f597aa6896acbb4eb3394f/3:2/w_1280%2Cc_limit/Hoka-Kawana-SOURCE-Hoka-Gear.jpg"
            alt="First slide"
          />
        </div>
        <div className="card-text">
          <h5 className="brand-name">Brand</h5>
          <p>Shoe name</p>
          <h4 className="shoe-price">₹ Price</h4>
        </div>
      </div>
    </Carousel>
  );
};

export default SmallSlider;
