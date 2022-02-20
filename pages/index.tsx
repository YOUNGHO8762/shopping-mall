import type { GetStaticProps, NextPage } from 'next';
import Products from '../components/Products';

interface Props {
  products: Product[];
}

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Home: NextPage<Props> = ({ products }) => {
  return (
    <>
      <Products products={products} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await (await fetch('https://fakestoreapi.com/products')).json();

  const products = res.map(({ id, title, image, price }: Product) => ({
    id,
    title,
    image,
    price,
  }));

  return {
    props: {
      products,
    },
  };
};
export default Home;
