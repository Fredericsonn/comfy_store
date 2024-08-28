import React from "react";
import { FeaturedProducts, Hero } from "../components";
import client from "../utils/index";

const url = '/products?featured=true';

const featuredProductsQuery = {
  queryKey: ['featured products'],
  queryFn: () => client.get(url)
}
export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
  const products = response.data.data;
  return products;
}

const Landing = () => {
  return <>
    <Hero />
    <FeaturedProducts />
  </>
};

export default Landing;