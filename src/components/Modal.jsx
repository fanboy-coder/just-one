import React from "react";
import "../App.css"

export default function Modal({open}) {
	if(!open) return null;

	return (
		<div className="modal">
			<button className="close"></button>
			<h2>Como jogar Just One</h2>
			<p>Regras</p>
		</div>
	)

}