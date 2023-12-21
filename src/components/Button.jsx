import React from "react";
import Icon from '@mdi/react';
import { mdiDotsHorizontal, mdiAlphaX, mdiCheckBold } from '@mdi/js';

export default function Button(props) {

	return (
		<>
			<div className="constraint">
				<button className="round-button" onClick={props.onClick}>
					<div className="round-button-circle">
						<span id={props.type}>
							{props.type === "right" ? (
								<Icon path={mdiCheckBold} size={1} id='right'/>
							) : props.type === "pass" ? (
								<Icon path={mdiDotsHorizontal} size={1} id='pass'/>
							) : (
								<Icon path={mdiAlphaX} size={1} id='wrong'/>
							)}
						</span>
					</div>
				</button>
			</div>
		</>
	)
}