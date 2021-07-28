/// <reference types="react-scripts" />

// Types for Redux

import { EChapterTypes } from './constants/enums'

type TText = Record<string, string>

interface ITextActions {
	type: string
	payload: TText
}

interface IRootStore {
	text: TText
}

// Rule object interface
interface IRule {
	theme: number
	chapter: number
	result: string | boolean
}

// Components props

interface ITableOfContentsProps {
	type: EChapterTypes
	rule: IRule
}

interface IBreadcrumbsProps {
	rule: IRule
}
