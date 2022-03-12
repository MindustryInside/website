import { useMemo } from 'react'
import { pnm } from '../ts/interfaces'

export function useSortedData(
  data: pnm[],
  filter: { option: string; query: string }
) {
  const sortedData = useSort(data, filter.option)

  const sortedAndSearchedData = useMemo(() => {
    return sortedData.filter((pnm) =>
      pnm.name.toLowerCase().includes(filter.query.toLowerCase())
    )
  }, [filter.query, sortedData])
  return sortedAndSearchedData
}

const useSort = (data: pnm[], filter: string) => {
  const sortedData = useMemo(() => {
    return filter === 'name'
      ? [...data].sort((a, b) => a.name.localeCompare(b.name))
      : filter === 'time'
      ? [...data].sort(
          (a, b) => +new Date(b.lastUpdated) - +new Date(a.lastUpdated)
        )
      : data
  }, [filter, data])
  return sortedData
}
