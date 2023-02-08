import React from "react";
import "./spinner.css";

export const Spinner = () => {
	return (
		<div
			className="cont text-center"
			style={{ marginTop: "30vh", minHeight: "100vh" }}
		>
			<div className="lds-roller">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};
export default Spinner;
