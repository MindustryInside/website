import { useMemo } from 'react'
import { option } from '../ts/interfaces'

export const useChartData = (data: any[], currentOption: number) => {
  const reColor = /\[[^\]]*]/
  const options: option[] = []
  for (let i = 0; i <= data.length - 1; i++) {
    const value = data[i].name.split(reColor).join('')
    options.push({ value: value, id: value })
  }

  const header = []
  for (let i: number = 0; i <= 4; i++) {
    header.push(data[i].data[i].time)
  }

  const chartData = [{}]
  for (let i = 0; i < header.length; i++) {
    const time = new Date(header[i] * 1000)
    const newLine = {
      name: `${time.getHours()}/${time.getMinutes()}/${time.getSeconds()}`,
      server: data[currentOption].data[i].online,
    }
    chartData.push(newLine)
  }
  return {options, chartData}
}
