import fakeData from "../../fakeData/products.json";
import { useState, useEffect } from "react";
import "./Shop.css";
import Products from "../Product/Products";
import Card from "../Card/Card";
import { addToDb, getStoredCart } from "../../utilities/databaseManager";
import { Link } from "react-router-dom";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = getStoredCart();
    const productKeys = Object.keys(savedCart);
    const proviousCart = productKeys.map((existingKey) => {
      const product = fakeData.find((pd) => pd.key === existingKey);
      product.quantity = savedCart[existingKey];
      return product
    });
    setCart(proviousCart);
  }, []);

  const handleAddProduct = (product) => {
    const toBeAdded = product.key;
    const sameProduct = cart.find((pd) => pd.key === toBeAdded);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd.key !== toBeAdded);
      newCart = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);

    addToDb(product.key, count);
  };

  return (
    <div className="all-container">
      <div className="product_container">
        {/* Here product is passing dynamic value of products state by mapping with pdata variable */}
        {products.map((pdata) => (
          <Products
            // sending the handleAddProduct function with props
            key={pdata.key}
            showAddToCart={true}
            handleAddProduct={handleAddProduct}
            product={pdata}
          ></Products>
        ))}
      </div>
      <div className="cart_container">
        <Card cart={cart}>
        <Link to={"/review"} > <button className="buybtn" >Review Order</button> </Link>

        </Card>
      </div>
    </div>
  );
};

export default Shop;
