import React from 'react'
import styled from 'styled-components'
import Search from './Search'
import Logo from './Logo'

const SDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Header = () => {
	return (
		<SDiv>
			<Logo />
			<Search />
		</SDiv>
	)
}

export default Header
