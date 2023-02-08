import { useState } from "react";
import MyModal from "../MyModal/MyModal";

const Form = ({ createOrder }) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");

	return (
		<div className="text-center">
			<form className="w-25 mx-auto">
				<label className="d-block mb-3 mt-3" htmlFor="nombre">
					<strong>Nombre y apellido</strong>{" "}
				</label>
				<input
					className="form-control"
					onChange={(e) => {
						setName(e.target.value);
					}}
					type="text"
					name="name"
					id="name"
					placeholder="Nombre y apellido"
					required
				/>
				<label className="d-block mb-3 mt-3" htmlFor="telefono">
					<strong>Telefono</strong>{" "}
				</label>
				<input
					className="form-control"
					onChange={(e) => {
						setPhone(e.target.value);
					}}
					type="text"
					name="phone"
					id="phone"
					placeholder="Numero"
					required
				/>
				<label className="d-block mb-3 mt-3" htmlFor="email">
					<strong>Email</strong>{" "}
				</label>
				<input
					className="form-control"
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					type="email"
					name="email"
					placeholder="Ingrese su e-mail"
					required
				/>
			</form>
			<button
				style={{ color: "white" }}
				className="mt-5 btn btn-warning fw-bold px-4"
				onClick={() =>
					name !== "" && phone !== "" && email !== ""
						? createOrder(name, phone, email)
						: handleShow()
				}
			>
				{" "}
				Generar orden
			</button>

			<MyModal
				show={show}
				handleClose={handleClose}
				title={"ATENCION"}
				body="Complete los datos faltantes"
				save="Ok"
			/>
		</div>
	);
};

export default Form;
