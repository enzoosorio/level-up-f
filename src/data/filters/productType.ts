import { db } from "@/lib/db"

export const getProductByCategory  = async (category : string) => {
    try {
        const products = await db.product.findMany({
           where : {
               category : category
           }
        })
        return products
        
    } catch (error) {
        return console.log(error)
    }
}