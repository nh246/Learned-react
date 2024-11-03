import "./Card.css";
function Card(props) {
  const cart = props.cart;

  const total = cart.reduce((total, prd) => total + prd.price * prd.quantity, 0);
  // or
  //let total = 0;
  // for(let i =0; i<cart.length ; i++ ){
  //     const product = cart[i];
  //      total += product.price;
  // }

  //   shippingcost
  let shippingCost = 0;
  if (total > 35) {
    shippingCost = 0;
  } else if (total > 15) {
    shippingCost = 5.99;
  } else if (total > 0) {
    shippingCost = 12.99;
  }
  //   tax
  let estimatedTax = (total / 10).toFixed(2);

  // All total
  let allTotal = (total + shippingCost + Number(estimatedTax)).toFixed(2);
  return (
    <div>
      <h3>Order Summary</h3>
      <p>Items ordered: {cart.length}</p>
      <p>Product Price: {total.toFixed(3)}</p>
      <p>
        <small>Spipping Cost:{shippingCost}</small>
      </p>
      <p>Estimated Tax:{estimatedTax}</p>
      <p>Total price:{allTotal}</p>
      <br/>
      {
        props.children
      }
    </div>
  );
}

export default Card;
