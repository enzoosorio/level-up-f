import { db } from "@/lib/db"

export const getProductsPriceLowToHigh  = async () => {
    try {
        const products = await db.product.findMany({
            orderBy : {
                price : 'asc'
            }
        })

        return products
        
    } catch (error) {
        return console.log(error)
    }
}

export const getProductsPriceHighToLow  = async () => {
    try {
        const products = await db.product.findMany({
            orderBy : {
                price : 'desc'
            }
        })

        return products
        
    } catch (error) {
        return console.log(error)
    }
}
export const getProductsNameLowToHigh  = async () => {
    try {
        const products = await db.product.findMany({
            orderBy : {
                name : 'asc'
            }
        })

        return products
        
    } catch (error) {
        return console.log(error)
    }
}

export const getProductsNameHighToLow  = async () => {
    try {
        const products = await db.product.findMany({
            orderBy : {
                name : 'desc'
            }
        })

        return products
        
    } catch (error) {
        return console.log(error)
    }
}

export const getRecentProducts  = async () => {
   try {
       const products = await db.product.findMany({
           orderBy : {
               createdAt : 'desc'
           }
       })
       return products
   } catch (error) {
    console.log(error)
   }
}


export const getProductsForRelevance  = async () => {
    try {
        const products = await db.product.findMany({
            orderBy : {
                views : 'desc'
            }
        })
        return products
    } catch (error) {
     console.log(error)
    }
 }
 
