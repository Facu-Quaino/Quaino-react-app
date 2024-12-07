export const productos = [
    {
        name: "Uncraftable Tour of Duty Ticket",
        stock: 17000,
        price: 0.80,
        description: "Present this ticket in Mann vs. Machine to play Mann Up Mode on an official server to earn rare items and track progress on your Tour of Duty Badge. ( Not Usable in Crafting )",
        img: "../../public/ticket.png",
        category: "Tools"
    },
    {
        name: "Name Tag",
        stock: 2500,
        price: 0.52,
        description: "Changes the name of an item in your backpack. This is a limited use item. Uses: 1",
        img: "../../public/tag.png",
        category: "Tools"
    },
    {
        name: "Refined Metal",
        stock: 21000,
        price: 0.04,
        description: "Basic currency.",
        img: "../../public/metal.png",
        category: "Tools"
    },
    {
        name: "Professional Strange Original",
        stock: 17,
        price: 325.56,
        description: "Killstreaker: Singularity Sheen: Deadly Daffodil Killstreaks Active",
        img: "../../public/rocket-launcher.png",
        category: "Stranges"
    },
    {
        name: "Professional Australium Scattergun",
        stock: 27,
        price: 139.99,
        description: "Killstreaker: Incinerator Sheen: Manndarin Killstreaks Active",
        img: "../../public/australium.png",
        category: "Stranges"
    },
    {
        name: "Professional Strange Market Gardener",
        stock: 52,
        price: 19.45,
        description: "Killstreaker: Cerebral Discharge Sheen: Hot Rod Killstreaks Active",
        img: "../../public/shovel.png",
        category: "Stranges"
    },
    {
        name: "Professional Strange Huntsman",
        stock: 19,
        price: 79.99,
        description: "Killstreaker: Fire Horns Sheen: Team Shine Killstreaks Active",
        img: "../../public/bow.png",
        category: "Stranges"
    },
    {
        name: "Corona Australis",
        stock: 12,
        price: 139.99,
        description: "Elite Grade Cosmetic Augmentation.",
        img: "../../public/corona.png",
        category: "Hats"
    },
    {
        name: "B.M.O.C.",
        stock: 20,
        price: 39.99,
        description: "Be the big man of christmas this holiday season!",
        img: "../../public/santa.png",
        category: "Hats"
    },
    {
        name: "Bill's Hat",
        stock: 244,
        price: 8.39,
        description: "Left 4 You.",
        img: "../../public/bill.png",
        category: "Hats"
    },
    {
        name: "Hazardous Environment Vest",
        stock: 16,
        price: 18.09,
        description: "The right man in the wrong place can make all the difference in the world.",
        img: "../../public/vest.png",
        category: "Hats"
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