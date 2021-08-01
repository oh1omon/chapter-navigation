import React from 'react'
import { createMemoryHistory, MemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store/store'

/**
 * This function renders App component with all needed environment
 * @param history if needed we could pass history according to what App will be rendered, by default it created using createMemoryHistory()
 * @returns RenderResult
 */
const renderApp = (history: MemoryHistory<unknown> = createMemoryHistory()): RenderResult => {
	return render(
		<Provider store={store}>
			<Router history={history}>
				<App />
			</Router>
		</Provider>
	)
}

describe('App component should render rules', () => {
	it('should only render rule 809.3c, when pathname is /809.3c', async () => {
		const history = createMemoryHistory()
		history.push('/809.3c')

		const { findByText } = renderApp(history)

		const foundItem = await findByText(
			/A player can attack only an opponent seated immediately next to them./i
		)

		expect(foundItem).toBeInTheDocument()
	})

	it('should render all rules starting with 809, when pathname is /809.', async () => {
		const history = createMemoryHistory()
		history.push('/809')

		const { findAllByText } = renderApp(history)

		const foundItems = await findAllByText(/809./)

		foundItems.map((i) => expect(i).toBeInTheDocument())
	})

	it('Amount of elements starting with 809. on the page should be 16', async () => {
		const history = createMemoryHistory()
		history.push('/809')

		const { findAllByText } = renderApp(history)

		const foundItems = await findAllByText(/809./)

		expect(foundItems.length).toEqual(16)
	})

	it('should render all rules starting with 8, when pathname is /8.', async () => {
		const history = createMemoryHistory()
		history.push('/8')

		const { findAllByText } = renderApp(history)

		const foundItems = await findAllByText(/8/)

		foundItems.map((i) => expect(i).toBeInTheDocument())
	})

	it('Amount of elements starting with 8 on the page should be 13', async () => {
		const history = createMemoryHistory()
		history.push('/8')

		const { findAllByText } = renderApp(history)

		const foundItems = await findAllByText(/8/)

		expect(foundItems.length).toEqual(13)
	})

	it('Amount of elements on first page should be 9', async () => {
		const { findByText } = renderApp()

		const firstItem = await findByText(/game concepts/i)
		const lastItem = await findByText(/casual variants/i)

		expect(firstItem).toBeInTheDocument()
		expect(lastItem).toBeInTheDocument()
	})
})

describe('Search component should work', () => {
	it('search input is getting rendered', async () => {
		const { findByLabelText } = renderApp()
		const input = await findByLabelText(/search-input/i)

		expect(input).toBeInTheDocument()
	})

	it('no items should be shown if the input field of search component is empty', () => {
		const { queryAllByTestId } = renderApp()

		const foundItems = queryAllByTestId('search-result')

		expect(foundItems.length).toEqual(0)
	})

	it('should render results if there are some chars in search input', async () => {
		const { findAllByTestId, findByLabelText } = renderApp()

		const input = await findByLabelText(/search-input/i)
		fireEvent.change(input, { target: { value: '104' } })

		expect(input).toHaveValue('104')
		const foundItems = await findAllByTestId('search-result')

		expect(foundItems.length).toEqual(5)
	})
})
