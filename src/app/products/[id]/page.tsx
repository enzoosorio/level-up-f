import { auth } from "@/auth"
import { IndividualProductComponent } from "@/components/individualProduct/Product"
import { getIndividualProduct } from "@/data/products"
import { Suspense } from "react";

async function IndividualProduct({
  params,
}: {
  params: { id: string };
}) {

  const session = await auth()
  const individualProduct = await getIndividualProduct(params.id)

  if(!individualProduct) return <p>No existe el producto</p>

  return(
    <Suspense fallback={<p>Cargando...</p>}>
    <IndividualProductComponent session={session} individualProduct={individualProduct}/>
    </Suspense>
  )
 
}

export default IndividualProduct