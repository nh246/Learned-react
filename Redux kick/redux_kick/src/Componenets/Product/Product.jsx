
function Product(props) {

  

  return (
    <div style={{
      backgroundColor: '#f2f2f3',
      padding: '20px',
      border: '1px solid #ccc'
    }} >
      <h5>{props.product.name}</h5>
      <button>add to cart</button>
    </div>
  )
}

export default Product