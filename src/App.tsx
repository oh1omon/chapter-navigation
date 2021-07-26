import React, { useEffect, useState } from 'react'
import { initTextState } from './services/dispatchers/text-dispatcher'
import { useDispatch, useSelector } from 'react-redux'
import TableOfContents from './Components/TableOfContents'
import { EChapterType } from './constants/enums'
import { useLocation } from 'react-router-dom'
import Result from './Components/Result'
import Search from './Components/Search'

function App(): JSX.Element {
	const dispatch = useDispatch()
	const location = useLocation()

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
					{/*We are passing only first char after slash to the Table Of Contents*/}
					<TableOfContents type={EChapterType.Theme} chapter={Number(location.pathname.charAt(1))} />
					{/*We are passing the whole url string to the chapter, starting after slash*/}
					<TableOfContents
						type={EChapterType.Chapter}
						chapter={Number(location.pathname.slice(1, 4)) || 0}
					/>
					<Result rule={location.pathname.length > 3 && location.pathname.slice(1)} />
					<Search />
				</>
			)}
		</>
	)
}

export default App
