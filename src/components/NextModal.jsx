import React from "react";
import "../App.css"

export default function NextModal({ open, onClose, reset, message, score,resetMessage, cards }) {
	if (!open) return null;

	return (
		<div className="modal">
			{message === "" ? (
				<>
					<h2>Jogo parado</h2>
					<button onClick={onClose} className="big-button rules">Retomar</button>
					<button onClick={reset} className="big-button new">Novo jogo</button>
				</>
			) : (
				<>
					<h2>{message}</h2>
					{cards > 0 ? (
						<>
							<p>Passa o telemóvel e clica no botão para começares a próxima ronda</p>
							<button onClick={() => { onClose(); resetMessage() }} className="big-button next">Próxima ronda</button>
						</>
					) : (
						<>
							<h3>{score} pontos</h3>
							<button onClick={reset} className="big-button new">Novo jogo</button>
						</>
					)}
				</>
			)
			}
		</div>
	)

}