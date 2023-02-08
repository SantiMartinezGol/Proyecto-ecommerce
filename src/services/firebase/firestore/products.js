import {
	getDocs,
	collection,
	query,
	where,
	getDoc,
	doc,
} from "firebase/firestore";
import { createAdaptedProductFromFirestore } from "../../../adapters/productAdapter";
import { db } from "../firebaseConfig";

export const getProducts = (categoryId) => {
	return new Promise((resolve, reject) => {
		const collectionRef = categoryId
			? query(
					collection(db, "ProductData"),
					where("categoryId", "==", categoryId)
			  )
			: collection(db, "ProductData");

		getDocs(collectionRef)
			.then((response) => {
				const productsAdapted = response.docs.map((doc) => {
					return createAdaptedProductFromFirestore(doc);
				});

				resolve(productsAdapted);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export const getProductById = (id) => {
	return new Promise((resolve, reject) => {
		const docRef = doc(db, "ProductData", id);

		getDoc(docRef)
			.then((doc) => {
				const productAdapted = { id: doc.id, ...doc.data() };
				resolve(productAdapted);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
