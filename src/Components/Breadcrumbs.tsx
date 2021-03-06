import React, { FC } from 'react'
import { IRootStore } from '../react-app-env'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { SLink } from './SLink'

const SP = styled.p`
	font-size: 1.5em;
	@media (max-width: 900px) {
		padding-bottom: 2rem;
	}
`

const Breadcrumbs: FC = () => {
	const text = useSelector((store: IRootStore) => store.text)
	const { chapter, result, theme } = useSelector((store: IRootStore) => store.rule)

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
