import { Product } from '@common/types/product'
import Link from 'next/link'
import React from 'react'
import style from './ProductCard.module.css'

import Image from 'next/image'

interface Props {
  product: Product
  variant?: 'simple' | 'slim'
}
const placerholderImage = '/product-image-placeholder.svg'

const ProductCard: React.FC<Props> = ({ product, variant = 'simple' }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <a className={style.root}>
        {variant === 'slim' ? (
          <>
            <div className="inset-0 flex items-center justify-center absolute z-20">
              <span className="bg-black text-white p-3 font-bold text-xl">
                {product.name}
              </span>
            </div>
            {product.images && (
              <Image
                className={style.productImage}
                alt={product.name ?? 'Product image'}
                src={product.images[0].url ?? placeholderImage}
                height={320}
                width={320}
                quality="85"
                layout="fixed"
              />
            )}
          </>
        ) : (
          <>
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
          </>
        )}
      </a>
    </Link>
  )
}

export default ProductCard
