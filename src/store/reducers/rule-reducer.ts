// import * as actionTypes from '../actions/rule-actions'

import { IRule, IRuleActions } from '../../react-app-env'
import * as actionTypes from '../actions/rule-actions'

// Base state
const initialState = {
	theme: 0,
	chapter: 0,
	result: false,
}
/**
 *
 * @param state
 * @param action
 * @returns IRule updated state, by default returns the same state, as it was passed into reducer
 */
export const ruleReducer = (state: IRule = initialState, action: IRuleActions): IRule => {
	switch (action.type) {
		case actionTypes.SET_RULE:
			return action.payload
		default:
			return state
	}
}
