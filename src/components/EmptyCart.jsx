import React from "react";
import { Link } from "react-router-dom";

const EmptyCart =()=>{
    return(
        <div className="emptyCart">
            <h2>Tu carrito esta vacio</h2>
            <h4>Te invitamos a ver nuestros productos</h4>
            <Link className="emptyCartVolver" to='/'>Volver a la tienda</Link>
        </div>
    )
}

export default EmptyCart