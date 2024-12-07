import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import {  addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { Link } from 'react-router-dom'

const Checkout =()=>{
    const [user, setUser] = useState({})
    const [validate, setValidate] = useState('')
    const [orderId, setOrderId] = useState('')
    const {cart, cartTotal, clear} = useContext(CartContext)

    const userData =(e)=>{
        setUser(
            {
                ...user,
                [e.target.name]: e.target.value 
            }
        )
    }

    const finalizarCompra =(e)=>{
        e.preventDefault()

        if(!user.name || !user.lastname || !user.email || !user.address){
            alert("los campos deben ser obligatorios")
        }else if( user.email !== validate){
            alert("El email y la confirmacion deben ser iguales")
        }else{
            //objeto de la orden
            let order = {
                buyer: user,
                carrito: cart,
                total: cartTotal(),
                date: serverTimestamp()
            }

            //traer coleccion
            const ventas = collection(db, "orders")
            //agrego doc
            addDoc(ventas, order)
                .then((res)=>{
                    //actualizo stock (opcional)
                    cart.forEach((item) => {
                        const docRef = doc(db, "productos", item.id)
                        getDoc(docRef)
                        .then((dbDoc)=>{
                            updateDoc(docRef, {stock: dbDoc.data().stock - item.cantidad})
                        })
                    });
                    setOrderId(res.id)
                    clear()
                })
                .catch((error)=> console.log(error))
        }
    }

    return(
        <div>
            {orderId !== ''
            ? <div>
                <h4>Generaste tu orden!</h4>
                <h5>order's ID: {orderId} </h5>
                <Link to='/'>Volver a la pagina principal</Link>
            </div>
            :
            <div>
            <h4>Complete el formulario</h4>
            <form action="" onSubmit={finalizarCompra}>
                <input type="text" name = 'name' placeholder="ingrese su nombre" onChange={userData}/>
                <input type="text" name="lastname" placeholder="ingrese su apellido" onChange={userData}/>
                <input type="text" name="address" placeholder="por favor ingrese su direccion" onChange={userData}/>
                <input type="email" name="email" placeholder="ingrese su correo" onChange={userData}/>
                <input type="email" name="email-confirmation" placeholder="confirme su correo electronico" onChange={(e)=> setValidate(e.target.value)}/>
                <button type="submit">Enviar</button>
            </form>
            </div>}
        </div>
    )
}

export default Checkout