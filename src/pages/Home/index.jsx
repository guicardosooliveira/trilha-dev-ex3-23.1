import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1>Links dos exercícios (arquivos estão na pasta ./src/pages/exercicioXX)</h1>
      <ul>
        <li><Link to="/exercicio01">Exercício 01</Link></li>
        <li><Link to="/exercicio02">Exercício 02</Link></li>
        <li><Link to="/exercicio03">Exercício 03</Link></li>
      </ul>
    </>
  )
}

export default Home
