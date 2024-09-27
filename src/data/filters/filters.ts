
import { db } from "@/lib/db"
import { Condition , Gender} from "@prisma/client"
import { getMinAndMaxProductsPrice } from "../product-price"

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

export const getCategoriesOfProducts  = async () => {
    try {
        const products = await db.product.findMany({
           select : {
                category : true
           }
        })
        return products
        
    } catch (error) {
        return console.log(error)
    }
}

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



export const getProductsInPriceRange  = async (priceLow : string, priceHigh : string) => {
    
    const { minPrice, maxPrice } = await getMinAndMaxProductsPrice();
    
    const effectiveMinPrice = priceLow ? parseFloat(priceLow) : minPrice;
    const effectiveMaxPrice = priceHigh ? parseFloat(priceHigh) : maxPrice;

    if(!(effectiveMinPrice) || !(effectiveMaxPrice)) {
        throw new Error('Las precios deben ser números.');
    }

    if (effectiveMinPrice > effectiveMaxPrice) {
        throw new Error('El precio mínimo no puede ser mayor que el precio máximo.');
    }

    if(!priceLow) 

    try {
        const products = await db.product.findMany({
            where: {
                price: {
                    gte: effectiveMinPrice,
                    lte: effectiveMaxPrice
                }
            }
        });

        return products
        
    } catch (error) {
        return console.log(error)
    }
}