import { IRule } from '../../react-app-env'
import { Dispatch } from 'redux'
import { EChapterTypes } from '../../constants/enums'
import * as actionTypes from '../../store/actions/component-actions'

/**
 * This function will set component to show depending on IRule object.
 * Algorithm is based on the principle from the largest to the smallest.
 * The sequence is (from biggest to the smallest) result->chapter->theme.
 * @param rule
 */
export const setComponent = ({ theme, chapter, result }: IRule) => {
	return (dispatch: Dispatch): void => {
		const payload = result
			? EChapterTypes.result
			: chapter
			? EChapterTypes.chapter
			: theme
			? EChapterTypes.theme
			: EChapterTypes.theme

		dispatch({ type: actionTypes.SET_COMPONENT, payload })
	}
}
