import React from "react";
import client from '../utils';
import { useLoaderData } from "react-router-dom";
import {Filters, ProductsContainer, Pagination} from "../components";

const url = '/products';

const productsQuery = (params) => {
  const { search, category, company, sort, price, shipping, page } = params;

  return {
    queryKey: [
      'products',
      search ?? '',
      category ?? 'all',
      company ?? 'all',
      sort ?? 'a-z',
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () =>
      client(url, {
        params
      }),
  };
};

export const loader = (queryClient) => async ({request}) => {
  const params = Object.fromEntries([...new URL(request.url).searchParams]);  
  const response = await queryClient.ensureQueryData(productsQuery(params));
  const products = response.data.data;
  const meta = response.data.meta;
  return {products, meta, params};
}
const Products = () => {
  const {meta} = useLoaderData();
  const total = meta.pagination.total;
    return (
      <>
        <Filters />
        {total > 0 ? <ProductsContainer /> : <h1 className="text-3xl mt-6">Sorry, no products matched your search...</h1>}
        <Pagination />
      </>
    )
  };

export default Products;