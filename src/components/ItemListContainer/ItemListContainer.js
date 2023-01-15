import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts,getProductsByCategory } from '../asyncMock';
import grid from './Grid.svg'
import list from './List.svg'
import ItemList from '../ItemList/ItemList';
import ItemGrid from '../ItemGrid/ItemGrid';
import Spinner from '../Spinner/Spinner';

const ItemListContainer = ({greeting}) => {
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [displayT, setDisplayT] = useState(false); 
    const [iconUrl, setIconUrl] = useState(grid)
    const [tipo, setTipo] = useState('Grid')

    var {categoryId}= useParams();
    if(categoryId){categoryId=categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}    
   
    useEffect(() => {
        setLoading(true);
        const asyncFunction = categoryId ? getProductsByCategory : getProducts;
       
        asyncFunction(categoryId).then(products =>{
            setProducts(products)
            }).catch(error => {
                setError(true)
            }).finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    const handleGrid =()=>{
        setDisplayT(!displayT)
        if (displayT){
            setIconUrl(grid);
            setTipo('Grid')
        }else{
            setIconUrl(list);
            setTipo('List')
        }   
    }
    if(loading) { return (<Spinner />)}   
    if(error){return (<h2 className='fw-bold text-center pb-5'>El servidor no responde. Intente mas tarde</h2>)}

        return(
            <div className='ItemListContainer' 
                style={{paddingLeft:'12%', paddingRight:'12%',margin:'auto'}}>
                <h1 className='fw-bold text-center mt-5 pb-3'>{greeting}</h1>
                <div style={{position:'relative'}}>               
                    <img 
                        className='d-block text-end position-absolute top-0 end-0'
                        style={{height:'40px', width:'auto', marginBottom:'150px'}} 
                        src={iconUrl}
                        onClick={handleGrid} 
                        alt={tipo}  />
                </div>
                {(tipo==='List')? <ItemList products={products}/>:<ItemGrid products={products}/>}
            </div> )   
}
export default ItemListContainer;
