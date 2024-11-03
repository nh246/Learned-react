function ReviewItem(props) {
  // console.log(props)

  const { name, quantity, key, price } = props.product;
  return (
    <div>
      <h1 className="product_name">{name}</h1>
      <p>The Quantity: {quantity}</p>
      <p>
        <small>price: {price}</small>
      </p>
      <br />

      <button className="buybtn" onClick={() => props.removeProduct(key)}>
        Remove
      </button>
    </div>
  );
}

export default ReviewItem;
