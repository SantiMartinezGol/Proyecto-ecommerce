import { Link } from "react-router-dom";

const CartWidget = ({ totalProductsAdded }) => {
	return (
		<Link to="/cart" className="Cart">
			<img src="https://firebasestorage.googleapis.com/v0/b/enchilados-8d161.appspot.com/o/icon.svg?alt=media&token=d95b1beb-c7ea-47b7-9a7e-6f9631ac18ba" alt="cart-widget" />
			<button
				className="btn btn-light rounded-circle"
				style={{ position: "relative", bottom: "25px", right: "15px" }}
			>
				{totalProductsAdded}
			</button>
		</Link>
	);
};

export default CartWidget;
