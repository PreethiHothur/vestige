import React from "react";
const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://www.myvestige.com/images/Ghana-Lucky-Draw-winners-banner-web16062022.jpg"
              class="d-block w-100"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.myvestige.com/images/Special-Healthcare-Discount-Offer-List-Web-banner16-06-2022.jpg"
              class="d-block w-100"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.myvestige.com/images/Vestige-18th-Anniversary-Thankyou-Banner-Website04062022.jpg"
              class="d-block w-100"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.myvestige.com/images/2-Crore-Pool-Web-banner02-06-2022.jpg"
              class="d-block w-100"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.myvestige.com/images/Dhamaka-Lucky-Draw-Webanner09042022.jpg"
              class="d-block w-100"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
export default Carousel;
