/// <reference types="react-scripts" />
import { EChapterTypes } from './constants/enums'

// Root store interface
interface IRootStore {
	text: TText
	rule: IRule
	component: EChapterTypes
	error: boolean
}

// Rule reducer types
interface IRule {
	theme: number
	chapter: number
	result: string | boolean
}

interface IRuleActions {
	type: string
	payload: IRule
}

// Text reducer types
interface ITextActions {
	type: string
	payload: TText
}

type TText = Record<string, string>

// Component reducer types
// There is not IComponent, just because it basically is EChapterType enum
interface IComponentActions {
	type: string
	payload: EChapterTypes
}

// Error reducer types

interface IErrorActions {
	type: string
	payload: boolean
}
