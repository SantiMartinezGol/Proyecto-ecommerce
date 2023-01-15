//import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const ItemG = (prod) => {

    /* const navigate = useNavigate() */

  return (
    <div className='m-3  p-4'
      key= {prod.id}
      /* onClick={() => navigate(`/producto/${prod.id}`)} */
      style= {{
        cursor:'pointer',
        backgroundColor:'white',
        boxShadow:'-6px 7px 14px 1px #8C8C8C'}}>

      <div className='d-block mb-1'>  
        <img src={prod.pictureURL} 
          alt={prod.title} 
          style={{width:'100%', margin:'auto'}}
        />
      </div>
      <div className='text-start px-3' >
        <h4>{prod.title}</h4>
        <h6>Categoria:  {prod.categoryId}</h6>
      </div>
      <div className='text-end px-3 mt-2'>
        <h6>Precio: ${prod.price}</h6>
        <h6>Stock:  {prod.stock}</h6>
      </div>
      <NavLink 
        to ={`/producto/${prod.id}`} 
        className='btn btn-warning w-50 mt-3' 
        style={{margin:'auto'}}>Ver Detalle
      </NavLink>
    </div>
  )
}

export default ItemG


