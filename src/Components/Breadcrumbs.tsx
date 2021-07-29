import React from 'react'
import { IBreadcrumbsProps, IRootStore } from '../react-app-env'
import { SLink } from './TableOfContents'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const SP = styled.p`
	font-size: 1.5em;
`

const Breadcrumbs = ({ rule: { chapter, result, theme } }: IBreadcrumbsProps): JSX.Element => {
	const text = useSelector((store: IRootStore) => store.text)

	return (
		<SP>
			{/* Link to the theme */}
			<>
				<SLink to={`/`}>Start</SLink>
				&nbsp; &gt;
			</>

			{/* Link to the theme */}
			{theme !== 0 && (
				<>
					&nbsp;
					<SLink to={`/${theme}`}>
						{`${theme}.`} {text[theme + '.']}
					</SLink>
				</>
			)}

			{/* Link to all chapters of this number */}
			{/*{chapter > 9 && (*/}
			{/*	<>*/}
			{/*		&gt;*/}
			{/*		<SLink to={`/${theme}00.`} selected={false}>*/}
			{/*			{`${theme}00.`} {text[theme + '00.']}*/}
			{/*		</SLink>*/}
			{/*	</>*/}
			{/*)}*/}

			{/*Link to all rules of selected chapter */}
			{chapter > 9 && (
				<>
					&nbsp; &gt; &nbsp;
					<SLink to={`/${chapter}`}>
						{`${chapter}.`} {text[`${chapter}.`]}
					</SLink>
				</>
			)}

			{/* Showing user result number */}
			{typeof result === 'string' && result.length > 4 && (
				<>
					&nbsp; &gt; &nbsp;
					{result}
				</>
			)}
		</SP>
	)
}

export default Breadcrumbs
