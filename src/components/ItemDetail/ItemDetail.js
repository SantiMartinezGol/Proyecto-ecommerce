import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({id,title,price,pictureURL,categoryId,stock,description,amount }) => {

    const [qty, setQty] = useState(0)

    const handleOnAdd = (qty) => {
    setQty(parseInt(qty))
    console.log('Se agregaron '+ qty + ' productos al carrito') 
    }

    return (  
        <>
            <div className='container d-flex flex-row justify-content-around pt-5 mt-5'          
                style={{
                    backgroundColor:'#FBFDEE',
                    width:'80%' }}>
                <div className='p-2'
                    style={{
                        boxShadow:'-6px 7px 14px 1px #8C8C8C'}}
                >
                    <img src={pictureURL} alt={title}  />
                </div>
                <div className='p-2' style={{width:'auto'}}>  
                    <h1 className='ms-3 py-4'>{title}</h1>
                    <h3 className='py-3'>Precio: $ {price}</h3>
                    <h4 className='py-3'>Categoria:{categoryId}</h4>
                    <h4 className='py-3'>Stock:{stock}</h4>
                    <br/>                
                </div> 
            </div> 
            <div className='p-3'>
                {(qty > 0) ? (
                    <div className='p-4'>
                    <Link className='btn btn-danger m-5' to='/cart'>Terminar compra</Link>
                    <Link className='btn btn-danger m-5' to='/'>Seguir comprando</Link>
                    </div>                   
                ):(
                    <ItemCount 
                        className='d-block mb-5'  
                        style={{margin:'auto' }}
                        onAdd={handleOnAdd}
                        stock={stock}/>)}
                        <br/>    
                <p className='m-5 px-5 pb-3'>Descripcion: {description}</p>             
            </div>
        </>           
    )
}
export default ItemDetail