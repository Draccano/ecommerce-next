
import getAllProducts from "@framework/product/get-all-products";
import type { InferGetStaticPropsType } from "next";

export async function getStaticProps() { // renders in the server, not visible request
  const products = await getAllProducts();

  return {
    props: {
      products
    },
    revalidate: 4 * 60 *60 //after 4h revalidate all products
  }
}

 

export default function Home({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{JSON.stringify(products)}</div>;
}
