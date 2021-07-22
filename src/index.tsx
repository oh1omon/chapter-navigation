import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyles } from './assets/styles/GlobalStyles'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<GlobalStyles />
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
