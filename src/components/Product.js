import React from "react";
import { useDispatchCart } from "./Cart";
import styled from "styled-components";
import { ACTIONS } from "./Cart";

const ProductStyles = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  padding: 1rem;
  margin: 2rem;
  border: 2px solid #aaa;
  border-radius: 5px;

  img {
    max-width: 300px;
  }

  .heading {
    display: flex;
    gap: 1rem;
  }
`;

export default function Product({ product }) {
  const dispatch = useDispatchCart();

  const addToCart = (item) => {
    dispatch({ type: ACTIONS.ADD, item });
  };

  return (
    <ProductStyles>
      <img src={product.imageUrl} alt="image of product" />
      <div className="heading">
        <h2>{product.title}</h2>
        <h2>${product.price}</h2>
      </div>
      <div className="desc">
        <p>{product.desc}</p>
      </div>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </ProductStyles>
  );
}
