import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const P = styled.p<{ selected: boolean }>`
	&:hover {
		color: orange;
	}
	color: ${(props) => (props.selected ? 'blue' : 'black')};
`

const TableOfContents = ({ type, chapter }: ITableOfContentsProps): JSX.Element => {
	const text = useSelector((store: IRootStore) => store.text)

	return (
		<div>
			{Object.keys(text).map(
				// Iterating through all the strings of our text json
				(i) =>
					// If this property's key is only 2 chars length, then it should be a title
					// If this property's key is only 4 chars length, then it should be a chapter
					i.length === type && (
						// We will show a user a department of theme he has selected with different color
						<P selected={chapter === Number(i)} key={i}>
							{i} {text[i]}
						</P>
					)
			)}
		</div>
	)
}

export default React.memo(TableOfContents)
