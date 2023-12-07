import { useState } from 'react'
import './App.css'
import Category from './components/Category';
import Button from './components/Button';
import data from "./data/words";

function App() {

  return (
	<>
    <div className='play-area'>
      <Category number="1" color="blue" word={data.blue}/>
	  <Category number="2" color="green"word={data.green}/>
	  <Category number="3" color="red" word={data.red}/>
	  <Category number="4" color="orange" word={data.orange}/>
	  <Category number="5" color="yellow" word={data.yellow}/>
    </div>
	<div className='buttons-area'>
		<Button type="right"/>
		<Button type="pass"/>
		<Button type="wrong"/>
	</div>
	</>
  )
}

export default App