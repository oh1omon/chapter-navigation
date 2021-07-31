import { Dispatch } from 'redux'
import * as actionTypes from '../../store/actions/rule-actions'
import { SET_ERROR } from '../../store/actions/error-actions'

/**
 * This function is going to set Rule component with data from location pathname passed as param
 * @param pathname
 */
export const setRule = (pathname: string) => {
	return (dispatch: Dispatch): void => {
		if (pathname.length > 8) {
			// Dispatching error if the link is absolutely wrong
			// 8 symbols is the biggest amount of char length of rule number
			dispatch({ type: SET_ERROR, payload: true })
			return
		}

		dispatch({
			type: actionTypes.SET_RULE,
			payload: {
				theme: Number(pathname.charAt(1)),
				chapter: Number(pathname.slice(1, 4)) || 0,
				result: pathname.length > 3 && pathname.slice(1),
			},
		})
	}
}
