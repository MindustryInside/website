import React, { FC, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import './MainPage.scss'

const MainPage: FC = () => {
  return (
    <div className="wrapper">
      <Helmet>
        <title>Mindustry Inside | Home</title>
        <meta name="description" content="Home page" />
        <meta name="keywords" content="mindustry, inside, skat, router" />
        <meta property="og:title" content="Mindustry Inside | Home" />
        <meta property="og:description" content="Home page" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://Ademun.github.io/InsideSite" />
        <meta
          property="og:image"
          content="../../public/assets/background.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
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
