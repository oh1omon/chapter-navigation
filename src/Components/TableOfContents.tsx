import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { EChapterTypes } from '../constants/enums'
import { Link } from 'react-router-dom'
import { IRootStore, ITableOfContentsProps } from '../react-app-env'

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
					switch (type) {
						case EChapterTypes.theme:
							return i
						case EChapterTypes.chapter:
							return i.startsWith(String(chapter).charAt(0))
						case EChapterTypes.result:
							return i.startsWith(String(chapter))
					}
				})
				.map((i) => {
					// TODO make comments
					switch (type) {
						case EChapterTypes.chapter:
							return (
								i.length === 4 && (
									// We will show a user a department of theme he has selected with different color
									<SLink to={`${i}`} selected={chapter === Number(i)} key={i}>
										{i} {text[i]}
									</SLink>
								)
							)
						case EChapterTypes.theme:
							return (
								i.length === 2 && (
									// We will show a user a department of theme he has selected with different color
									<SLink to={`${i}`} selected={chapter === Number(i)} key={i}>
										{i} {text[i]}
									</SLink>
								)
							)
						case EChapterTypes.result:
							return (
								<p key={i}>
									{i} {text[i]}
								</p>
							)
					}
				})}
		</div>
	)
}

export default React.memo(TableOfContents)
