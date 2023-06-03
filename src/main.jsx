import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from '../redux/store.js'
import { ApiProvider } from "@reduxjs/toolkit/query/react"
import { productApi } from '../redux/services/apiSlice.js'
import DataApi from './components/DataApii'
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
    <ApiProvider api={productApi} >
      <DataApi />
    </ApiProvider>
  </>
)
