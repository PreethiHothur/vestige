import React from "react";
const Gallery = () => {
  return (
    <>
      <div className="row ">
        <div className="col m-5">
          <img
            src="https://www.myvestige.com/images/events-banner.png"
            className="w-100"
          />
        </div>
        <div>
          <h3 className="bg-dark text-light text-center p-4">
            REWARDS AND RECOGNITION
          </h3>
        </div>
      </div>

      <div className="row m-5 p-5">
        <div className="main  p-4 m-3">
          <div className="main ">
            <div className="front ">
              <img
                src="https://www.myvestige.com/images/events/vaf/kolmain.png"
                className="image"
              />
              <div className="text-dark ">
                <h4 className="m-2">VESTIGE AWARD FUNCTION</h4>
                <button className="p-3 m-3  ">VIEW ALBUM</button>
              </div>
            </div>
          </div>
        </div>
        <div className="main  p-4 m-3">
          <div className="main">
            <div className="front">
              <img
                src="https://www.myvestige.com/images/events/foreigntrip/ftmain.png"
                className="image"
              />
              <div className="text-dark ">
                <h4 className="m-2">FOREIGN TRIPS</h4>
                <button className="p-3 m-3  ">VIEW ALBUM</button>
              </div>
            </div>
          </div>
        </div>
        <div className="main  p-4 m-3">
          <div className="main">
            <div className="front">
              <img
                src="https://www.myvestige.com/images/events/vlc/vlcmain.png"
                className="image"
              />
              <div className="text-dark ">
                <h4 className="m-2">VESTIGE LEADERSHIP CONCLAVE</h4>
                <button className="p-3 m-3  ">VIEW ALBUM</button>
              </div>
            </div>
          </div>
        </div>
        <div className="main  p-4 m-3">
          <div className="main">
            <div className="front">
              <img
                src="https://www.myvestige.com/images/events/gorgeousday/gdaymain.png"
                className="image"
              />
              <div className="text-dark ">
                <h4 className="m-2">BE GORGEOUS DAY</h4>
                <button className="p-3 m-3  ">VIEW ALBUM</button>
              </div>
            </div>
          </div>
        </div>
        <div className="main  p-4 m-3">
          <div className="main">
            <div className="front">
              <img
                src="https://www.myvestige.com/images/events/van/VijayWadaMain.png"
                className="image"
              />
              <div className="text-dark ">
                <h4 className="m-2">VESTIGE ACHIEVERS NIGHT</h4>
                <button className="p-3 m-3">VIEW ALBUM</button>
              </div>
            </div>
          </div>
        </div>
        <div className="main  p-4 m-3">
          <div className="main">
            <div className="front">
              <img
                src="https://www.myvestige.com/images/events/2017/Blood-Donation/bd1.jpg"
                className="image"
              />
              <div className="text-dark ">
                <h4 className="m-2">BLOOD DONATION</h4>
                <button className="p-3 m-3  ">VIEW ALBUM</button>
              </div>
            </div>
            {/* transform scale 1.5 ,a tag ul clsname */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;
