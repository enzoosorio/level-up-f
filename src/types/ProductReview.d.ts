import { Product } from "@prisma/client";

export interface ProductReview {
    id: string;
    name: string;
    brand?: string;
    description? : string;
    category? : string;
    gender? : string;
    state : string;
    condition? : string;
    stockQuantity? : string;
    size? : string;
    color? : string;
    material? : string;
    shippingInfo? : string
    // shipping info debe ser de tipo ShippingInfo. Donde agregare mas campos para completar.
    views? : number;
    itsOnSale: boolean;
    price: string;
    discountedPrice: string;
    referenceURL? : string;
    seller? : string;
    returnPolicy? : string;
    soldOut? : boolean;
    imageAlt: string;
  }


  type Image = {
    id: string;
    url: string;
    productId: string;
};

type ProductWithImages = Product & {
    images: Image[];
};

interface ProductReviewWithImages extends Product {
    images: Image[]; 
}