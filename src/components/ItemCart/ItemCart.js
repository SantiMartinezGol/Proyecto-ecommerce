import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import ItemCarro from "../Item/ItemCarro"; 
import MyModal from "../MyModal/MyModal";

const ItemCart= () => {
    const navigate = useNavigate()
    const {cart, totalToPay,clearCart} = useContext(CartContext)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (<>
    <div className='div-list'> 
    <h1 className=" text-center my-5 pt-5 mb-5"
     > Carrito de compra</h1>
      {cart.map(prod=>         
          <ItemCarro key={prod.id} {...prod}/>   
      )}
    <h2 className="text-center my-5" > Total: ${totalToPay}</h2> 
    </div>
       <div className= "text-center mt-4">
       <button style={{color: 'white'}} className="btn btn-warning fw-bold mx-3 px-4" onClick ={()=>navigate("/")}>Seguir Comprando</button>
       <button style={{color: 'white'}} className="btn btn-warning fw-bold mx-3 px-4" onClick={clearCart}>Vaciar Carrito</button>
       <button style={{color: 'white'}} className="btn btn-warning fw-bold mx-3 px-4"
       onClick={()=>
        (cart.length===0)?(handleShow()):(navigate('/checkout'))
       }
       >Terminar Compra</button>
       <MyModal show={show} handleClose={handleClose} title='ATENCION' body='No hay productos en su carrito'
            save='Ok'/>
   </div> </>
  )
}  
 
export default ItemCart