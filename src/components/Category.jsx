import React from "react";

export default function Category(props) {

	return(
		<>
		<div className="grid" >
			<div className="number"id={props.color}>{props.number}</div>
			<div className="category" id={props.color}><p>{props.word}</p></div>
		</div>
		</>
	)
}