import React from "react";

export default function RulesItem ({item}) {
	return(
		<div className="rules-item">
			<div className="rules-item-text">
				<h3>{item.title}</h3>
				<p>{item.description}</p>
				</div>
		</div>	
	)
}