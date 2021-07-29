import React, { ChangeEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { SLink } from './TableOfContents'
import { IRootStore, TText } from '../react-app-env'

const Search = (): JSX.Element => {
	const text = useSelector((store: IRootStore) => store.text)

	// Local state for result object
	const [result, setResult] = useState<TText>({})

	/**
	 * This handler is run every time user changes input
	 * Algorithm will filter only first 10 results with the word or phrase user has searched for
	 * @param e
	 */
	const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setResult(
			Object.keys(text)
				.filter((i) => text[i].includes(e.target.value))
				.slice(0, 10)
				.reduce((acc, curr) => {
					acc[curr] = text[curr]
					return acc
				}, {} as TText)
		)
	}
	return (
		<>
			<label htmlFor={'search'} />
			<input id={'search'} onChange={(e) => searchHandler(e)} />
			<div>
				{/*Displaying results as SLinks, so user could fastly navigate to the chapter and result*/}
				{Object.keys(result).map((i) => (
					<SLink to={`${i}`} key={i}>
						{i} {`${text[i].split(' ').slice(0, 15).join(' ')}...`}
					</SLink>
				))}
			</div>
		</>
	)
}

export default Search
