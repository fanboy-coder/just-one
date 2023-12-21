import { useState, useEffect } from 'react'
import '../App.css'
import Category from './Category';
import Button from './Button';
import Counter from './Counter';
import allWords from "../data/data";
import NextModal from './NextModal';
import Icon from '@mdi/react';
import { mdiPause } from '@mdi/js';

function Game() {

	const [key, setKey] = useState(0);

	const initialState = {
		words: [],
		usedWords: [],
		cards: 13,
		score: 0,
		message: "",
		isOpen: false,
	}

	const [words, setWords] = useState(initialState.words);
	const [usedWords, setUsedWords] = useState(initialState.usedWords);
	const [cards, setCards] = useState(initialState.cards);
	const [score, setScore] = useState(initialState.score);
	const [message, setMessage] = useState(initialState.message);
	const [isOpen, setIsOpen] = useState(initialState.isOpen);

	const generateNewWords = () => {
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
			setWords(set);
			const newUsedWords = set;
			const uniqueUsedWords = newUsedWords.filter(
				newUsedWords => !usedWords.includes(newUsedWords)
			);
			setUsedWords(prevArray => [...prevArray, ...uniqueUsedWords]);
		} else {
			randomSet();
		}
	};

	const right = (message) => {
		setCards(prevCards => prevCards - 1)
		setScore(prevScore => prevScore + 1)
		setMessage(message)
		setIsOpen(true)
		generateNewWords();
		console.log(cards)
	}

	const pass = (message) => {
		setCards(prevCards => prevCards - 1)
		setMessage(message)
		setIsOpen(true)
		generateNewWords();
		console.log(cards)
	}

	const wrong = (message) => {
		setCards(prevCards => prevCards - 2)
		setMessage(message)
		setIsOpen(true)
		generateNewWords();
		console.log(cards)
	}

	const resetGame = () => {
		setWords(initialState.words);
		setUsedWords(initialState.usedWords);
		setCards(initialState.cards);
		setScore(initialState.score);
		setMessage(initialState.message);
		setIsOpen(initialState.isOpen);
		setKey(prevKey => prevKey + 1);
	}

	useEffect(() => {
		if (cards <= 0) {
			if (score <= 3) {
				setMessage("Tentem mais uma vez. E mais uma, e mais uma...")
			} else if (score >= 4 && score <= 6) {
				setMessage("É um bom começo. Continuem a treinar!")
			} else if (score === 7 || score === 8) {
				setMessage("Vocês estão na média. Conseguem melhorar?")
			} else if (score === 9 || score === 10) {
				setMessage("Ui, nada mau!")
			} else if (score === 11) {
				setMessage("Genial! Uma pontuação formidável!")
			} else if (score === 12) {
				setMessage("Incrível! Os vossos amigos vão ficar impressionados!")
			} else {
				setMessage("Uma pontuação perfeita! Acham que conseguem mais uma vez?")
			}
		}
	}, [cards])

	useEffect(() => {
		generateNewWords();
	}, [key]);

	let blue = words[0];
	let green = words[1];
	let red = words[2];
	let orange = words[3];
	let yellow = words[4];

	return (
		<div className='play-area'>
			<div className='counter-area'>
				<Counter score={score} />
				<div className='pause-area'>
					<Icon path={mdiPause} size={1} onClick={() => setIsOpen(true)} />
				</div>
			</div>
			<div className='words-area'>
				<Category number="1" color="blue" word={blue} />
				<Category number="2" color="green" word={green} />
				<Category number="3" color="red" word={red} />
				<Category number="4" color="orange" word={orange} />
				<Category number="5" color="yellow" word={yellow} />
			</div>
			<div className='buttons-area'>
				<Button type="right" onClick={() => right("Parabéns, acertaste!")} disabled={isOpen}/>
				<Button type="pass" onClick={() => pass("Não faz mal, tentas acertar a próxima.")} disabled={isOpen}/>
				<Button type="wrong" onClick={() => wrong("Oops, palavra errada!")} disabled={isOpen}/>
			</div>
			<NextModal
				open={isOpen}
				onClose={() => setIsOpen(false)}
				resetMessage={() => setMessage(initialState.message)}
				reset={() => resetGame()}
				message={message}
				cards={cards}
			/>
		</div>
	)
}

export default Game