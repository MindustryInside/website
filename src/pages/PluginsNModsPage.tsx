import React, { FC, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { APIservice } from '../API/APIservice'
import PnmList from '../components/PnmList'
import Input from '../components/UI/Input/Input'
import Loader from '../components/UI/Loader/Loader'
import Select from '../components/UI/Select/Select'
import { useSortedData } from '../hooks/usePnm'
import { option, pnm } from '../ts/interfaces'
import './PluginsNModsPage.scss'

const PluginsNModsPage: FC = () => {
  const [data, setData] = useState<pnm[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentUrlOption, setCurrentUrlOption] = useState('plugins')
  const [filter, setFilter] = useState({ option: 'stars', query: '' })
  const sortedAndSearchedData = useSortedData(data, filter)

  const sortOptions: option[] = [
    { id: 'stars', value: 'Сортировка по звёздам' },
    { id: 'name', value: 'Сортировка по названию' },
    { id: 'time', value: 'Сортировка по последнему обновлению' },
  ]
  const urlOptions: option[] = [
    { id: 'plugins', value: 'Плагины' },
    { id: 'mods', value: 'Моды' },
  ]

  const fetchData = async () => {
    const response = await APIservice.getData(
      currentUrlOption === 'plugins'
        ? 'https://raw.githubusercontent.com/MindustryInside/MindustryPlugins/master/plugins.json'
        : 'https://raw.githubusercontent.com/Anuken/MindustryMods/master/mods.json'
    )
    return response
  }

  const runCall = async () => {
    setIsLoading(true)
    const response = await fetchData()
    setData(response)
    setIsLoading(false)
  }

  useEffect(() => {
    runCall()
  }, [currentUrlOption])
  return (
    <div className="page__wrapper">
      <Helmet>
        <title>Mindustry Inside | P&M</title>
        <meta name="description" content="P&M page" />
        <meta name="keywords" content="mindustry, inside, skat, router" />
        <meta property="og:title" content="Mindustry Inside | P&M" />
        <meta property="og:description" content="P&M page" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://Ademun.github.io/InsideSite" />
        <meta
          property="og:image"
          content="../../public/assets/background.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="select__wrapper">
        <Select
          options={urlOptions}
          getValue={(urlValue) => setCurrentUrlOption(urlValue)}
          getIndex={() => {}}
        />
        <Select
          options={sortOptions}
          getValue={(sort) => {
            setFilter({ ...filter, option: sort })
          }}
          getIndex={() => {}}
        />
        <Input
          placeholder="Поиск..."
          value={filter.query}
          onChange={(query) => setFilter({ ...filter, query: query })}
        />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <PnmList pnm={sortedAndSearchedData} currentList={currentUrlOption} />
        </div>
      )}
    </div>
  )
}

export default PluginsNModsPage
