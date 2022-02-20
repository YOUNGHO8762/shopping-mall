import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { cartActions, Product } from '../store/cart-slice';

function CartItem({ item }: { item: Product }) {
  const dispatch = useDispatch();

  const onRemoveClick = (id: number) => {
    dispatch(cartActions.removeCart(id));
  };

  const onIncreaseClick = (id: number) => {
    dispatch(cartActions.increaseQuantity(id));
  };

  const onDecreaseClick = (id: number) => {
    if (item.quantity === 1) return;
    dispatch(cartActions.decreaseQuantity(id));
  };
  return (
    <li>
      <Image src={item.image} alt={item.title} height={80} width={80} />
      <span> Name : {item.title}</span>
      <button onClick={() => onDecreaseClick(item.id)}>-</button>
      <span> Quantity : {item.quantity}</span>
      <button onClick={() => onIncreaseClick(item.id)}>+</button>
      <span> Price : {item.price}$</span>
      <button onClick={() => onRemoveClick(item.id)}>Remove</button>
    </li>
  );
}

export default CartItem;
