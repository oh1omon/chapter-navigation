import React, { FC } from 'react'
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

const LeftDiv: FC = () => {
	return (
		// Layout for Breadcrumbs and About components
		<SLeftDiv>
			<Breadcrumbs />
			<About />
		</SLeftDiv>
	)
}

export default LeftDiv
