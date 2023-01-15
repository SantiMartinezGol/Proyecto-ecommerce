import { Link } from "react-router-dom";
const CartWidget = () => {
    return( 
            <Link to='/cart' className='Cart float-start' >
                <img src="../../Images/icon.svg" alt="cart-widget"/>
                <button className="btn btn-light rounded-circle" style={{position: 'relative',bottom: '25px', right: '15px'}} >
                0
                </button>
            </Link>    
    )
}

export default CartWidget;