import "./Procucts.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons' 
import {Link} from "react-router-dom"
function Products(props) {

  // console.log(props)
  const { img, name, seller, price, stock ,key } = props.product;
  return (
    <div className="product">
      {/* Here the props is the objects containing the product which we have gained by using map in Products page */}

      <div>
        <img src={img} alt="This is product" />
      </div>
      <div>
        {/* i am giving dynamic key as a url each time  */}
        <h4 className="product_name"><Link to={"/product/"+key} >{name}</Link></h4>
        <br />
        <p>
          <small>by: {seller}</small>
        </p>
        <p>${price}</p>

        <p>
          <small>Only {stock} left in stock - Order soon.</small>
        </p>
        {/* you need an arrow fumction if you want to pass any value with in an function parameter else it will execute automaticelly  */}
        
        {props.showAddToCart === true &&   <button className="buybtn" onClick={()=> props.handleAddProduct(props.product)} ><FontAwesomeIcon icon={faCartShopping} /> add to cart</button>}
      </div>
    </div>
  );
}

export default Products;
