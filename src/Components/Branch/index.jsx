import React from "react";

const Branch = () => {
  return (
    <>
      <h1 className="text-center m-5">VESTIGE BRANCHES</h1>
      <p className="text-center">
        Check out our branch offices in all over the country
      </p>
      <label>Select Country</label>
      <select name="countries" id="countries" className="p-2 m-2 w-25">
        <option value="india">INDIA</option>
        <option value="U.A.E">U.A.E</option>
        <option value="KSA">Kingdom of saudi arabia</option>
        <option value="thailand">thailand</option>
        <option value="Ghana">Ghana</option>
      </select>
      <label>Select State</label>
      <select name="countries" id="countries" className="p-2 m-2 w-25">
        <option value="AP">Andhra Pradesh</option>
        <option value="Assam">Assam</option>
        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
        <option value="Bihar">Bihar</option>
        <option value="Chandigad">Chandigad</option>
        <option value="goa">Goa</option>
        <option value="Delhi">Delhi</option>
        <option value="Hariyana">Hariyana</option>
        <option value="Karnataka">Karnataka</option>
        <option value="J&K">JAmmu & Kashmir</option>

        <option value="Tamilnadu">Tamilnadu</option>
      </select>
      <label>Select Pin code</label>

      <select name="pin" id="pin" className="p-2 m-2 w-25">
        <option value="num">403285</option>
        <option value="num">842136</option>
        <option value="num">58424</option>
        <option value="num">560006</option>
        <option value="num">321045</option>
        <option value="num">402560</option>
        <option value="num">540324</option>
        <option value="num">560008</option>
        <option value="num">563000</option>
        <option value="num">403716</option>

        <option value="num">403707</option>
      </select>
      <hr className="m-5 p-5" />
      <center>
        <button className="bg-primary text-light p-3 m-2 ">SEARCH</button>
      </center>
    </>
  );
};
export default Branch;
