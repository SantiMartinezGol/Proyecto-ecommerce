import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from "./components/Cart/Cart";

function App() {

  return (
    <div className="App text-center"
    style={{backgroundColor:'#FBFDEE',
    minHeight: '100vh',}} > 
        
      <BrowserRouter>
        <Navbar/> 
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Nuestros Productos'/>} />
            <Route path='/categoria/:categoryId' element={<ItemListContainer greeting='Productos por categoria'/>} />
            <Route path='/producto/:id' element={<ItemDetailContainer/>} /> 
            <Route path='/cart' element={<Cart/>}/> 
          </Routes>
       {/* <Footer/>   */}   
      </BrowserRouter>
    </div>   
  );
}

export default App;
