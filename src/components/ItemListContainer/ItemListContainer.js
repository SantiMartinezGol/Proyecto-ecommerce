import { useState } from "react";
import { useParams } from "react-router-dom";
import grid from "./Grid.svg";
import list from "./List.svg";
import ItemList from "../ItemList/ItemList";
import ItemGrid from "../ItemGrid/ItemGrid";
import Spinner from "../Spinner/Spinner";
import { getProducts } from "../../services/firebase/firestore/products";
import { useAsync } from "../../hooks/useAsync";

const ItemListContainer = ({ greeting }) => {
	const [displayT, setDisplayT] = useState(false);
	const [iconUrl, setIconUrl] = useState(grid);
	const [tipo, setTipo] = useState("Grid");

	var { categoryId } = useParams();

	if (categoryId) {
		categoryId = categoryId.charAt(0).toUpperCase() + categoryId.slice(1);
	}

	const getProductsWithCategory = () => getProducts(categoryId);

	const {
		data: products,
		error,
		loading,
	} = useAsync(getProductsWithCategory, [categoryId]);

	if (loading) {
		return <Spinner />;
	}
	if (error) {
		return (
			<h2 className="fw-bold text-center pb-5">
				El servidor no responde. Intente mas tarde
			</h2>
		);
	}

	const handleGrid = () => {
		setDisplayT(!displayT);
		if (displayT) {
			setIconUrl(grid);
			setTipo("Grid");
		} else {
			setIconUrl(list);
			setTipo("List");
		}
	};

	return (
		<div
			className="ItemListContainer"
			style={{ paddingLeft: "12%", paddingRight: "12%", margin: "auto" }}
		>
			<h1 className="text-center my-5 pt-4">{greeting}</h1>
			<div style={{ position: "relative" }}>
				<img
					className="d-block position-absolute top-0 end-0"
					style={{ height: "40px", width: "auto" }}
					src={iconUrl}
					onClick={handleGrid}
					alt={tipo}
				/>
			</div>
			{tipo === "List" ? (
				<ItemList products={products} />
			) : (
				<ItemGrid products={products} />
			)}
		</div>
	);
};
export default ItemListContainer;
