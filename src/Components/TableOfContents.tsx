import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { EChapterType } from '../constants/enums'
import { Link } from 'react-router-dom'

export const SLink = styled(Link)<{ selected: boolean }>`
	color: ${(props) => (props.selected ? 'blue' : 'black')};
	text-decoration: none;
	&:hover {
		color: orange;
	}
`

const TableOfContents = ({ type, chapter }: ITableOfContentsProps): JSX.Element => {
	const text = useSelector((store: IRootStore) => store.text)

	return (
		<div>
			{Object.keys(text)
				.filter((i) => {
					// If component is used for showing chapters, then we will use another way for rendering
					// In this case we will show only chapters starting with the same number, as user has defined
					// For example if user has checked chapter 200 we will display here only chapters starting with 2
					return type === EChapterType.Chapter ? i.startsWith(String(chapter).charAt(0)) : i
				})
				.map((i) => {
					return (
						i.length === type && (
							// We will show a user a department of theme he has selected with different color
							<SLink to={`${i}`} selected={chapter === Number(i)} key={i}>
								{i} {text[i]}
							</SLink>
						)
					)
				})}
		</div>
	)
}

export default React.memo(TableOfContents)
