import { auth } from "@/auth"
import { IndividualProductComponent } from "@/components/individualProduct/Product"

async function IndividualProduct() {

  const session = await auth()
  
  return(
    <IndividualProductComponent session={session}/>
  )
 
}

export default IndividualProduct