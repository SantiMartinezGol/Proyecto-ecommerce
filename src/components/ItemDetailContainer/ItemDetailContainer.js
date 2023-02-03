import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {getDoc, doc} from 'firebase/firestore';
import {db } from '../../services/firebase/firebaseConfig';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';

const ItemDetailContainer = () => {

  const {id} = useParams() 
  const [product, setProduct] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
     setLoading(true)
    const productRef = doc(db, 'ProductData',id)
    getDoc(productRef).then(doc => {
      const dataProduct = doc.data()
      const productAdapted = { id: doc.id, ...dataProduct }
      setProduct(productAdapted) 
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
        <h1 className='my-5 pt-5 text-center'>Detalle del producto</h1>
        <ItemDetail {...product}/>        
    </div>
  )
}

export default ItemDetailContainer