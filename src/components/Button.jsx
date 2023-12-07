import React from "react";

export default function Button(props) {

	return (
		<>
			<div class="constraint">
				<button class="round-button">
					<div class="round-button-circle">
						<span class="round-button" id={props.type}>{props.type}</span>
					</div>
				</button>
			</div>
		</>
	)
}