import React, {useState, useEffect} from "react"
import { getProducts } from "../mock/data"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer =({greeting})=>{

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const {category} = useParams()

    useEffect(()=>{
        setLoading(true)
        getProducts()
            .then((res) => {
                if(category){
                    setProducts(res.filter((product)=> product.category === category))
                }else{
                    setProducts(res)
                }
            })
            .catch((error) => console.log(error))
            .finally(()=> setLoading(false))
    }, [category])

    return(
        <div className="containerItemList">
            <h1 className="mainTitle">{greeting} <span>{category}</span> </h1>

            {loading ? <p>Loading products...</p> : <ItemList products = {products}/>} 
        </div>
    )
}

export default ItemListContainer