import { getStoredCart } from "../../utilities/databaseManager";
import { useEffect, useState } from "react";
import fakeData from "../../fakeData/products.json";
import ReviewItem from "../Review Item/ReviewItem";
function OrderReview() {
  const [ cart, setCart ] = useState([]);
  useEffect(() => {
    const savedCart = getStoredCart();
    const productKeys = Object.keys(savedCart);
    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key]; // here this key is reffering to savedcart object key
      return product;
    });
    // console.log(cartProducts);
    setCart(cartProducts)
  }, []);

  return <div>
    <h1>Cart Items: {cart.length}</h1>
    {
      cart.map(pd => <ReviewItem product={pd} key={pd.key} ></ReviewItem>)
    }
  </div>;
}

export default OrderReview;
