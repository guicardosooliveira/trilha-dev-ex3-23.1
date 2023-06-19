import { useState } from 'react'
import './01.css'

function Exercicio01() {
  const [counter, setCounter] = useState(0)

  const handleIncrement = () => {
    setCounter((contador) => contador + 1)
  }

  const handleDecrease = () => {
    setCounter((contador) => contador - 1)
  }
  
  return (
    <section className='pagina'>
      <div className="instrucoes">
        <h1 className='titulo-principal'> 
          Exercício 01 
        </h1>
        <p className='descricao-instrucoes'>
          Crie uma função que decrementa o valor do contador em 1 e crie um botão que chame essa função.
        </p>
      </div>
      <div className='box-contador'>
        <h2 className='contador'>{counter}</h2>
      </div>
      <div className='box-botoes'>
        <button onClick={handleIncrement} className='botao'>Incrementar</button>
        <button onClick={handleDecrease} className='botao'>Decrementar</button>
      </div>
    </section>
  )
}

export default Exercicio01
