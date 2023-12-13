import { useState, useEffect } from 'react'
import '../App.css'
import Category from './Category';
import Button from './Button';
import Counter from './Counter';
import allWords from "../data/data";
import NextModal from './NextModal';

function Game() {

	const [words, setWords] = useState([]);
	const [usedWords, setUsedWords] = useState([]);
	const [cards, setCards] = useState(13);
	const [score, setScore] = useState(0);
	const [message,setMessage] = useState("");
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		let set = [];
		function randomSet() {
			if (set.length === 5) return;
			const randomIndex = Math.floor(Math.random() * allWords.allWords.length);
			if (!usedWords.includes(allWords.allWords[randomIndex])) {
				if (!set.includes(allWords.allWords[randomIndex])) {
					set.push(allWords.allWords[randomIndex]);
				}
			}
			randomSet(allWords);
		}
		randomSet();
		if (set.length === 5) {
			setWords(set)
			const newUsedWords = set;
			const uniqueUsedWords = newUsedWords.filter(
				newUsedWords => !usedWords.includes(newUsedWords)
			)
			setUsedWords(prevArray => [...prevArray, ...uniqueUsedWords])

		} else {
			randomSet();
		};
	}, []);

	const right = (message) => {
		setCards(prevCards => prevCards -1)
		setScore(prevScore => prevScore +1)
		setMessage(message)
		setIsOpen(true)
	}

	const pass = () => {
		setCards(prevCards => prevCards -1)
		setMessage("Não faz mal, ainda há muito jogo.")
		setIsOpen(true)
	}

	const wrong = () => {
		setCards(prevCards => prevCards -2)
		setMessage("Oops, palavra errada!")
		setIsOpen(true)
	}

	useEffect(() => {
			if (score === 13) {
				console.log("win")
			} else if (cards <= 0) {
				console.log("lose")
			}
	},[score,cards])

	let blue = words[0];
	let green = words[1];
	let red = words[2];
	let orange = words[3];
	let yellow = words[4];

	return (
		<div className='play-area'>
			<div className='counter-area'>
				<Counter /><h2>Pontuação: </h2>{score}
			</div>
			<div className='words-area'>
				<Category number="1" color="blue" word={blue}/>
				<Category number="2" color="green" word={green} />
				<Category number="3" color="red" word={red} />
				<Category number="4" color="orange" word={orange} />
				<Category number="5" color="yellow" word={yellow} />
			</div>
			<div className='buttons-area'>
				<Button type="right" onClick={() => right("Parabéns, acertaste!")}/>
				<Button type="pass" onClick={pass}/>
				<Button type="wrong" onClick={wrong}/>
			</div>
			<NextModal open={isOpen} onClose={() => setIsOpen(false)} message={message}/>
		</div>
	)
}

export default Game