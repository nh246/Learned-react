import "./Procucts.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
function Products(props) {
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product">
      {/* Here the props is the objects containing the product which we have gained by using map in Products page */}

      <div>
        <img src={img} alt="This is product" />
      </div>
      <div>
        <h4 className="product_name">{name}</h4>
        <br />
        <p>
          <small>by: {seller}</small>
        </p>
        <p>${price}</p>

        <p>
          <small>Only {stock} left in stock - Order soon.</small>
        </p>
        <button className="buybtn"><FontAwesomeIcon icon={faCartShopping} /> add to cart</button>
      </div>
    </div>
  );
}

export default Products;
