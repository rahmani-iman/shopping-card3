import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import { Provider } from 'react-redux';

// Redux
import store from './redux/store';

// Components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';

/*// Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';*/

function App() {
  return (
    <Provider store={store}>
        {/*<ProductContextProvider>
        <CartContextProvider>*/}
        <Navbar />
        <Routes>
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Store />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/*" element={<Navigate to="/products"/>} />
        </Routes>
        {/*</CartContextProvider>
        </ProductContextProvider>*/}
    </Provider>

  );
}

export default App;
