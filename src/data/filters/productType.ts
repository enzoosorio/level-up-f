import { db } from "@/lib/db"
import { CategoryEnum } from "@prisma/client"

export const getProductByCategory  = async (category : CategoryEnum) => {
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