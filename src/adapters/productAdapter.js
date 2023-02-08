export const createAdaptedProductFromFirestore = (doc) => {
	const data = doc.data();

	const productAdapted = {
		id: doc.id,
		title: data.title,
		pictureURL: data.pictureURL,
		price: data.price,
		cateogoryId: data.categoryId,
		description: data.description,
		stock: data.stock,
	};
	return productAdapted;
};
