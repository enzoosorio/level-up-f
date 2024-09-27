import { db } from "@/lib/db";


export const getMinAndMaxProductsPrice  = async () => {
    try {
        const prices = await db.product.aggregate({
            _min: {
                price: true,
            },
            _max: {
                price: true,
            },
        });

        return {
            minPrice: prices._min.price,
            maxPrice: prices._max.price,
        };
    } catch (error) {
        console.error('Error fetching min and max product prices:', error);
        throw error; // Lanza el error para que pueda manejarse adecuadamente en niveles superiores
    }
}