import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../services/firebase'

const ItemDetailContainer =()=> {

    const[product, setProduct] = useState({})
    const[loading, setLoading] = useState(false)
    const {id} = useParams()

    useEffect(()=>{
        setLoading(true)
        //collection y proyect firebase
        const collectionProd = collection(db, "products")
        //creo una referencia
        const docRef = doc(collectionProd, id)
        //traer el documento
        getDoc(docRef)
            .then((res)=> setProduct({id: res.id, ...res.data()}))
            .catch((error)=> console.log(error))
            .finally(()=> setLoading(false))
    }, [])

    return(
        <div className='itemDetailContainer'>
            {loading ? <Loader/> : <ItemDetail product = {product}/>}
        </div>
    )
}

export default ItemDetailContainer