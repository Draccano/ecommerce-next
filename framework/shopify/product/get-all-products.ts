
import { ProductConnection } from "../schema";
import fetchApi from "../utils/fetch-api";
import getAllProductsQuery from "../utils/queries/get-all-products";

type ReturnType = {
    products: ProductConnection
}

const getAllProducts = async (): Promise<any> => {
    const {data} = await fetchApi<ReturnType>({
      query: getAllProductsQuery,
    });
    const products = data.products.edges.map(({ node: product }) => {
      return product
    }) ?? [];
    // normalize and return new data!

    return products;
}

export default getAllProducts