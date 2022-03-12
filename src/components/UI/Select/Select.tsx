import React from 'react'
import { select } from '../../../ts/interfaces'
import './Select.scss'

const Select = ({ options, getValue, getIndex }: select) => {
  return (
    <select
      className="items__select"
      onChange={(event) => {
        getValue(event.target.value)
        getIndex(event.target.selectedIndex)
      }}
    >
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.value}
        </option>
      ))}
    </select>
  )
}

export default Select
