import { useState } from 'react'
import './App.css'
import Category from './components/Category'

function App() {

  return (
    <div className='play-area'>
      <Category number="1" color="blue"/>
	  <Category number="2" color="green"/>
	  <Category number="3" color="red"/>
	  <Category number="4" color="orange"/>
	  <Category number="5" color="yellow"/>
    </div>
  )
}

export default App