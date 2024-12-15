import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartProvider =({children})=>{
    const [cart, setCart] = useState([])

    const addToCart =(item, quantity)=>{
        if(isInCart(item.id)){
            setCart(
                cart.map((prod)=>{
                    if(prod.id === item.id){
                        return {...prod, cantidad: prod.cantidad + quantity}
                    } else{
                        return prod;
                    }
                })
            ) //*aca sumo cantidades para no repetir
        }else{
            setCart([...cart, {...item, cantidad: quantity}]) //*aca agrego un item nuevo al carrito
        }
    }

    const isInCart =(id)=>{
        return cart.some((prod)=> prod.id === id)
    }

    const clear =()=>{
        setCart([])
    }

    const removeItem =(id)=>{
        Swal.fire({
                    title: "Esta seguro que desea eliminar este producto del carrito?",
                    text: "No podra revertir estos cambios!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "Black",
                    cancelButtonColor: "Black",
                    confirmButtonText: "Borrar!",
                    cancelButtonText: "Cancelar"
                    }).then((result) => {
                        if (result.isConfirmed) {
                                setCart(cart.filter((prod)=> prod.id !== id))
                                Swal.fire({
                                title: "Borrado!",
                                text: "El producto ha sido borrado.",
                                confirmButtonColor: "black",
                                icon: "success"
                            });
                        }
                    });
    }

    const cartQuantity =()=>{
        return cart.reduce((acc, prod)=> (acc += prod.cantidad), 0)
    }

    const cartTotal =()=>{
        return cart.reduce((acc, prod)=> (acc += prod.price * prod.cantidad), 0)
    }

    return(
        <CartContext.Provider value={{cart, addToCart, clear, removeItem, cartQuantity, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart =()=> useContext(CartContext)