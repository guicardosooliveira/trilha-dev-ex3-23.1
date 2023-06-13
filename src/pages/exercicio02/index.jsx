import { useState, useRef } from 'react'

import Tarefa from "../../components/tarefa"

function Exercicio02() {
  const [tarefas, setTarefas] = useState([
    {
      descricao: 'Estudar React',
      checado: false,
      id: 0,
    },
    {
      descricao: 'Estudar CSS',
      checado: true,
      id: 1,
    },
    {
      descricao: 'Estudar HTML',
      checado: true,
      id: 2,
    },
  ])
  const currentId = useRef(3)
  const [inputValue, setInputValue] = useState('')

  const handleCheck = (id) => () => {
    // Implemente aqui sua função
  }

  const handleRemove = (id) => () => {
    // Implemente aqui sua função
  }

  const handleAdd = () => {
    // Implemente aqui sua função
    
  }

  return (
    <>
      <div className="instrucoes">
        <h1> 
          Exercício 02 
        </h1>
        <p> 
          Lista de tarefas com checkbox, botão de remover e botão de adicionar.
        </p>
        <ul>
          <li>
            Observe que props o componente Tarefa recebe na pasta components/tarefa
          </li>
          <li>
            Adicione um componente Tarefa para cada tarefa no array tarefas usando o método map (não esqueça do key!)
          </li>
          <li>
            Implemente a função handleRemove. Ela deve remover a tarefa do array tarefas.
          </li>
          <li>
            Implemente a função handleAdd. Ela deve adicionar uma nova tarefa no array tarefas e limpar o input.
          </li>
          <li>
            Implemente a função handleCheck. Ela deve inverter o valor da propriedade checado da tarefa.
          </li>
        </ul>
      </div>      
      <ul>
        {/* Adicione aqui o componente Tarefa */}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAdd}>Adicionar</button>
    </>
  )
  
}

export default Exercicio02
