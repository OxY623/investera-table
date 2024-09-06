import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { DevSupport } from '@react-buddy/ide-toolbox'

import { ComponentPreviews, useInitial } from './dev'
import App from './App'
import store from './store/store'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <DevSupport
        ComponentPreviews={ComponentPreviews}
        useInitialHook={useInitial}
      >
        <App />
      </DevSupport>
    </Provider>
  </React.StrictMode>,
)
