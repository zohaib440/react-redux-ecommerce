import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delItem } from "../redux/action/index";
import { addItem } from "../redux/action/index";
import { delAll } from "../redux/action/index";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const products = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleMinus = (product) => {
    dispatch(delItem(product));
  };
  const handlePlus = (product) => {
    dispatch(addItem(product));
  };
  const handleClose = (product) => {
    dispatch(delAll(product));
  };

  const cartItems = (product) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
        <div className="container py-4">
          <button
            className="btn-close float-end"
            aria
            label="close"
            onClick={() => handleClose(product)}
          ></button>

          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={product.image}
                alt={product.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{product.title}</h3>
              <p className="lead fw-bold">${product.price}</p>
              <p className="lead fw-bold">
                {product.quantity} X ${product.price} = $
                {product.quantity * product.price}
              </p>
              <button
                className="btn btn-outline-dark me-4"
                onClick={() => handleMinus(product)}
              >
                <i className="fa fa-minus"></i>
              </button>
              <button
                className="btn btn-outline-dark me-4"
                onClick={() => handlePlus(product)}
              >
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const checkoutButton = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25">
            Proceed To Checkout
          </NavLink>
        </div>
      </div>
    );
  };
  return (
    <>
      {products.length === 0 && emptyCart()}
      {products.length !== 0 && products.map(cartItems)}
      {products.length !== 0 && checkoutButton()}
    </>
  );
};

export default Cart;
