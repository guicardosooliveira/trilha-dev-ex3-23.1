import PropTypes from 'prop-types'

function Tarefa({ tarefa, onCheck, onRemove }) {
  return (
    <li key={tarefa.id}>
      <input type="checkbox" checked={tarefa.checado} onChange={onCheck}/>
        {tarefa.descricao}
      <button onClick={onRemove}>Remover</button>
    </li>
  )
}

Tarefa.propTypes = {
  tarefa: PropTypes.shape({
    descricao: PropTypes.string.isRequired,
    checado: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onCheck: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default Tarefa


