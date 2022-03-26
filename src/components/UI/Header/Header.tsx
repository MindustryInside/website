import React from 'react'
import { Link } from 'react-router-dom'
import { FaDiscord, FaEnvelope, FaGithub } from 'react-icons/fa'
import './Header.scss'

function Header() {
  return (
    <header className='header'>
      <div className="inner__links">
        <Link className="header__link" to={'/main'}>
          <div className="link__to__main"></div>
        </Link>
        <Link className="header__link" to={'/chart'}>
          График онлайна
        </Link>
        <Link className="header__link" to={'/pluginsnmods'}>
          Плагины и Моды
        </Link>
      </div>
      <div className="outer__links">
        <a className="header__link" href="https://github.com/MindustryInside">
          <FaGithub size={'1.5em'} />
        </a>
        <a className="header__link" href="https://discord.gg/vWvxu4Aa">
          <FaDiscord size={'1.5em'} />
        </a>
        <a className="header__link" href="mailto:admin@mindustry-inside.ru">
          <FaEnvelope size={'1.5em'} />
        </a>
      </div>
    </header>
  )
}

export default Header
