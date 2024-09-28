'use server'

import { db } from "@/lib/db"
import { CategoryEnum, Condition, Gender} from "@prisma/client"

export const getSubCategoriesOfProducts = async () => {
    try {
        
        const categoriesWithSubcategories = await db.product.findMany({
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

export const getGendersOfProducts = async () => {
    try {
        const genders = await db.product.findMany({ 
           select: {
                gender: true, 
            },
            distinct: ['gender'],
        });

        if (genders.length === 0) {
            return null;
        }

        return genders.map(g => g.gender) as Gender[];

    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getSizesOfProducts = async () => {
    try {
        const sizes = await db.product.findMany({
            select: {
                size: true, 
            },
            distinct: ['size'],
            orderBy : {
                size : 'desc'
            }
        });

        if (sizes.length === 0) {
            return null;
        }

        return sizes.map(s => s.size) as string[];

    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getColorsOfProducts = async () => {
    try {
        const colors = await db.product.findMany({
            where: {
                color: {
                    not: null, 
                },
            },
           select: {
                color: true, 
            },
            distinct: ['color'],
        });

        if (colors.length === 0) {
            return null;
        }

        return colors.map(c => c.color) as string[];

    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getMaterialsOfProducts = async () => {
    try {
        const materials = await db.product.findMany({
            where: {
                material: {
                    not: null, 
                },
            },
            select: {
                material: true, 
            },
            distinct: ['material'],
        });

        if (materials.length === 0) {
            return null;
        }

        return materials.map(m => m.material) as string[];

    } catch (error) {
        console.error(error);
        return null;
    }
};


export const getConditionsOfProducts = async () => {
    try {
        const conditions = await db.product.findMany({
          
            select: {
                condition: true, 
            },
            distinct: ['condition'],
            orderBy : {
                condition : 'asc'
            }
        });

        if (conditions.length === 0) {
            return null;
        }

        return conditions.map(c => c.condition) as Condition[];
    } catch (error) {
        console.error(error);
        return null;
    }
};


export const getBrandsOfProducts = async () => {
    try {
        const brands = await db.product.findMany({
            select: {
                brand: true, 
            },
            distinct: ['brand'],
        });

        if (brands.length === 0) {
            return null;
        }

        return brands.map(b => b.brand) as string[];

    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getTagsOfProducts = async () => {
    try {
        const tags = await db.product.findMany({
            where: {
               tags: {
                isEmpty : false
               }
            },
            select: {
                tags: true, 
            },
            distinct: ['tags'],
        });

        if (tags.length === 0) {
            return null;
        }

        const flatTags = tags.flatMap(t => t.tags) as string[];
        const uniqueTags = flatTags.filter((tag, index) => flatTags.indexOf(tag) === index);

        return uniqueTags;

    } catch (error) {
        console.error(error);
        return null;
    }
};