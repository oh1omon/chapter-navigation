import React from 'react'
import { useSelector } from 'react-redux'
import { IResultProps, IRootStore } from '../react-app-env'

const Result = ({ rule }: IResultProps) => {
	const text = useSelector((store: IRootStore) => store.text)
	return (
		<div>
			{/*If we have passed any rule number to this component it will be render this rule, in the other situation it will render
			 placeholder*/}
			{rule ? (
				Object.keys(text)
					.filter((i) => i.startsWith(String(rule)))
					.map((i) => {
						return (
							<p key={i}>
								{i} {text[i]}
							</p>
						)
					})
			) : (
				<p>Nothing selected</p>
			)}
		</div>
	)
}

export default React.memo(Result)
