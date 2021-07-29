import React from 'react'
import TableOfContents from './TableOfContents'
import Breadcrumbs from './Breadcrumbs'
import { IMainProps } from '../react-app-env'
import About from './About'
import styled from 'styled-components'

const SDiv = styled.div`
	width: 100%;
	height: 85vh;
	display: flex;
	position: relative;
	flex-flow: row;
	justify-content: space-around;
`

const SRightDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50%;
	height: 100%;
`
const SLeftDiv = styled.div`
	display: flex;
	flex-flow: column;
	padding: 4rem;
	width: 50%;
`

const Main = ({ component, rule }: IMainProps) => {
	return (
		<SDiv>
			<SLeftDiv>
				<Breadcrumbs rule={rule} />
				<About />
			</SLeftDiv>
			<SRightDiv>
				<TableOfContents type={component} rule={rule} />
			</SRightDiv>
		</SDiv>
	)
}

export default Main
