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
`

const LeftDiv = ({ rule }: ILeftDivProps) => {
	return (
		// Layout for Breadcrumbs and About components
		<SLeftDiv>
			<Breadcrumbs rule={rule} />
			<About />
		</SLeftDiv>
	)
}

export default LeftDiv
