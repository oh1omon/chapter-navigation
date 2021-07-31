import axios from 'axios'
import * as actionTypes from '../../store/actions/text-actions'
import { Dispatch } from 'redux'
import TextParser from '../logic/text-parser'
import { store } from '../../store/store'
import { SET_ERROR } from '../../store/actions/error-actions'

/**
 * This function is going to fill the store with read-ready text.
 * It will firstly fetch text.
 * Then parse it using TextParser.
 * Then put it to the store.
 */
export const initTextState = () => {
	return async (dispatch: Dispatch): Promise<void> => {
		try {
			// Fetching text using our cors-anywhere server
			const response = await axios
				.get(
					`${process.env.REACT_APP_BE_URL}https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt`
				)
				.then((r) => r.data)

			// Getting json version of text from TextParser
			const parsedText = new TextParser(response).parse()

			// Setting it to store
			dispatch({ type: actionTypes.SET_TEXT, payload: parsedText })
		} catch (e) {
			// We will dispatch to the main store that we have error here
			store.dispatch({ type: SET_ERROR, payload: true })
			console.log(e)
		}
	}
}
