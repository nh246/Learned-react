import fakeData from "../../fakeData/products.json";
import Products from "../Product/Products";
function ProductDetails({ productKey }) {
  const product = fakeData.find((pd) => pd.key === productKey);
  // console.log(product);

  return (
    <div>
      <h1>This is the product key {productKey}</h1>
      <Products product={product} showAddToCart={false}></Products>
    </div>
  );
}

export default ProductDetails;
