import * as actionTypes from '../actions/text-actions'
import { ITextActions, TText } from '../../react-app-env'

/**
 *
 * @param {TText} state initial state is empty object
 * @param {ITextActions} action
 * @returns {TText} updated state, by default returns the same state, as it was passed into reducer
 */
export const textReducer = (state: TText = {}, action: ITextActions): TText => {
	switch (action.type) {
		case actionTypes.SET_TEXT:
			return action.payload
		default:
			return state
	}
}
