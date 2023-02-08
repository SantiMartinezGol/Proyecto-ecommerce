import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";
import { useAsync } from "../../hooks/useAsync";
import { getProductById } from "../../services/firebase/firestore/products";

const ItemDetailContainer = () => {
	const { id } = useParams();

	const {
		data: product,
		error,
		loading,
	} = useAsync(() => getProductById(id), [id]);

	if (loading) {
		return <Spinner />;
	}
	if (error) {
		return (
			<h2 className="fw-bold text-center">
				El servidor no responde. Intente mas tarde
			</h2>
		);
	}

	return (
		<div>
			<h1 className="my-5 pt-5 text-center">Detalle del producto</h1>
			<ItemDetail {...product} />
		</div>
	);
};

export default ItemDetailContainer;
