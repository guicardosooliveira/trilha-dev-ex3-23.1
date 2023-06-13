import { useEffect, useState } from 'react'

import { getPokemons } from '../../services/pokemon'
import Pokemon from '../../components/pokemon'

function Exercicio03() {
  const [pokemons, setPokemons] = useState([])

  // Como implementar o useEffect para chamar a função getPokemons apenas uma vez no carregamento? (Em outras palavras, como usar o hook useEffect(funcional) como componentDidMount(classe)?
  // E como armazenar o resultado da função getPokemons no estado pokemons?
  // Dica: getPokemons retorna uma promise

  return (
    <>
      <div className="instrucoes">
        <h1> 
          Exercício 03 
        </h1>
        <p> 
          PokeApi
        </p>
        <ul>
          <li>
            Leia e entenda as funções getPokemons e getPokemonTypes em src/services/pokemon.js
          </li>
          <li>
            Implemente o useEffect para chamar a função getPokemons apenas uma vez no carregamento.
          </li>
          <li>
            Após verificar que a lista de pokemons está sendo carregada e exibida, crie um componente Pokemon que recebe como props seu nome. 
          </li>
          <li>
            Altere a lista de exibição para usar seu componente Pokemon (Semelhante as tarefas do exercício 02).
          </li>
          <li>
            Extra: Adicione ao componente um botão que, ao ser clicado, exibe seus tipos. (verifique a documentação de https://pokeapi.co/)
          </li>
        </ul>
      </div>

      <div className="exercicio">
        <h1>
          Lista de pokemons
        </h1>
        <ul>
          {/* Substitua pelo seu componente Pokemon */}
          {pokemons.map((pokemon) => (
            <li key={pokemon.name}>
              {pokemon.name}
            </li>
          ))}
        </ul>
      </div>
    </>

  )
}

export default Exercicio03
