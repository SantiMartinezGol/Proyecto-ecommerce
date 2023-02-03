import uparrow from './up_arrow.svg';
import downarrow from './down_arrow.svg';
import trash from './trash.svg';
import {useState, useContext} from 'react';
import { CartContext } from '../../context/CartContext';


const ItemCountCart = ({onAdd, prod}) => {

    const [count,setCount]= useState(prod.qty);
    const {addItem, removeItem} = useContext (CartContext)
    const newProduct = ({...prod})

    const sumar = () => {
        if(count < prod.stock) {
            setCount(prev => prev+ 1 )
        }
    }
    const restar = () => {
        if(count > 1){
            setCount(prev =>prev-1)
        }
    }

        //Habilita contador con stock positivo
        return (
            <div className='d-flex justify-content-center mt-5 px-5 fw-bold' >
                <div className='d-flex flex-column align-items-center'>
                    <div className='d-flex'>
                        <button 
                            className="buttons rounded-start" 
                            style={{width: '30px'}}
                            type='button' 
                            onClick={restar}                      
                        >   
                            <img src={downarrow} 
                                style={{
                                    position: 'relative',
                                    right: '5px',
                                    width: '24px',
                                    height: '24px'}}
                                alt='Restar' />
                        </button> 
                        <div style={{
                                width: '85px',
                                height: 'auto',
                                border: '2px solid black'}}
                            >
                            <h4 className='text-center fw-bold pt-1'>{count}</h4>
                        </div>     
                        <button 
                            className='buttons rounded-end'
                            style={{width: '30px'}}
                            type='button' 
                            onClick={sumar}                       
                        >
                            <img src={uparrow} 
                                style={{
                                    position: 'relative',
                                    right: '5px',
                                    width: '24px',
                                    height: '24px'}}
                                alt="logo" />
                        </button>
                    </div>
                        <button 
                            type='submit'
                            style={{color:'white'}}
                            className='btn btn-warning fw-bold mt-1 px-4'
                            onClick={()=> {
                                newProduct.qty= count
                                addItem(newProduct)}}  
                        >
                            Modificar
                        </button>
                </div>
                <div className='ms-4' onClick={(id)=> removeItem(prod.id)}>
                        <img src={trash} alt="asda" style={{
                            width: "43px"}} />
                </div>
            </div> 
        )
}
export default ItemCountCart