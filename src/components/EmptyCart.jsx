import React from "react";

const EmptyCart =()=>{
    return(
        <div>
            <h2>Tu carrito esta vacio</h2>
            <Link to='/'>Volver a la tienda</Link>
        </div>
    )
}

export default EmptyCart