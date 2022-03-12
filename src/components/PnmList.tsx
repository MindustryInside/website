import React from 'react'
import { FaStar } from 'react-icons/fa'
import { IPnm, pnm } from '../ts/interfaces'

const PnmList = ({pnm, currentList}: IPnm) => {
  return (
    <div className="items__wrapper">
      {pnm.map((pnm) => (
        <div key={pnm.repo} className="item__container">
          <a
            className="repo__link"
            href={`https://github.com/${pnm.repo}`}
            target="_blank"
          >
            {pnm.repo}
          </a>
          <span>Название: {pnm.name}</span>
          <a
            href={`https://github.com/${pnm.repo.split('/')[0]}`}
            target="_blank"
          >
            Автор: {pnm.author}
          </a>
          {pnm.description.length > 225 ? (
            <details>
              <summary>Описание</summary>
              <span>{pnm.description}</span>
            </details>
          ) : (
            <span>{pnm.description}</span>
          )}
          <div className="bottom">
            {currentList === 'mods' ? (
              <a
                className="bottom"
                href={`https://github.com/Anuken/Mindustry/releases/tag/v${pnm.minGameVersion}`}
                target="_blank"
              >
                Минимальная версия игры: {pnm.minGameVersion}
              </a>
            ) : (
              <div />
            )}
            <br />
            <span>
              Последнее обновление: {pnm.lastUpdated.substring(0, 10)}
            </span>
            <br />
            <FaStar />: {pnm.stars}
          </div>
        </div>
      ))}
    </div>
  )
}

export default PnmList
