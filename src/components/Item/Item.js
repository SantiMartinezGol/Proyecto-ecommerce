import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Item = (prod) => {

const navigate= useNavigate()
    
  return (
   
    <div className='p-3 mt-5 mb-5'
      key={prod.id} 
      onClick={() => navigate(`/producto/${prod.id}`)}
      style={{
        cursor:'pointer', 
        backgroundColor:'white',
        boxShadow:'-6px 7px 14px 1px #8C8C8C'}} > 
      
      <div className='d-inline-block me-2'>  
        <img  
          src={prod.pictureURL}          
          alt={prod.title} 
          style={{width:'200px',
          height:'200px' 
        }}/>
      </div>
      <div className='d-inline-flex w-75' style={{placeItems:'stretch', flexWrap:'wrap', minHeigth:'200px'}} >
        <div className='text-start px-5'>
          <h2>{prod.title}</h2>
          <h5>Categoria: {prod.categoryId}</h5>
        </div>
        <div className='text-end '
        style={{marginLeft:'auto'}}>
          <h5>Precio: ${prod.price}</h5>
          <h5>Stock: {prod.stock}</h5>
        </div>
      </div>
      
      <NavLink 
        to ={`/producto/${prod.id}`} 
        className='d-block btn btn-warning ' 
        style={{margin:'auto', width:'32%'}}>Ver Detalle
      </NavLink>
    </div>   
  )
}

export default Item


