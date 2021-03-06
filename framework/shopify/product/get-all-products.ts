
import { ApiConfig } from '@common/types/api';
import { Product } from '@common/types/product';
import { ProductConnection } from "../schema";
import fetchApi, { getAllProductsQuery, normalizeProduct } from '../utils';

type ReturnType = {
    products: ProductConnection
}

const getAllProducts = async (config: ApiConfig): Promise<Product []> => {
  const { data } = await fetchApi<ReturnType>({
    url: config.apiUrl,
    query: getAllProductsQuery,
  });
  const products =
    data.products.edges.map(({ node: product }) => {
      return normalizeProduct(product);
    }) ?? [];
  // normalize and return new data!

  return products;
};

export default getAllProducts