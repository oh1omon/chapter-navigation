import React, { useEffect, useState } from 'react'
import { initTextState } from './services/dispatchers/text-dispatcher'
import { useDispatch, useSelector } from 'react-redux'
import TableOfContents from './Components/TableOfContents'
import { EChapterTypes } from './constants/enums'
import { useLocation } from 'react-router-dom'
import Search from './Components/Search'
import { IRootStore, IRule } from './react-app-env'
import Breadcrumbs from './Components/Breadcrumbs'

function App(): JSX.Element {
	const dispatch = useDispatch()
	const location = useLocation()

	// State for currently shown element
	const [component, setComponent] = useState(EChapterTypes.theme)

	// Initializing rule state
	const [rule, setRule] = useState<IRule>({
		theme: 0,
		chapter: 0,
		result: false,
	})

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

	// We will remake a rule state object distribution every time location has changed
	useEffect(() => {
		setRule({
			theme: Number(location.pathname.charAt(1)),
			chapter: Number(location.pathname.slice(1, 4)) || 0,
			result: location.pathname.length > 3 && location.pathname.slice(1),
		})
	}, [location.pathname])

	// Depending on rule object that has been set we will define a component, which should be shown
	useEffect(() => {
		setComponent(
			rule.result
				? EChapterTypes.result
				: rule.chapter
				? EChapterTypes.chapter
				: rule.theme
				? EChapterTypes.theme
				: EChapterTypes.theme
		)
	}, [rule])

	return (
		<>
			{isLoading ? (
				<p>Loading</p>
			) : (
				<>
					<Breadcrumbs rule={rule} />
					<TableOfContents type={component} rule={rule} />
					<Search />
				</>
			)}
		</>
	)
}

export default App
