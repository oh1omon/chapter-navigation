import React from 'react'
import styled from 'styled-components'

const SContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`

// This bunch of styles contain styles for children components, and keyframes too
const SWrapper = styled.div`
	position: relative;
	margin-left: -70px;

	& > div {
		font-size: 22px;
		height: 100px;
		width: 70px;
		border: 3px solid #262722;
		border-radius: 3px;
		background-color: orange;
		position: absolute;
		top: 0;
		transition: transform 0.2s ease;
		display: flex;
		justify-content: center;
		align-items: center;
		transition-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);
	}

	& :first-child {
		z-index: 3;
		margin-left: 20px;
		animation-duration: 6s;
		animation-name: card-1;
		animation-iteration-count: infinite;
	}

	& :nth-child(2) {
		z-index: 2;
		margin-left: 10px;
		animation-duration: 6s;
		animation-name: card-2;
		animation-iteration-count: infinite;
	}

	& :last-child {
		z-index: 1;
		animation-duration: 6s;
		animation-name: card-3;
		animation-iteration-count: infinite;
	}

	@keyframes card-1 {
		0% {
		}
		16.66666% {
			transform: translateX(95px) rotate(15deg);
		}
		// slide out
		33.33333% {
			transform: translateX(-20px);
			z-index: 1;
		}
		// to back
		49.99999% {
			transform: translateX(-20px);
			z-index: 1;
		}
		66.66666% {
			transform: translateX(-10px);
			z-index: 2;
		}
		// to middle
		83.33333% {
			transform: translateX(-10px);
			z-index: 2;
		}
	}

	@keyframes card-2 {
		0% {
		}
		16.66666% {
			transform: translateX(0);
		}
		33.33333% {
			transform: translateX(10px);
			z-index: 3;
		}
		// to front
		49.99999% {
			transform: translateX(105px) rotate(15deg);
		}
		// slide out
		66.66666% {
			transform: translateX(-10px);
			z-index: 1;
		}
		//to back
		83.33333% {
			transform: translateX(-10px);
			z-index: 1;
		}
		//stay still
	}

	@keyframes card-3 {
		0% {
			z-index: 1;
		}
		//to back
		16.66666% {
			transform: translateX(0);
		}
		33.33333% {
			transform: translateX(10px);
			z-index: 2;
		}
		// to middle
		49.99999% {
			transform: translateX(10px);
			z-index: 2;
		}
		//stay still
		66.66666% {
			transform: translateX(20px);
			z-index: 3;
		}
		//to front
		83.33333% {
			transform: translateX(115px) rotate(15deg);
		}
		//slide out
	}
`

const Loader = (): JSX.Element => {
	return (
		<SContainer>
			<SWrapper>
				<div></div>
				<div></div>
				<div></div>
			</SWrapper>
		</SContainer>
	)
}

export default Loader
