import React, { ChangeEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { SLink } from './TableOfContents'
import { IRootStore, TText } from '../react-app-env'
import SearchIcon from '../assets/icons/SearchIcon'
import styled from 'styled-components'

const SLabel = styled.label`
	position: relative;

	& > input {
		color: white;
		padding: 0.5em;
		background-color: black;
		border: 0;
		border-bottom: 2px solid white;
		width: 25em;
	}
	& > input:focus {
		background-color: white;
		color: black;
	}

	& > svg {
		position: absolute;
		right: 0;
		margin: 0.5em;
	}
`

const SDiv = styled.div`
	width: 17em;
`

const ResultCellDiv = styled.div`
	padding-top: 1em;
	border-bottom: 4px solid white;
	width: 100%;
	font-size: 14px;
	text-align: justify;
`

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
		if (e.target.value === '') {
			setResult({})
			return
		}
		setResult(
			Object.keys(text)
				.filter((i) => text[i].includes(e.target.value))
				.slice(0, 5)
				.reduce((acc, curr) => {
					acc[curr] = text[curr]
					return acc
				}, {} as TText)
		)
	}
	return (
		<>
			<SLabel htmlFor={'search'}>
				<input id={'search'} type={'text'} placeholder={'Search'} onChange={(e) => searchHandler(e)} />
				<SearchIcon />
			</SLabel>

			<SDiv>
				{/*Displaying results as SLinks, so user could fastly navigate to the chapter and result*/}
				{Object.keys(result).map((i) => (
					<SLink
						to={`${i}`}
						key={i}
						onClick={() => {
							setResult({})
						}}
					>
						<ResultCellDiv>
							{i} {`${text[i].split(' ').slice(0, 15).join(' ')}...`}
						</ResultCellDiv>
					</SLink>
				))}
			</SDiv>
		</>
	)
}

export default Search
