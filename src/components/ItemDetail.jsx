import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import Swal from 'sweetalert2'

const ItemDetail =({product})=> {

    const [compra, setCompra] = useState(false)
    const {addToCart, cart} = useContext(CartContext)

    const onAdd = (cantidad) => {
        setCompra(true)
        Swal.fire("Producto agregado al carrito!");

        addToCart(product, cantidad)
    }

    console.log(cart)

    return(
        <div className='itemDetail'>
            <img className='itemDetailImage' src={product.img} alt={product.name} />
            <div className='itemDetailText'>
                <h1 className='itemDetailTitle'>{product.name}</h1>
                <p className='itemDetailDesc'>{product.description}</p>
                <p className='itemDetailPrice'>{product.price}</p>
            {compra ? 
                <div>
                    <Link className='botonSeguirComprando' to="/">Seguir comprando!</Link>
                    <Link className='botonIrAlCarrito' to="/cart">Ir al carrito!</Link> 
                </div> :
                <ItemCount stock={product.stock} onAdd={onAdd}/>}
            </div>
        </div>

    )
}

export default ItemDetail