import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

function Product({ id, title, image, price }: Product) {
  return (
    <li>
      <Link href={`/product/${id}`}>
        <a>
          <div>{title}</div>
          <Image src={image} alt={title} width={200} height={200} />
          <div>{price}$</div>
        </a>
      </Link>
    </li>
  );
}

export default Product;
