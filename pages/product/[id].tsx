import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';

import ProductDetail from '../../components/ProductDetail';

interface Props {
  product: Product;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const Detail: NextPage<Props> = ({ product }) => {
  return (
    <>
      <ProductDetail product={product} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await (await fetch('https://fakestoreapi.com/products')).json();

  const paths = res.map(({ id }: any) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await (
    await fetch(`https://fakestoreapi.com/products/${params!.id}`)
  ).json();

  const { id, title, price, description, image } = res;

  const product = { id, title, price, description, image };

  return {
    props: {
      product,
    },
  };
};
export default Detail;
