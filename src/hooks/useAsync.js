import { useState, useEffect } from "react";

export const useAsync = (asyncFunc, dependencies) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	if (!Array.isArray(dependencies)) {
		console.log("No se paso un Array como dependencia al useAsync");
		dependencies = [];
	}

	useEffect(() => {
		setLoading(true);
		asyncFunc()
			.then((data) => {
				setData(data);
			})
			.catch((error) => {
				setError(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, dependencies); //eslint-disable-line

	return {
		data,
		error,
		loading,
	};
};
