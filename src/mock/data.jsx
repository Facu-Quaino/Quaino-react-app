const products = [
    {
        id: "1",
        name: "producto 1",
        stock: 10,
        price: 50,
        description: "description for producto 1",
        img: "../../public/placeholder.png",
        category: "category1"
    },
    {
        id: "2",
        name: "producto 2",
        stock: 10,
        price: 50,
        description: "description for producto 2",
        img: "../../public/placeholder.png",
        category: "category1"
    },
    {
        id: "3",
        name: "producto 3",
        stock: 10,
        price: 50,
        description: "description for producto 3",
        img: "../../public/placeholder.png",
        category: "category2"
    },
    {
        id: "4",
        name: "producto 4",
        stock: 10,
        price: 50,
        description: "description for producto 4",
        img: "../../public/placeholder.png",
        category: "category3"
    },
]

export const getProducts =()=> {

    let error = false

    return new Promise( (resolve, reject)=> {

        setTimeout(()=>{
            if(error){
                reject("Hubo un error, intente de nuevo mas tarde.")
            } else{
                resolve(products)
            }
        }, 2000)

    })
}

export const getOneProduct =(id)=> {

    let error = false

    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            if(!error){

                let product = products.find((item)=> item.id === id)
                resolve(product)

            } else{

                reject("no data")
            }
        }, 2000)        
    })
}