import { useState } from 'react'
import Payment from './pages/payment.jsx'
import Sukses from './pages/sukses.jsx'

function App() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return <Sukses onBack={() => setSubmitted(false)} />
  }

  return <Payment onSubmit={() => setSubmitted(true)} />
}

export default App
