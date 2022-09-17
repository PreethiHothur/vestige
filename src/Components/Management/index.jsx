import React from "react";

const Management = () => {
  return (
    <>
      <h1 className="text-dark text-center">MANAGEMENT</h1>
      <p className="text-dark text-center fs-5 text p-5 ">
        The Management Team at Vestige has the combined experience of pioneering
        Direct Selling in the country. The professionals
        <br /> involved in establishing direct selling companies and making them
        successful have turned entrepreneurs to bring forth the best of
        <br /> Opportunity and Products through Vestige.
      </p>
      <div className="row m-5 p-5">
        <div className="col w-50 border border m-3">
          <img src="https://www.myvestige.com/images/company/staff01.png" />
          <h3>GAUTAM BALI</h3>
          <h6>MANAGING DIRECTOR</h6>
          <p className="w-75 fs-6 text ">
            Managing Director- After playing key roles in various direct selling
            companies as CEO and advisor for decades, Mr Bali laid the
            foundation stone of Vestige, which he is successfully leading as a
            helmsman with his unmatched domain expertise and business acumen.
            Under his visionary leadership Vestige is growing at a phenomenal
            rate every year and has become one of the top direct selling
            companies of India.
          </p>
        </div>
        <div className="col w-50 border border m-3">
          <img
            src="https://www.myvestige.com/images/company/staff02.png"
            className="text-center"
          />
          <h3>KANWAR BIR SINGH</h3>
          <h6>DIRECTOR IT</h6>
          <p className="w-75 fs-6 text  ">
            Director - Powered by a rich experience in managing IT solutions for
            the direct selling industry for years, Kanwar Bir Singh is
            instrumental in integrating tailored information technology
            solutions with the complex business processes and in bringing forth
            great transformations through digital empowerment.
          </p>
        </div>
        <div className="col w-50 border border m-3">
          <img src="https://www.myvestige.com/images/company/staff03.jpg" />
          <h3>DEEPAK SOOD</h3>
          <h6>DIRECTOR OPERATIONS</h6>
          <p className="w-75 fs-6 text ">
            Director - An outstanding sales, marketing, and operations
            professional, and a renowned motivator, Deepak Sood played key roles
            in various direct selling companies. Through his resilient
            leadership skills, he is continuously leading Vestige in bringing
            new practices on board and is training thousands of people every
            year through his specially crafted training programmes for direct
            selling professionals.
          </p>
        </div>
      </div>
    </>
  );
};
export default Management;
