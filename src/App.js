import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App text-center">
       <Navbar/>  
       <ItemListContainer greeting='Bienvenidos a Enchilados'/>  
    </div>
  );
}

export default App;
