import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import CartContextProvider from './components/CartContext';
import Cart from './components/Cart';

const App = () => {

  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:idCategory' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;