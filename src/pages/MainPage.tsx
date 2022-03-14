import React, { FC, useEffect } from 'react'
import './MainPage.scss'

const MainPage: FC = () => {
  return (
    <div className="wrapper">
      <div className="router"></div>
      <div>
        <span className="mindustry">Mindustry</span>
        <span className="inside">Inside</span>
      </div>
      <span>A place where Skat begins</span>
    </div>
  )
}

export default MainPage
