import { useCart } from "../context/CartContext"
import * as Icon from 'react-bootstrap-icons';

const CartWidget =()=>{
    const {cartQuantity} = useCart()

    return(
        <div className="cartWidgetContainer">
            <Icon.CartFill className="cartIcon" size={20}/>
            {cartQuantity() > 0 && <p className="cartCounter">{cartQuantity()}</p>}
        </div>
    )
}

export default CartWidget