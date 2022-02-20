import React from 'react';
import Product from '../components/Product';

interface Products {
  products: ProductItems[];
}

interface ProductItems {
  id: number;
  title: string;
  image: string;
  price: number;
}

function Products({ products }: Products) {
  return (
    <ul>
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
        />
      ))}
    </ul>
  );
}

export default Products;
