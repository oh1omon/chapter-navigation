import React, { FC, useEffect, useState } from 'react'
import { initTextState } from './services/dispatchers/text-dispatcher'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { IRootStore } from './react-app-env'
import Header from './Components/Header'
import Main from './Components/Main/Main'
import Loader from './Components/Loader'
import Error from './Components/Error'
import { setComponent } from './services/dispatchers/component-dispatcher'
import { setRule } from './services/dispatchers/rule-dispatcher'

const App: FC = () => {
	const dispatch = useDispatch()
	const location = useLocation()

	// Getting error state from store
	const error = useSelector((store: IRootStore) => store.error)

	// Getting rule from store
	const rule = useSelector((store: IRootStore) => store.rule)

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
		dispatch(setRule(location.pathname))
	}, [location.pathname])

	// Depending on rule object that has been set we will dispatch a function to define a component, which should be shown
	useEffect(() => {
		dispatch(setComponent(rule))
	}, [rule])

	return (
		<>
			{error ? (
				<Error />
			) : isLoading ? (
				<Loader />
			) : (
				<>
					<Header />
					<Main />
				</>
			)}
		</>
	)
}

export default App
