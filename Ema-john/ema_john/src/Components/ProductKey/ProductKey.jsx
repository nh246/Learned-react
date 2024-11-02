import { useParams } from "react-router-dom";
import ProductDetails from "../Product  Details/ProductDetails";
function ProductKey() {
  const { productKey } = useParams();


  return (
    <div>
      <ProductDetails productKey={productKey}></ProductDetails>
    </div>
  );
}

export default ProductKey;
