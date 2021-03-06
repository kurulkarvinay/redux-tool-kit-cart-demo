import { useSelector } from "react-redux";
import Layout from "./components/UI/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products";

function App() {
  const showCart = useSelector(state => state.ui.cartIsVisisble);
  return (
    <Layout>
      { showCart && <Cart /> }
      <Products />
    </Layout>
  );
}

export default App;
