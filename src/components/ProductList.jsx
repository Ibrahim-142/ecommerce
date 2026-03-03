import { products } from "../data/products";
import Card from "./Card";

const ProductList = () => {
  return (
    <>
      {products.map((product) => (
        <Card
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          description={product.description}
        />
      ))}
    </>
  );
};

export default ProductList;