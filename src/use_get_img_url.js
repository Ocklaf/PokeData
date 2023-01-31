import { useState, useEffect } from 'react'
import { getSpeciesSprite } from './pokemon_api'

function useGetUrlImg(id) {

  const [pokemonImgUrl, setPokemonImgUrl] = useState(null)
  const [loading, setSpinner] = useState(true)

  useEffect(() => {
    async function fetchPokemon() {
      setSpinner(true)
      const response = await getSpeciesSprite(id)
      setPokemonImgUrl(response)
      setSpinner(false)
    }

    fetchPokemon()
  }, [id])

  return { pokemonImgUrl, loading }
}
export default useGetUrlImg