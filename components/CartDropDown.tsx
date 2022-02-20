import Link from 'next/link';
import styled from 'styled-components';

import { CartProperty, Product } from '../store/cart-slice';

function CartDropDown({ cart }: { cart: CartProperty }) {
  return (
    <Container>
      <ul>
        {cart.items.map((item: Product) => (
          <li key={item.id}>
            <span>{item.title} : </span>
            <span>{item.quantity}</span>
          </li>
        ))}
      </ul>
      <div>Total Quantity : {cart.totalQuantity}</div>
      <div>Total Price : {cart.totalPrice}$</div>
      <Link href={'/cart'}>
        <a>
          <button>Proceed To Checkout</button>
        </a>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 55px;
  right: 0px;
  background-color: #dddddd;
`;

export default CartDropDown;
