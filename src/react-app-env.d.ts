/// <reference types="react-scripts" />

// Types for Redux

import { EChapterTypes } from './constants/enums'

type TText = Record<string, string>

// Rule object interface
interface IRule {
	theme: number
	chapter: number
	result: string | boolean
}

interface IRuleActions {
	type: string
	payload: IRule
}

interface ITextActions {
	type: string
	payload: TText
}

interface IRootStore {
	text: TText
	rule: IRule
}

// Components props

interface ITableOfContentsProps {
	type: EChapterTypes
	rule: IRule
}

interface IBreadcrumbsProps {
	rule: IRule
}

interface IMainProps {
	component: EChapterTypes
	rule: IRule
}

interface ILeftDivProps {
	rule: IRule
}
