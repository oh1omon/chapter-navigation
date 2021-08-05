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

// Parser interface

interface IParser {
	// Text to be parsed
	readonly text: string

	// Getting ready for a MVP+ feature with optional rule text, we will need to change this variables for another text
	readonly startingPoint: number
	readonly endingPoint: number

	/**
	 * This method parses text file(string) into the json object.
	 * As a key it sets the number of the rule.
	 * As the value the actual rule
	 */
	parse(): TText
}
