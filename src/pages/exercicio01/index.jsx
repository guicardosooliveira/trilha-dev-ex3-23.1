import { useState } from 'react'

function Exercicio01() {
  const [counter, setCounter] = useState(0)

  const handleIncrement = () => {
    setCounter((contador) => contador + 1)
  }

  // Adicione aqui sua função
  // const handleDecr......
  
  return (
    <>
      <div className="instrucoes">
        <h1> 
          Exercício 01 
        </h1>
        <p> 
          Crie uma função que decrementa o valor do contador em 1 e crie um botão que chame essa função.
        </p>
      </div>
      <h2>{counter}</h2>
      <button onClick={handleIncrement}>Incrementar</button>
      {/* Adicione aqui seu botão */}
    </>
  )
}

export default Exercicio01
