import React, { useState } from "react";
import App from "../App";
import logo from "../assets/images/logo.png";

function Home() {

	const [appVisibility, setAppVisibility] = useState(false);

	const openApp = () => {
		setAppVisibility(true);
	}

	return (
		<div>
			{!appVisibility && (
				<div>
					<div className="logo"><img src={logo} alt="Logo" /></div>
					<button onClick={openApp}>Novo jogo</button>
				</div>
			)}
			{appVisibility && <App />}
			{appVisibility || (
				<button>Regras</button>
			)}
		</div>
	)
}

export default Home;