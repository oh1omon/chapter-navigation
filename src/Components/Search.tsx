import React, { ChangeEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { SLink } from './TableOfContents'

const Search = () => {
	const text = useSelector((store: IRootStore) => store.text)

	const [result, setResult] = useState<TText>({})

	const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
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
			<label htmlFor={'search'} />
			<input id={'search'} onChange={(e) => searchHandler(e)} />
			<div>
				{Object.keys(result).map((i) => (
					<SLink to={`${i}`} selected={false} key={i}>
						{i} {text[i]}
					</SLink>
				))}
			</div>
		</>
	)
}

export default Search
