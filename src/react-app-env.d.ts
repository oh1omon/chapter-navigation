/// <reference types="react-scripts" />

// Types for Redux

type TText = Record<string, string>

interface ITextActions {
	type: string
	payload: TText
}

interface IRootStore {
	text: TText
}

// Components props

interface ITableOfContentsProps {
	type: EChapterType
	chapter: number
}
