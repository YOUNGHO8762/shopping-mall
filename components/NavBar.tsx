import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { CartProperty } from '../store/cart-slice';

import CartDropDown from './CartDropDown';

function NavBar() {
  const [dropDownIsOpen, setDropDownIsOpen] = useState<boolean>(false);
  const cart = useSelector(({ cart }: { cart: CartProperty }) => cart);

  const onClick = () => {
    setDropDownIsOpen((prevState) => !prevState);
  };

  return (
    <Nav>
      <Link href={'/'}>
        <a>
          <Image src="/images/home.png" alt="home" width="50px" height="50px" />
        </a>
      </Link>
      <CartWrapper onClick={onClick}>
        <Image src="/images/cart.png" alt="cart" width="50px" height="50px" />
        <Counter>{cart.totalQuantity}</Counter>
      </CartWrapper>
      {dropDownIsOpen && <CartDropDown cart={cart} />}
    </Nav>
  );
}

export default NavBar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  border-bottom: 1px solid #dddddd;
  width: 100%;
  background-color: white;
  z-index: 100;
`;

const CartWrapper = styled.div`
  position: relative;
`;

const Counter = styled.div`
  position: absolute;
  top: 10px;
  left: 25px;
`;
