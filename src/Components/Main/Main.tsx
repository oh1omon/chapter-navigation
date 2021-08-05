import React, { FC } from 'react'
import styled from 'styled-components'
import LeftDiv from './LeftDiv'
import RightDiv from './RightDiv'

const SContainer = styled.div`
	width: 100%;
	min-height: 85vh;
	display: flex;
	position: relative;
	flex-flow: row;
	justify-content: space-around;

	@media (max-width: 900px) {
		align-items: center;
		flex-flow: column-reverse;
	}
`

const Main: FC = () => {
	return (
		<SContainer>
			<LeftDiv />
			<RightDiv />
		</SContainer>
	)
}

export default Main
