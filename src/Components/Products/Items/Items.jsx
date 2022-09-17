import React from "react";
import "./item.css";
import { CartFill, Icon } from "react-bootstrap-icons";
const Items = () => {
  return (
    <>
      <div class="container">
        <div class="row g-1">
          <div class="col-md-3">
            <div class="card p-3">
              <div class="text-center">
                <img src="https://i.imgur.com/w2rCsEw.jpg" width="200" />
              </div>

              <div class="product-details">
                <span class="font-weight-bold d-block">$ 7.00</span>
                <span>Red Redish</span>

                <div class="buttons d-flex flex-row">
                  <div class="cart">
                    <CartFill />
                    {/* <i class="fa fa-shopping-cart"></i> */}
                  </div>
                  <button class="btn btn-success cart-button btn-block">
                    <span class="dot">{}</span>Add to cart
                  </button>
                </div>

                <div class="weight">
                  <small>1 piece 2.5kg</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Items;
