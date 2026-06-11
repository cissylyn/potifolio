import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
// @ts-ignore: CSS module import type declarations are not available in this setup.
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
