import React,{useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)
  const className =isInCart?"in-cart":"";
  const buttonClassName=isInCart?"remove": "add"
  const addRemoveFromCart=isInCart?"revome from Cart":"Add to Cart";
  const handleCart=()=>setIsInCart(!isInCart)
    
  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClassName} onClick={handleCart} >{addRemoveFromCart}</button>
    </li>
  );
}

export default Item;
