import fakeData from "../../fakeData/products.json";
import { useState } from "react";
import "./Shop.css";
import Products from "../Product/Products";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);

  console.log(first10);
  return (
    <div className="shop-container">
      <div className="product_container">
        {/* Here product is passing dynamic value of products state by mapping with pdata variable */}
        {products.map((pdata) => (
          <Products product={pdata}></Products>
        ))}
      </div>
      <div className="cart_container">this is cart</div>
    </div>
  );
};

export default Shop;
