import React from "react";
import "./Slider.css";
import Button from "react-bootstrap/Button";
import { BsArrowRight } from "react-icons/bs";
const Slider = () => {
  return (
    <div>
      <div className="slider-">
        <div className="slider-style">
          <div className="container">
            <div className="slider-info">
              <h1 className="text-white">
                Education is the most powerful <br />
                <span> weapon which you can use to change the world</span>
              </h1>
              <p className="text-white my-3 fs-6">
                Education means emancipation. It means light and liberty. It
                means the <br /> uplifting of the soul of a man into the
                glorious light of truth, the light by <br /> which men can only
                be made free.
              </p>
              <Button variant="primary">
                View all <BsArrowRight />{" "}
              </Button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
