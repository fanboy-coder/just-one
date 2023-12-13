import React from "react";
import "../App.css"

export default function NextModal({open, onClose,message}) {
	if(!open) return null;

	console.log(message)

	return (
		<div className="modal">
			<button onClick={onClose} className="close"></button>
			<h3>{message}</h3>
			<p>Passa a o telemóvel e clica no botão para começares a próxima ronda</p>
		</div>
	)

}