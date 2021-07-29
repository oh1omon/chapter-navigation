import React from 'react'
import styled from 'styled-components'
import Search from './Search'

const SHeader = styled.header`
	width: 100%;
	height: 15vh;
	& > h1 {
		font-size: 4rem;
	}
`

const Header = () => {
	return (
		<>
			<SHeader>
				<h1>Chapter Navigation</h1>
			</SHeader>
			<Search />
		</>
	)
}

export default Header
