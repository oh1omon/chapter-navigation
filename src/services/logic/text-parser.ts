/**
 * This class takes in text string.
 * It has only one public method that will parse that text into json file
 */
import { IParser, TText } from '../../react-app-env'

export default class TextParser implements IParser {
	readonly text: string

	// Getting ready for a MVP+ feature with optional rule text, we will need to change this variables for another text
	readonly startingPoint: number
	readonly endingPoint: number

	constructor(text: string, startingPoint = 0, endingPoint = 100_000) {
		this.text = text
		this.startingPoint = startingPoint
		this.endingPoint = endingPoint
	}

	/**
	 * This method checks the first char of the passed string, and in case it is a number it returns true
	 * @param str
	 * @private
	 */
	private static startsWithNum(str: string): boolean {
		return !!(str.length > 0 && parseInt(str.charAt(0)))
	}

	/**
	 * This method parses text file(string) into the json object.
	 * As a key it sets the number of the rule.
	 * As the value the actual rule
	 */
	parse(): TText {
		// Empty object as a placeholder for the result object
		const obj: TText = {}

		this.text
			// We will try to find needed data only in desired segment
			.slice(this.startingPoint, this.endingPoint)
			// Here we splitting text string by the new line, so we get an array of all strings
			.split('\r\n')
			.forEach((i) => {
				// If the string starts with number, then we put this string into our result object
				if (TextParser.startsWithNum(i)) {
					const [first, ...rest] = i.split(' ')

					// Setting a new property on our obj
					obj[first] = rest.join(' ')
				}
			})

		// Returning object
		return obj
	}
}
