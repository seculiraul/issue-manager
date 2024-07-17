import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

//const root = ReactDOM.createRoot(document.getElementById('root'));

const rootElem = document.querySelector('#root')
const root = createRoot(rootElem)
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
