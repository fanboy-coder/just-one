import React from "react";
import "../App.css"

export default function Modal({open, onClose}) {
	if(!open) return null;

	return (
		<div className="modal">
			<h5>Como jogar Just One</h5>
			<button onClick={onClose} className="close"></button>
			<p>Regras</p>
		</div>
	)

}