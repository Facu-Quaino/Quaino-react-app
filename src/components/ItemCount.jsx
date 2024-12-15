import React, { useState } from "react"

const ItemCount =({stock, onAdd})=> {
        const [count, setCount] = useState(1)

        const sumar =()=>{
            if(count < stock){
                setCount(count + 1)
            }

        }

        const restar =()=>{
            if(count > 0){
                setCount(count - 1)
            }
        }

        const onAddHandler =()=>{
            onAdd(count)
        }

    return(
        <div className="itemCount">
            <div className="itemCountCounter">
                <button className="itemCountMinus" onClick={restar}>-</button>
                <span className="itemCountNumber">{count}</span>
                <button className="itemCountPlus" onClick={sumar}>+</button>
            </div>
            <button className="itemCountBuy" onClick={onAddHandler} disabled={count===0 || stock===0}>Comprar!</button>
        </div>

    )
}

export default ItemCount