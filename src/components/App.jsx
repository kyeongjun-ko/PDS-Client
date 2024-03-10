import { Route, Routes } from 'react-router-dom'

import Login from './Login'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' exact element={<Login />} />
      </Routes>
    </>
  )
}

export default App