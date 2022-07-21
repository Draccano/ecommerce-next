import { Product } from '@common/types/product'
import Link from 'next/link'
import React from 'react'
import style from './ProductCard.module.css'

import Image from 'next/image'

interface Props {
  product: Product
}
const placerholderImage = '/product-image-placeholder.svg'

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <a className={style.root}>
        <div className={style.productBg}></div>
        <div className={style.productTag}>
          <h3 className={style.productTitle}>
            <span>{product.name}</span>
          </h3>
          <span className={style.productPrice}>
            {product.price.value} {product.price.currencyCode}
          </span>
        </div>
        )
        {product.images && (
          <Image
            className={style.productImage}
            src={product.images[0].url ?? placerholderImage}
            alt={product.name ?? 'Product image'}
            width={540}
            height={540}
            quality={85}
            layout="responsive"
          />
        )}
      </a>
    </Link>
  )
}

export default ProductCard
