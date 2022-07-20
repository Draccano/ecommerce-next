import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import { Grid } from '@components/ui'
import { getConfig } from '@framework/api/config'
import getAllProducts from '@framework/product/get-all-products'
import type { InferGetStaticPropsType } from 'next'

export async function getStaticProps() {
  // renders in the server, not visible request
  const config = getConfig()
  console.log(config.apiUrl)
  const products = await getAllProducts(config)

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60, //after 4h revalidate all products
  }
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Grid>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </>
  )
}

Home.Layout = Layout
