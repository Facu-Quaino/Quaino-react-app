import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CartList =()=>{
    
    const {cart, cartTotal, clear} = useCart()

    const clearCart =()=>{
        Swal.fire({
            title: "Esta seguro que desea borrar el carrito?",
            text: "No podra revertir estos cambios!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Borrar!",
            cancelButtonText: "Cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                        clear()
                        Swal.fire({
                        title: "Borrado!",
                        text: "Su carrito ha sido borrado.",
                        icon: "success"
                    });
                }
            });
    }

    return(
        <div>
            {cart.map((prod)=> <CartItem key={prod.id} prod={prod}/> )}

            <span>Precio total: ${cartTotal()}</span>

            <div className="cartListButtons">
                <button className="cartDelete" onClick={clearCart}>Borrar Carrito!</button>
                <Link className="cartBuy" to='/checkout'>Finalizar compra!</Link>
            </div>
            
        </div>
    )
}

export default CartList