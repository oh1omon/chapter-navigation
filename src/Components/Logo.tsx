import React from 'react'
import styled from 'styled-components'
import { SLink } from './TableOfContents'

const SHeader = styled.header`
	height: 15vh;
	padding: 2rem 5rem;
	& > a > h1 {
		font-size: 3rem;
		@media (max-width: 900px) {
			font-size: 2rem;
		}
	}
	@media (max-width: 900px) {
		height: 15vh;
		& > a > h1 {
			font-size: 1.75rem;
		}
	}
`

const Logo = () => {
	return (
		<SHeader>
			<SLink to={'/'}>
				<h1>Chapter Navigation</h1>
			</SLink>
		</SHeader>
	)
}

export default Logo
