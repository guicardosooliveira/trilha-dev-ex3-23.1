import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Exercicio01 from './pages/exercicio01'
import Exercicio02 from './pages/exercicio02'
import Exercicio03 from './pages/exercicio03'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercicio01" element={<Exercicio01 />} />
        <Route path="/exercicio02" element={<Exercicio02 />} />
        <Route path="/exercicio03" element={<Exercicio03 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
