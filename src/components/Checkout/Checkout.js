import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {
	collection,
	query,
	where,
	documentId,
	getDocs,
	writeBatch,
	addDoc,
} from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import MyModal from "../MyModal/MyModal";
import Form from "../Form/Form";

const Checkout = () => {
	const [loading, setLoading] = useState(false);
	const [orderId, setOrderId] = useState("");
	const { cart, totalToPay, clearCart } = useContext(CartContext);
	const navigate = useNavigate();
	const [setShow] = useState(false);
	const handleClose = () => setShow(false);

	const createOrder = async (name, phone, email) => {
		setLoading(true);
		try {
			const objOrder = {
				buyer: {
					name,
					phone,
					email,
				},
				items: cart,
				total: totalToPay,
			};

			const batch = writeBatch(db);

			const ids = cart.map((prod) => prod.id);

			const productsRef = query(
				collection(db, "ProductData"),
				where(documentId(), "in", ids)
			);
			const productsAddedToCartFromFirestore = await getDocs(productsRef);
			const { docs } = productsAddedToCartFromFirestore;

			const outOfStock = [];

			docs.forEach((doc) => {
				const dataDoc = doc.data();
				const stockDb = dataDoc.stock;

				const productAddedToCart = cart.find((prod) => prod.id === doc.id);
				const prodQuantity = productAddedToCart.qty;

				if (stockDb >= prodQuantity) {
					batch.update(doc.ref, { stock: stockDb - prodQuantity });
				} else {
					outOfStock.push({ id: doc.id, ...dataDoc });
				}
			});

			if (outOfStock.length === 0) {
				await batch.commit();

				const orderRef = collection(db, "orders");

				const orderAdded = await addDoc(orderRef, objOrder);

				const { id } = orderAdded;
				setOrderId(id);

				clearCart();

				setTimeout(() => {
					navigate("/");
				}, 6000);
			} else {
				console.error("Hay productos fuera de stock");
			}
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	if (loading) {
		return <h1 className="text-center mt-5 pt-5">Generando orden...</h1>;
	}

	if (orderId) {
		return (
			<MyModal
				show={true}
				handleClose={handleClose}
				title="ATENCION"
				body={`Su orden de compra es: ${orderId}`}
			/>
		);
	}

	return (
		<div className="text-center">
			<h1 className="mt-5 pt-5 pb-4">Checkout</h1>
			<Form createOrder={createOrder} />
		</div>
	);
};

export default Checkout;
