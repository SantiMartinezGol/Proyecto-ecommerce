import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemCart from "./components/ItemCart/ItemCart";
import { CartProvider } from "./context/CartContext";
import Checkout from "./components/Checkout/Checkout";

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/> 
        <Routes>
            <Route path='/' element={<ItemListContainer greeting='Nuestros Productos'/>} />
            <Route path='/categoria/:categoryId' element={<ItemListContainer greeting='Productos por categoría'/>} />
            <Route path='/producto/:id' element={<ItemDetailContainer/>} /> 
            <Route path='/cart' element={<ItemCart/>}/> 
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>   
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
