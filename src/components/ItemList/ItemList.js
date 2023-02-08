import Item from "../Item/Item";

const ItemList = ({ products }) => {
	return (
		<div className="div-list mt-5 pt-3">
			{products.map((prod) => (
				<Item key={prod.id} {...prod} />
			))}
		</div>
	);
};

export default ItemList;
