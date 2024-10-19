import "./App.css";
import Layout from "./Components/Layout";
import NotFound from "./Components/Not Found/NotFound";
import OrderReview from "./Components/Order Review/OrderReview";
import ProductKey from "./Components/ProductKey/ProductKey";
import Shop from "./Components/Shop/Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Shop />} />
          <Route path="shop" element={<Shop />} />
          <Route path="review" element={<OrderReview />} />
          <Route path="product/:productKey" element={<ProductKey />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
