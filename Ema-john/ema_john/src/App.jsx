import "./App.css";
import Layout from "./Components/Layout";
import NotFound from "./Components/Not Found/NotFound";
import OrderReview from "./Components/Order Review/OrderReview";
import Shop from "./Components/Shop/Shop";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <div>
          <Layout />
          <Shop />
        </div>
      ),
    },
    {
      path: "/review",
      element: <OrderReview />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
