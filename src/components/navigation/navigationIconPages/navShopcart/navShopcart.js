import React from "react";
import { NavLink } from "react-router-dom";
import "./navShopcart.scss";

import Sprite from "../../../../assets/images/sprite.svg";

const navShopcart = props => {
  return (
    <div className="navShopcart">
      <div className="navShopcart__detail">
        <div className="navShopcart__detail--head">
          <svg onClick={props.show}>
            <use xlinkHref={`${Sprite}#icon-cross`} />
          </svg>
          <h3>Shopping Cart</h3>
          <svg>
            <use xlinkHref={`${Sprite}#icon-circle`} />
          </svg>
        </div>

        <div className="navShopcart__detail--content">
          <h2>Your Shopping Bag is Empty</h2>
          <button>
            <NavLink to="/shop">Go to The Shop</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default navShopcart;
