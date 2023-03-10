import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
	const { totalProductsAdded } = useContext(CartContext);

	return (
		<nav className="Navbar bg-warning bg-gradient pt-4">
			<Link to="/" className="float-start">
				<img src="https://firebasestorage.googleapis.com/v0/b/enchilados-8d161.appspot.com/o/logo.png?alt=media&token=b4657bfb-3e12-43b4-9242-86b4b190982f" alt="logo" />
			</Link>
			<div className="d-flex pt-5 pb-4  justify-content-around align-items-center">
				<NavLink
					to={`/categoria/picantes`}
					className={({ isActive }) =>
						isActive ? "btn btn-danger px-5" : "btn btn-dark px-4"
					}
				>
					Picantes
				</NavLink>
				<NavLink
					to={`/categoria/snacks`}
					className={({ isActive }) =>
						isActive ? "btn btn-danger px-5" : "btn btn-dark px-4"
					}
				>
					Snacks
				</NavLink>
				<NavLink
					to={`/categoria/salsas`}
					className={({ isActive }) =>
						isActive ? "btn btn-danger px-5" : "btn btn-dark px-4"
					}
				>
					Salsas
				</NavLink>
				<CartWidget totalProductsAdded={totalProductsAdded} />
			</div>
		</nav>
	);
};
export default Navbar;
