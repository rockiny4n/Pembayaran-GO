import { useState } from 'react'
import Payment from './pages/payment.jsx'
import Sukses from './pages/sukses.jsx'

function App() {
  // 'payment' = halaman form, 'sukses' = halaman setelah submit
  const [page, setPage] = useState('payment')

  if (page === 'sukses') {
    return <Sukses onBack={() => setPage('payment')} />
  }

  return <Payment onSubmit={() => setPage('sukses')} />
}

export default App