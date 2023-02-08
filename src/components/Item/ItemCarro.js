import ItemCountCart from "../ItemCount/ItemCountCart";

const ItemCarro = (prod) => {
	return (
		<div
			className="d-flex align-items-center  p-3 mb-4 w-75 mx-auto"
			key={prod.id}
			style={{
				backgroundColor: "white",
				boxShadow: "-6px 7px 14px 1px #8C8C8C",
			}}
		>
			<div>
				<img
					src={prod.pictureURL}
					alt={prod.title}
					style={{ width: "150px", height: "150px" }}
				/>
			</div>
			<div className="text-start" style={{ width: "30%" }}>
				<h2>{prod.title}</h2>
			</div>
			<div className="text-start" style={{ width: "10%" }}>
				<h5>Precio: ${prod.price}</h5>
			</div>
			<div className="text-start" style={{ width: "10%" }}>
				<h5>Cantidad: {prod.qty}</h5>
			</div>
			<div className="text-start" style={{ width: "10%" }}>
				<h5>Subtotal: ${prod.qty * prod.price}</h5>
			</div>
			<div>
				<ItemCountCart prod={prod} />
			</div>
		</div>
	);
};

export default ItemCarro;
