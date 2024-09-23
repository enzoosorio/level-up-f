import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";


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
    imageUrl: string | StaticImport ;
    image1? : string | StaticImport  ;
    image2? : string | StaticImport;
    image3?:  string | StaticImport;
    soldOut? : boolean;
    imageAlt: string;
  }