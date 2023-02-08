import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const MyModal = ({ show, handleClose, title, body, close, save }) => {
	return (
		<>
			<Modal size="lg" show={show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>{title}</Modal.Title>
				</Modal.Header>
				<Modal.Body className="my-3 fs-4">{body}</Modal.Body>
				<Modal.Footer>
					{close ? (
						<Button variant="secondary" onClick={handleClose}>
							{close}
						</Button>
					) : (
						""
					)}
					{save ? (
						<Button variant="primary" onClick={handleClose}>
							{save}
						</Button>
					) : (
						""
					)}
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default MyModal;
