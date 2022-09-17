import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const About = () => {
  return (
    <>
      <div className="header">
        <h1>
          TRANSFORMING THE LIVES <br />
          OF PEOPLE THROUGH WELLNESS
        </h1>
        {/* <img src="https://www.myvestige.com/images/company-banner.jpg">
          hello
        </img> */}
      </div>
      <div className="text-light bg-dark ">
        <h1 className=" text-center m-3 p-2">About Vestige</h1>
        <p className="text-center">
          Vestige Marketing Pvt. Ltd., which started its operations in the year
          2004, is now becoming a leading direct selling company dealing in
          world
          <br />
          class wellness products. Vestige is constantly growing at a phenomena
          rate every year. The growth rate in itself speaks volumes about the{" "}
          <br />
          quality of the products, the marketing plan and the management that
          has
          <br />
          been able to deliver such a rewarding and sustainable system.
        </p>
        <p className="text-center">
          Vestige is constantly expanding its product range to introduce
          innovative products every year, manufactured at state-of-the-art
          <br />
          manufacturing facilities, which are GMP and Halal certified. Vestige
          is an ISO 9001-2015 certified company and believes in world class
          service
          <br />
          levels to all its customers. With over 3000+ online and offline sales
          outlets pan India, multiple international offices and several
          <br />
          distributor centres, Vestige has been building a widespread network of
          distributors, which is constantly growing every year.
          <br />
        </p>
        <p className="text-center">
          Vestige believes in empowering its members with the opportunity to
          lead their lives on their own terms. With the motto of spreading
          Wellth, i.e.
          <br />
          spreading wealth through wellness, Vestige has continued to enrich the
          lives of everyone who is a part of the company and those who believe
          in
          <br />
          its products.
        </p>
        <p className="fs-4 text text-center">
          <b>VISION</b>
        </p>
        <p className="text-center">
          To help people live a life of economic independence on their own terms
        </p>
        <p className="text-center fs-4 ">
          <b>MISSION</b>
        </p>
        <p className="text-center">
          To grow to a global scale and become the benchmark in direct selling
        </p>
      </div>
    </>
  );
};
export default About;
