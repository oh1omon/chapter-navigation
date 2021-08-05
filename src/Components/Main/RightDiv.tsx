import React, { FC } from 'react'
import TableOfContents from '../TableOfContents'
import styled from 'styled-components'

const SRightDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50%;
	height: 100%;
	@media (max-width: 900px) {
		width: 100%;
		align-items: center;
	}
`

const RightDiv: FC = () => {
	return (
		// Centering our result window
		<SRightDiv>
			<TableOfContents />
		</SRightDiv>
	)
}

export default RightDiv
