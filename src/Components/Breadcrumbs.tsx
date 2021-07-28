import React from 'react'
import { IBreadcrumbsProps } from '../react-app-env'
import { SLink } from './TableOfContents'

const Breadcrumbs = ({ rule }: IBreadcrumbsProps): JSX.Element => {
	return (
		<p>
			{/* We will render breadcrumbs, only if anything has been already selected */}
			{rule.chapter ? (
				<>
					{/* Link to the / */}
					<SLink to={'/'} selected={false}>
						{rule.theme}
					</SLink>

					{/* Link to all chapters of this number */}
					{rule.chapter > 9 && (
						<>
							&gt;
							<SLink to={`/${rule.theme}`} selected={false}>
								{`${rule.theme}00`}
							</SLink>
						</>
					)}

					{/*Link to all rule of selected chapter */}
					{rule.chapter > 9 && `${rule.theme}00` !== String(rule.chapter) && (
						<>
							&gt;
							<SLink to={`/${rule.chapter}`} selected={false}>
								{rule.chapter}
							</SLink>
						</>
					)}

					{/* Showing user result number */}
					{typeof rule.result === 'string' && rule.result.length > 4 && (
						<>
							&gt;
							{rule.result}
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
