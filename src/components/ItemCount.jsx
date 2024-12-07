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
        <div>
            <div>
                <button className="itemCountMinus" onClick={restar}>-</button>
                <span className="itemCountCounter">{count}</span>
                <button className="itemCountPlus" onClick={sumar}>+</button>
            </div>
            <button className="itemCountBuy" onClick={onAddHandler} disabled={count===0 || stock===0}>Comprar!</button>
        </div>

    )
}

export default ItemCount