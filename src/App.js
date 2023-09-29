import { BrowserRouter as Router } from 'react-router-dom'
import { Suspense } from 'react'
import Loader from '@components/Loader'
import AppRoutes from './Routes'

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <AppRoutes />
      </Router>
    </Suspense>
  )
}

export default App
