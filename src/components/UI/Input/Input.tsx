import React from 'react'
import { input } from '../../../ts/interfaces'
import './Input.scss'

const Input = ({ placeholder, value, onChange }: input) => {
  return (
    <div>
      <input
        className="input"
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          onChange(event.target.value)
        }}
      />
    </div>
  )
}

export default Input
