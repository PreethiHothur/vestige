import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light  fs-5 text  ">
        {/* <img src="https://www.myvestige.com/images/Sharp-Water-Purifier-Notice-Poster-web-banner.jpg" /> */}
        <div class="container-fluid  ">
          <button class="navbar-toggler" type="button">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse ms-5"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav gap-5 d-flex justify-content-center align-items-center">
              <li class="nav-item">
                <Link to="/home">HOME</Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  COMPANY
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/about">
                      <a class="dropdown-item" href="#">
                        ABOUT VESTIGE
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/management">
                      <a class="dropdown-item" href="#">
                        MANAGEMENT
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      BUSINESS OPPORTUNITY
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      SUCESS STORIES
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                {/* <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                > */}
                <Link to="/products">PRODUCTS</Link>
                {/* </a> */}

                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      HEALTH SUPPLEMENTS
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      AYURVEDA
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      VESTIGE ESSENTIALS
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      AIR PURIFIER
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      WATER PURIFIER
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      HEALTH FOOD
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      HOME CARE
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      WOMEN HYGINE
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      ORAL CARE
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      NATURAL PERSONAL CARE
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                {/* <a class="nav-link active" aria-current="page" href="#"> */}
                <Link to="/brands"> BRANDS</Link>
                {/* </a> */}
              </li>
              <li class="nav-item">
                {/* <a class="nav-link active" aria-current="page" href="#"> */}
                <Link to="/news"> NEWS</Link>
                {/* </a> */}
              </li>
              <li class="nav-item">
                <Link
                  to="/gallery"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  GALLERY
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SCHEDULE
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      ONLINE TRAINING SCHEDULE
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      TRAINING REQUEST
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      CNT EVENT SCHEDULE
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      VESTIGE INITIATION
                      <br />
                      PROGRAMME(VIP)
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      VESTIGE LEADERSHIP CONCLAVE(VLC)
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      MEET THE MILLIONAIRE(MTM)
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      VESTIGE AWARD FUNCTION
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      AGRI TRAINING
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      SPECIAL TRAINING
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      ANNIVERSARY EVENT
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <Link to="/branch">BRANCHES</Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      VESTIGE BRANCH
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CAREERS
                </a>
                <ul
                  class="dropdown-menu w-25 m-3"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      WORK CULTURE
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      VESTIGE VALUES
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      COMPITATIVE <br />
                      COMPENSATION
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      FUN @VESTIGE
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      VESTIGE HEART TO HEART
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      EMPLOYEE BENEFITS PREPPOSITIONS
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      CURRENT OPENINGS
                    </a>
                  </li>
                </ul>
              </li>

              <Link
                to="/login"
                className=" navbar-toggle text-dark  text-decoration-none"
              >
                LogIn
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <div className="product">
        {/* <Link to='./products'>PRODUCTS</Link> */}
      </div>
    </>
  );
};
export default Nav;
