import React from "react";

export default function Counter({score}) {
	return(
		<>
		<div className="score-area">
		<h2>Pontuação: {score}</h2>
		</div>
		</>
	)
}