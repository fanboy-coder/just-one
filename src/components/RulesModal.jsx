import React, { useState } from "react";
import RulesItem from "./RulesItem";
import "../App.css"

export default function Modal({ open, onClose }) {
	if (!open) return null;

	const [activeIndex, setActiveIndex] = useState(0);

	const items = [
		{	
			title: "Escolha da palavra mistério",
			description: "O jogador activo vira o ecrã do seu telemóvel para os restantes e pede para iniciarem um novo jogo ou uma nova ronda. O jogador activo escolhe um número entre 1 a 5, o qual corresponde a uma palavra que terá de adivinhar.",
		},
		{	
			title:"Escolha das pistas",
			description: "Cada jogador, no bloco de notas do seu telemóvel, escreve uma pista sem falar ou mostrar aos outros. A pista tem de ser, obrigatoriamente, uma só palavra.",
		},
		{
			title:"Pistas inválidas",
			description: "- A palvra mistério escrita com uma ortografia diferente ou noutra língua. - Uma palavra da mesma família. - Uma palavra inventada. - Uma palavra fonéticamente idêntica, mas com significado diferente."
		},
		{
			title:"Comparação das pistas",
			description: "Quando todos tiverem escrito as suas pistas, o jogador activo fecha os olhos. Os outros jogadores viram os seus telemóveis e comparam as pistas uns com os outros. Todas as idênticas e inválidas são anuladas.",
		},
		{
			title:"Proposta",
			description: "O jogadort activo abre os olhos e tenta adivinhar a palavra mistério mediante as pistas apresentadas. Só tem direito a uma proposta!",
		},
		{
			title:"Resultado",
			description:"Adivinhar, Passar, Falhar"
		},
		{
			title:"Próxima ronda",
			description:"O jogador activo troca de telemóvel com o jogador à sua esquerda e o jogo recomeça"
		}
	];

	const updateIndex = (newIndex) => {
		if (newIndex < 0) {
			newIndex = 0;
		} else if (newIndex >= items.length) {
			newIndex = items.length - 1;
		}
		setActiveIndex(newIndex);
	};

	return (
		<div className="modal">
			<button onClick={onClose} className="close"></button>
			<div
				className="inner"
				style={{ transform: `translate(-${activeIndex * 100}%)` }}
			>
				{items.map((item) => {
					return <RulesItem item={item} width={"100%"} />;
				})}
			</div>
			<div className="rules-buttons">
				<button className="button-arrow" onClick={() => { updateIndex(activeIndex - 1) }}>
					<span class="material-symbols-outlined">
						arrow_back_ios
					</span>
				</button>
				<div className="indicators">
					{items.map((item, index) => {
						return (
							<button className="indicator-button" onClick={() => updateIndex(index)}>
								<span className={`material-symbols-outlined ${index === activeIndex ? "indicator-symbol-active" : "indicator-symbol"}`}>
									radio_button_checked
								</span>
							</button>
						)
					})}
				</div>
				<button className="button-arrow" onClick={() => { updateIndex(activeIndex + 1) }}>
					<span className="material-symbols-outlined">
						arrow_forward_ios
					</span>
				</button>
			</div>
		</div>
	)

}