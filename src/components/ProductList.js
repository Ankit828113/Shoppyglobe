import React from 'react';
import ProductItem from './ProductItem';
import useFetch from '../hooks/useFetch';

const ProductList = () => {
  const { data: products, error } = useFetch('https://dummyjson.com/products');

  if (error) return <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 text-red-500 text-3xl">Error fetching products: {error.message}</div>;
  if (!products) return <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 text-black text-3xl">Loading...</div>;

  return (
    <div className=" bg-sky-100 mx-auto pt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:px-32 py-8 p-4">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
