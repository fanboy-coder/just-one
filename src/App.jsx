import React, { useState } from "react";
import Game from "./components/Game";
import RulesModal from "./components/RulesModal";
import logo from "./assets/images/logo.png";

function App() {
	const [appVisibility, setAppVisibility] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="screen">
			{!appVisibility && (
				<div className="homescreen">
					<div>
						<img src={logo} alt="logo" className="logo" />
					</div>
					<div className="home-buttons">
					<button onClick={() => setAppVisibility(true)} className="big-button new">
						Novo jogo
					</button>
					{/* <button onClick={() => setIsOpen(true)} className="big-button rules">
						Regras
					</button> */}
					</div>
					{/* <RulesModal open={isOpen} onClose={() => setIsOpen(false)} /> */}
				</div>
			)}
			{appVisibility && <Game />}
		</div>

	)
}

export default App;