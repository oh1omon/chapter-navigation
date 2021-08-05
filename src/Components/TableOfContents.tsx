import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { EChapterTypes } from '../constants/enums'
import { IRootStore } from '../react-app-env'
import { SLink } from './SLink'

const SDiv = styled.div`
	display: flex;
	position: relative;
	flex-flow: column;
	width: 40vw;
	height: 40vw;
	overflow-y: auto;
	border: 1px solid white;
	padding: 1em;
	background-color: rgba(29, 28, 28, 0.5);
	box-shadow: rgba(0, 0, 0, 0.3) 0 19px 38px, rgba(0, 0, 0, 0.22) 0 15px 12px;
	& > p {
		padding-bottom: 1em;
	}
	& :last-child {
		padding: 0;
	}

	@media (max-width: 900px) {
		width: 80vw;
		height: 80vw;
	}
`

const TableOfContents: FC = () => {
	const text = useSelector((store: IRootStore) => store.text)
	const rule = useSelector((store: IRootStore) => store.rule)
	const component = useSelector((store: IRootStore) => store.component)

	return (
		<>
			<SDiv>
				{Object.keys(text)
					.filter((i) => {
						// If component is used for showing chapters, then we will use another way for rendering
						// In this case we will show only chapters starting with the same number, as user has defined
						// For example if user has checked chapter 200 we will display here only chapters starting with 2
						switch (component) {
							case EChapterTypes.theme:
								return i
							case EChapterTypes.chapter:
								return i.startsWith(String(rule.chapter).charAt(0))
							case EChapterTypes.result:
								return i.startsWith(String(rule.result))
						}
					})
					.map((i) => {
						// Depending on component is used for we will render different things
						switch (component) {
							case EChapterTypes.chapter:
								return (
									i.length === 4 && (
										// We will show a user a department of theme he has selected with different color
										<SLink to={`${i}`} key={i}>
											{i} {text[i]}
										</SLink>
									)
								)
							case EChapterTypes.theme:
								return (
									i.length === 2 && (
										// We will show a user a department of theme he has selected with different color
										<SLink to={`${i}`} key={i}>
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
