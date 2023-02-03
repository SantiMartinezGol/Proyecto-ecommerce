import uparrow from './up_arrow.svg';
import downarrow from './down_arrow.svg';
import {useState} from 'react';

const ItemCount = ({stock, onAdd}) => {

    const [count,setCount]= useState(1);

    const sumar = () => {
        if(count < stock) {
            setCount(prev => prev+ 1 )
        }
    }
    const restar = () => {
        if(count > 1){
            setCount(prev =>prev-1)
        }
    }

    if (stock!==0){
        //Habilita contador si el stock es stock positivo
        return (
            <div className='d-flex justify-content-center mt-5 px-5 fw-bold' >
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
                    <button 
                        type='submit'
                        className='btn btn-warning fw-bold px-4'
                        style={{
                            color: 'white',
                            marginLeft: '50px'}}
                        onClick={()=>onAdd(count)}  
                    >
                        Agregar al carrito
                    </button>   
            </div> 
        )
    }else{
        //Muestra boton Sin Stock
        return(
            <button 
                type='button'
                className="d-block mx-auto mt-5 px-5 btn btn-warning fw-bold"
                style={{
                    borderRadius: '5px',
                    color: 'white'}}
            >  Sin Stock
            </button>  
        )         
    }
}
export default ItemCount