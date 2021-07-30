import React from 'react'
import TableOfContents from '../TableOfContents'
import styled from 'styled-components'
import { IMainProps } from '../../react-app-env'

const SRightDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50%;
	height: 100%;
`

const RightDiv = ({ component, rule }: IMainProps) => {
	return (
		// Centering our result window
		<SRightDiv>
			<TableOfContents type={component} rule={rule} />
		</SRightDiv>
	)
}

export default RightDiv
