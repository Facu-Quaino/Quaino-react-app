import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail =({product})=> {

    const onAdd = (cantidad) => {
        if (cantidad > 0) {
            alert(`Agregaste ${cantidad} productos al carrito`)
        } else if (cantidad == 0){
            alert(`Producto fuera de stock, disculpe las molestias!`)
        }
    }

    return(
        <div>
        <h1>Item Detail of {product.name}</h1>
        <img src={product.img} alt={product.name} />
        <p>{product.description}</p>
        <p>{product.price}</p>
        <ItemCount stock={product.stock} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail