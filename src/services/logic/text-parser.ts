export default class TextParser {
	private readonly text: string

	constructor(text: string) {
		this.text = text
	}

	/**
	 * This method checks the first char of the passed string, and in case it is a number it returns true
	 * @param str
	 * @private
	 */
	private startsWithNum(str: string): boolean {
		return !!(str.length > 0 && parseInt(str.charAt(0)))
	}

	/**
	 * This method parses text file(string) into the json object.
	 * As a key it sets the number of the rule.
	 * As the value the actual rule
	 */
	public parse(): TText {
		// Empty object as a placeholder for the result object
		const obj: TText = {}

		// Here we splitting text string by the new line, so we get an array of all strings
		this.text.split('\r\n').forEach((i) => {
			// If the string starts with number, then we put this string into our result object
			if (this.startsWithNum(i)) {
				const [first, ...rest] = i.split(' ')

				obj[first] = rest.join(' ')
			}
		})

		// Returning object
		return obj
	}
}
