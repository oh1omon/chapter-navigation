import axios from 'axios'
import * as actionTypes from '../../store/actions/text-actions'
import { Dispatch } from 'redux'

export const initTextState = () => {
	return async (dispatch: Dispatch): Promise<void> => {
		try {
			const response = await axios
				.get(
					`${process.env.REACT_APP_BE_URL}https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt`
				)
				.then((r) => r.data)

			// TODO invoke async text parsing function here
			console.log(response)
			// TODO remove empty object
			dispatch({ type: actionTypes.SET_TEXT, payload: {} })
		} catch (e) {
			console.log(e)
			// TODO Error handling
		}
	}
}
