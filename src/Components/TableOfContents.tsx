import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { EChapterTypes } from '../constants/enums'
import { Link } from 'react-router-dom'
import { IRootStore, ITableOfContentsProps } from '../react-app-env'

export const SLink = styled(Link)<{ selected: boolean }>`
	color: ${(props) => (props.selected ? 'blue' : 'white')};
	text-decoration: none;

	&:hover {
		color: orange;
	}
`

const SDiv = styled.div`
	display: flex;
	position: relative;
	flex-flow: column;
	width: 40vw;
	height: 40vw;
	overflow-y: auto;
	border: 1px solid white;
	padding: 1em;
	& > p {
		padding-bottom: 1em;
	}
	& :last-child {
		padding: 0;
	}
`

const TableOfContents = ({ type, rule }: ITableOfContentsProps): JSX.Element => {
	const text = useSelector((store: IRootStore) => store.text)

	return (
		<>
			<SDiv>
				{Object.keys(text)
					.filter((i) => {
						// If component is used for showing chapters, then we will use another way for rendering
						// In this case we will show only chapters starting with the same number, as user has defined
						// For example if user has checked chapter 200 we will display here only chapters starting with 2
						switch (type) {
							case EChapterTypes.theme:
								return i
							case EChapterTypes.chapter:
								return i.startsWith(String(rule.chapter).charAt(0))
							case EChapterTypes.result:
								return i.startsWith(String(rule.result))
						}
					})
					.map((i) => {
						// Depending on type of this component is used for we will render different things
						switch (type) {
							case EChapterTypes.chapter:
								return (
									i.length === 4 && (
										// We will show a user a department of theme he has selected with different color
										<SLink to={`${i}`} selected={rule.chapter === Number(i)} key={i}>
											{i} {text[i]}
										</SLink>
									)
								)
							case EChapterTypes.theme:
								return (
									i.length === 2 && (
										// We will show a user a department of theme he has selected with different color
										<SLink to={`${i}`} selected={rule.theme === Number(i)} key={i}>
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
			</SDiv>
		</>
	)
}

export default React.memo(TableOfContents)
