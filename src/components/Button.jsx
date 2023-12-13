import React from "react";
import Icon from '@mdi/react';
import { mdiHandBackRight, mdiAlphaX, mdiCheckBold } from '@mdi/js';

export default function Button(props) {

	return (
		<>
			<div className="constraint">
				<button className="round-button" onClick={props.onClick}>
					<div className="round-button-circle">
						<span className="round-button" id={props.type}>
							{props.type === "right" ? (
								<Icon path={mdiCheckBold} size={1} />
							) : props.type === "pass" ? (
								<Icon path={mdiHandBackRight} size={1} />
							) : (
								<Icon path={mdiAlphaX} size={1} />
							)}
						</span>
					</div>
				</button>
			</div>
		</>
	)
}