import { useState, useEffect } from 'react'
import './App.css'
import Category from './components/Category';
import Button from './components/Button';
import Counter from './components/Counter';
import allWords from "./data/data";

function App() {

	const [words, setWords] = useState([]);
	const [usedWords, setUsedWords] = useState([]);
	const [tries, setTries] = useState(13);
	const [score, setScore] = useState(0);

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

	console.log("Words for the round are: " + words)
	console.log("Words used in the game are " + usedWords)

	const right = () => {
		console.log("right")
		setTries(prevTries => prevTries -1)
		setScore(prevScore => prevScore +1)
	}

	const pass = () => {
		setTries(prevTries => prevTries -2)
	}

	const wrong = () => {
		setTries(prevTries => prevTries -3)
	}

	let blue = words[0];
	let green = words[1];
	let red = words[2];
	let orange = words[3];
	let yellow = words[4];

	return (
		<>
			<div>
				<Counter />{score}
			</div>
			<div className='play-area'>
				<Category number="1" color="blue" word={blue} />
				<Category number="2" color="green" word={green} />
				<Category number="3" color="red" word={red} />
				<Category number="4" color="orange" word={orange} />
				<Category number="5" color="yellow" word={yellow} />
			</div>
			<div className='buttons-area'>
				<Button type="right" onClick={right}/>
				<Button type="pass" onClick={pass}/>
				<Button type="wrong" onClick={wrong}/>
			</div>
		</>
	)
}

export default App