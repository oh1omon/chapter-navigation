import { Dispatch } from 'redux'
import * as actionTypes from '../../store/actions/rule-actions'

/**
 * This function is going to set Rule component with data from location pathname passed as param
 * @param location
 */
export const setRule = (location: string) => {
	return (dispatch: Dispatch): void => {
		dispatch({
			type: actionTypes.SET_RULE,
			payload: {
				theme: Number(location.charAt(1)),
				chapter: Number(location.slice(1, 4)) || 0,
				result: location.length > 3 && location.slice(1),
			},
		})
	}
}
