import { Product } from '@common/types/product'
import Link from 'next/link'
import React from 'react'

import Image from 'next/image'

interface Props {
  product: Product
}
const placerholderImage = '/product-image-placeholder.svg'

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <a>
        <div>
          <h3>
            <span>{product.name}</span>
          </h3>
          <span>14 $</span>
          {product.images && (
            <Image
              src={product.images[0].url ?? placerholderImage}
              alt={product.name ?? 'Product image'}
              width={540}
              height={540}
              quality={85}
              layout="responsive"
            />
          )}
        </div>
      </a>
    </Link>
  )
}

export default ProductCard
