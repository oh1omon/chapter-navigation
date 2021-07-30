import React from 'react'
import styled from 'styled-components'

const SDiv = styled.div`
	width: 80%;
	text-align: justify;
	margin-top: auto;
	margin-bottom: auto;
	@media (max-width: 900px) {
		width: 100%;
		font-size: 1em;
	}
`

const About = () => {
	return (
		<SDiv>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error nemo quidem vitae. Cupiditate, debitis
			illum ipsam iure laborum natus reprehenderit rerum. Accusantium aliquid aperiam assumenda cum, dolorem
			eligendi, error eum exercitationem illum impedit iste modi molestiae nesciunt odio odit perspiciatis
			possimus recusandae sequi soluta tempora tempore temporibus ullam ut veniam vero voluptas voluptatum!
		</SDiv>
	)
}

export default About
