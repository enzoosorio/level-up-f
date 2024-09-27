import { db } from "@/lib/db"
import { ProductReviewWithImages } from "@/types/ProductReview";
import { Product } from "@prisma/client"



export const getProducts = async (): Promise<Product[]> => {
    try {
        const products = await db.product.findMany();
        return products;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const getIndividualProduct = async (id: string): Promise<ProductReviewWithImages | null> => {
    try {
        const product = await db.product.findUnique({
            where: {
                id: id,
            },
            include: {
                images: true,
            },
        });
        return product;
    } catch (error) {
        console.error(error);
        return null;
    }
};