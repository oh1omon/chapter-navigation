import React from 'react'
import { IBreadcrumbsProps } from '../react-app-env'
import { SLink } from './TableOfContents'

const Breadcrumbs = ({ rule }: IBreadcrumbsProps) => {
	return (
		<p>
			{rule.chapter ? (
				<>
					<SLink to={'/'} selected={false}>
						{rule.theme}
					</SLink>

					{rule.chapter > 9 && (
						<>
							&gt;
							<SLink to={`/${rule.theme}`} selected={false}>
								{rule.chapter}
							</SLink>
						</>
					)}
					{typeof rule.result === 'string' && rule.result.length > 4 && (
						<>
							&gt;
							<SLink to={`/${rule.chapter}`} selected={false}>
								{rule.result}
							</SLink>
						</>
					)}
				</>
			) : (
				' '
			)}
			{/*<>*/}
			{/*	<SLink to={'/'} selected={false}>*/}
			{/*		{rule.theme}*/}
			{/*	</SLink>*/}
			{/*	&gt;*/}
			{/*</>*/}
			{/*{rule.chapter > 9 && (*/}
			{/*	<>*/}
			{/*		<SLink to={`/${rule.theme}`} selected={false}>*/}
			{/*			{rule.chapter}*/}
			{/*		</SLink>*/}
			{/*		&gt;*/}
			{/*	</>*/}
			{/*)}*/}
			{/*{rule.result && (*/}
			{/*	<SLink to={`/${rule.chapter}`} selected={false}>*/}
			{/*		{rule.result}*/}
			{/*	</SLink>*/}
			{/*)}*/}
		</p>
	)
}

export default Breadcrumbs
