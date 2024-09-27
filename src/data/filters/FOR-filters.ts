'use server'

import { db } from "@/lib/db"
import { CategoryEnum } from "@prisma/client"

export const getSubCategoriesOfProducts = async () => {
    try {
        
        const categoriesWithSubcategories = await db.product.findMany({
            where: {
                category: {
                    not: null, 
                },
            },
            select: {
                category: true, 
                subcategory: true, 
            },
            distinct: ['category', 'subcategory'],
        });

        if (categoriesWithSubcategories.length === 0) {
            return null;
        }

        // Devuelve un objeto agrupado por categoría, con sus subcategorías
        const result = categoriesWithSubcategories.reduce((acc, item) => {
            if (item.category && !acc[item.category]) {
                acc[item.category] = [];
            }
            if ( item.category && item.subcategory) {
                acc[item.category].push(item.subcategory);
            }
            return acc;
        }, {} as Record<CategoryEnum, string[]>); 

        return result;

    } catch (error) {
        console.error(error);
        return null;
    }
};
