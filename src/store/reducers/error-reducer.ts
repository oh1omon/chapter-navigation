import { IErrorActions } from '../../react-app-env'
import * as actionTypes from '../actions/error-actions'

/**
 *
 * @param state
 * @param action
 * @returns boolean updated state, by default returns the same state, as it was passed into reducer
 */
export const errorReducer = (state = false, action: IErrorActions): boolean => {
	switch (action.type) {
		case actionTypes.SET_ERROR:
			return action.payload
		default:
			return state
	}
}
