import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';

import { cartActions } from '../store/cart-slice';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

function ProductDetail({ product }: { product: Product }) {
  const dispatch = useDispatch();
  const onClick = (id: number, title: string, price: number, image: string) => {
    dispatch(cartActions.addCart({ id, title, price, image }));
  };

  return (
    <>
      <div>{product.title}</div>
      <Image src={product.image} alt={product.title} width={500} height={500} />
      <div>{product.description}</div>
      <div>{product.price}$</div>
      <button
        onClick={() =>
          onClick(product.id, product.title, product.price, product.image)
        }
      >
        Add to cart
      </button>
    </>
  );
}

export default ProductDetail;
