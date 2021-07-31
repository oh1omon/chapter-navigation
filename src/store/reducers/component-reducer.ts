import * as actionTypes from '../actions/component-actions'
import { EChapterTypes } from '../../constants/enums'
import { IComponentActions } from '../../react-app-env'

/**
 * @param state default state is EChapterTypes.theme
 * @param action
 * @returns EChapterTypes updated state, by default returns the same state, as it was passed into reducer
 */
export const componentReducer = (state = EChapterTypes.theme, action: IComponentActions): EChapterTypes => {
	switch (action.type) {
		case actionTypes.SET_COMPONENT:
			return action.payload
		default:
			return state
	}
}
