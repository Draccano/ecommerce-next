import { Product } from '@common/types/product'
import React from 'react'

interface Props {
  product: Product
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  )
}

export default ProductCard
