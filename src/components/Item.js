import React, { useState } from "react";

function Item({ name, category }) {
const [cart, setCart] = useState("")
const [text, setText] = useState("Add to Cart")



function handleAddCart(){
const buttonText = "in cart"
const updatedCart = "in-cart"
  setCart(updatedCart)
  setText(buttonText)
}


  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddCart}>{text}</button>
    </li>
  );
}

export default Item;
