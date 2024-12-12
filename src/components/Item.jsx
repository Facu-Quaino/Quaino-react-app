import React from "react";
import { Link } from "react-router-dom";

const Item =({product})=> {
    return(
            <div className="itemCard">
                <img src={product.img} alt={product.name} className="itemCardImg"/>
                <div className="itemCardDesc">
                    <h5 className="itemCardTitle">{product.name}</h5>
                    <p className="itemCardPrice">${product.price}</p>
                    <Link className="itemCardButton" to={`/item/${product.id}`}>Ver mas</Link>
                </div>
            </div>
            )}


export default Item