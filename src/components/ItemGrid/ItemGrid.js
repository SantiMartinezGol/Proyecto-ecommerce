import ItemG from "../Item/ItemG";

const ItemGrid = ({ products }) => {
	return (
		<div className="d-inline-flex flex-wrap justify-content-around mt-5">
			{products.map((prod) => (
				<ItemG key={prod.id} {...prod} />
			))}
		</div>
	);
};

export default ItemGrid;
