import React from 'react'
import { IBreadcrumbsProps, IRootStore } from '../react-app-env'
import { SLink } from './TableOfContents'
import { useSelector } from 'react-redux'

const Breadcrumbs = ({ rule: { chapter, result, theme } }: IBreadcrumbsProps): JSX.Element => {
	const text = useSelector((store: IRootStore) => store.text)

	return (
		<p>
			{/* We will render breadcrumbs, only if anything has been already selected */}
			{chapter ? (
				<>
					{/* Link to the theme */}
					<>
						<SLink to={`/`} selected={false}>
							S
						</SLink>
						&gt;
					</>

					{/* Link to the theme */}
					<SLink to={`/${theme}`} selected={false}>
						{`${theme}.`} {text[theme + '.']}
					</SLink>

					{/* Link to all chapters of this number */}
					{/*{chapter > 9 && (*/}
					{/*	<>*/}
					{/*		&gt;*/}
					{/*		<SLink to={`/${theme}00.`} selected={false}>*/}
					{/*			{`${theme}00.`} {text[theme + '00.']}*/}
					{/*		</SLink>*/}
					{/*	</>*/}
					{/*)}*/}

					{/*Link to all rules of selected chapter */}
					{chapter > 9 && (
						<>
							&gt;
							<SLink to={`/${chapter}`} selected={false}>
								{`${chapter}.`} {text[`${chapter}.`]}
							</SLink>
						</>
					)}

					{/* Showing user result number */}
					{typeof result === 'string' && result.length > 4 && (
						<>
							&gt;
							{result}
						</>
					)}
				</>
			) : (
				<span>&nbsp;</span>
			)}
		</p>
	)
}

export default Breadcrumbs
