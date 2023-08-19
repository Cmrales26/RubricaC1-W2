import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/DataContext'

const Overview = () => {

  const { datacard1 } = useContext(DataContext)

  const [favorites, setFavorites] = useState({})

  useEffect(() => {
    const savedfavorites = JSON.parse(localStorage.getItem('favorites')) || {};
    setFavorites(savedfavorites)
  }, []);

  const addFavorite = (name) => {
    const FavoriteList = { ...favorites }
    FavoriteList[name] = !FavoriteList[name];
    setFavorites(FavoriteList)

    localStorage.setItem('favorites', JSON.stringify(FavoriteList));
  }

  return (
    <>
      <div className="Tituloseccion">
        <h1>THE GOATS</h1>
      </div>
      <div className='Contenedor-Cards1'>
        {datacard1.map((jugador, index) => (
          <div className="card" key={index}>
            <div className="favorite">
              <button onClick={(e) => { addFavorite(jugador.nombre) }}>
                {
                  favorites[jugador.nombre] ? (<i class="fa-solid fa-star like"></i>) : (<i class="fa-solid fa-star nolike"></i>)
                }

              </button>
            </div>
            <div className="deporte">
              <h2>{jugador.sport}</h2>
            </div>
            <div className="imagen">
              <img src={jugador.imagen} alt="El mejor jugador" />
            </div>
            <div className="information">
              <div className="nombre-numero">
                <h3>{jugador.nombre}</h3>
                <p>{jugador.numero}</p>
              </div>
              <div className="description">
                <p>{jugador.information}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Overview