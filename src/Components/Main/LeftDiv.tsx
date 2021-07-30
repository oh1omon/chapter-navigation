import React from 'react'
import { ILeftDivProps } from '../../react-app-env'
import Breadcrumbs from '../Breadcrumbs'
import About from '../About'
import styled from 'styled-components'

const SLeftDiv = styled.div`
	display: flex;
	flex-flow: column;
	padding: 4rem;
	width: 50%;
	@media (max-width: 900px) {
		width: 100%;
		align-items: center;
	}
`

const LeftDiv = ({ rule }: ILeftDivProps): JSX.Element => {
	return (
		// Layout for Breadcrumbs and About components
		<SLeftDiv>
			<Breadcrumbs rule={rule} />
			<About />
		</SLeftDiv>
	)
}

export default LeftDiv
