import React, {useState, useEffect} from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Loader from "./Loader"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../services/firebase"

const ItemListContainer =({greeting})=>{

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const {category} = useParams()

    useEffect(()=>{
        setLoading(true)
        
        //conecto con mi coleccion
        const productsCollection = category 
            ? query(collection(db, "products"), where("category", "==", category)) 
            : collection(db, "products")

        //pedir documentos
        getDocs(productsCollection)
            .then((res)=>{
                const list = res.docs.map((product)=>{
                    return{
                        id: product.id,
                        ...product.data()
                    }
                })
                setProducts(list)
            })
            .catch((error)=> console.log(error))
            .finally(()=> setLoading(false))
    }, [category])

    return(
        <div>
            <div className="titleContainer">
                <h1 className="mainTitle">{greeting} <span>{category}</span> </h1>
            </div>

            <div className="itemListContainer">
                {loading ? <Loader/>: <ItemList products = {products}/>} 
            </div>
        </div>
    )
}

export default ItemListContainer