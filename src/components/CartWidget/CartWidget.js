import { Link } from "react-router-dom";

const CartWidget = ({totalProductsAdded}) => {
    return( 
            <Link to='/cart' className='Cart' >
                <img src="../../Images/icon.svg" alt="cart-widget"/>
                <button className="btn btn-light rounded-circle" style={{position: 'relative',bottom: '25px', right: '15px'}} >
                {totalProductsAdded}
                </button>
            </Link>    
    )
}

export default CartWidget;