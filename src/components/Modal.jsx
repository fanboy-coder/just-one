import React from "react";
import "../App.css"

export default function Modal({open, onClose}) {
	if(!open) return null;

	return (
		<div className="modal">
			<button onClick={onClose} className="close"></button>
			<h3>Como jogar Just One</h3>
			<p>Regras</p>
		</div>
	)

}