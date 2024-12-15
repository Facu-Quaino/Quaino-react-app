import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../services/firebase'

const ItemDetailContainer =()=> {

    const[product, setProduct] = useState({})
    const[loading, setLoading] = useState(false)
    const[invalidItem, setInvalidItem] = useState(false)
    const {id} = useParams()

    useEffect(()=>{
        setLoading(true)
        //collection y proyect firebase
        const collectionProd = collection(db, "products")
        //creo una referencia
        const docRef = doc(collectionProd, id)
        //traer el documento
        getDoc(docRef)
            .then((res)=> {
                if(res.data()){
                    setProduct({id: res.id, ...res.data()})
                } else{
                    setInvalidItem(true)
                }
                })
            .catch((error)=> console.log(error))
            .finally(()=> setLoading(false))
    }, [])

    if(invalidItem){
        return( 
        <div>
            <h3>El producto no existe</h3>
            <Link to="/">Volver a la tienda</Link>
        </div>)
    }
    return(
        <div className='itemDetailContainer'>
            {loading ? <Loader/> : <ItemDetail product = {product}/>}
        </div>
    )
}

export default ItemDetailContainer