import { Router } from '@/router'
import { store } from '@/services/store.ts'
import { Provider } from 'react-redux'

export function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
