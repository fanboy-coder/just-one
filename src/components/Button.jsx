import React from "react";

export default function Button(props) {

	return (
		<>
			<div className="constraint">
				<button className="round-button" onClick={props.onClick}>
					<div className="round-button-circle">
						<span className="round-button" id={props.type}>{props.type}</span>
					</div>
				</button>
			</div>
		</>
	)
}