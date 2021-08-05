import React, { FC } from 'react'
import styled from 'styled-components'

const SDiv = styled.div`
	width: 80%;
	text-align: justify;
	margin-top: auto;
	margin-bottom: auto;
	@media (max-width: 900px) {
		width: 100%;
		font-size: 0.8em;
	}
`

const SmallTextDiv = styled.div`
	text-align: left;
	font-size: smaller;
`

const SLink = styled.a`
	color: dodgerblue;
	text-decoration: none;

	&:hover {
		color: orange;
	}
`

const About: FC = () => {
	return (
		<SDiv>
			<h3>Hello there! To be short, I would like to describe the project in two words.</h3>
			<br />
			<p>
				This project represents an interactive and hyperlinked rulebook for a card game. As a source, it
				takes&nbsp;
				<SLink href={'https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt'}>
					these rules
				</SLink>
				. Then the actual magic happens, and this rulebook is being presented to the user in an interactive
				form. Voila!
			</p>

			<br />
			<SmallTextDiv>
				P.S.&nbsp;Icons made by&nbsp;{' '}
				<SLink href='https://www.flaticon.com/authors/wanicon' title='wanicon'>
					wanicon
				</SLink>
				&nbsp;from&nbsp;{' '}
				<SLink href='https://www.flaticon.com/' title='Flaticon'>
					www.flaticon.com
				</SLink>
			</SmallTextDiv>
			<br />
			<h3>
				<SLink href={'https://github.com/oh1omon/chapter-navigation'}>GitHub</SLink>
			</h3>
		</SDiv>
	)
}

export default About
