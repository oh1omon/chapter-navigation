import React, { useEffect } from 'react'
import { initTextState } from './services/dispatchers/text-dispatcher'
import { useDispatch } from 'react-redux'

function App(): JSX.Element {
	const dispatch = useDispatch()

	// Initializing text store
	useEffect(() => {
		dispatch(initTextState())
	}, [])
	return <></>
}

export default App
