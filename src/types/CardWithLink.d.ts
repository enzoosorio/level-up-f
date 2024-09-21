import { StaticImport } from "next/dist/shared/lib/get-img-props";

// TODO el link debe ser obligatorio,creo xd
export interface CardWithLink{
    
    link? : string;
    titleCard : string; 
    secondaryText? : string; 
    imgCard : StaticImport;
    altImgCard : string;
    isAdding : boolean;
}