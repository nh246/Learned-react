
import { useParams } from 'react-router-dom';
function ProductKey() {
    const { productKey } = useParams();  return (
    <div>
       <h1>This is the product key {productKey}</h1>
    </div>
  )
}

export default ProductKey