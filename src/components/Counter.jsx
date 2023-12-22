import React from "react";

export default function Counter({cards}) {
	return(
		<>
		<div className="score-area">
		<h2>Cartas restantes: {cards}</h2>
		</div>
		</>
	)
}