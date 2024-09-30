import fakeData from "../../fakeData/products.json";
import { useState } from "react";
import "./Shop.css";
import Products from "../Product/Products";
import Card from "../Card/Card"

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    const newCart = [...cart,product]
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="product_container">
        {/* Here product is passing dynamic value of products state by mapping with pdata variable */}
        {products.map((pdata) => (
          <Products
            // sending the handleAddProduct function with props

            handleAddProduct={handleAddProduct}
            product={pdata}
          ></Products>
        ))}
      </div>
      <div className="cart_container">
        <Card
        cart = {cart}
        ></Card>
      </div>
    </div>
  );
};

export default Shop;
