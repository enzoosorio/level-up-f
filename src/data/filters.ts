
import { db } from "@/lib/db"
import { Condition , Gender} from "@prisma/client"

export const getProductsByCondition = async(condition : Condition) => {
    try {
        const productsByCondition = await db.product.findMany({
            where : {
                condition : condition
            }
        })

        return productsByCondition
    } catch (error) {
        return console.log(error)
    }

}


export const getProductsByGender = async (gender : Gender) => {
    try {
        const productsByGender = await db.product.findMany({
            where : {
                gender : gender
            }
        })

        return productsByGender
        
    } catch (error) {
        return console.log(error)
    }
}