import { ProductReview } from "@/types/ProductReview";
import imageURL1 from '@/assets/hero/sample/polo1.png'
import Image1 from '@/assets/sampleIndividualProduct/polera-adidas-vino-1.jpeg'
import Image2 from '@/assets/sampleIndividualProduct/polera-adidas-vino-2.jpeg'
import Image3 from '@/assets/sampleIndividualProduct/polera-adidas-vino-3.jpeg'
import imageURL2 from '@/assets/hero/sample/Polo2.png'
import Image21 from '@/assets/hero/sample/Polo2.png'
import Image31 from '@/assets/sampleIndividualProduct/polera-hunington-1.jpeg'
import Image32 from '@/assets/sampleIndividualProduct/polera-hunington-2.jpeg'
import Image33 from '@/assets/sampleIndividualProduct/polera-hunington-3.jpeg'
import Image41 from '@/assets/hero/sample/Polo3.png'

export const productos : ProductReview[] = [
    {
        "id": "20vc2nv043n403n",
        "name": "Camiseta Negraaa",
        "brand": "Nike",
        "description": "Polera Nike comprada en USA. no la he usado para casi nada.",
        "category": "polos",
        "gender": "male",
        "state": "9",
        "condition": "deadstock",
        "stockQuantity": "1",
        "size": "L",
        "color": "Black",
        "material": "Cotton",
        "shippingInfo": "Free shipping on orders over $50",
        "views": 100,
        "itsOnSale": true,
        "price": "120.00",
        "discountedPrice": "90.00",
        "seller": "Enzo Osorio",
        "referenceURL" : "https://www.adidas.pe/polo-adicolor-seleccion-peruana/IU2741.html",
        "returnPolicy": "Devoluciones aceptadas dentro de 15 días.",
        "imageUrl": imageURL1,
        "image1": Image1,
        "image2": Image2,
        "image3": Image3,
        "imageAlt": "Camiseta Negra Nike"
    },
    {
        "id": "aefasef2wv3234v43v",
        "name": "Zapatillas Stan Smith",
        "brand": "Adidas",
        "description": "Zapatillas adidas stan smith con boleta Original. no la he usado para casi nada.",
        "category": "zapatillas",
        "gender": "female",
        "state": "9.5",
        "condition": "deadstock",
        "stockQuantity": "2",
        "size": "38",
        "color": "White",
        "material": "Leather",
        "shippingInfo": "Standard shipping within 5-7 business days",
        "views": 150,
        "itsOnSale": false,
        "price": "250.00",
        "discountedPrice": "0",
        "seller": "Enzo Osorio",
        "returnPolicy": "Devoluciones aceptadas dentro de 15 días.",
        "imageUrl": imageURL2,
        "image1": Image21,
        "image2": Image21,
        "image3": Image21,
        "imageAlt": "Adidas stan smith"
    },
    {
        "id": "dawaww6nb57n67n67nn5rb5e",
        "name": "Polo adidas",
        "brand": "Adidas",
        "description": "Polo tye die adidas by me.",
        "category": "polos",
        "gender": "female",
        "state": "8.5",
        "condition": "deadstock",
        "stockQuantity": "5",
        "size": "M",
        "color": "Blue",
        "material": "Polyester",
        "shippingInfo": "Free shipping on orders over $50",
        "views": 80,
        "itsOnSale": true,
        "price": "80.00",
        "discountedPrice": "40.00",
        "seller": "Enzo Osorio",
        "returnPolicy": "Devoluciones aceptadas dentro de 15 días.",
        "imageUrl": Image31,
        "image1": Image31,
        "image2": Image32,
        "image3": Image33,
        "imageAlt": "Polo adidas"
    },
    {
        "id": "avwsev43wv34v234bn423h4",
        "name": "Zapatillas Supernova",
        "brand": "Adidas",
        "description": "Zapatillas supernova usadas.",
        "category": "zapatillas",
        "gender": "male",
        "state": "7.5",
        "condition": "used",
        "stockQuantity": "3",
        "size": "40",
        "color": "Red",
        "material": "Synthetic",
        "shippingInfo": "Express shipping available",
        "views": 60,
        "itsOnSale": true,
        "price": "150.00",
        "discountedPrice": "100.00",
        "seller": "Enzo Osorio",
        "returnPolicy": "Devoluciones aceptadas dentro de 15 días.",
        "imageUrl": Image41,
        "image1": Image41,
        "image2": Image41,
        "image3": Image41,
        "imageAlt": "Zapatillas supernova"
    }
];