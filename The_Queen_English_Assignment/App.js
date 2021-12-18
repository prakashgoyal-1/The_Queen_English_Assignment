import React from 'react'
import Apicall from './Apicall'
import './index.css'

export default function App() {
	return (
		<div>
			{/* {console.log("Api")} */}
			<h1 className='heading'>Welcome to Trivia game.</h1>
			<Apicall/>
		</div>
	)
}
