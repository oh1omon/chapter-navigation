import React from 'react'
import { IMainProps } from '../../react-app-env'
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

const Main = ({ component, rule }: IMainProps): JSX.Element => {
	return (
		<SContainer>
			<LeftDiv rule={rule} />
			<RightDiv component={component} rule={rule} />
		</SContainer>
	)
}

export default Main
