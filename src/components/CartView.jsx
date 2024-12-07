import React from "react";
import {useCart} from "../context/CartContext"
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";

const CartView =()=>{
    const {cart} = useCart()

    return(
        <div>
            {!cart.length 
                ? EmptyCart 
                : <div>Tu carrito de compras!</div> }

                <CartList/>
        </div>
    )
}

export default CartView