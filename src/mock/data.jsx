export const productos = [
    {
    name: "Buzo negro",
    stock: 19,
    price: 10000,
    description: "Diseño moderno y cómodo. Perfecto para cualquier ocasión. Hecho de material suave y de alta calidad, te mantendrá abrigado sin perder estilo.",
    img: "../../public/buzo1.png",
    category: "Abrigos",
    },
    {
    name: "Buzo azul",
    stock: 21,
    price: 10000,
    description: "Diseño moderno y cómodo. Perfecto para cualquier ocasión. Hecho de material suave y de alta calidad, te mantendrá abrigado sin perder estilo.",
    img: "../../public/buzo2.png",
    category: "Abrigos",
    },
    {
    name: "Buzo rojo",
    stock: 11,
    price: 10000,
    description: "Diseño moderno y cómodo. Perfecto para cualquier ocasión. Hecho de material suave y de alta calidad, te mantendrá abrigado sin perder estilo.",
    img: "../../public/buzo3.png",
    category: "Abrigos",
    },
    {
    name: "Camiseta roja",
    stock: 29,
    price: 4000,
    description: "Con un diseño simple pero elegante, es ideal para cualquier ocasión casual. Hecha de un material suave y transpirable, te garantiza comodidad durante todo el día.",
    img: "../../public/camiseta1.png",
    category: "Camisetas",
    },
    {
    name: "Camiseta purpura",
    stock: 23,
    price: 4000,
    description: "Con un diseño simple pero elegante, es ideal para cualquier ocasión casual. Hecha de un material suave y transpirable, te garantiza comodidad durante todo el día.",
    img: "../../public/camiseta2.png",
    category: "Camisetas",
    },
    {
    name: "Camiseta celeste",
    stock: 27,
    price: 4000,
    description: "Con un diseño simple pero elegante, es ideal para cualquier ocasión casual. Hecha de un material suave y transpirable, te garantiza comodidad durante todo el día.",
    img: "../../public/camiseta3.png",
    category: "Camisetas",
    },
    {
    name: "Pantalon jean azul",
    stock: 18,
    price: 7000,
    description: "Un clásico que no puede faltar en tu guardarropa! Con un corte moderno y ajuste perfecto, combina comodidad y estilo en una sola prenda.",
    img: "../../public/pantalon1.png",
    category: "Pantalones",
    },
    {
    name: "Pantalon cargo oliva",
    stock: 14,
    price: 7000,
    description: "La combinación perfecta de estilo y funcionalidad! Con un diseño moderno y práctico, ofrece varios bolsillos espaciosos para que puedas llevar todo lo que necesites sin sacrificar comodidad. Hecho de material resistente y de alta calidad.",
    img: "../../public/pantalon2.png",
    category: "Pantalones",
    },
    {
    name: "Pantalon cargo marron",
    stock: 12,
    price: 7000,
    description: "La combinación perfecta de estilo y funcionalidad! Con un diseño moderno y práctico, ofrece varios bolsillos espaciosos para que puedas llevar todo lo que necesites sin sacrificar comodidad. Hecho de material resistente y de alta calidad.",
    img: "../../public/pantalon3.png",
    category: "Pantalones",
    }
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