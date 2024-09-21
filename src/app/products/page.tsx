import { ProductsAllView } from '@/components/products/ProductsAllView'
import React, { Suspense } from 'react'

function ProductsPage() {
  return (
    <Suspense fallback={<p>LOADING XD</p>}>
      <ProductsAllView />
    </Suspense>
  )
}

export default ProductsPage