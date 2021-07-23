import React, { useEffect, useState } from 'react'
import { initTextState } from './services/dispatchers/text-dispatcher'
import { useDispatch, useSelector } from 'react-redux'
import TableOfContents from './Components/TableOfContents'

function App(): JSX.Element {
	const dispatch = useDispatch()

	// Getting text from store
	const text = useSelector((store: IRootStore) => store.text)

	// Loader state
	const [isLoading, setIsLoading] = useState(true)

	// Initializing text store
	useEffect(() => {
		dispatch(initTextState())
	}, [])

	// When text got fetched and parsed we will change Loader to actual content
	useEffect(() => {
		setIsLoading(false)
	}, [text])

	return <>{isLoading ? <p>Loading</p> : <TableOfContents chapter={2} />}</>
}

export default App
