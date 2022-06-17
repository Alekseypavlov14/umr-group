import { useState } from 'react'

export type updateValue<T> = (newValue: T) => void

export function useToggle<T>(initialValue: T): [T, updateValue<T>] {
  const [value, setValue] = useState(initialValue)

  const updateValue: updateValue<T> = (newValue) => {
    if (newValue !== value) {
      setValue(newValue)
    }
  }

  return [value, updateValue]
}