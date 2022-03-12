import React from 'react'
import './Loader.scss'

function Loader() {
  return (
    <div className="loader__wrapper">
      <div className="loader"></div>
      <span>Загрузка...</span>
    </div>
  )
}

export default Loader
