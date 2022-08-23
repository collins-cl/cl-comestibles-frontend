import React from "react";
import "../Cart/Cart.css";
import { Link } from "react-router-dom";
import Cartitem from "./CartItem/Cartitem";
import cartItemsDummy from "../../Components/cartItemsDummy";
import CartNav from "../../Components/CartNav/CartNav";

const Cart = ({ dispatch, count }) => {
  const cartitems = cartItemsDummy;

  const isEmpty = false;

  const EmptyCart = () => (
    <div className="emptycart">
      Your Cart is empty, <br />{" "}
      <Link className="emptycartlink" to="/shop">
        Start Adding Items
      </Link>
    </div>
  );

  const FilledCart = () => (
    <div className="filledcart">
      <div className="head">Your Shopping Cart</div>
      <div className="cartitems">
        {cartitems.map((cartitem) => (
          <Cartitem
            dispatch={dispatch}
            count={count}
            key={cartitem.id}
            cartitem={cartitem}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="cartbody">
      <CartNav />
      <div className="shopping-cart">
        {isEmpty ? <EmptyCart /> : <FilledCart />}
      </div>
    </div>
  );
};

export default Cart;
