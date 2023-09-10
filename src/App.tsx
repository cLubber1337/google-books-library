import { Router } from '@/router'
import { store } from '@/services/store.ts'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router />
    </Provider>
  )
}
