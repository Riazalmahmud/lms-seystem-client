import React from "react";
import image from "../../images/Slider1.png";
import Button from "react-bootstrap/Button";
import { BiRightArrowCircle } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import "./About.css";
const About = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row mt-5">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="about-info">
              <h1 className="blue-normal">
                Welcome to the Online Learning Center
              </h1>
              <p className="blue-normal">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, simply
                free text by injected humour.
              </p>
              <ul>
                <li>
                  {" "}
                  <BiRightArrowCircle /> Get unlimited access to 66000+ of our
                  top courses
                </li>
                <li>
                  {" "}
                  <BiRightArrowCircle /> Explore a variety of fresh educational
                  topics
                </li>
                <li>
                  {" "}
                  <BiRightArrowCircle /> Find the best qualitfied teacher for
                  you
                </li>
                <li>
                  {" "}
                  <BiRightArrowCircle /> Transform access to education
                </li>
              </ul>
              <Button variant="primary" className="my-5 px-5 py-3">
                View all <BsArrowRight />{" "}
              </Button>{" "}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
