import React from "react";
import "./index.css";
const Form = () => {
  return (
    <>
      <form className=" form d-block">
        <br />
        <div className="fs-4 text text-light m-3 p-2">LOGIN</div>

        <br />
        <label className="fs-4 text text-light m-3 p-2">DISTRIBUTER ID</label>
        <br />
        <input
          type="text"
          name="text"
          placeholder="Enter your Distributer id"
          className="inp"
          required
        />
        <br />
        <label className="fs-4 text text-light m-3 p-2">PASSWORD</label>
        <br />
        <input
          type="text"
          name="password"
          placeholder="Enter your password"
          className="inp"
          required
        />
        <br />
        <button className="btn fs-5 text text-light m-3 p-2 border">GO</button>
        <br />

        <a href="#" className="fs-4 text text-light m-5 p-3">
          FORGOT PASSWORD
        </a>
        <br />
      </form>
    </>
  );
};
export default Form;
