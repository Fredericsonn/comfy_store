import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import 'react-toastify/dist/ReactToastify.css';
import './index.css'

// Toast
import { ToastContainer } from 'react-toastify';

// Redux
import { Provider } from 'react-redux'
import { store } from './store.js'


createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <App />
      <ToastContainer position='top-center' />
    </Provider>
  </>,
)
