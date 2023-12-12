import React, { useState } from "react";
import Game from "./components/Game";
import Modal from "./components/Modal";
import logo from "./assets/images/logo.png";

function App() {

	const [appVisibility, setAppVisibility] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="homescreen">
			{!appVisibility && (
				<>
				<div >
					<img src={logo} alt="logo" className="logo"/>
				</div>
				<button onClick={() => setAppVisibility(true)} className="big-button new">Novo jogo</button>
				</>
			)}
			{appVisibility && <Game />}
			{appVisibility || (
				<>
				<button onClick={() => setIsOpen(true)}className="big-button rules">Regras</button>
				<Modal open={isOpen}/>
				</>
			)}
		</div>
	)
}

export default App;