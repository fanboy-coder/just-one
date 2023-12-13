import React from "react";
import "../App.css"

export default function NextModal({open, onClose,message}) {
	if(!open) return null;

	return (
		<div className="modal">
			<h3>{message}</h3>
			<p>Passa a o telemóvel e clica no botão para começares a próxima ronda</p>
			<button onClick={onClose} className="big-button next">Próxima ronda</button>
		</div>
	)

}