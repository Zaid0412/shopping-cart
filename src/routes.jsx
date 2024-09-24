import App from "./App";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import ProductPage from "./Pages/ProductPage";
import Cart from "./Pages/Cart";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: 'shop', element: <Shop />,},
      {path: 'cart', element: <Cart />},
      {path:'shop/:productId', element: <ProductPage />}
    ]
  },

];

export default routes;
