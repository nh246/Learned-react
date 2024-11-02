
function ReviewItem(props) {
    // console.log(props)

    
    const {name, quantity} = props.product;
  return (
    <div>
        <h1 className="product_name">{name}</h1>
        <p>The Quantity: {quantity}</p>
        <br/>
        <button className="buybtn">Remove</button>
    </div>
  )
}

export default ReviewItem