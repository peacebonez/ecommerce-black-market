import React from "react";
import { FaTimes } from "react-icons/fa";
import CartCard from "./CartCard";
import { formatNumber } from "../utils/utility-funcs";

export default function Cart({
  cart,
  cartOpen,
  handleCloseCart,
  handleRemoveFromCart,
  handleDecQuantity,
  handleIncQuantity,
}) {
  const uniqueCart = [...new Set(cart)];

  const handleSubTotal = () => {
    return cart.reduce((acc, nuke) => acc + nuke.price, 0);
  };

  let processing = cart.length * 5;
  let subtotal = handleSubTotal();
  return (
    <div className={`cart-container ${cartOpen ? "" : "cart-hidden"}`}>
      <div id="cart-header">
        <button id="cart-x" onClick={handleCloseCart}>
          <FaTimes />
        </button>
        <h2>Cart</h2>
      </div>
      {cart.length ? (
        <>
          {cart.map((nuke) => (
            <CartCard
              nuke={nuke}
              key={nuke.id}
              handleRemoveFromCart={handleRemoveFromCart}
              handleDecQuantity={handleDecQuantity}
              handleIncQuantity={handleIncQuantity}
            />
          ))}
          <div className="cart-form">
            <ul>
              <li>
                <div className="form-line">
                  <p>Sub Total</p>
                  <p>${formatNumber(subtotal)}</p>
                </div>
              </li>
              <li>
                <div className="form-line">
                  <p>Processing</p>
                  <p>${processing}</p>
                </div>
              </li>
              <li>
                <div className="form-line">
                  <p>
                    <b>Total</b>
                  </p>
                  <p>
                    {/* <b>${formatNumber(processing + subtotal)}</b> */}
                    <b>${formatNumber(processing + subtotal)}</b>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="next-container">
            <p>Next</p>
          </div>{" "}
        </>
      ) : (
        <div className="cart-empty-container">
          <h2>Shopping Cart Empty</h2>
          <img src="https://i.imgur.com/U49iioX.png" alt="fallout"></img>
          <a href="#browse-header">
            <div className="shop-container" onClick={handleCloseCart}>
              <p>Shop Now</p>
            </div>
          </a>
        </div>
      )}
    </div>
  );
}
