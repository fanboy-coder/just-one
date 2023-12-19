import React from "react";
import "../App.css"

export default function NextModal({ open, onClose, reset, message, resetMessage, score, cards }) {
	if (!open) return null;

	return (
		<div className="modal">
			{message === "" ? (
				<>
					<div>
						<h3>Jogo parado</h3>
						<p>Pontuação actual: {score}</p>
						<button onClick={onClose} className="big-button new">Retomar</button>
						<button onClick={reset} className="big-button new">Novo jogo</button>
					</div>
				</>
			) : (
				<>
					<div>
						<h3>{message}</h3>
						<p>Pontuação actual: {score}</p>
						<p>Passa a o telemóvel e clica no botão para começares a próxima ronda</p>
						{!cards <= 0 ? (
							<button onClick={() => { onClose(); resetMessage() }} className="big-button next">Próxima ronda</button>
						) : (<button onClick={reset} className="big-button new">Novo jogo</button>
						)}
					</div>
				</>
			)
			}
		</div>
	)

}