import React from "react";
import Product from "../components/Product";
import RedTShirtImg from "../images/red-t-shirt.png";
import BlackTShirtImg from "../images/black-t-shirt.png";
import CapImg from "../images/cap.png";
import JeansImg from "../images/jeans.png";

const products = [
  {
    id: "1",
    title: "Red T-Shirt",
    price: 200,
    imageUrl: RedTShirtImg,
    desc: "A nice red t-shirt right for you! Try it on!",
  },
  {
    id: "2",
    title: "Black T-Shirt",
    price: 240,
    imageUrl: BlackTShirtImg,
    desc: "A nice black t-shirt right for you! Try it on!",
  },
  {
    id: "3",
    title: "Cool Cap",
    price: 79,
    imageUrl: CapImg,
    desc: "A nice cap right for you! Try it on!",
  },
  {
    id: "4",
    title: "Awesome jeans",
    price: 320,
    imageUrl: JeansImg,
    desc: "Nice jeans right for you! Try it on!",
  },
];

export default function Store() {
  return (
    <main
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </main>
  );
}
