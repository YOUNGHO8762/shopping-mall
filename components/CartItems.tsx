import { useSelector } from 'react-redux';
import { CartProperty, Product } from '../store/cart-slice';
import CartItem from './CartItem';

function CartItems() {
  const cart = useSelector(({ cart }: { cart: CartProperty }) => cart);
  return (
    <ul>
      {cart.items.map((item: Product) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default CartItems;
