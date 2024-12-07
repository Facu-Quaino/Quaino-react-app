import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const CartList =()=>{
    
    const {cart, cartTotal, clear} = useCart()

    return(
        <div>
            {cart.map((prod)=> <CartItem key={prod.id} prod={prod}/> )}

            <span>Precio total: ${cartTotal()}</span>

            <div className="cartListButtons">
                <button className="cartDelete" onClick={clear}>Borrar Carrito!</button>
                <Link className="cartBuy" to='/checkout'>Finalizar compra!</Link>
            </div>
            
        </div>
    )
}

export default CartList