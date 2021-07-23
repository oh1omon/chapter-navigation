import React, { useEffect, useState } from 'react'
import { initTextState } from './services/dispatchers/text-dispatcher'
import { useDispatch, useSelector } from 'react-redux'
import TableOfContents from './Components/TableOfContents'
import { EChapterType } from './constants/enums'

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

	return (
		<>
			{isLoading ? (
				<p>Loading</p>
			) : (
				<>
					<TableOfContents type={EChapterType.Theme} chapter={1} />
					<TableOfContents type={EChapterType.Chapter} chapter={0} />
				</>
			)}
		</>
	)
}

export default App
