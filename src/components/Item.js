import React, { useState } from "react";

function Item({ name, category }) {
  const [ inCart, setInCart ] = useState(true)
  const [ cartState, setCartState] = useState(true)
  const cartStatus = inCart ? "" : "in-cart"
  const btnStatus = cartState ? "Add to Cart" : "Remove from Cart"
  const cartClick = ()=> inCart ? false : true
  const btnClick = ()=> cartState ? false : true

  console.log(cartStatus)
  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={()=>{setInCart(cartClick()); setCartState(btnClick())}}>{btnStatus}</button>
    </li>
  );
}

export default Item;
