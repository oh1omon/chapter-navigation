import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { EChapterType } from '../constants/enums'

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
				// Depending on type of component we will do different actions
				(i) => {
					switch (type) {
						case EChapterType.Theme:
							return (
								EChapterType.Chapter &&
								i.startsWith(String(chapter).charAt(0)) &&
								i.length === type && (
									// We will show a user a department of theme he has selected with different color
									<P selected={chapter === Number(i)} key={i}>
										{i} {text[i]}
									</P>
								)
							)
						case EChapterType.Chapter:
							return (
								// We will only show chapters user has checked
								i.startsWith(String(chapter).charAt(0)) &&
								i.length === type && (
									// We will show a user a department of theme he has selected with different color
									<P selected={chapter === Number(i)} key={i}>
										{i} {text[i]}
									</P>
								)
							)
					}
				}
			)}
		</div>
	)
}

export default React.memo(TableOfContents)
