import React from "react";
import { useCart } from "../context/CartContext";

const CartItem =({prod})=>{

    const {removeItem} = useCart()

    return(
        <div>
            <img src={prod.img} alt={prod.name} className="cartItemImage"/>
            <span>{prod.name}</span>
            <span>{prod.cantidad}</span>
            <span>{prod.price}</span>
            <span>${prod.name},00</span>
            <span>Final total: ${prod.cantidad * prod. price},00</span>
            <button className="cartItemRemove" onClick={()=> removeItem(prod.id)}>X</button>
        </div>
    )
}

export default CartItem