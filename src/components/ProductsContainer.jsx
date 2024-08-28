import { useLoaderData } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";

const ProductsContainer = () => {
  const {meta} = useLoaderData();
  const totalPages = meta.pagination.total;
  const headerText = totalPages + " product";
  return (
    <>
        {/* HEADER */}
        <div className="flex items-center mt-8 border-b border-base-300 pb-5">
            <h4 className="text-md font-medium">
                {totalPages > 1 ? headerText + 's' : headerText} 
            </h4>
        </div>
        {/* PRODUCTS */}
        <ProductsGrid />
    </>
  )
}

export default ProductsContainer;