import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "./Cart";
import styled from "styled-components";

const HeaderStyles = styled.header`
  background-color: black;
  color: #fff;
  min-height: 90px;

  ul {
    padding: 2rem;
    display: flex;
    gap: 2rem;

    li {
      text-transform: uppercase;
    }
  }
`;

export default function Header() {
  const items = useCart();
  return (
    <HeaderStyles>
      <ul>
        <li>
          <NavLink to="/">Store</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart ({items.length})</NavLink>
        </li>
      </ul>
    </HeaderStyles>
  );
}
