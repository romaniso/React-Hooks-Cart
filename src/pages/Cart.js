import React from "react";
import { useCart, useDispatchCart } from "../components/Cart";
import { ACTIONS } from "../components/Cart";
import styled from "styled-components";

const CartItemStyles = styled.article`
  display: flex;
  padding: 1.5rem;
  gap: 1.2rem;
  align-items: center;
  border-bottom: 2px solid #aaa;

  .image {
    img {
      max-width: 150px;
    }
  }

  .header {
    font-size: 1.4rem;
  }

  .desc {
    font-size: 1rem;
  }

  .price {
    color: blue;
    font-weight: 600;
  }
`;

const CartItem = ({ product, index, handleRemove }) => {
  return (
    <CartItemStyles>
      <div className="image">
        <img src={product.imageUrl} alt="" />
      </div>
      <div className="content">
        <h2 className="header">{product.title}</h2>
        <p className="desc">{product.desc}</p>
        <p className="price">${product.price}</p>
        <button onClick={() => handleRemove(index)}>Remove from cart</button>
      </div>
    </CartItemStyles>
  );
};

export default function Cart() {
  const items = useCart();
  const totalPrice = items.reduce((total, b) => total + b.price, 0);
  const dispatch = useDispatchCart();

  const handleRemove = (index) => {
    dispatch({ type: ACTIONS.REMOVE, index });
  };

  if (items.length === 0) {
    return (
      <main>
        <p>Cart is empty</p>
      </main>
    );
  }
  return (
    <main>
      <p>Total price: ${totalPrice}</p>
      {items.map((item, index) => (
        <CartItem
          key={index}
          product={item}
          index={index}
          handleRemove={handleRemove}
        />
      ))}
    </main>
  );
}
