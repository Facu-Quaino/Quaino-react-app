import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const ItemDetail =({product})=> {

    const [compra, setCompra] = useState(false)
    const {addToCart, cart} = useContext(CartContext)

    const onAdd = (cantidad) => {
        setCompra(true)

        // let cartItem ={
        //     name: product.name,
        //     img: product.img,
        //     price: product.price,
        //     stock: product.stock,
        //     id: product.id
        // }

        addToCart(product, cantidad)
    }

    console.log(cart)

    return(
        <div>
        <h1>Item Detail of {product.name}</h1>
        <img src={product.img} alt={product.name} />
        <p>{product.description}</p>
        <p>{product.price}</p>
        {compra ? 
        <div>
            <Link className='botonSeguirComprando' to="/">Seguir comprando!</Link>
            <Link className='botonIrAlCarrito' to="/cart">Ir al carrito!</Link> 
        </div> :
            <ItemCount stock={product.stock} onAdd={onAdd}/>}
        </div>
    )
}

export default ItemDetail