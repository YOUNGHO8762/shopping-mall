import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { CartProperty } from '../store/cart-slice';

import CartItems from '../components/CartItems';

const Cart: NextPage = () => {
  const cart = useSelector(({ cart }: { cart: CartProperty }) => cart);

  return (
    <>
      <CartItems />
      <div>Total Quantity : {cart.totalQuantity}</div>
      <div>Total Price : {cart.totalPrice}$</div>
    </>
  );
};

export default Cart;
