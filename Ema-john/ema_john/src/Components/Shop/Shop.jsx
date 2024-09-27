import fakeData from "../../fakeData/products.json";
import { useState } from "react";
import './Shop.css';

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);

  console.log(first10);
  return (
    <div className="shop-container">
      <div className="product_container">
        <ul>
          {products.map((product) => (
            <li> {product.name} </li>
          ))}
        </ul>
      </div>
      <div className="cart_container">
        this is cart
      </div>
    </div>
  );
};

export default Shop;
