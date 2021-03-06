import React, { ChangeEvent, FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { IRootStore, TText } from '../react-app-env'
import SearchIcon from '../assets/icons/SearchIcon'
import styled from 'styled-components'
import { SLink } from './SLink'

// Styling for label and its child components
const SLabel = styled.label`
	position: relative;

	& > input {
		color: white;
		padding: 0.5em;
		background-color: transparent;
		border: 0;
		border-bottom: 2px solid white;
		width: 25em;
	}
	& > input:focus {
		background-color: white;
		color: #111111;
	}

	& > svg {
		position: absolute;
		right: 0;
		margin: 0.5em;
	}
`

// Wrapper for search results
const SWrapper = styled.div`
	width: 17em;
	position: absolute;
	background-color: rgba(29, 28, 28, 0.9);
	z-index: 2;
`

// Styles for main container
const SContainer = styled.div`
	position: relative;
	padding: 2rem 5rem;
`

// Styles for search result cell
const ResultCellDiv = styled.div`
	padding-top: 1em;
	border-bottom: 2px solid white;
	width: 100%;
	font-size: 14px;
	text-align: justify;
`

const Search: FC = () => {
	const text = useSelector((store: IRootStore) => store.text)

	// Local state for result object
	const [result, setResult] = useState({})

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
				.filter((i) => {
					return i.includes(e.target.value) || text[i].includes(e.target.value)
				})
				.slice(0, 5)
				.reduce((acc, curr) => {
					acc[curr] = text[curr]
					return acc
				}, {} as TText)
		)
	}
	return (
		<SContainer>
			<SLabel htmlFor={'search'}>
				<input
					aria-label='search-input'
					id={'search'}
					type={'text'}
					placeholder={'Search'}
					onChange={(e) => searchHandler(e)}
				/>
				<SearchIcon />
			</SLabel>

			<SWrapper data-testid='search-results-wrapper'>
				{/*Displaying results as SLinks, so user could fastly navigate to the chapter and result*/}
				{Object.keys(result).map((i) => (
					<SLink
						to={`${i}`}
						key={i}
						onClick={() => {
							setResult({})
						}}
						data-testid='search-result'
					>
						<ResultCellDiv>
							{i} {`${text[i].split(' ').slice(0, 15).join(' ')}...`}
						</ResultCellDiv>
					</SLink>
				))}
			</SWrapper>
		</SContainer>
	)
}

export default Search
