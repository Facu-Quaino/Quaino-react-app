import { useContext } from "react"
import { CartContext, useCart } from "../context/CartContext"

const CartWidget =()=>{
    const {cartQuantity} = useCart()

    return(
        <div className="cartWidgetContainer">
            <img src="../../public/shopping-cart.png" alt="cart" className="cartIcon"/>
            {cartQuantity() > 0 && <p className="cartCounter">{cartQuantity()}</p>}
        </div>
    )
}

export default CartWidget