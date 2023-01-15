import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { getProductsById } from '../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';

const ItemDetailContainer = () => {

  const {id} = useParams()
  const [product, setProduct] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    getProductsById(id).then(prod =>{
    setProduct(prod)
    
    }).catch(error => {
        setError(true)

    }).finally(() => {
        setLoading(false)
        
    })
  }, [id]) 

  if(loading){return <Spinner/>} 
  if(error){return (<h2 className='fw-bold text-center'>El servidor no responde. Intente mas tarde</h2>)}
    
  return(
    <div>
        <h2 className='my-4 text-center'>Detalle del producto</h2>
        <ItemDetail {...product}/>        
    </div>
  )
}

export default ItemDetailContainer