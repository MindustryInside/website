export interface pnm {
  repo: string
  name: string
  author: string
  description: string
  minGameVersion?: string
  lastUpdated: string
  stars: number
}

export interface IPnm {
  pnm: pnm[]
  currentList: string
}

export interface option {
  id: string
  value: string
}

export interface select {
  options: option[]
  getValue: (value: string) => void
  getIndex: (value: number) => void
}

export interface input {
  placeholder: string
  value: string
  onChange: (value: string) => void
}

export interface chart {
  data: {}[]
}
