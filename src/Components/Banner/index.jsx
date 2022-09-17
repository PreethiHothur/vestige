import React from "react";
import {
  Arrow90degLeft,
  ArrowDownCircleFill,
  ArrowLeftCircle,
  ArrowRightCircleFill,
  ArrowUpLeftCircle,
} from "react-bootstrap-icons";
import "./index.css";
const Banner = () => {
  return (
    <>
      <div className="row">
        <div className="col-6 text-light">
          <img
            src="https://www.myvestige.com/images/001.jpg"
            className="w-100 m-2 bw"
          />
          <h2 className="H1">MONTHLY SCHEMES</h2>
          <p className="p1">
            click here to know the latest monthly schemes and special offers
          </p>
          <a href="#">
            <ArrowRightCircleFill className="icon text-primary" />
          </a>
        </div>
        <div className="col-6 text-light">
          <img
            src="https://www.myvestige.com/images/004.jpg"
            className="w-100 m-2 bw"
          />
          <h2 className="H2">WHAT'S NEW</h2>
          <p className="p2">
            keep yourself updated with all the latest happening in vestige{" "}
          </p>
          <a href="#">
            <ArrowRightCircleFill className="icon text-primary " />
          </a>
        </div>
        <div className="col-6 text-light">
          <img
            src="https://www.myvestige.com/images/003.jpg"
            className="w-100 m-2 bw"
          />
          <h2 className="H3">VESTIGE LEADERSHIP SERIES</h2>
          <p className="p3">
            To those who know the way ,to show the way go the way
          </p>
          <a href="#">
            <ArrowRightCircleFill className="icon text-primary " />
          </a>
        </div>
        <div className="col-6 text-light">
          <img
            src="https://www.myvestige.com/images/002.jpg"
            className="w-100 m-2 bw"
          />
          <h2 className="H4">CAR ACHIEVERS</h2>
          <p className="p4">
            meet the vestige dream Achievers who have purchased their dream cars
          </p>
          <a href="#">
            <ArrowRightCircleFill className="icon text-primary " />
          </a>
        </div>
      </div>
    </>
  );
};
export default Banner;
