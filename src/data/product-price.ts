'use server'

import { db } from "@/lib/db";

export const getMinAndMaxProductsPrice = async () => {
    try {
       
        const prices = await db.product.aggregate({
            _min: {
                price: true,
                discountedPrice: true, 
            },
            _max: {
                price: true,
                discountedPrice: true, 
            },
        });

       
        const minPrice = Math.min(
            prices._min.price ?? Infinity, 
            prices._min.discountedPrice ?? Infinity
        );

        
        const maxPrice = Math.max(
            prices._max.price ?? 0, 
            prices._max.discountedPrice ?? 0 
        );

        return {
            minPrice: minPrice === Infinity ? null : minPrice,
            maxPrice,
        };
    } catch (error) {
        console.error('Error fetching min and max product prices:', error);
        throw error; 
    }
};
