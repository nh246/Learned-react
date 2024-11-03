import { getStoredCart, removeFromDb,clearTheCart } from "../../utilities/databaseManager";
import { useEffect, useState } from "react";
import fakeData from "../../fakeData/products.json";
import ReviewItem from "../Review Item/ReviewItem";
import Card from "../Card/Card";
import success from "../../assets/images/giphy.gif"
function OrderReview() {
  const [cart, setCart] = useState([]);
  const [orderPlased , setOrderPlased] = useState(false)

  const handlePlaceOrder = ()=>{
    setCart([])
    clearTheCart()
    setOrderPlased(true)
  }

  useEffect(() => {
    const savedCart = getStoredCart();
    const productKeys = Object.keys(savedCart);
    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key]; // here this key is reffering to savedcart object key
      return product;
    });
    // console.log(cartProducts);
    setCart(cartProducts);
  }, []);


  let thanks;
  if (orderPlased) {
    thanks = <img src={success} />
  }

  const removeProduct = (productKey) => {
    // console.log("clicked removed product" , productKey)
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDb(productKey);
  };

  return (
    <div className="all-container">
      <div className="product_container">
        {cart.map((pd) => (
          <ReviewItem
            product={pd}
            key={pd.key}
            removeProduct={removeProduct}
          ></ReviewItem>
        ))}
        {
thanks
        }
      </div>
      <div>
        <Card cart={cart} >
          <button className="buybtn"  onClick={handlePlaceOrder} >Place Order</button>
        </Card>
      </div>
    </div>
  );
}

export default OrderReview;
