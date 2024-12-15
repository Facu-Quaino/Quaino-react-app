import React from "react";
import { useCart } from "../context/CartContext";
import * as Icon from 'react-bootstrap-icons';

const CartItem =({prod})=>{

    const {removeItem} = useCart()

    return(
        <div className="cartItem">
            <img src={prod.img} alt={prod.name} className="cartItemImage"/>
            <span>{prod.name}</span>
            <span>Cant: {prod.cantidad}</span>
            <span>${prod.price},00</span>
            <span>Final total: ${prod.cantidad * prod. price},00</span>
            <button className="cartItemRemove" onClick={()=> removeItem(prod.id)}> <Icon.Trash3Fill size={20}/> </button>
        </div>
    )
}

export default CartItem