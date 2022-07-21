import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import { Grid, Hero, Marquee } from '@components/ui'
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
    <div>
      <Grid>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Marquee gradient={false}>
        {products.slice(0, 3).map((product) => (
          <ProductCard variant="slim" key={product.id} product={product} />
        ))}
      </Marquee>
      <Grid layout="B">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>

      <Marquee gradient={false} variant="secondary">
        {products.slice(0, 3).map((product) => (
          <ProductCard variant="slim" key={product.id} product={product} />
        ))}
      </Marquee>
      <Hero
        headline="Arma Reforger is out !"
        description="Marshmallow tart jelly icing cotton candy tootsie roll cotton candy candy canes. Cake liquorice sesame snaps. Cupcake cake cheesecake pie marshmallow lollipop soufflé marshmallow dessert. Cheesecake jujubes halvah chupa chups lollipop tootsie roll. Jelly-o tiramisu jelly toffee cake croissant lemon drops pudding. Donut sesame snaps gummi bears toffee. Sesame snaps jelly-o oat cake chocolate marzipan cake lollipop. Gingerbread cheesecake jujubes fruitcake cake. Tiramisu cotton candy marzipan candy canes oat cake pudding bonbon."
      />
    </div>
  )
}

Home.Layout = Layout
