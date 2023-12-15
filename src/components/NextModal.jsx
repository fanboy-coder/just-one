import React from "react";
import "../App.css"

export default function NextModal({ open, onClose, reset, message, score, cards }) {
	if (!open) return null;

	return (
		<div className="modal">
			<h3>{message}</h3>
			<p>Pontuação actual: {score}</p>
			<p>Passa a o telemóvel e clica no botão para começares a próxima ronda</p>
			{!cards <= 0 ? (
				<button onClick={onClose} className="big-button next">Próxima ronda</button>
			) : (<button onClick={reset} className="big-button new">Novo jogo</button>
			)}
		</div>
	)

}