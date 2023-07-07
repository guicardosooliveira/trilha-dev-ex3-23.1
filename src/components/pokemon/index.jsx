import PropTypes from 'prop-types'
import { useState } from 'react'

function Pokemon({ nome, showTypes }) {

    const [mostrarTipos, setMostrarTipos] = useState(false)
    const [tipos, setTipos] = useState([])

    async function handleClickButton () {
      setMostrarTipos(!mostrarTipos)
      const listaTipos = await showTypes(nome)
      setTipos(listaTipos)
    }

    return (
      <li key={nome}>
          {nome}
        <button onClick={handleClickButton}>Revelar Tipos</button>
        {mostrarTipos ? <p>{`${tipos} `}</p> : null}
      </li>
    )
  }

  Pokemon.propTypes = {
    nome: PropTypes.string.isRequired,
    showTypes: PropTypes.func.isRequired
  }

export default Pokemon
