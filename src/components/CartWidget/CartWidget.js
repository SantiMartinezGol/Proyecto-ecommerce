import './CartWidget.css'

const CartWidget = () => {
    return( 
        <div className="Cart">
            <img src="./images/icon.svg" alt="cart-widget"/>
            <button className="NumCarro btn btn-light rounded-circle">
                0
            </button>
            
        </div>     
    )
}

export default CartWidget;