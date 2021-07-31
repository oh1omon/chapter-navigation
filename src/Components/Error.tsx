import React from 'react'
import styled from 'styled-components'
import coolestErrImg from '../assets/images/404.jpg'

const SContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;

	& > img :before {
		content: 'mmmmm';
		position: absolute;
		white-space: pre;
		display: inline;
		top: 0;
		left: 50%;
		transform: translate(-50%, -25px);
		z-index: 30;
	}
`

const Error = (): JSX.Element => {
	return (
		<SContainer>
			<img src={coolestErrImg} alt={'404, the wrong url'} />
		</SContainer>
	)
}

export default Error
