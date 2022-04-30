import React,{useState} from 'react'

import './Card.css'
import imageFavoriteHide from '../../Assets/images/favoritos.png'
import imageFavoriteShow from '../../Assets/images/favoritos-added.png'
import imgPokemon from '../../Assets/images/pokemonImg.png'

const Card = () => {

    const [favoriteImg,setFavoriteImg]=useState(false)

    const changeFavorite = (favorite) =>{
        setFavoriteImg(!favorite)
    }

  return (
    <div className='card--container'>
        <img className="card--icon" onClick={()=>changeFavorite(favoriteImg)} src={favoriteImg ? imageFavoriteShow : imageFavoriteHide} alt="" />
        <img className="card--image" src={imgPokemon} alt="" />
        <h3 className='card--name'>Pokemon</h3>
        <p className='card--type'>Normal</p>
    </div>
  )
}

export default Card