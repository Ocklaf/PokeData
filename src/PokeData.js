import React from "react"
import useGetUrlImg from "./use_get_img_url"
import Loading from "./Loading"

function PokeData(props) {
  const { id } = props
  const { pokemonImgUrl, loading } = useGetUrlImg(id)

  return (
    <Loading loading={loading}>
      <h2>PokeData</h2>
      <div className='pokedata'>
        <img alt="pokemon image" src={pokemonImgUrl} />
      </div>
    </Loading>
  )
}

export default PokeData
